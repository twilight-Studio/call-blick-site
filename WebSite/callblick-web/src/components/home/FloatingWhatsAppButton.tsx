function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" fill="none">
      <path
        d="M20.5 11.8a8.45 8.45 0 0 1-12.58 7.37L4 20.25l1.08-3.82A8.45 8.45 0 1 1 20.5 11.8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.74 8.7c.18-.4.37-.41.54-.42h.46c.15 0 .4-.06.62.47.23.54.77 1.86.84 2 .07.13.12.29.02.47-.1.19-.15.29-.3.45-.15.17-.32.37-.46.49-.15.15-.3.31-.13.6.17.28.75 1.23 1.6 1.99 1.1.98 2.02 1.28 2.31 1.43.28.14.45.12.61-.07.18-.2.71-.82.9-1.1.18-.29.37-.24.62-.15.25.1 1.62.76 1.9.9.27.13.46.2.52.31.07.12.07.68-.16 1.34-.23.65-1.35 1.25-1.88 1.29-.48.03-1.08.04-1.74-.11-.4-.09-.92-.3-1.58-.58-2.78-1.2-4.6-3.99-4.74-4.17-.14-.19-1.13-1.5-1.13-2.87 0-1.36.72-2.03.98-2.3Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function FloatingWhatsAppButton() {
  return (
    <a
      href="https://wa.me/4915231357432"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with CallBlick on WhatsApp"
      className="fixed bottom-6 right-6 z-[80] inline-flex items-center gap-3 rounded-full px-5 py-4 text-sm font-black shadow-2xl transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#7AB8FF]"
      style={{
        color: "#fff",
        background: "linear-gradient(135deg, #2C8FFF 0%, #7AB8FF 100%)",
        border: "1px solid rgba(238,244,255,0.28)",
        boxShadow: "0 18px 44px rgba(44,143,255,0.35)",
      }}
    >
      <WhatsAppIcon />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
