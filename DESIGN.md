---
name: Bhinu Puvvala portfolio
description: Black split portfolio with larger type, subtle blue controls, and optional light mode.
colors:
  bg: "#08090a"
  surface: "#10151d"
  surface-hover: "#151d29"
  text: "#f7f8f8"
  secondary: "#b0b2b8"
  muted: "#8b8e98"
  line: "#222a36"
  accent: "#a1bfee"
  tag-bg: "#141f30"
  strong: "#dfe0e4"
  heading-secondary: "#d9dbe2"
  selection: "#253d5c"
  scrollbar: "#383b43"
  nav-line: "#394d67"
  indicator: "#8caedb"
  badge-line: "#2c405c"
  tag-text: "#adc8ed"
  preview-line: "#405879"
  preview-fill: "#1c2d44"
  preview-active: "#86a9d9"
typography:
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "16px"
    lineHeight: 1.8
  title:
    fontFamily: "Inter, sans-serif"
    fontSize: "18px"
    fontWeight: 500
---

# Bhinu Puvvala portfolio

## Overview

User-selected references: Linear’s black aesthetic and Brittany Chiang’s split portfolio layout. Keep copy factual. Main prose stays neutral; blue belongs to controls and small details.

## Colors

The default is dark with #08090a as the reading background. Subtle blue appears in tags, badges, active navigation rules, social hover states, and the theme pill. Light mode uses #f8f9fb as the reading background, dark neutral text, and pale blue UI surfaces. Both palettes are recorded in .impeccable/design.json and controlled by CSS custom properties.

## Typography

Inter throughout. About prose is 16px; experience and project descriptions are 14px desktop and 15px mobile. Tags and metadata use 12–14px. Profile name keeps the previous 33–46px scale. Body leading remains 1.8–1.9. JetBrains Mono is reserved for miniature project data labels.

## Layout

Desktop uses a sticky left profile, navigation, resume and social links, with scrolling About, Experience and Projects on the right. The shell is 1190px maximum, 1260px above 1450px. At 1100px reduce the left column and stack experience dates. At 900px stack the profile and content; at 600px use 25px horizontal insets and reserve 86px above the profile for the theme control. Never allow horizontal scrolling.

## Shapes

Subtle one-pixel borders, small rounded tag and preview corners, and a pill-shaped theme control. No large decorative card surfaces.

## Components

The fixed top-right theme button shows a single current label: Dark or Light. Clicking toggles the entire palette and changes its accessible action label. Dark is the default. Persist explicit choice to localStorage and restore before paint. If storage is unavailable, toggling still works in memory. Button supports keyboard activation and aria-pressed.

Section navigation highlights the currently viewed section. Focus outlines use the blue accent. Respect reduced-motion preferences and theme selection and scrollbars. Keep the resume and source repository links visible.

## Asset provenance

public/projects/videre.png is the owner’s existing screenshot from https://github.com/bhinu/Videre/blob/main/public/screenshot-app.png. Other previews are code-native geometry, not app screenshots.
