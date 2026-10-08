"use client";

import Link from "next/link";
import Script from "next/script";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, LockKeyhole } from "lucide-react";

type YouTubePlayer = {
  destroy: () => void;
  getPlayerState: () => number;
  isMuted: () => boolean;
  mute: () => void;
  playVideo: () => void;
  setVolume: (volume: number) => void;
  unMute: () => void;
};

type YouTubePlayerEvent = {
  target: YouTubePlayer;
};

type YouTubePlayerStateEvent = YouTubePlayerEvent & {
  data: number;
};

type YouTubePlayerConstructor = new (
  element: HTMLIFrameElement,
  options: {
    events: {
      onAutoplayBlocked: (event: YouTubePlayerEvent) => void;
      onReady: (event: YouTubePlayerEvent) => void;
      onStateChange: (event: YouTubePlayerStateEvent) => void;
    };
  },
) => YouTubePlayer;

declare global {
  interface Window {
    YT?: {
      Player: YouTubePlayerConstructor;
    };
  }
}

const heroVideoUrl =
  "https://www.youtube-nocookie.com/embed/hz358NwRWCw?autoplay=1&mute=1&controls=0&loop=1&playlist=hz358NwRWCw&playsinline=1&disablekb=1&fs=0&rel=0&iv_load_policy=3&enablejsapi=1";

const heroVideoVolume = 25;
const youtubePlayingState = 1;

const videoFeatherMask = [
  "linear-gradient(to right, transparent 0%, #000 12%, #000 88%, transparent 100%)",
  "linear-gradient(to bottom, transparent 0%, #000 18%, #000 82%, transparent 100%)",
].join(", ");

function VideoSignalField() {
  const bars = 48;
  const cx = 450;
  const cy = 300;
  const innerRx = 292;
  const innerRy = 164;
  const roundCoordinate = (value: number) => Number(value.toFixed(3));

  const barEls = Array.from({ length: bars }).map((_, i) => {
    const angle = (i / bars) * 2 * Math.PI - Math.PI / 2;
    const length = Math.round(38 + ((Math.sin(i * 1.37) + 1) / 2) * 64);
    const x1 = roundCoordinate(cx + Math.cos(angle) * innerRx);
    const y1 = roundCoordinate(cy + Math.sin(angle) * innerRy);
    const x2 = roundCoordinate(cx + Math.cos(angle) * (innerRx + length));
    const y2 = roundCoordinate(cy + Math.sin(angle) * (innerRy + length * 0.65));
    const delay = ((i * 0.13) % 3).toFixed(2);
    const duration = (1.8 + (i % 5) * 0.25).toFixed(2);

    return { delay, duration, i, x1, x2, y1, y2 };
  });

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[180%] w-[150%] -translate-x-1/2 -translate-y-1/2"
    >
      <svg
        viewBox="0 0 900 600"
        className="absolute inset-0 h-full w-full animate-spin-slow"
        style={{ opacity: 0.2 }}
      >
        <ellipse cx="450" cy="300" rx="410" ry="270" fill="none" stroke="#2C8FFF" strokeWidth="0.8" strokeDasharray="5 13" />
        <ellipse cx="450" cy="300" rx="380" ry="245" fill="none" stroke="#2C8FFF" strokeWidth="0.5" />
      </svg>

      <svg
        viewBox="0 0 900 600"
        className="absolute inset-0 h-full w-full animate-spin-slow-reverse"
        style={{ opacity: 0.14 }}
      >
        <ellipse cx="450" cy="300" rx="430" ry="282" fill="none" stroke="#2C8FFF" strokeWidth="0.6" strokeDasharray="3 20" />
      </svg>

      <svg
        viewBox="0 0 900 600"
        className="relative h-full w-full overflow-visible"
        style={{ filter: "drop-shadow(0 0 30px rgba(44,143,255,0.32))" }}
      >
        <defs>
          <radialGradient id="video-orbit-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2C8FFF" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#020912" stopOpacity="0" />
          </radialGradient>
        </defs>

        <ellipse cx="450" cy="300" rx="430" ry="286" fill="url(#video-orbit-glow)" />

        {barEls.map(({ delay, duration, i, x1, x2, y1, y2 }) => (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={i % 7 === 0 ? "#EEF4FF" : "#2C8FFF"}
            strokeWidth={i % 7 === 0 ? "2.4" : "1.7"}
            strokeLinecap="round"
          >
            <animate attributeName="x2" values={`${x1};${x2};${x2}`} keyTimes="0;0.45;1" dur={`${duration}s`} begin={`${delay}s`} repeatCount="indefinite" />
            <animate attributeName="y2" values={`${y1};${y2};${y2}`} keyTimes="0;0.45;1" dur={`${duration}s`} begin={`${delay}s`} repeatCount="indefinite" />
            <animate attributeName="stroke-opacity" values="0;0.95;0" keyTimes="0;0.5;1" dur={`${duration}s`} begin={`${delay}s`} repeatCount="indefinite" />
          </line>
        ))}

      </svg>
    </div>
  );
}

