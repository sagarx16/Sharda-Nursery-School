---
name: Heritage & Nurture
colors:
  surface: '#fff8f4'
  surface-dim: '#e0d9d3'
  surface-bright: '#fff8f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#faf2ed'
  surface-container: '#f4ece7'
  surface-container-high: '#eee7e1'
  surface-container-highest: '#e9e1dc'
  on-surface: '#1e1b18'
  on-surface-variant: '#564242'
  inverse-surface: '#33302c'
  inverse-on-surface: '#f7efea'
  outline: '#897172'
  outline-variant: '#ddc0c0'
  surface-tint: '#a43946'
  primary: '#500012'
  on-primary: '#ffffff'
  primary-container: '#721324'
  on-primary-container: '#fb7c87'
  inverse-primary: '#ffb3b6'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed65b'
  on-secondary-container: '#745c00'
  tertiary: '#00263e'
  on-tertiary: '#ffffff'
  tertiary-container: '#003d5f'
  on-tertiary-container: '#4babf0'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdada'
  primary-fixed-dim: '#ffb3b6'
  on-primary-fixed: '#40000d'
  on-primary-fixed-variant: '#842130'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#cce5ff'
  tertiary-fixed-dim: '#93ccff'
  on-tertiary-fixed: '#001d31'
  on-tertiary-fixed-variant: '#004b73'
  background: '#fff8f4'
  on-background: '#1e1b18'
  surface-variant: '#e9e1dc'
typography:
  display-hero:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
  title-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '700'
    lineHeight: 24px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 22px
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
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-badge:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  space-2xs: 0.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
  space-3xl: 4.5rem
  gutter-mobile: 1rem
  gutter-desktop: 1.5rem
  container-max: 1200px
---

## Brand & Style

This design system serves an institutional education platform bridging early childhood development and rigorous academic coaching. The brand personality balances regal heritage, disciplined scholarship, and nurturing warmth. The experience should evoke safety, institutional reverence, and vibrant youthful encouragement for both prospective parents and enrolled scholars.

The design philosophy harmonizes **Academic Classicism** with **Modern Tactile Warmth**:
- High-trust foundation: Traditional structure, heritage-tinted crimson surfaces, and warm ivory backdrops eliminate sterile corporate coldness.
- Radiant celebratory touches: Delicate gold trim, prestige insignia accents, and glowing amber undertones symbolize knowledge and illumination.
- Cheerful accessibility: For early-childhood touchpoints, vibrant sky and sunny accents layer softly over rounded, card-driven interfaces without diluting institutional prestige.

## Colors

The palette is engineered to honor scholarly tradition, Saraswati-inspired enlightenment, and youthful vitality.

### Palette Roles & Distribution
- **Primary Maroon (`#721324`, `#540D1A`)**: Represents institutional pedigree, authority, and core call-to-actions. Used for dominant header surfaces, primary badges, navigation bars, and key interactive triggers.
- **Secondary Radiant Gold (`#D4AF37`, lighter `#E5C158`, deeper `#B38E22`)**: Denotes intellectual excellence and achievement. Applied to celebratory badge trims, achievement stars, admission highlight borders, and secondary buttons.
- **Tertiary Playful Accents**:
  - Sky Blue (`#0284C7`, tint `#38BDF8`): Allocated to the Nursery and Kindergarten touchpoints, activity tags, and attendance meters.
  - Sunflower Yellow (`#F59E0B`): Applied to urgent admission banners, star ratings, and playful activity highlights.
- **Background Tiers**:
  - Canvas Base: Soft Ivory (`#FAF5EE` to `#FDFBF7`) gives warmth and eliminates glare.
  - Surface Lift: Pure White (`#FFFFFF`) for elevated cards and structured inputs.
- **Typography Neutrals**:
  - Primary Copy: Deep Charcoal/Espresso (`#1E1B18`) provides WCAG AAA contrast across ivory and white surfaces.
  - Secondary / Supporting: Muted Stone (`#66605B`) for timestamps, labels, and helper descriptions.

## Typography

Typography establishes an intentional contrast between formal authority and readable friendliness:
- **Headings (Playfair Display)**: Infuses heritage, literary tradition, and distinguished gravitas. Reserve for section banners, card titles, program milestones, and celebratory hero areas. Always pair with standard letter tracking or slight negative pull on larger sizes.
- **Body & Labels (Plus Jakarta Sans)**: Highly legible, open apertures, and balanced x-height. Handles high-density timetables, curriculum descriptions, and admissions data cleanly without visual fatigue.
- **Micro-labels & Status Pills**: Set in uppercase or capitalized weights (`label-badge`) using bold weight and open tracking (`0.05em`) for quick scanning.

## Layout & Spacing

