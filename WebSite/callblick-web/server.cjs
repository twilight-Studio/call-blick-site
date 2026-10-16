const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");

const host = process.env.HOST || "127.0.0.1";
const port = Number.parseInt(process.env.PORT || "3001", 10);
const publicRoot = path.resolve(__dirname, "out");

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".svg": "image/svg+xml; charset=utf-8",
  ".ttf": "font/ttf",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".xml": "application/xml; charset=utf-8",
};

function isInsidePublicRoot(filePath) {
  const relativePath = path.relative(publicRoot, filePath);
  return relativePath === "" || (!relativePath.startsWith("..") && !path.isAbsolute(relativePath));
}

function resolveRequestPath(pathname) {
  const requestedPath = path.resolve(publicRoot, `.${pathname}`);

  if (!isInsidePublicRoot(requestedPath)) {
    return null;
  }

  const candidates = [requestedPath];
  if (!path.extname(requestedPath)) {
    candidates.push(`${requestedPath}.html`, path.join(requestedPath, "index.html"));
  }

  for (const candidate of candidates) {
    if (!isInsidePublicRoot(candidate)) continue;

    try {
      const stats = fs.statSync(candidate);
      if (stats.isFile()) return candidate;
      if (stats.isDirectory()) {
        const indexFile = path.join(candidate, "index.html");
        if (fs.statSync(indexFile).isFile()) return indexFile;
      }
    } catch {
      // Try the next static-export path shape.
    }
  }

  return null;
}

function sendFile(request, response, filePath, statusCode = 200) {
  const extension = path.extname(filePath).toLowerCase();
  const stats = fs.statSync(filePath);
  const immutableAsset = filePath.includes(`${path.sep}_next${path.sep}static${path.sep}`);

  response.writeHead(statusCode, {
    "Cache-Control": immutableAsset ? "public, max-age=31536000, immutable" : "no-cache",
    "Content-Length": stats.size,
    "Content-Type": contentTypes[extension] || "application/octet-stream",
    "X-Content-Type-Options": "nosniff",
  });

  if (request.method === "HEAD") {
    response.end();
    return;
  }

  const stream = fs.createReadStream(filePath);
  stream.on("error", () => response.destroy());
  stream.pipe(response);
}

const server = http.createServer((request, response) => {
  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405, { Allow: "GET, HEAD" });
    response.end("Method Not Allowed");
    return;
  }

  let pathname;
  try {
    pathname = decodeURIComponent(new URL(request.url || "/", "http://localhost").pathname);
  } catch {
    response.writeHead(400);
    response.end("Bad Request");
    return;
  }

  const filePath = resolveRequestPath(pathname);
  if (filePath) {
    sendFile(request, response, filePath);
    return;
  }

  const notFoundPage = path.join(publicRoot, "404.html");
  if (fs.existsSync(notFoundPage)) {
    sendFile(request, response, notFoundPage, 404);
    return;
  }

  response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
  response.end("Not Found");
});

server.listen(port, host, () => {
  console.log(`Serving ${publicRoot} on http://${host}:${port}`);
});
