# Design Tokens: odb.kz

## Color Palette

### Primary
| Token | Value | Hex | Usage |
|-------|-------|-----|-------|
| primary | `rgba(27, 133, 138, 1)` | `#1B858A` | Links, active states, buttons, pagination, nav bar bg, card hover bg, news badges |
| primary-dark | `rgba(27, 133, 137, 1)` | `#1B8589` | Stat icons, news favorite bg, sidebar module bg |

### Accent / Warning
| Token | Value | Hex | Usage |
|-------|-------|-----|-------|
| accent | `rgba(225, 65, 62, 1)` | `#E1413E` | Warning cards, gallery hover, search hover border |
| accent-hover | `rgba(231, 43, 38, 1)` | `#E72B26` | Header menu level-1 hover |

### Text
| Token | Value | Hex | Usage |
|-------|-------|-----|-------|
| text-primary | `rgba(0, 0, 0, 1)` | `#000000` | Body text, headings, module titles |
| text-body | `rgba(59, 59, 59, 1)` | `#3B3B3B` | Article body, descriptions |
| text-secondary | `rgba(66, 97, 98, 1)` | `#426162` | Secondary text, links module, positions |
| text-secondary-75 | `rgba(66, 97, 98, 0.75)` | `#426162 @ 75%` | Header marquee, control SVGs |
| text-muted | `rgba(163, 191, 192, 1)` | `#A3BFC0` | Stat numbers, module buttons, gallery inactive tabs |
| text-muted-light | `rgba(114, 114, 114, 1)` | `#727272` | Article meta, footer desc, contact labels |
| text-date | `rgba(198, 198, 198, 1)` | `#C6C6C6` | News dates |
| text-link | `rgba(0, 148, 218, 1)` | `#0094DA` | Copyright company link |

### Backgrounds
| Token | Value | Hex | Usage |
|-------|-------|-----|-------|
| bg-light | `rgba(243, 246, 246, 1)` | `#F3F6F6` | Header top, marquee, search input, menu hover |
| bg-lighter | `rgba(223, 234, 234, 1)` | `#DFEAEA` | Header top right |
| bg-carousel | `rgba(244, 247, 255, 1)` | `#F4F7FF` | Swiper slide bg, gov carousel wrapper |
| bg-white | `rgba(255, 255, 255, 1)` | `#FFFFFF` | Footer, menu items, modals, pagination active |
| bg-dark | — | Dark teal | Menu bg module items (from CSS) |

### Borders
| Token | Value | Hex | Usage |
|-------|-------|-----|-------|
| border-light | `rgba(237, 237, 237, 1)` | `#EDEDED` | News borders |
| border-sidebar | `rgba(215, 231, 231, 1)` | `#D7E7E7` | Sidebar module borders |
| border-pagination | `rgba(222, 226, 230, 1)` | `#DEE2E6` | Pagination borders |
| border-footer | `rgba(234, 235, 236, 1)` | `#EAEBEC` | Footer bottom border |
| border-social | `rgba(146, 148, 150, 1)` | `#929496` | Social icons border |

### Interactive
| Token | Value | Hex | Usage |
|-------|-------|-----|-------|
| hover-bg | `rgba(233, 236, 239, 1)` | `#E9ECEF` | Pagination hover |
| disabled-text | `rgba(108, 117, 125, 1)` | `#6C757D` | Pagination disabled |
| social-hover | `rgba(27, 133, 137, 1)` | `#1B858A` | Social icons hover |

## Typography

### Font Families
- **Body:** System font stack (Bootstrap default) — likely `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`
- **Headings:** Same as body (no separate heading font detected)

### Font Sizes (estimated from Bootstrap classes)
- h1: ~2rem (32px)
- h2: ~1.5rem (24px)
- h3: ~1.17rem (18.72px)
- body: ~1rem (16px)
- small: ~0.875rem (14px)

### Font Weights
- Regular: 400
- Medium: 500
- Semi-bold: 600
- Bold: 700

## Spacing
- Bootstrap spacing scale: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px
- Container max-width: ~1200px (Bootstrap container-fluid)

## Border Radius
- Cards: ~8px
- Buttons: ~4px (Bootstrap default)
- Images: 0 (no radius on most images)

## Shadows
- Card hover: `0px 0px 21px -9px rgb(0 0 0 / 10%), 0px 0px 0px 2px rgba(225, 65, 62, 1)` (on gov carousel hover)
- No prominent box shadows on cards by default

## Breakpoints (Bootstrap)
- xs: 0
- sm: 576px
- md: 768px
- lg: 992px
- xl: 1200px
- xxl: 1400px

## Map to shadcn/ui Tokens
| shadcn Token | odb.kz Equivalent |
|--------------|-------------------|
| `--background` | `#FFFFFF` (white) |
| `--foreground` | `#000000` (black) |
| `--primary` | `#1B858A` (teal) |
| `--primary-foreground` | `#FFFFFF` |
| `--secondary` | `#F3F6F6` (light bg) |
| `--secondary-foreground` | `#426162` (dark teal) |
| `--muted` | `#F3F6F6` |
| `--muted-foreground` | `#727272` |
| `--accent` | `#E1413E` (red) |
| `--accent-foreground` | `#FFFFFF` |
| `--destructive` | `#E1413E` |
| `--border` | `#EDEDED` |
| `--input` | `#DEE2E6` |
| `--ring` | `#1B858A` |
