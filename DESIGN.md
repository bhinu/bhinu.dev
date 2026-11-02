---
name: Bhinu Puvvala portfolio
description: Black engineering portfolio with a persistent desktop profile and factual project history.
colors:
  bg: "#08090a"
  surface: "#111214"
  surface-hover: "#151619"
  text: "#f7f8f8"
  secondary: "#b0b2b8"
  muted: "#8b8e98"
  line: "#24262b"
  accent: "#a9afff"
  tag-bg: "#191b28"
  selection: "#35394f"
  scrollbar: "#383b43"
  strong: "#dfe0e4"
  profile-role: "#e2e3e7"
  nav-rule: "#41444e"
  resume: "#d9dbe2"
  status-dot: "#9da6b1"
  section-heading: "#e1e2e6"
  current-border: "#30323d"
  current-text: "#b6bbdc"
  entry-role: "#c7c9d0"
  tag-text: "#b7bbed"
  project-type: "#cbcdd5"
  preview-title: "#d5d8e2"
  storage-border: "#51576f"
  storage-cell: "#252a3a"
  storage-active: "#969fd8"
  preview-caption: "#9fa4b7"
  memory-ground: "#111216"
  memory-line: "#41475f"
  memory-border: "#8e96bf"
  memory-active: "#929bd3"
typography:
  display:
    fontFamily: "Inter, sans-serif"
    fontSize: "45px"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.04em"
  section:
    fontFamily: "Inter, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0.09em"
  title:
    fontFamily: "Inter, sans-serif"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: 1.5
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "14px"
    lineHeight: 1.9
  label:
    fontFamily: "Inter, sans-serif"
    fontSize: "10px"
    lineHeight: 1.5
  preview-caption:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "6px"
rounded:
  focus: "3px"
  current: "4px"
  tag: "5px"
  preview: "6px"
spacing:
  desktop-inset: "56px"
  tablet-inset: "40px"
  mobile-inset: "25px"
  desktop-section: "96px"
  tablet-section: "70px"
  mobile-section: "62px"
components:
  technology-tag:
    backgroundColor: "{colors.tag-bg}"
    textColor: "{colors.tag-text}"
    rounded: "{rounded.tag}"
    padding: "4px 9px"
    typography: "{typography.label}"
  project-preview:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.preview}"
    height: "83px"
  current-label:
    textColor: "{colors.current-text}"
    rounded: "{rounded.current}"
    padding: "1px 6px"
---

# Design System: Bhinu Puvvala portfolio

## Overview

**Creative North Star: "Linear black, split portfolio"**

Linear’s black aesthetic and Brittany Chiang’s split portfolio layout are the user-chosen references. A sticky desktop profile anchors a scrolling history of About, Experience, and Projects. Copy states education, work, technologies, and qualified results directly, without promotional taglines.

**Key Characteristics:**

- Black ground, near-white hierarchy, neutral gray reading text, and restrained lavender states.
- Inter for reading and navigation; mono only inside miniature project previews.
- Open content rows, thin separators, and small project thumbnails.

## Colors

### Primary

Lavender `accent` marks link hover and keyboard focus. `tag-bg` and `tag-text` provide muted technology labels. Current-role and miniature-preview colors are intentional local lavender ramps, not additional brand accents.

### Neutral

`bg` is the page ground; `text` is the primary foreground. `secondary` carries reading copy and `muted` metadata. `line` separates education, secondary projects, and the footer. `surface` grounds thumbnails. `surface-hover` is defined in CSS but presently unused. The remaining named colors preserve implemented near-white text levels, selection, scrollbar, navigation rules, status dots, and preview details. All exact values above are extracted from `src/app/globals.css`; local shades are deliberate rather than undocumented palette drift.

## Typography

Inter is the sole reading family, loaded with swap through Next.js. JetBrains Mono is limited to thumbnail captions; there is no serif face. The frontmatter gives desktop roles, with About copy as the body reference. Experience and project descriptions use (12px) on desktop and (13px) at narrower sizes; metadata uses (9–12px). Uppercase section headings and navigation use tracking (0.09em).

The name is (45px) normally, (38px) at widths up to (1100px), (46px) in the stacked tablet profile, and `clamp(33px, 8.5vw, 44px)` on phones. Section headings become (11px) on phones. Thumbnail mono captions grow from (6px) to (8px) on phones. Retain these contextual scales rather than applying one body size universally.

## Layout

The centered shell is (1190px) maximum including horizontal inset. Desktop uses a (380px) profile column, flexible right column, and (88px) gap. The profile sticks at the viewport top with (100svh) height capped at (1100px); the right column scrolls with the document. At widths from (1450px), the shell grows to (1260px), profile to (400px), and gap to (115px). At widths up to (1100px), columns use (320px) plus flexible content and a (55px) gap.

At widths up to (900px), the shell stacks with a (750px) maximum, the profile loses sticky positioning, and section navigation is hidden. At widths up to (600px), dates stack above experience details and project text precedes its (160px × 95px) thumbnail. Desktop experience rows use (103px) dates and an (18px) gap; project rows use (122px) thumbnails and a (22px) gap. Short desktop viewports up to (760px) high reduce profile spacing. Use flexible columns with `min-width: 0` to avoid overflow.

## Elevation & Depth

No box shadows. Subtle neutral surface changes, one-pixel borders, and typography establish separation. Project previews enlarge images slightly on hover; sections remain flat on the page ground.

## Shapes

Small radii distinguish focus outlines, current-role labels, tags, and thumbnails. One-pixel rules are the main boundary treatment. Status dots and memory-preview nodes are circular; storage-preview cells have nearly square (1px) corners.

## Components

- **Section navigation:** uppercase (11px), (40px) minimum row height. A one-pixel leading rule expands from (28px) to (60px) on hover and active state; text and rule become near-white. The component tracks the current scroll section.
- **Resume and text links:** open text with small inline icons. Most primary text links turn lavender on hover; social and secondary repository links turn near-white. There are no filled CTA buttons or form inputs.
- **Technology tags:** compact lavender-tinted labels with wrapped rows and (6px) gaps. They communicate technologies and are not controls.
- **Experience rows:** open date/body grid, role and location metadata, evidence bullets, and technology tags. Holos has a small bordered Current label.
- **Project rows:** source links, direct project descriptions, explicit limitations, tags, and small previews. minicol and MuscleMemory use decorative CSS diagrams, not interactive models. Videre uses `public/projects/videre.png`, sourced from https://github.com/bhinu/Videre/blob/main/public/screenshot-app.png. Keep its interface image descriptive and its source-code link accessible.
- **Focus and motion:** links and buttons have a lavender (2px) outline offset (5px). Preserve the visible-on-focus skip link. Color transitions use (0.2s), navigation-rule transitions (0.25s ease), and image scale (0.3s). Reduced motion disables transitions, animations, and smooth scrolling.

## Do's and Don'ts

- Do preserve the black palette and factual, qualified project copy.
- Do keep the desktop profile persistent and stack the page at the established breakpoint.
- Do preserve skip navigation, visible focus, descriptive link labels, and reduced-motion behavior.
- Don't restore warm paper, rust accents, or expressive serif typography.
- Don't add promotional taglines or decorative card shells around every section.
- Don't describe decorative project thumbnails as interactive demonstrations.

## Readability update

Main prose uses 16px in About and 14–15px in experience and project descriptions; metadata and tags use 12–14px. Profile names keep their existing scale. Preserve the split layout and generous line height.
