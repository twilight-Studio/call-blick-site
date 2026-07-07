function SalesforceIcon() {
  return (
    <svg viewBox="0 0 120 32" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24.8 6.4a10.2 10.2 0 0 1 7.2 3 13 13 0 0 1 4.4-1 13.2 13.2 0 0 1 13.2 13.2A13.2 13.2 0 0 1 36.4 34.8a13 13 0 0 1-3.2-.4 9.2 9.2 0 0 1-8.4 5.4 9.1 9.1 0 0 1-4-.9A11.4 11.4 0 0 1 9.6 46a11.4 11.4 0 0 1-10.8-7.6A8.4 8.4 0 0 1-4 30a8.4 8.4 0 0 1 8.4-8.4c.5 0 1 .05 1.5.13A10.2 10.2 0 0 1 24.8 6.4z" fill="currentColor" transform="translate(4, -4) scale(0.62)" />
      <text x="44" y="22" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="15" fill="currentColor">Salesforce</text>
    </svg>
  );
}

function HubspotIcon() {
  return (
    <svg viewBox="0 0 110 32" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="11" cy="9" r="4" fill="currentColor" />
      <circle cx="21" cy="16" r="4" fill="currentColor" />
      <circle cx="11" cy="23" r="4" fill="currentColor" />
      <circle cx="1" cy="16" r="4" fill="currentColor" />
      <text x="30" y="21" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="15" fill="currentColor">HubSpot</text>
    </svg>
  );
}

function ZendeskIcon() {
  return (
    <svg viewBox="0 0 110 32" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 8 L20 8 L4 24 L20 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <text x="28" y="21" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="15" fill="currentColor">Zendesk</text>
    </svg>
  );
}

function TwilioIcon() {
  return (
    <svg viewBox="0 0 96 32" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="16" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="8.5" cy="12.5" r="2.2" fill="currentColor" />
      <circle cx="15.5" cy="12.5" r="2.2" fill="currentColor" />
      <circle cx="8.5" cy="19.5" r="2.2" fill="currentColor" />
      <circle cx="15.5" cy="19.5" r="2.2" fill="currentColor" />
      <text x="28" y="21" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="15" fill="currentColor">Twilio</text>
    </svg>
  );
}

function GenesysIcon() {
  return (
    <svg viewBox="0 0 110 32" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 4 A12 12 0 1 0 28 16 L18 16 L18 12 L24 12 A10 10 0 1 1 14 6z" fill="currentColor" opacity="0.9" />
      <text x="32" y="21" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="15" fill="currentColor">Genesys</text>
    </svg>
  );
}

function Five9Icon() {
  return (
    <svg viewBox="0 0 88 32" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="6" width="14" height="20" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
      <line x1="2" y1="14" x2="16" y2="14" stroke="currentColor" strokeWidth="2" />
      <text x="22" y="21" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="15" fill="currentColor">Five9</text>
    </svg>
  );
}

function NiceIcon() {
  return (
    <svg viewBox="0 0 74 32" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 24 L4 8 L14 20 L14 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <text x="20" y="21" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="15" fill="currentColor">NICE</text>
    </svg>
  );
}

function VerintIcon() {
  return (
    <svg viewBox="0 0 96 32" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 8 L12 24 L20 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <text x="26" y="21" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="15" fill="currentColor">Verint</text>
    </svg>
  );
}

const logos = [
  { name: "Salesforce", Icon: SalesforceIcon },
  { name: "HubSpot",    Icon: HubspotIcon },
  { name: "Zendesk",    Icon: ZendeskIcon },
  { name: "Twilio",     Icon: TwilioIcon },
  { name: "Genesys",    Icon: GenesysIcon },
  { name: "Five9",      Icon: Five9Icon },
  { name: "NICE",       Icon: NiceIcon },
  { name: "Verint",     Icon: VerintIcon },
];

export default function SocialProofBar() {
  return (
    <section className="py-16 relative z-10">
      <div
        className="max-w-7xl mx-auto px-6"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "48px" }}
      >
        <p
          className="text-center text-xs font-black uppercase tracking-[0.14em] mb-10"
          style={{ color: "#B3CFE5" }}
        >
          Trusted by teams at
        </p>

        {/* Marquee */}
        <div className="relative overflow-hidden">
          <div
            className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, #020912, transparent)" }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, #020912, transparent)" }}
          />

          <div className="flex animate-marquee" style={{ width: "max-content" }}>
            {[...logos, ...logos].map(({ name, Icon }, i) => (
              <div key={i} className="flex items-center justify-center px-8 flex-shrink-0">
                <div
                  className="flex items-center gap-2.5 px-5 py-3 rounded-2xl"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    color: "rgba(179,207,229,0.45)",
                  }}
                >
                  <Icon />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
