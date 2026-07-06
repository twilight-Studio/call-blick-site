"use client";

import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  value: string;
  label: string;
  duration?: number;
}

export default function StatCounter({
  value,
  label,
  duration = 1200,
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="text-center"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity ${duration}ms ease, transform ${duration}ms ease`,
      }}
    >
      <div
        className="text-4xl font-black tracking-tight"
        style={{ color: "#2C8FFF" }}
      >
        {value}
      </div>
      <div className="text-sm font-medium mt-1" style={{ color: "#B3CFE5" }}>
        {label}
      </div>
    </div>
  );
}
