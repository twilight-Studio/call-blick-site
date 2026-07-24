"use client";

import { useState } from "react";

const key = "callblick-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(
    () => typeof window !== "undefined" && window.localStorage.getItem(key) !== "accepted"
  );

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[60] md:left-auto md:max-w-md">
      <div
        className="rounded-2xl p-5 shadow-2xl"
        style={{
          background: "rgba(10,25,49,0.96)",
          border: "1px solid rgba(44,143,255,0.22)",
          boxShadow: "0 18px 60px rgba(0,0,0,0.35)",
        }}
      >
        <h2 className="text-base font-black mb-2" style={{ color: "#EEF4FF" }}>
          Cookies
        </h2>
        <p className="text-sm leading-relaxed mb-4" style={{ color: "#B3CFE5" }}>
          We use essential cookies to keep the site working and may add analytics cookies later to understand site performance.
        </p>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => {
              window.localStorage.setItem(key, "accepted");
              setVisible(false);
            }}
            className="rounded-xl px-5 py-3 text-sm font-bold"
            style={{ background: "#2C8FFF", color: "#fff" }}
          >
            Allow cookies
          </button>
          <button
            type="button"
            onClick={() => setVisible(false)}
            className="rounded-xl px-5 py-3 text-sm font-bold"
            style={{ color: "#EEF4FF", border: "1px solid rgba(255,255,255,0.12)" }}
          >
            Later
          </button>
        </div>
      </div>
    </div>
  );
}
