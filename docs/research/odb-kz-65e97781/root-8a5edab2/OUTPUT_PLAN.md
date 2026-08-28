# Output Plan: odb.kz Homepage Clone

## Target
- **URL:** https://odb.kz/
- **Origin:** https://odb.kz
- **App Root:** `.` (repository root)

## Naming
| Key | Value |
|-----|-------|
| site-key | `odb-kz-65e97781` |
| page-key | `root-8a5edab2` |

## Paths
| Purpose | Path |
|---------|------|
| Artifact root | `docs/research/odb-kz-65e97781/root-8a5edab2/` |
| Screenshot root | `docs/design-references/odb-kz-65e97781/root-8a5edab2/` |
| Component root | `src/components/sites/odb-kz-65e97781/root-8a5edab2/` |
| Shared components | `src/components/sites/odb-kz-65e97781/shared/` |
| Asset root | `public/sites/odb-kz-65e97781/root-8a5edab2/` |
| Shared assets | `public/sites/odb-kz-65e97781/shared/` |
| Route file | `src/app/page.tsx` (replacing scaffold) |

## Route
- Source `/` → Destination `src/app/page.tsx` (replace scaffold)

## Shared Foundation Changes
- `src/app/globals.css` — merge odb.kz color tokens
- `src/app/layout.tsx` — update metadata, fonts, lang="ru"

## Sections (top to bottom)
1. Header (desktop + mobile responsive)
2. Hero Slider (Swiper.js carousel)
3. Statistics (3 counters)
4. About Section
5. Departments Menu (teal background, 4 items)
6. News Module (3 articles)
7. Photo Gallery (tabbed, 4 categories)
8. Government Programs Carousel (Swiper)
9. Quick Links Menu (13 icon cards)
10. Map (Yandex Maps)
11. Footer

## Builder Dispatch Plan
| Section | Complexity | Agents |
|---------|-----------|--------|
| Header | High (desktop + mobile, sticky, dropdowns) | 2 (HeaderDesktop + HeaderMobile) |
| Hero Slider | Medium (Swiper carousel) | 1 |
| Statistics | Low | 1 |
| About Section | Low | 1 |
| Departments Menu | Medium | 1 |
| News Module | Medium | 1 |
| Photo Gallery | High (tabs, lightbox, grid) | 2 (GalleryTabs + GalleryGrid) |
| Gov Programs Carousel | Medium (Swiper) | 1 |
| Quick Links Menu | Medium (13 cards) | 1 |
| Map | Low (iframe) | 1 |
| Footer | Medium | 1 |

Total: ~13 component agents