function VideoOrbitStats() {
  const stats = [
    { cx: 220, cy: 110, label: "99.4%", sub: "accuracy" },
    { cx: 690, cy: 112, label: "10×", sub: "faster" },
    { cx: 730, cy: 492, label: "100%", sub: "coverage" },
  ];

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 900 600"
      className="pointer-events-none absolute left-1/2 top-1/2 z-20 h-[180%] w-[150%] -translate-x-1/2 -translate-y-1/2 overflow-visible"
    >
      {stats.map((stat) => (
        <g key={stat.label}>
          <circle cx={stat.cx} cy={stat.cy} r="34" fill="rgba(10,25,49,0.96)" stroke="rgba(44,143,255,0.55)" strokeWidth="1.2" />
          <text x={stat.cx} y={stat.cy - 5} textAnchor="middle" fill="#EEF4FF" fontSize="11" fontWeight="800" fontFamily="system-ui">{stat.label}</text>
          <text x={stat.cx} y={stat.cy + 12} textAnchor="middle" fill="#2C8FFF" fontSize="9" fontWeight="700" fontFamily="system-ui">{stat.sub}</text>
        </g>
      ))}
    </svg>
  );
}

export default function HeroSection() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<YouTubePlayer | null>(null);
  const unmuteAttemptedRef = useRef(false);
  const checkingAudiblePlaybackRef = useRef(false);
  const userActivatedRef = useRef(false);
  const autoplayRecoveryAttemptedRef = useRef(false);
  const readyCheckTimerRef = useRef<number | null>(null);
  const recoveryTimerRef = useRef<number | null>(null);
  const unmuteTimerRef = useRef<number | null>(null);
  const verifyTimerRef = useRef<number | null>(null);
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const clearAutomaticAudioTimers = useCallback(() => {
    if (unmuteTimerRef.current !== null) {
      window.clearTimeout(unmuteTimerRef.current);
      unmuteTimerRef.current = null;
    }
    if (verifyTimerRef.current !== null) {
      window.clearTimeout(verifyTimerRef.current);
      verifyTimerRef.current = null;
    }
  }, []);

  const enableSound = useCallback(() => {
    const player = playerRef.current;

    if (!player) return;

    userActivatedRef.current = true;
    checkingAudiblePlaybackRef.current = false;
    clearAutomaticAudioTimers();
    player.setVolume(heroVideoVolume);
    player.unMute();
    if (player.getPlayerState() !== youtubePlayingState) {
      player.playVideo();
    }
    setIsVideoVisible(true);
  }, [clearAutomaticAudioTimers]);

  const recoverMutedPlayback = useCallback((target: YouTubePlayer) => {
    if (
      userActivatedRef.current ||
      autoplayRecoveryAttemptedRef.current
    ) {
      return;
    }

    autoplayRecoveryAttemptedRef.current = true;
    target.setVolume(heroVideoVolume);
    target.mute();
    if (target.getPlayerState() !== youtubePlayingState) {
      target.playVideo();
    }

    recoveryTimerRef.current = window.setTimeout(() => {
      if (target.getPlayerState() === youtubePlayingState) {
        setIsVideoVisible(true);
      }
    }, 250);
  }, []);

  const handlePlaying = useCallback((target: YouTubePlayer) => {
    if (unmuteAttemptedRef.current) {
      if (!checkingAudiblePlaybackRef.current) {
        setIsVideoVisible(true);
      }
      return;
    }

    unmuteAttemptedRef.current = true;
    checkingAudiblePlaybackRef.current = true;
    unmuteTimerRef.current = window.setTimeout(() => {
      target.setVolume(heroVideoVolume);
      target.unMute();

      verifyTimerRef.current = window.setTimeout(() => {
        if (userActivatedRef.current) return;

        const audiblePlaybackSucceeded =
          !target.isMuted() &&
          target.getPlayerState() === youtubePlayingState;

        checkingAudiblePlaybackRef.current = false;

        if (audiblePlaybackSucceeded) {
          setIsVideoVisible(true);
          return;
        }

        recoverMutedPlayback(target);
      }, 700);
    }, 250);
  }, [recoverMutedPlayback]);

  const initialisePlayer = useCallback(() => {
    const iframe = iframeRef.current;

    if (!iframe || playerRef.current || !window.YT?.Player) return;

    const player = new window.YT.Player(iframe, {
      events: {
        onReady: ({ target }) => {
          playerRef.current = target;
          target.setVolume(heroVideoVolume);
          target.mute();
          if (target.getPlayerState() !== youtubePlayingState) {
            target.playVideo();
          }

          readyCheckTimerRef.current = window.setTimeout(() => {
            if (target.getPlayerState() === youtubePlayingState) {
              handlePlaying(target);
            }
          }, 150);
        },
        onStateChange: ({ target, data }) => {
          if (data !== youtubePlayingState) return;
          handlePlaying(target);
        },
        onAutoplayBlocked: ({ target }) => {
          if (userActivatedRef.current) return;

          unmuteAttemptedRef.current = true;
          checkingAudiblePlaybackRef.current = false;
          recoverMutedPlayback(target);
        },
      },
    });

    playerRef.current = player;
  }, [handlePlaying, recoverMutedPlayback]);

  useEffect(() => {
    const unlockSound = () => {
      if (!playerRef.current) return;

      enableSound();
      window.removeEventListener("pointerdown", unlockSound, true);
      window.removeEventListener("keydown", unlockSound, true);
    };

    window.addEventListener("pointerdown", unlockSound, {
      capture: true,
    });
    window.addEventListener("keydown", unlockSound, {
      capture: true,
    });

    return () => {
      window.removeEventListener("pointerdown", unlockSound, true);
      window.removeEventListener("keydown", unlockSound, true);
    };
  }, [enableSound]);

  useEffect(() => {
    return () => {
      clearAutomaticAudioTimers();
      if (readyCheckTimerRef.current !== null) {
        window.clearTimeout(readyCheckTimerRef.current);
      }
      if (recoveryTimerRef.current !== null) {
        window.clearTimeout(recoveryTimerRef.current);
      }
      playerRef.current?.destroy();
      playerRef.current = null;
    };
  }, [clearAutomaticAudioTimers]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <Script
        id="youtube-iframe-api"
        src="https://www.youtube.com/iframe_api"
        strategy="afterInteractive"
        onReady={initialisePlayer}
      />

      {/* Background gradient — off-center, not centered */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 70% 50%, rgba(44,143,255,0.10) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-28 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT — editorial copy, not centred */}
        <div>
          <div
            className="mb-8 inline-flex max-w-xl items-start gap-3 rounded-2xl px-4 py-3"
            style={{
              background: "rgba(10,25,49,0.72)",
              border: "1px solid rgba(44,143,255,0.22)",
            }}
          >
            <LockKeyhole size={18} style={{ color: "#2C8FFF", flexShrink: 0, marginTop: 2 }} />
            <p className="text-sm leading-relaxed" style={{ color: "#B3CFE5" }}>
              We handle data securely according to your use case, from zero data retention to EU-only inference for regulated teams.
            </p>
          </div>

          <p
            className="text-xs font-black uppercase tracking-[0.2em] mb-8"
            style={{ color: "#2C8FFF" }}
          >
            Call Intelligence Platform
          </p>

          <h2
            className="font-black leading-[0.95] tracking-[-0.04em] mb-8"
            style={{
              color: "#EEF4FF",
              fontSize: "clamp(52px, 7vw, 88px)",
            }}
          >
            Every call
            <br />
            <em
              className="not-italic"
              style={{
                background: "linear-gradient(135deg, #2C8FFF 0%, #7AB8FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              analysed.
            </em>
            <br />
            Nothing missed.
          </h2>

          <p
            className="text-lg leading-relaxed max-w-md mb-10"
            style={{ color: "#B3CFE5", fontWeight: 400 }}
          >
            Asynchronous call uploads with diarized transcription, QA scoring,
            sentiment, summaries, and compliance checks.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10 max-w-xl">
            {["GDPR-aligned options", "Zero data retention", "Traceable analysis"].map((item) => (
              <div
                key={item}
                className="rounded-xl px-4 py-3 text-sm font-bold"
                style={{
                  color: "#EEF4FF",
                  background: "rgba(44,143,255,0.08)",
                  border: "1px solid rgba(44,143,255,0.18)",
                }}
              >
                {item}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mb-16">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm"
              style={{
                background: "#2C8FFF",
                color: "#fff",
                boxShadow: "0 8px 32px rgba(44,143,255,0.4)",
              }}
            >
              Apply for demo and 60 free points
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm"
              style={{
                color: "#EEF4FF",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              Book a Demo
            </Link>
          </div>

          {/* Inline social proof — no pill badge */}
          <div className="flex items-center gap-6">
            <div className="flex -space-x-2">
              {["#2C8FFF", "#7AB8FF", "#B3CFE5", "#EEF4FF"].map((c, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-[9px] font-black"
                  style={{ borderColor: "#020912", background: c, color: "#020912" }}
                >
                  {["SC", "MR", "PN", "TW"][i]}
                </div>
              ))}
            </div>
            <div>
              <div className="flex gap-0.5 mb-0.5">
                {"★★★★★".split("").map((s, i) => (
                  <span key={i} className="text-xs" style={{ color: "#eab308" }}>{s}</span>
                ))}
              </div>
              <p className="text-xs" style={{ color: "#B3CFE5" }}>
                Proven on real-time data across different enterprises
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT — autoplaying product video */}
        <div
          className="relative isolate mx-auto aspect-video w-full max-w-2xl overflow-visible lg:left-1/2 lg:w-[112%] lg:max-w-none lg:-translate-x-1/2 xl:w-[118%] 2xl:w-[125%]"
        >
          <VideoSignalField />

          <div
            className="absolute inset-0 z-10 overflow-hidden rounded-2xl"
            style={{
              backgroundColor: "#020912",
              backgroundImage:
                "url('https://i.ytimg.com/vi/hz358NwRWCw/maxresdefault.jpg')",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              filter: "drop-shadow(0 20px 55px rgba(44,143,255,0.2))",
              maskImage: videoFeatherMask,
              maskComposite: "intersect",
              WebkitMaskImage: videoFeatherMask,
              WebkitMaskComposite: "source-in",
            }}
          >
            <iframe
              ref={iframeRef}
              className={`pointer-events-none absolute left-1/2 top-1/2 h-[112%] w-[112%] -translate-x-1/2 -translate-y-1/2 border-0 transition-opacity duration-500 ${
                isVideoVisible ? "opacity-100" : "opacity-0"
              }`}
              src={heroVideoUrl}
              title="CallBlick product overview"
              allow="autoplay; encrypted-media"
              referrerPolicy="strict-origin-when-cross-origin"
              tabIndex={-1}
              onLoad={initialisePlayer}
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-20"
              style={{
                background:
                  "linear-gradient(to bottom, #020912 0%, rgba(2,9,18,0.96) 5%, rgba(2,9,18,0.55) 12%, transparent 24%, transparent 76%, rgba(2,9,18,0.55) 88%, rgba(2,9,18,0.96) 95%, #020912 100%)",
              }}
            />
          </div>

          <VideoOrbitStats />
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #020912)" }}
      />
    </section>
  );
}
