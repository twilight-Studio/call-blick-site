function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="22"
      viewBox="0 0 24 24"
      width="22"
    >
      <path
        d="M20.5 11.8a8.45 8.45 0 0 1-12.58 7.37L4 20.25l1.08-3.82A8.45 8.45 0 1 1 20.5 11.8Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M9.1 8.35c.2-.45.4-.46.67-.47h.58c.2 0 .41.08.5.36l.72 1.75c.08.2.04.38-.08.56l-.55.72c-.1.13-.18.25-.07.44.43.74 1.03 1.35 1.76 1.79.18.1.3.08.43-.07l.76-.9c.14-.17.32-.2.51-.12l1.69.8c.2.1.34.15.39.24.05.09.05.52-.11 1.02-.16.5-.94.95-1.3 1.02-.35.07-.79.1-1.28-.05-.3-.1-.68-.22-1.17-.43a10.21 10.21 0 0 1-3.94-3.48c-.27-.38-.94-1.27-.94-2.42 0-.9.43-1.4.64-1.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function FloatingWhatsAppButton() {
  return (
    <a
      aria-label="Chat with CallBlick on WhatsApp"
      className="fixed bottom-5 right-5 z-[60] inline-flex min-h-12 items-center gap-2 rounded-full border border-white/20 bg-[var(--blue)] px-4 py-3 text-sm font-bold text-[var(--paper)] shadow-[0_16px_40px_rgba(44,143,255,0.32)] transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--blue-dark)] focus-visible:outline-offset-4 sm:bottom-6 sm:right-6"
      href="https://wa.me/491631281632"
      rel="noopener noreferrer"
      target="_blank"
    >
      <WhatsAppIcon />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
