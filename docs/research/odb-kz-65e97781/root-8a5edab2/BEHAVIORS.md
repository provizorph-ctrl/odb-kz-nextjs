# Behaviors: odb.kz Homepage

## Interaction Models

### Header
- **Desktop:** Fixed/sticky at top. Navigation bar has dropdown menus (click/hover to expand via MetisMenu). Auth button opens Bootstrap modal.
- **Mobile:** Fixed at top. Hamburger toggles dropdown panel. Menu items expand accordion-style.
- **Trigger:** Click-driven (dropdowns, modal, hamburger toggle)

### Hero Slider
- **Technology:** Smart Slider 3
- **Auto-play:** Yes (slides advance automatically)
- **Controls:** Left/right arrow buttons
- **Interaction model:** Time-driven (auto-play) + click-driven (arrows)
- **Responsive:** Full-width at all sizes

### Statistics
- **Animation:** Numbers may animate on scroll (counter animation) — needs verification
- **Interaction model:** Static (or scroll-driven if counter animation exists)

### Departments Menu
- **Hover states:** Cards change background from teal to white, text/icon colors invert
- **Transition:** CSS transition on background-color, color
- **Interaction model:** Hover-driven

### News Module
- **Hover states:** Article links change color
- **Interaction model:** Static (hover only on links)

### Photo Gallery
- **Tab switching:** Click on category tabs to filter images
- **Lightbox:** Click on image opens full-size overlay
- **Interaction model:** Click-driven (tabs + lightbox)
- **Tab content:** Each tab shows different set of images

### Government Programs Carousel
- **Technology:** Swiper.js
- **Auto-play:** Needs verification
- **Controls:** Pagination dots
- **Interaction model:** Swipe/drag on mobile, click pagination on desktop

### Quick Links Menu
- **Hover states:** Cards invert colors (teal bg → white, white text → teal)
- **Transition:** CSS transition on background-color, color
- **Interaction model:** Hover-driven

### Footer
- **Social icons:** Hover changes border and icon color to teal
- **Feedback button:** Opens Bootstrap modal
- **Interaction model:** Hover-driven (icons) + click-driven (modal)

## Scroll Behaviors
- No smooth scroll library detected (native scroll)
- No scroll-snap detected
- No parallax effects detected
- No IntersectionObserver-based animations detected (needs verification with live page)

## Responsive Breakpoints
- **Desktop (1440px):** Two-column layout, full nav bar, all sections visible
- **Tablet (768px):** Two-column may collapse, nav becomes hamburger, gallery stacks
- **Mobile (390px):** Single column, mobile header, stacked sections, sidebar hidden