The layout relies on a structured **12-column responsive fluid grid** with an enclosed max-width container to preserve reading measure on ultrawide viewports.

### Grid Anatomy
- **Desktop (1024px and up)**: 12-column system, 24px gutters, max-width `1200px` centered with variable margins. Multi-column cards (e.g., 3-column or 4-column batches).
- **Tablet (768px – 1023px)**: 8-column system, 20px gutters, 32px safe side padding. Primary splits convert into stacked pairs.
- **Mobile (under 768px)**: 4-column system, 16px gutters, 16px screen edges. Horizontal scroll snaps are favored for badges and photo-rich curriculum highlights.

### Rhythm Principles
- Use compact spacing (`0.5rem` to `1rem`) within individual card components to keep contextual content unified.
- Use generous block spacing (`3rem` to `4.5rem`) between thematic sections (e.g., "Nursery Wing" to "Tuition Matrix") to give space to the ivory canvas.

## Elevation & Depth

Visual hierarchy uses warm, amber-and-maroon tinted shadows alongside fine gold perimeter borders instead of sterile neutral grays.

### Shadow Profiles
- **Flat (Level 0)**: Baseline ivory `#FAF5EE` background.
- **Raised (Level 1 - `shadow-sm`)**: Pure white surfaces (`#FFFFFF`) layered with `0 2px 8px -2px rgba(114, 19, 36, 0.06), 0 1px 4px -1px rgba(212, 175, 55, 0.08)`. Applied to standard curriculum cards and form inputs.
- **Floating (Level 2 - `shadow-md`)**: Interactive hover states and floating quick-inquiry actions use `0 10px 24px -4px rgba(84, 13, 26, 0.12), 0 4px 12px -2px rgba(212, 175, 55, 0.15)`.
- **Prestige Overlay (Level 3 - `shadow-xl`)**: Modals, admission alerts, and flyouts use deep tinted occlusion: `0 20px 40px -8px rgba(30, 27, 24, 0.22)`.

### Border Trims & Highlights
- Cards often feature an internal or perimeter `1px` border in `#E5C158` (at 30% opacity) or `#FAF5EE` to prevent harsh visual cuts.
- Important highlights (e.g., "Fee Concession" or "Rank 1 Honors") introduce a soft gradient border running from `#D4AF37` to `#721324`.

## Shapes

The design system employs **Level 2 (Rounded)** curvature to blend approachability with institutional grace:
- Standard containers, form elements, and curriculum cards take `0.5rem` (`rounded-base`) to `1rem` (`rounded-lg`).
- Feature showcases and hero wrappers utilize `1.5rem` (`rounded-xl`).
- Dynamic informational tags, status pills, and interactive buttons adopt fully rounded pill profiles (`9999px`) to create an inviting, student-centric tactile feel.
- Badges and ribbons integrate angled flag tails or subtle medal-style scallop motifs to reinforce scholastic tradition.

## Components

### Buttons
- **Primary Action (Admission / Enroll)**: Deep Maroon (`#721324`) solid fill, white text, pill shape, with a faint gold drop halo on hover. Hover transition transitions toward `#540D1A`.
- **Secondary Action (Fee Structure / Prospectus)**: Radiance Gold (`#D4AF37`) fill or crisp white surface with a 1.5px gold border and maroon text.
- **Tertiary Action (Early Years Demo / Visit Campus)**: Sky blue soft tint background (`#0284C7` at 10% opacity) with dark blue text and pill curvature.

### Badges & Ribbons
- **Admissions Open Ribbon**: Diagonal pinned banner on card corners or fixed top header strip featuring vibrant maroon background, bold gold border, and gold serif typography.
- **Free Admission / Merit Pill**: Fully rounded pill badge using warm sunflower yellow (`#F59E0B`) with deep espresso text and a mini star icon prefix.

### Cards
- **Curriculum & Subject Cards**: Pure white surface, `rounded-xl`, Level 1 ambient warm shadow, bounded by a 1px muted stone/gold border. Top edge includes a 4px accent line (Maroon for Senior/Tuition, Sky Blue or Sunflower for Nursery).
- **Tuition Batch Highlights**: Ivory-tinted background, nested pill tags for batch timings, and a distinct gold highlight around fee transparency tables.

### Form Inputs
- **Inquiry Fields**: White surface, `rounded-base`, 1px border using stone tint (`#E2DDD7`). Active focus state elevates with a 2px outline in deep maroon (`#721324`) and an ambient gold inner glow (`rgba(212, 175, 55, 0.2)`).

### Lists & Timetables
- **Academic Bulletins**: Striped alternating rows of pure white and `#FDFBF7`. Checkpoints and bullet markers use gold star glyphs or miniature maroon discs.
- **Notices**: Alert notices display an icon container styled with a soft maroon or gold circle, paired with structured serif headings and modern sans body descriptions.