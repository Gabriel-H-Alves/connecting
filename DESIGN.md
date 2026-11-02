# Design System: Connecting // Presença Territorial & Performance Web

**Project:** Connecting (Studio Editorial System)  
**Status:** Production Ready  
**Architecture:** React 19 + Vite 8 + Tailwind CSS v4 + Framer Motion 14  
**Design Genre:** Studio / Editorial (Hallmark Engine)  

---

## 1. Visual Theme & Atmosphere

* **Aesthetic Philosophy:** Anti-generic, restraint-driven editorial design. Inspired by Swiss typography, art direction catalogs, and Apple hardware presentation pages.
* **Mood & Vibe:** Authoritative, clean, high-precision, tactile, and mathematically calibrated. It explicitly rejects commercial SaaS clutter (floating gradients, rounded-2xl pastel pills, generic emojis, AI illustrations).
* **Atmospheric Details:**
  * **Proof Grid System:** Subtle dot-matrix substrate on section backgrounds (`background-size: 24px 24px`), simulating architectural drafting sheets and mechanical proofing paper.
  * **Crop Marks:** Fine corner registration marks (`--color-mark`) defining key cards and evidence blocks, conveying craftsmanship and physical print authenticity.
  * **Dual-Mode Luminance:** True editorial dual-palette. In Light Mode, it feels like high-grade unbleached architectural paper (`#F7F7F8`). In Dark Mode, it feels like obsidian volcanic matte stone (`#15171B`), retaining typography crispness without harsh pure black eye-strain.

---

## 2. Color Palette & Roles

Colors are calibrated in modern perceptual **OKLCH** color space to maintain perceptual uniformity across screen calibrations, with strict semantic tokens for both Light and Dark modes.

### Light Mode (Default)
| Descriptive Role | Semantic Token | OKLCH / Target Hex | Functional Assignment |
| :--- | :--- | :--- | :--- |
| **Architectural White** | `--color-paper` | `oklch(97.2% 0.006 215)` (~`#F6F8F9`) | Base page canvas, breathable background |
| **Parchment Plate** | `--color-paper-2` | `oklch(94% 0.009 215)` (~`#ECEFF1`) | Cards, pillar containers, structural panels |
| **Recessed Paper** | `--color-paper-3` | `oklch(90.5% 0.011 215)` (~`#E1E6E9`) | Inset zones, code snippets, inactive states |
| **High-Key Proof Sheet** | `--color-paper-hi` | `oklch(99% 0.004 215)` (~`#FCFDFE`) | Elevated cards, spotlight "Depois" containers |
| **Deep Charcoal Ink** | `--color-ink` | `oklch(16% 0.032 250)` (~`#15181D`) | Display titles, primary headlines, lead text |
| **Muted Slate Ink** | `--color-ink-2` | `oklch(34% 0.022 245)` (~`#39414B`) | Paragraphs, explanatory narrative, body text |
| **Editorial Graphite** | `--color-muted` | `oklch(49% 0.018 240)` (~`#5C6571`) | Metadata, labels, timestamps, tab outlines |
| **Hairline Rule** | `--color-rule` | `oklch(84% 0.010 225)` (~`#CBD2D8`) | 1px hairline dividers, card borders |
| **Territorial Amber Accent** | `--color-accent` | `oklch(68% 0.172 50)` (~`#E06B1C`) | High-intent conversion triggers, stars, ratings |
| **Accent Foreground** | `--color-accent-ink` | `oklch(16% 0.032 250)` (~`#15181D`) | High-contrast text sitting inside accent buttons |

### Dark Mode (`[data-mode="dark"]`)
| Descriptive Role | Semantic Token | OKLCH / Target Hex | Functional Assignment |
| :--- | :--- | :--- | :--- |
| **Obsidian Stone** | `--color-paper` | `oklch(16% 0.012 215)` (~`#15171B`) | Deep nocturnal background canvas |
| **Deep Matte Slate** | `--color-paper-2` | `oklch(19% 0.014 215)` (~`#1B1E23`) | Dark card containers, pillar surfaces |
| **Recessed Dark Plate** | `--color-paper-3` | `oklch(22% 0.016 215)` (~`#22262C`) | Sub-panels, comparison boxes |
| **Luminous Night Sheet** | `--color-paper-hi` | `oklch(25% 0.018 215)` (~`#2A2F37`) | High-conversion card highlights |
| **Porcelain Ink** | `--color-ink` | `oklch(94% 0.010 250)` (~`#EDEDF0`) | Pure contrast titles and primary typography |
| **Subdued Ghost Ink** | `--color-ink-2` | `oklch(78% 0.015 245)` (~`#C2C5CC`) | Legible dark body text, narrative blocks |
| **Muted Dark Smoke** | `--color-muted` | `oklch(62% 0.015 240)` (~`#9498A3`) | Secondary metadata, inactive indicators |
| **Hairline Dark Rule** | `--color-rule` | `oklch(28% 0.014 225)` (~`#313740`) | 1px clean dark container boundaries |
| **Vibrant Amber Flame** | `--color-accent` | `oklch(72% 0.145 50)` (~`#EA782D`) | Focused action triggers and conversion badges |

---

## 3. Typography Rules

Typography acts as the primary architecture of the interface. Hierarchy is enforced via type contrast, tabular numbers, and deliberate optical spacing.

