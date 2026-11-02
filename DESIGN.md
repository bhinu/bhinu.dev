---
name: Engineering journal
description: A project-led engineering portfolio on warm paper.
colors:
  paper: "#f3f1e9"
  ink: "#242820"
  muted: "#62675c"
  line: "#cfcec4"
  accent: "#a43e25"
  dark: "#262e25"
  green: "#cae0a5"
typography:
  display:
    fontFamily: "Inter, sans-serif"
    fontSize: "clamp(60px, 7.3vw, 96px)"
    fontWeight: 500
    lineHeight: 1.03
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Inter, sans-serif"
    lineHeight: 1.65
  expressive:
    fontFamily: "Instrument Serif, serif"
    fontWeight: 400
  code:
    fontFamily: "JetBrains Mono, monospace"
spacing:
  desktop-inset: "44px"
  tablet-inset: "30px"
  mobile-inset: "23px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    padding: "13px 20px"
  button-primary-hover:
    backgroundColor: "{colors.accent}"
---

# Design System: Engineering journal

## Overview

**Creative North Star: "Engineering journal"**

Warm paper, precise ink, and restrained rust give technical work an editorial voice. Open typography and thin rules establish hierarchy; project models explain behavior through small, legible interactions.

**Key Characteristics:**
- Open typography with serif emphasis.
- Flat surfaces, thin rules, and distinct demonstration grounds.
- Direct, keyboard-operable project models.

## Colors

Rust is the primary accent for expressive headings, links on hover, and keyboard focus. Paper, ink, muted text, and rules form the neutral foundation. Dark and green distinguish the storage model and its active data; selection also uses green on ink. Local sage, clay, and pale neutral surfaces differentiate project models and the experience section without becoming global accents.

## Typography

Inter carries hierarchy and prose. Instrument Serif supplies italic heading emphasis and upright project decks and model captions. JetBrains Mono is reserved for queries, row indices, and timestamps. All three use system fallbacks and font-display swap.

The display token describes the desktop hero. On mobile it becomes clamp(48px, 11.5vw, 76px), with line-height 1.06. Section headings use medium weight at 30px desktop and 26px mobile; project names and about/contact headings have their own larger scales. Main project prose is 14px desktop and 13px mobile, while introductory prose is 18px and 15px respectively. Body line-height is the baseline; longer copy uses contextual 1.7–1.85 leading. Supporting indices and model annotations are deliberately smaller than reading text.

## Layout

Centered content has a maximum width of 1240px, increasing to 1360px at a minimum viewport width of 1600px. Use the inset tokens: desktop by default, tablet at 1000px and below, mobile at 700px and below.

Desktop pairs project copy with models and arranges secondary projects, experience rows, about, and contact in columns. At 700px and below these stack; the storage model retains its eight-column row-group grid. Mobile navigation becomes a toggle-controlled vertical panel beneath the header. Keep content visible without entrance animation and prevent model overflow by preserving flexible columns and min-width: 0.

## Elevation & Depth

Surfaces are flat, with no box shadows. Thin rules, paper-to-tonal-ground changes, and active data fills provide separation and state.

## Shapes

Buttons, project grounds, and row-group cells have square corners. Circles are reserved for status dots and memory stages; the zone-map switch uses a pill track. Borders are predominantly one pixel.

## Components

- **Primary action:** ink on paper, medium 14px type, minimum height 50px; rust on hover. At mobile sizes use 12px type, 47px minimum height, and 12px 17px padding.
- **Text links and navigation:** open text with generous vertical padding; rust hover and a small diagonal icon translation where present. The mobile menu button is 44px square and exposes expanded state and the controlled navigation ID.
- **Storage-pruning model:** a dark ground, green active cells, textual ON/OFF state, and a native toggle button with aria-pressed. The read count and explanation update in a polite live region; the cell grid is decorative to assistive technology. Label it as an interactive model.
- **MuscleMemory model:** four native stage buttons on a clay ground; the selected circular stage is rust and exposes aria-pressed. Stage text updates in a polite live region. Preserve the explicit workflow-model label.
- **Keyboard and motion:** links and buttons share a two-pixel rust focus outline offset five pixels. Preserve the visible-on-focus skip link. State transitions last 0.2–0.3 seconds; reduced-motion preference disables transitions, animations, and smooth scrolling.

## Do's and Don'ts

- **Do** preserve open typography, thin rules, and model-specific grounds.
- **Do** communicate interactive state in text and accessible button state as well as color.
- **Do** retain model labels and benchmark qualifications alongside results.
- **Don't** enclose every content section in a rounded card or introduce decorative shadows.
- **Don't** hide essential copy behind motion or remove keyboard focus treatment.
