# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- Primary: quality-assurance, compliance, and operations leaders evaluating how to review recorded customer calls at scale.
- Secondary: sales and support managers who need consistent coaching signals across uploaded calls.
- Inferred from the existing website and current redesign brief; user confirmation is still open.

## Product Purpose

CallBlick turns uploaded recorded calls into speaker-separated transcripts, configurable QA answers, compliance findings, summaries, sentiment signals, and team-level reporting. The public website must help a first-time buyer understand that workflow, assess whether the product is credible for sensitive call data, and request an appropriate demo.

## Positioning

CallBlick combines asynchronous call processing with evidence-linked review: findings should remain traceable to the transcript and open to human correction rather than presented as opaque automated judgments.

## Operating Context

- Teams upload recorded calls rather than using a live-call assistant.
- Buyers compare processing location, retention, model handling, compliance controls, turnaround time, and review workflow before sharing call data.
- The public website is a B2B evaluation surface; trust, legal clarity, and inspectable product evidence matter more than decorative marketing claims.

## Capabilities and Constraints

- Preserve the existing CallBlick name, logo assets, product routes, contact workflow, and sign-in destination.
- Preserve factual product capabilities already represented in code: transcription, diarization, configurable QA scoring, compliance checks, summaries, sentiment analysis, campaign analytics, and human review/override.
- Do not invent customers, integrations, testimonials, benchmarks, certifications, or performance results.
- Pricing and privacy details are plan-dependent and must be phrased precisely.
- Existing implementation uses Next.js 16, React 19, Tailwind CSS 4, TypeScript, Framer Motion, and Lucide icons.
- No code push is authorized for this redesign.

## Brand Commitments

- Preserve CallBlick as the product name and retain blue as the recognizable accent.
- Current redesign brief calls for a simple, classic, uncluttered, human-made presentation informed by strong contemporary product companies without copying their visual identity.
- Light editorial direction is an inferred working choice because the structured confirmation mechanism was unavailable.

## Evidence on Hand

- Existing product copy and interface illustrations in `src/`.
- Existing logo assets in `public/`.
- Office and contact details already present in the website.
- No verified customer logo permissions, public case studies, benchmark methodology, or independently validated testimonials were found in the repository review. Future work must not fabricate them.

## Product Principles

1. Show the workflow and evidence instead of relying on superlative claims.
2. Make privacy and processing choices understandable before asking for call data.
3. Keep one clear conversion path: understand the product, assess fit, request a demo.
4. Use plain language and specific product behavior instead of generic AI marketing language.
5. Treat accessibility, responsive behavior, and restrained motion as trust signals.

## Accessibility & Inclusion

Target WCAG 2.2 AA fundamentals: semantic headings, visible focus, keyboard-operable navigation and controls, readable contrast, 44px touch targets, reduced-motion support, and labels that remain visible outside placeholders.
