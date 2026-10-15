"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

type CatalogItem = {
  product_id: string; price_id: string; name: string; description: string;
  item_type: "subscription" | "topup"; compliance_tier: "gdpr" | "non_gdpr";
  minutes: number; unit_amount: number; currency: string; recurring_interval: string | null;
  tax_behavior: string; active: boolean; checkout_enabled: boolean; unavailable_reason: string | null;
};
const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/+$/, "");

function isCatalogItem(value: unknown): value is CatalogItem {
  if (!value || typeof value !== "object") return false;
  const item = value as Record<string, unknown>;
  return typeof item.product_id === "string" && typeof item.price_id === "string" && typeof item.name === "string" && typeof item.description === "string" && (item.item_type === "subscription" || item.item_type === "topup") && (item.compliance_tier === "gdpr" || item.compliance_tier === "non_gdpr") && typeof item.minutes === "number" && typeof item.unit_amount === "number" && typeof item.currency === "string" && (typeof item.recurring_interval === "string" || item.recurring_interval === null) && typeof item.tax_behavior === "string" && typeof item.active === "boolean" && typeof item.checkout_enabled === "boolean";
}

function price(item: CatalogItem) { try { return new Intl.NumberFormat("en-US", { style: "currency", currency: item.currency.toUpperCase() }).format(item.unit_amount / 100); } catch { return `${(item.unit_amount / 100).toFixed(2)} ${item.currency.toUpperCase()}`; } }

export default function PricingPage() {
  const [plans, setPlans] = useState<CatalogItem[]>([]); const [loading, setLoading] = useState(true); const [failed, setFailed] = useState(false);
  useEffect(() => { const controller = new AbortController(); async function load() { if (!API_BASE_URL) { setFailed(true); setLoading(false); return; } try { const response = await fetch(`${API_BASE_URL}/api/v1/billing/catalog`, { headers: { Accept: "application/json" }, cache: "no-store", signal: controller.signal }); if (!response.ok) throw new Error(`Catalog request failed: ${response.status}`); const payload: unknown = await response.json(); if (!payload || typeof payload !== "object" || !("items" in payload) || !Array.isArray(payload.items)) throw new Error("Invalid catalog response"); setPlans(payload.items.filter(isCatalogItem)); } catch { if (!controller.signal.aborted) setFailed(true); } finally { if (!controller.signal.aborted) setLoading(false); } } void load(); return () => controller.abort(); }, []);

  return <><header className="page-intro page-shell flex min-h-[72vh] flex-col items-center justify-center text-center"><h1 className="display mx-auto">Pricing from the live catalogue.</h1><p className="body-copy mx-auto">One processing point represents one minute of call analysis. Exact plan availability, tax treatment, and processing setup come from the current catalogue and should be confirmed before purchase.</p></header>
    <section className="section-rule"><div className="page-shell py-16 lg:py-24">
      {loading && <div className="border border-[var(--rule)] bg-[var(--surface)] p-8" aria-live="polite">Loading the current catalogue…</div>}
      {!loading && plans.length > 0 && <div className="grid gap-6 md:grid-cols-2">{plans.map((plan) => { const available = plan.active && plan.checkout_enabled; return <article key={plan.price_id} className="flex flex-col border border-[var(--rule-strong)] bg-[var(--surface)] p-6 md:p-8"><div className="flex flex-wrap justify-between gap-3"><span className="text-sm font-bold text-[var(--blue-dark)]">{plan.compliance_tier === "gdpr" ? "EU processing tier" : "Global processing tier"}</span><span className="text-sm text-[var(--ink-soft)]">{plan.item_type === "subscription" ? "Subscription" : "Top-up"}</span></div><h2 className="display mt-5 text-3xl">{plan.name}</h2><p className="body-copy mt-3 text-sm">{plan.description}</p><div className="my-7 border-y border-[var(--rule)] py-5"><p className="text-3xl font-bold tabular-nums">{price(plan)} {plan.recurring_interval && <span className="text-sm font-normal text-[var(--ink-soft)]">/ {plan.recurring_interval}</span>}</p><p className="mt-2 text-sm text-[var(--ink-soft)]">{plan.minutes.toLocaleString("en-US")} processing minutes · {plan.tax_behavior === "exclusive" ? "tax excluded" : plan.tax_behavior}</p></div>{available ? <Link href="/contact" className="button-primary mt-auto">Ask about this plan</Link> : <p className="mt-auto border border-[var(--rule)] bg-[var(--paper-warm)] p-3 text-sm text-[var(--ink-soft)]">{plan.unavailable_reason ?? "Currently unavailable"}</p>}</article>; })}</div>}
      {!loading && plans.length === 0 && <div className="border border-[var(--rule-strong)] bg-[var(--surface)] p-8"><h2 className="display text-3xl">{failed ? "The catalogue could not be loaded." : "No public plans are available."}</h2><p className="body-copy mt-4">Contact the team for current pricing. We will not show fallback prices that may be out of date.</p><Link href="/contact" className="button-primary mt-6">Contact us</Link></div>}
      <div className="mt-14 grid gap-6 border-t border-[var(--rule)] pt-8 md:grid-cols-3"><div><h2 className="font-bold">How usage works</h2><p className="body-copy mt-2 text-sm">A point represents one minute of processing. Renewal and carry-over depend on the catalogue item.</p></div><div><h2 className="font-bold">Data handling</h2><p className="body-copy mt-2 text-sm">Processing region and retention are plan-specific. Confirm them in writing for your use case.</p></div><div><h2 className="font-bold">Custom requirements</h2><p className="body-copy mt-2 text-sm">Ask about private hosting, service levels, or other requirements instead of assuming they are included.</p></div></div>
    </div></section></>;
}
