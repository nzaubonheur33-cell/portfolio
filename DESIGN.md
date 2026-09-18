---
name: Warm Editorial Engineer
colors:
  surface: '#fbf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#fbf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ef'
  surface-container: '#efeeea'
  surface-container-high: '#eae8e4'
  surface-container-highest: '#e4e2de'
  on-surface: '#1b1c1a'
  on-surface-variant: '#584237'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f0ed'
  outline: '#8c7164'
  outline-variant: '#e0c0b1'
  surface-tint: '#9d4300'
  primary: '#9d4300'
  on-primary: '#ffffff'
  primary-container: '#f97316'
  on-primary-container: '#582200'
  inverse-primary: '#ffb690'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#755935'
  on-tertiary: '#ffffff'
  tertiary-container: '#b7956c'
  on-tertiary-container: '#452e0e'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbca'
  primary-fixed-dim: '#ffb690'
  on-primary-fixed: '#341100'
  on-primary-fixed-variant: '#783200'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#ffddb7'
  tertiary-fixed-dim: '#e6c095'
  on-tertiary-fixed: '#2a1800'
  on-tertiary-fixed-variant: '#5b4220'
  background: '#fbf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e4e2de'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-badge:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.75rem
  space-xl: 3rem
---

## Brand & Style

This design system embodies an editorial, human-centered approach to personal engineering portfolios. Drawing directly from modern editorial illustration and technical craftsmanship, it balances academic precision with optimistic creative warmth. 

The aesthetic blends **Minimalism** with subtle **Tactile Craft**:
- **Human & Approachable:** Creamy, paper-like backgrounds and vibrant tangerine/terracotta orange fills soften the stark utilitarianism common in developer portfolios.
- **Engineered Precision:** Crisp hairline borders, monospaced tech chips, and structured grid cards communicate engineering rigor and clean architecture.
- **Editorial Character:** Bold, confident title typography paired with generous white space and clean monoline vectors creates an inviting narrative flow, positioning the developer as both an architect and an artisan.

## Colors

The color palette centers on high-contrast clarity against warm organic paper tones:
- **Primary (`#F97316` / `#FF5722`):** Vibrant energetic tangerine orange. Used for primary call-to-action buttons, key brand name highlights, active indicators, and vector accents.
- **Secondary (`#0F172A` / `#18181B`):** Deep slate-black. Delivers maximum typographic legibility, anchor action buttons ("Let's Talk"), and deliberate framing.
- **Tertiary (`#FED7AA` / `#FFF7ED`):** Gentle peach/creamsicle tints. Applied to project preview containers, subtle tag highlights, and illustration backdrop surfaces.
- **Neutral Surface (`#FDFBF7` / `#FAFAF9`):** A soft, warm natural paper white that prevents eye strain and evokes a crafted, print-like feel.
- **Subtle Borders (`#E4E4E7` / `#E2E8F0`):** Ultra-delicate neutral borders that construct visual structure without visual clutter.

## Typography

Typographic hierarchy relies on the pairing of geometric humanism with monospaced code pragmatism:
- **Headlines & Display:** Set in **Plus Jakarta Sans** with tight tracking and heavy weights (`700` and `800`) to anchor hero moments and section headings.
- **Body & Subtitles:** Set in medium and regular weights of **Plus Jakarta Sans** with relaxed line heights (`1.5` to `1.6`) for narrative readability.
- **Technical Accents & Metadata:** Set in **JetBrains Mono** for tech stack tags, code markers, timeline dates, and breadcrumbs, lending authentic software craftsmanship.

## Layout & Spacing

The layout adopts a centered, max-width bounded fluid grid with editorial breathing space:
- **Container Constrain:** Maximum content width of `1120px` centered on canvas, ensuring optimal scan lines on ultra-wide viewports.
- **Grid Architecture:** 12-column grid on desktop with `1.5rem` gutters; collapses to a 4-column flow on mobile viewports (< 768px).
- **Vertical Cadence:** Generous section gaps (`space-xl` scaled to `4rem`–`6rem` on desktop) give individual chapters—Hero, Skills, Projects, Experience, Process—distinct focus.

## Elevation & Depth

This system avoids heavy drop shadows, opting instead for crisp vector clarity and tactile layered surfaces:
- **Hairline Outlines:** Primary visual depth comes from delicate `1px` borders in `#E4E4E7` layered over `#FFFFFF` panels on top of the `#FDFBF7` canvas.
- **Micro Ambient Shadows:** Cards use a whisper-light, diffused shadow (`0 2px 8px -2px rgba(15, 23, 42, 0.04)`) to lift gently above the backdrop.
- **Interactive Lift:** On hover, cards transition with a slight vertical translate (`-2px`) and an increased warm-tinted shadow (`0 8px 20px -4px rgba(249, 115, 22, 0.08)`), signaling interactivity without visual noise.
- **Tinted Backing Panels:** Featured project illustrations and media previews rest inside warm-tinted surface containers (`#FFF7ED` or `#F8FAFC`).

## Shapes

The shape system blends friendly organic softness with structured modernism:
- **Card Containers:** Standardized at `rounded-2xl` (`1rem` to `1.25rem`) for a welcoming modern silhouette.
- **Tech Stack & Skill Icons:** Set in rounded square containers (`0.75rem` / `rounded-xl`) with crisp outlines.
- **Interactive Action Elements:** Primary CTA buttons, status badges, and contact chips use full pill shapes (`rounded-full`) for high clickability.
- **Accent Lines:** Section titles feature an organic, rounded `3px` horizontal pill underline in `#F97316`.

## Components

### Buttons
- **Primary Button:** Warm orange (`#F97316`) fill, pure white label, `rounded-full` or `rounded-xl`, accompanying inline directional arrow (`→`), with subtle glow on hover.
- **Dark Pill Button:** High-impact slate-black (`#0F172A`) fill, white text, pill-shaped (`rounded-full`), used for primary navigation conversions ("Let's Talk").
- **Secondary / Outline Button:** Hairline border (`#E4E4E7`), background `#FFFFFF`, text `#0F172A`, turning subtly orange on hover with icon shift.

### Skill & Tech Badges
- **Icon Tiles:** High-finish rounded squares (`56px × 56px` or `64px × 64px`) with warm white surface `#FFFFFF`, `1px` border `#E4E4E7`, centered tech glyph, and monospaced label beneath.
- **Inline Badges:** Pill-shaped tags with light gray or soft orange background (`#FFF7ED`), subtle `#FED7AA` border, and `JetBrains Mono` text (`12px`).

### Project Cards
- Elevated white container (`#FFFFFF`) with `1px` hairline stroke and `1.25rem` radius.
- Upper region: Warm-tinted canvas (`#FFF7ED` or `#F8FAFC`) showcasing device mockups or vector illustrations.
- Lower region: Project title with external link icon, concise 2-line description, followed by a bottom row of monospaced technology tags separated by dot dividers.

### Experience & Process Timelines
- **Nodes & Connectors:** Minimal dashed or dotted horizontal track (`#E2E8F0`) linked with pill or circular glyph containers.
- **Process Steps:** Numbered sequentially (`01`, `02`, etc.) in micro monospace labels directly above the step heading, terminating in clear descriptions.

### Contact & Footer Block
- Enclosed warm-toned banner (`#FFF7ED` or crisp `#FFFFFF` with double hairline border).
- Bold callout headline with orange accent text, side-by-side with icon-anchored metadata (email, location, status) and circular social button links.