---
name: "CallBlick"
description: "A dark, evidence-led system for traceable recorded-call review."
colors:
  primary: "#2c8fff"
  primary-deep: "#7ab8ff"
  primary-soft: "#12355d"
  neutral-ink: "#eef4ff"
  neutral-muted: "#b3cfe5"
  neutral-paper: "#020912"
  neutral-paper-warm: "#071426"
  neutral-surface: "#0a1931"
  neutral-rule: "rgba(255, 255, 255, 0.09)"
  neutral-rule-strong: "rgba(44, 143, 255, 0.28)"
  scroll-thumb: "#33516f"
  review-danger: "#ff8a80"
  review-danger-soft: "#351d25"
  status-success: "#5dd39e"
typography:
  display:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(3.25rem, 7vw, 6.25rem)"
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(2.25rem, 4vw, 3rem)"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Avenir Next, Avenir, Segoe UI, Helvetica, Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.4
  body:
    fontFamily: "Avenir Next, Avenir, Segoe UI, Helvetica, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Avenir Next, Avenir, Segoe UI, Helvetica, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    lineHeight: 1.4
rounded:
  control: "9px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "40px"
  section: "80px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-surface}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "12px 18px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.neutral-surface}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "12px 18px"
    height: "44px"
  button-secondary:
    backgroundColor: "{colors.neutral-surface}"
    textColor: "{colors.neutral-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "11px 16px"
    height: "44px"
  input-field:
    backgroundColor: "{colors.neutral-surface}"
    textColor: "{colors.neutral-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "12px 14px"
    height: "48px"
---

# Design System: CallBlick

## Overview

**Creative North Star: "The Review Ledger"**

CallBlick feels like a carefully maintained review record: quiet enough to read, structured enough to audit, and specific enough to trust. Its deep navy editorial world pairs a measured serif voice with practical interface typography, keeping the transcript, review rule, and human decision more prominent than marketing ornament.

The system is classic rather than nostalgic and restrained rather than theatrical. A near-black navy canvas keeps the product focused; lighter navy panels and cool rules organize information into legible evidence; bright blue appears where a visitor can act or navigate. Abstract AI spectacle, unsupported proof, and decorative dashboard clutter are outside this visual language.

**Key Characteristics:**

- Editorial serif headlines paired with compact, readable sans-serif interface copy.
- Deep navy canvas, lighter review panels, cool blue rules, and one bright action blue.
- Flat, bordered records that keep evidence and reviewer decisions visibly connected.
- Wide breathing room, limited motion, and direct human language.

## Colors

The palette restores CallBlick's original deep navy and electric blue identity while keeping review states semantically explicit.

### Primary

- **CallBlick Blue:** The bright action color for primary buttons, focus, and numbered wayfinding.
- **Signal Blue:** The lighter hover and high-contrast text treatment for links on dark surfaces.
- **Evidence Blue Wash:** A quiet navy-blue supporting surface when a relationship needs emphasis without becoming an action.

### Neutral

- **Ledger White:** Primary text and the strongest information hierarchy.
- **Mist Blue:** Body copy, supporting labels, and secondary navigation.
- **Deep Night:** The default page field.
- **Navy Section:** Alternate sections and low-emphasis grouped content.
- **Review Panel:** Forms, plans, and the illustrative review record.
- **Cool Rule:** Standard low-contrast dividers between rows and sections.
- **Signal Rule:** The firmer blue boundary around records, fields, and list starts.

### Tertiary

- **Review Red:** A finding that needs attention; it does not signal a final automated judgement.
- **Review Red Wash:** The local background for flagged evidence.
- **Confirmed Green:** Form success and confirmed completion states.

### Named Rules

**The One Blue Rule.** Blue identifies an action, focus, or route through information; it is not a decorative fill for large sections.

**The Evidence State Rule.** Red and green describe review state only, and every color-coded state also carries a written label.

## Typography

**Display Font:** Newsreader (with Georgia fallback)  
**Body Font:** Avenir Next (with Avenir, Segoe UI, Helvetica, Arial fallbacks)

**Character:** Newsreader gives product promises and section titles a calm editorial voice. Avenir Next keeps navigation, evidence rows, form controls, and explanatory copy plain-spoken and operational.

### Hierarchy

- **Display** (medium, fluid 52–100px, 0.98 line-height): Hero and page-introduction headlines, balanced and normally held to roughly 11–13 characters per line.
- **Headline** (medium, fluid 36–48px, 1 line-height): Major section statements and action-band prompts.
- **Title** (bold, 18px, 1.4 line-height): Record headings, workflow names, and compact content titles.
- **Body** (regular, 16px, 1.6 line-height): Explanations and narrative copy, typically capped near 68 characters per line.
- **Label** (bold, 14px, 1.4 line-height): Field labels, record headers, metadata, and navigation.

### Named Rules

**The Human Measure Rule.** Long-form copy stays near 68 characters per line, while display lines remain short enough to read as deliberate statements rather than generated paragraphs.

**The Two-Voice Rule.** Serif establishes editorial hierarchy; sans-serif handles every instruction, control, label, and piece of evidence.

## Layout