* **Display Face (`--font-display`):** `Hedvig Letters Serif`, ui-serif, Georgia, serif.
  * *Characteristics:* Roman-serif with restrained warmth, literary heritage, and sharp structural serifs.
  * *Usage:* H1, H2, H3, section titles, brand mark.
  * *Rules:* Display weight is kept lean and elegant (`font-weight: 400` / normal); negative letter-spacing (`tracking-[-0.022em]`); tight line-height (`leading-[1.05]` to `leading-[1.1]`).
* **Body Face (`--font-body`):** `Geist`, ui-sans-serif, system-ui, sans-serif.
  * *Characteristics:* Neogrotesque engineer sans, hyper-legible down to 10px, neutral geometric rhythm.
  * *Usage:* Paragraphs, cards, navigation, badges, metadata.
* **Tabular Numerals (`.num`):** `font-variant-numeric: tabular-nums`.
  * *Rules:* All ratings, performance metrics (`99+`, `0.5s`, `14.8%`), view counts, and dates use fixed-width figures to prevent layout twitching during animations.

---

## 4. Component Stylings

### Buttons & Conversion Triggers
* **Primary CTA:** Sharp, rectangular with subtle micro-roundness (`rounded-sm` = 2px to 3px). Solid Territorial Amber (`bg-accent`), dark contrasting ink (`text-accent-ink`), thin structural outline (`border border-ink/20`), soft tactile depth (`shadow-sm`).
* **Tactile Feedback:** Apple-inspired micro-interactions:
  * Hover: `hover:-translate-y-0.5`
  * Active / Press & Hold: `active:scale-95 active:translate-y-0` (fully immune to parent transform bugs).
* **Secondary Action:** Ghost Paper button (`bg-paper-2 hover:bg-paper-3 border border-rule text-ink`).

### Cards & Structural Containers
* **Physical Posture:** Editorial crop-boxed surfaces (`crop bg-paper-2 border border-rule`).
* **Radius Discipline:** Strictly micro-radius (`rounded-sm` / `rounded-xs`). Absolutely no bubbly or pill-shaped containers.
* **Shadows:** Restrained planar shadows (`--shadow-sheet` = `1px 2px 0 rgba(ink, 0.07), 10px 18px 36px -14px rgba(ink, 0.32)`), giving real physical paper presence without cartoonish drop-shadows.

### Tabs & Switchers (Before/After Comparison)
* **Mobile-First Layout:** Horizontally scrollable container (`overflow-x-auto shrink-0`) with responsive abbreviations (`Sites e Sistemas` on mobile, full label on desktop).
* **Active State:** Inverted solid ink canvas (`bg-ink text-paper border-ink`).
* **Inactive State:** Recessed substrate (`bg-paper-2 text-ink-2 border-rule hover:bg-paper-3 hover:text-ink`).

### Process & Delivery Timeline (`ProcessTimeline`)
* **Three-Step Velocity:** Step 01 (Diagnóstico 24h-48h, sem custo) -> Step 02 (Desenvolvimento em 7 a 14 dias úteis) -> Step 03 (Publicação e Google Meu Negócio).
* **Guarantees Strip:** Triad of security cards: Prazo Fechado (14 dias), Propriedade Total (código e domínio 100% do cliente), Atendimento Direto no WhatsApp.

### Floating WhatsApp Action (FAB)
* **Geometry:** `h-12 w-12 sm:h-13 sm:w-13`, `rounded-sm`, `bg-accent`.
* **Stability:** `draggable={false}` and `pointer-events-none` on SVG internals to completely prevent browser drag-ghosting or viewport jumping when clicked and held.
* **Positioning:** `bottom-4 right-4 sm:bottom-6 sm:right-6 z-[90]`.

---

## 5. Motion & Scroll Choreography (Apple Motion Standard)

All scroll and entrance dynamics follow the cinematic principles used by Apple in product launches:

* **Curva de Desaceleração:** `cubic-bezier(0.16, 1, 0.3, 1)`. Unmatched organic deceleration with physical weight and zero bounce.
* **Displacement:** Controlled vertical ascent (`y: 34px` to `38px` for cards; `y: 14px` for words).
* **Focus Dissolve:** Progressive optical blur (`filter: blur(12px) -> blur(0px)`).
* **Depth Scaling:** Subtle spatial approach (`scale: 0.985 -> 1.0`).
* **Keynote Synchronization:** The Hero entrance is strictly gated by the Splash Screen lifecycle (`isReady={loadingFinished}`). The Hero waits hidden and blossoms simultaneously as the loader dissolves.
* **Staggered Cascade:** Multi-column grids cascade with a `0.12s` offset, creating an orchestrated wave of reveals as the user travels down the page.
* **Reduced Motion:** Automatic fallback to immediate static visibility via `useReducedMotion()`.

---

## 6. Commercial Value & Conversion Triggers

This design system directly impacts client acquisition metrics:
1. **Perceived Authority:** Elevates ordinary local businesses (clinics, aesthetics, law, architecture, boutique stores) into undisputed market leaders.
2. **Core Web Vitals:** Zero third-party script bloat, pure React + Tailwind bundling, achieving 99+ on Google PageSpeed with sub-600ms load times.
3. **One-Click Funnel:** Frictionless paths to WhatsApp conversion throughout the journey without intrusive popups or fake countdown timers.

