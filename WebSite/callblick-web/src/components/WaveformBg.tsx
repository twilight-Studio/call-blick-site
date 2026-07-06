"use client";

export default function WaveformBg() {
  const bars = Array.from({ length: 48 });

  return (
    <div
      className="absolute inset-0 flex items-end justify-center gap-1 overflow-hidden pointer-events-none"
      style={{ opacity: 0.18 }}
    >
      {bars.map((_, i) => {
        const delay = (i * 0.16) % 8;
        const isEven = i % 2 === 0;
        const height = Math.round(20 + Math.sin(i * 0.45) * 60 + 40);
        return (
          <div
            key={i}
            className="w-1.5 rounded-full flex-shrink-0"
            style={{
              height: `${height}px`,
              background: "#2C8FFF",
              animation: `${isEven ? "waveform" : "waveform2"} 8s ease-in-out ${delay}s infinite`,
              transformOrigin: "bottom",
            }}
          />
        );
      })}
    </div>
  );
}