The site uses one centered page shell that never exceeds 1180px and keeps 20px side gutters on wider screens. At 700px and below, the gutter tightens to 14px. Dark sections are separated by low-contrast horizontal rules and usually carry 64–112px of vertical space, with 80px as the central rhythm.

Desktop compositions use unequal editorial columns: a concise premise sits beside the denser evidence or content record. At the standard large breakpoint (1024px), those columns stack. Rows and forms introduce columns only when labels remain readable; contact fields become two columns at 640px, navigation becomes desktop at 768px, and dense review content stacks before it can squeeze.

**The One Record Rule.** A viewport establishes one dominant evidence object; supporting content uses rows and rules instead of competing card grids.

## Elevation & Depth

The system is flat by default and uses no box shadows. Depth comes from navy tonal contrast, stronger blue perimeter rules, and nested dividers. The Review Panel lifts slightly from Deep Night through tone alone; the illustrative review record earns the strongest outline because it is the product evidence object.

**The Flat Trust Rule.** Do not imply importance with floating panels or ambient shadows; establish hierarchy through type, spacing, tone, and border strength.

## Shapes

The form language is predominantly square and ledger-like. Large records, panels, and content groups keep square corners so rows align cleanly. Interactive controls alone receive gently curved 9px corners, giving buttons and fields a clear affordance without turning the page into a collection of pills.

Borders are one pixel and cool grey, with the stronger rule reserved for component perimeters, form controls, and the first edge of a structured list. Clipping is functional: grids may hide adjoining rule overlap, but decorative blobs and arbitrary masks are not part of the system.

**The Controls Curve Rule.** Curves belong to touch targets; information containers remain rectilinear.

## Components

### Buttons

Buttons feel direct and compact, with strong labels and a 44px minimum target.

- **Shape:** Gently curved control corners (9px).
- **Primary:** CallBlick Blue with Deep Night text for accessible contrast and compact 12px by 18px padding.
- **Hover / Focus:** Deepens to the darker action blue and rises by one pixel; keyboard focus uses a visible blue outline outside the control.
- **Secondary:** Record White with a Strong Rule border; hover shifts to Working Paper and darkens the border.

### Cards / Containers

Containers behave as records rather than decorative cards.

- **Corner Style:** Square.
- **Background:** Review Panel for high-attention records; Navy Section for quiet grouped content.
- **Shadow Strategy:** None; see the Flat Trust Rule.
- **Border:** One-pixel Cool Rule or Strong Rule depending on hierarchy.
- **Internal Padding:** 20–32px for records, 24–32px for grouped principles.

### Inputs / Fields

- **Style:** Review Panel, Signal Rule border, 9px control corners, 48px minimum height, and an always-visible bold label above the field.
- **Focus:** The border becomes CallBlick Blue with a soft external blue outline.
- **Error / Disabled:** Error copy uses Review Red plus a written message; disabled submit controls reduce opacity and retain their label.

### Navigation

The navigation starts at 68px, fixed, deep navy, lightly translucent, and separated from content by one Cool Rule. It compacts to 56px after leaving the top, eases fully out of view during a deliberate downward scroll, and returns as soon as upward intent is detected. The transition uses transform rather than layout position so it remains fluid. The supplied CallBlick logo anchors the left; sans-serif links use Mist Blue until hover. Desktop actions stay compact, while mobile opens one full-width list with 48px rows and explicit open/close labels for assistive technology.

### Review Record

The Review Record is the signature component. It pairs a transcript excerpt with a finding and required human action inside one square, strongly ruled surface. Flagged transcript language uses the red wash locally, while the adjacent written status makes clear that the output still needs review. Any illustrative record must say that it is an example.

### Action Band

The action band closes a page with one editorial prompt, one short explanatory paragraph, and one primary action. Its Navy Section background separates the decision from the preceding content without adding a floating conversion card.

### Product Video

The product-video section uses the official CallBlick YouTube overview inside a 16:9, square-cornered frame. It does not force autoplay or sound; native controls and fullscreen remain available.

### Motion

Motion explains page movement instead of decorating it. The hero enters once with a short upward fade, major sections reveal as they approach the viewport, and the navigation responds to scroll direction. Transitions use restrained 300–700ms easing; all reveals become immediate and the header remains functional when reduced motion is requested.

## Do's and Don'ts

### Do:

- **Do** show the transcript, rule, status, or reviewer action that supports a product statement.
- **Do** use borders, spacing, and typographic hierarchy to make dense information scannable.
- **Do** reserve CallBlick Blue for clear actions, focus, links, and wayfinding.
- **Do** keep controls at least 44px tall and preserve visible keyboard focus and reduced-motion behavior.
- **Do** label examples, sources, plan dependencies, and unverified states in plain language.

### Don't:

- **Don't** add invented metrics, anonymous testimonials, customer-logo strips, or unsupported trust badges.
- **Don't** use abstract AI imagery, gradients, glow effects, or floating metric cards as substitutes for product evidence.
- **Don't** round information containers into generic SaaS cards or turn every label into a pill.
- **Don't** animate content on entry; motion is limited to direct interaction feedback and mobile disclosure.
- **Don't** let a score or colored state present itself as the final decision when human review is required.
