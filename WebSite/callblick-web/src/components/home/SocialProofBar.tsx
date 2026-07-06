export default function SocialProofBar() {
  const logos = [
    "Salesforce",
    "HubSpot",
    "Zendesk",
    "Twilio",
    "Genesys",
    "Five9",
    "NICE",
    "Verint",
  ];

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
          {/* Fade edges */}
          <div
            className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to right, #020912, transparent)",
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to left, #020912, transparent)",
            }}
          />

          <div className="flex animate-marquee" style={{ width: "max-content" }}>
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center px-10 flex-shrink-0"
              >
                <div
                  className="px-6 py-3 rounded-2xl"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <span
                    className="text-sm font-bold tracking-wide"
                    style={{ color: "rgba(179,207,229,0.5)" }}
                  >
                    {logo}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
