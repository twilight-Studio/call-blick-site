"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Check, Clock3, ShieldCheck, Zap } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

type CatalogItem = {
  product_id: string;
  price_id: string;
  name: string;
  description: string;
  item_type: "subscription" | "topup";
  compliance_tier: "gdpr" | "non_gdpr";
  minutes: number;
  unit_amount: number;
  currency: string;
  recurring_interval: string | null;
  tax_behavior: string;
  active: boolean;
  checkout_enabled: boolean;
  unavailable_reason: string | null;
};

const pointRules = [
  "1 point/credit = 1 minute of call analysis",
  "Subscription minutes renew each billing period",
  "Top-up minutes carry over",
  "Prices exclude applicable tax",
];

const enterpriseFeatures = [
  "Custom SLAs",
  "Dedicated EU or global inference",
  "Private model hosting",
  "Custom context windows",
  "Custom compliance requirements",
  "Priority support",
];

const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/+$/, "");

function isCatalogItem(value: unknown): value is CatalogItem {
  if (!value || typeof value !== "object") return false;

  const item = value as Record<string, unknown>;

  return (
    typeof item.product_id === "string" &&
    typeof item.price_id === "string" &&
    typeof item.name === "string" &&
    typeof item.description === "string" &&
    (item.item_type === "subscription" || item.item_type === "topup") &&
    (item.compliance_tier === "gdpr" || item.compliance_tier === "non_gdpr") &&
    typeof item.minutes === "number" &&
    typeof item.unit_amount === "number" &&
    typeof item.currency === "string" &&
    (typeof item.recurring_interval === "string" || item.recurring_interval === null) &&
    typeof item.tax_behavior === "string" &&
    typeof item.active === "boolean" &&
    typeof item.checkout_enabled === "boolean" &&
    (typeof item.unavailable_reason === "string" || item.unavailable_reason === null)
  );
}

function formatPrice(item: CatalogItem) {
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: item.currency.toUpperCase(),
    }).format(item.unit_amount / 100);
  } catch {
    return `${(item.unit_amount / 100).toFixed(2)} ${item.currency.toUpperCase()}`;
  }
}

function tierLabel(tier: CatalogItem["compliance_tier"]) {
  return tier === "gdpr" ? "GDPR compliant" : "Non-GDPR";
}

