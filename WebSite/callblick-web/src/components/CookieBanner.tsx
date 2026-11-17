"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";

type ConsentChoice = "all" | "essential";

const CONSENT_KEY = "callblick-cookie-consent-v1";
const CONSENT_COOKIE = "callblick_cookie_consent";
const CONSENT_EVENT = "callblick:cookie-consent";
const ONE_YEAR_IN_SECONDS = 60 * 60 * 24 * 365;

function hasSavedConsent() {
  try {
    if (window.localStorage.getItem(CONSENT_KEY)) return true;
  } catch {
    // The cookie fallback still prevents repeat prompts when storage is blocked.
  }

  return document.cookie
    .split(";")
    .some((cookie) => cookie.trim().startsWith(`${CONSENT_COOKIE}=`));
}

function subscribeToConsent(onChange: () => void) {
  window.addEventListener(CONSENT_EVENT, onChange);
  return () => window.removeEventListener(CONSENT_EVENT, onChange);
}

export default function CookieBanner() {
  const isVisible = useSyncExternalStore(
    subscribeToConsent,
    () => !hasSavedConsent(),
    () => false,
  );

  function saveConsent(choice: ConsentChoice) {
    const consent = {
      choice,
      savedAt: new Date().toISOString(),
      version: 1,
    };

    try {
      window.localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
    } catch {
      // Consent is also stored in a first-party cookie below.
    }

    const secure = window.location.protocol === "https:" ? "; Secure" : "";
    document.cookie = `${CONSENT_COOKIE}=${choice}; Path=/; Max-Age=${ONE_YEAR_IN_SECONDS}; SameSite=Lax${secure}`;
    window.dispatchEvent(
      new CustomEvent(CONSENT_EVENT, { detail: consent }),
    );
  }

  if (!isVisible) return null;

  return (
    <section
      aria-labelledby="cookie-banner-title"
      aria-live="polite"
      className="fixed inset-x-4 bottom-4 z-[80] mx-auto max-w-5xl rounded-[var(--radius)] border border-[var(--rule-strong)] bg-[rgba(7,20,38,0.97)] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:inset-x-6 sm:bottom-6 sm:p-6"
      role="region"
    >
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
        <div className="max-w-2xl">
          <h2
            className="font-serif text-xl font-semibold tracking-[-0.02em] text-[var(--ink)] sm:text-2xl"
            id="cookie-banner-title"
          >
            Your privacy, your choice
          </h2>
          <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)] sm:text-base">
            We use essential cookies to keep this site working. With your
            permission, we may also use analytics cookies to understand how the
            site is used. Read our{" "}
            <Link className="text-link min-h-0 font-semibold" href="/privacy-policy">
              privacy policy
            </Link>
            .
          </p>
        </div>

        <div className="flex shrink-0 flex-col-reverse gap-3 sm:flex-row">
          <button
            className="button-secondary w-full sm:w-auto"
            onClick={() => saveConsent("essential")}
            type="button"
          >
            Essential only
          </button>
          <button
            className="button-primary w-full sm:w-auto"
            onClick={() => saveConsent("all")}
            type="button"
          >
            Accept all
          </button>
        </div>
      </div>
    </section>
  );
}