export default function PricingPage() {
  const [plans, setPlans] = useState<CatalogItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [catalogError, setCatalogError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function loadCatalog() {
      if (!API_BASE_URL) {
        console.error("NEXT_PUBLIC_BASE_URL is not configured.");
        setCatalogError(true);
        setIsLoading(false);
        return;
      }

      try {
        const response = await fetch(`${API_BASE_URL}/api/v1/billing/catalog`, {
          headers: { Accept: "application/json" },
          cache: "no-store",
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Catalog request failed with status ${response.status}`);
        }

        const payload: unknown = await response.json();
        if (!payload || typeof payload !== "object" || !("items" in payload) || !Array.isArray(payload.items)) {
          throw new Error("Catalog response does not contain an items array");
        }

        setPlans(payload.items.filter(isCatalogItem));
      } catch (error) {
        if (controller.signal.aborted) return;
        console.error("Unable to load the billing catalog:", error);
        setCatalogError(true);
      } finally {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    }

    void loadCatalog();

    return () => controller.abort();
  }, []);

  return (
    <div className="min-h-screen pt-28 pb-32 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 50% 60% at 75% 20%, rgba(44,143,255,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 mb-16">
        <FadeInSection className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] mb-5" style={{ color: "#2C8FFF" }}>
              Pricing
            </p>
            <h1
              className="font-black tracking-[-0.04em] leading-[0.95]"
              style={{ color: "#EEF4FF", fontSize: "clamp(44px,6vw,72px)" }}
            >
              Point-based
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #2C8FFF, #7AB8FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                usage.
              </span>
            </h1>
          </div>
          <div className="space-y-4">
            <p className="text-lg leading-relaxed" style={{ color: "#B3CFE5" }}>
              Choose GDPR-compliant EU processing or high-performance global processing. New organizations can apply for demo access with 60 free points/credits for 60 minutes of calls.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {pointRules.map((rule) => (
                <div
                  key={rule}
                  className="rounded-2xl px-4 py-3 text-sm font-bold"
                  style={{ background: "rgba(10,25,49,0.68)", border: "1px solid rgba(255,255,255,0.07)", color: "#EEF4FF" }}
                >
                  {rule}
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 mb-20">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5" aria-label="Loading pricing plans">
            {[0, 1, 2, 3].map((placeholder) => (
              <div
                key={placeholder}
                className="h-[440px] rounded-3xl animate-pulse"
                style={{ background: "rgba(10,25,49,0.68)", border: "1px solid rgba(44,143,255,0.12)" }}
              />
            ))}
          </div>
        ) : plans.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {plans.map((plan, index) => {
              const Icon = plan.compliance_tier === "gdpr" ? ShieldCheck : Zap;
              const isAvailable = plan.active && plan.checkout_enabled;

              return (
                <FadeInSection key={plan.price_id} delay={index * 80}>
                  <article
                    className="h-full rounded-3xl p-8 flex flex-col"
                    style={{
                      background: "rgba(10,25,49,0.68)",
                      border: "1px solid rgba(44,143,255,0.18)",
                    }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-2xl"
                        style={{ background: "rgba(44,143,255,0.12)", color: "#2C8FFF" }}
                      >
                        <Icon size={25} />
                      </div>
                      <div className="flex flex-wrap justify-end gap-2">
                        <span
                          className="rounded-full px-3 py-1 text-xs font-black uppercase tracking-[0.1em]"
                          style={{ background: "rgba(44,143,255,0.12)", color: "#7AB8FF" }}
                        >
                          {tierLabel(plan.compliance_tier)}
                        </span>
                        <span
                          className="rounded-full px-3 py-1 text-xs font-black uppercase tracking-[0.1em]"
                          style={{ background: "rgba(255,255,255,0.06)", color: "#B3CFE5" }}
                        >
                          {plan.item_type === "subscription" ? "Subscription" : "Top-up"}
                        </span>
                      </div>
                    </div>

                    <h2 className="text-2xl font-black mt-6 mb-3" style={{ color: "#EEF4FF" }}>
                      {plan.name}
                    </h2>
                    <p className="text-sm leading-relaxed mb-7" style={{ color: "#B3CFE5" }}>
                      {plan.description}
                    </p>

                    <div className="rounded-2xl p-5 mb-6" style={{ background: "rgba(2,9,18,0.5)", border: "1px solid rgba(255,255,255,0.07)" }}>
                      <div className="flex flex-wrap items-end justify-between gap-3">
                        <div>
                          <p className="text-4xl font-black tracking-[-0.04em]" style={{ color: "#EEF4FF" }}>
                            {formatPrice(plan)}
                            {plan.recurring_interval && (
                              <span className="ml-1 text-sm font-bold tracking-normal" style={{ color: "#B3CFE5" }}>
                                / {plan.recurring_interval}
                              </span>
                            )}
                          </p>
                          <p className="mt-2 text-sm font-black" style={{ color: "#2C8FFF" }}>
                            {plan.minutes.toLocaleString("en-US")} processing minutes
                          </p>
                        </div>
                        <p className="text-xs font-bold uppercase tracking-[0.12em]" style={{ color: "#B3CFE5" }}>
                          {plan.tax_behavior === "exclusive" ? "Tax excluded" : plan.tax_behavior}
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-7">
                      <li className="flex gap-3 text-sm leading-relaxed" style={{ color: "#B3CFE5" }}>
                        <Check size={16} style={{ color: "#22c55e", flexShrink: 0, marginTop: 2 }} />
                        {plan.compliance_tier === "gdpr" ? "EU-focused, GDPR-compliant processing" : "High-performance global processing"}
                      </li>
                      <li className="flex gap-3 text-sm leading-relaxed" style={{ color: "#B3CFE5" }}>
                        <Clock3 size={16} style={{ color: "#22c55e", flexShrink: 0, marginTop: 2 }} />
                        {plan.item_type === "subscription"
                          ? `${plan.minutes.toLocaleString("en-US")} minutes included every ${plan.recurring_interval ?? "billing period"}`
                          : "Minutes carry over and require a matching active subscription"}
                      </li>
                    </ul>

                    {isAvailable ? (
                      <Link
                        href="/contact"
                        className="mt-auto inline-flex w-full items-center justify-center rounded-xl px-6 py-4 text-sm font-bold"
                        style={{ background: "#2C8FFF", color: "#fff", boxShadow: "0 8px 28px rgba(44,143,255,0.28)" }}
                      >
                        Request this plan
                      </Link>
                    ) : (
                      <div
                        className="mt-auto inline-flex w-full items-center justify-center rounded-xl px-6 py-4 text-center text-sm font-bold"
                        style={{ background: "rgba(255,255,255,0.06)", color: "#B3CFE5", border: "1px solid rgba(255,255,255,0.08)" }}
                        aria-disabled="true"
                      >
                        {plan.unavailable_reason ?? "Currently unavailable"}
                      </div>
                    )}
                  </article>
                </FadeInSection>
              );
            })}
          </div>
        ) : (
          <div
            className="rounded-3xl p-8 text-center"
            style={{ background: "rgba(10,25,49,0.68)", border: "1px solid rgba(44,143,255,0.18)" }}
          >
            <h2 className="text-2xl font-black mb-3" style={{ color: "#EEF4FF" }}>
              {catalogError ? "Pricing is temporarily unavailable" : "No plans are currently available"}
            </h2>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#B3CFE5" }}>
              {catalogError
                ? "We could not load the latest plans. Please try again shortly or contact us for current pricing."
                : "Please contact us and we will help find the right option for your team."}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl px-6 py-4 text-sm font-bold"
              style={{ background: "#2C8FFF", color: "#fff" }}
            >
              Contact us
            </Link>
          </div>
        )}
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <FadeInSection>
          <div
            className="rounded-3xl p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr_auto] gap-8 items-start"
            style={{ background: "rgba(10,25,49,0.7)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] mb-3" style={{ color: "#2C8FFF" }}>
                Enterprise Solution
              </p>
              <h2 className="text-3xl font-black mb-3" style={{ color: "#EEF4FF" }}>
                Custom
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "#B3CFE5" }}>
                Price on request for organizations with custom security, compliance, or model hosting requirements.
              </p>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {enterpriseFeatures.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm" style={{ color: "#B3CFE5" }}>
                  <Check size={16} style={{ color: "#22c55e", flexShrink: 0 }} />
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl px-6 py-4 text-sm font-bold"
              style={{ border: "1px solid rgba(255,255,255,0.12)", color: "#EEF4FF" }}
            >
              Contact sales
            </Link>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}
