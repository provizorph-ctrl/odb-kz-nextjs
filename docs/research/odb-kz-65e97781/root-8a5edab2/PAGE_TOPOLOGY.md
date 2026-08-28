# Page Topology: odb.kz Homepage

## Layout Structure
- **Type:** Two-column layout (main content + right sidebar)
- **Container:** `.container-custom`
- **Scroll:** Native browser scroll (no smooth scroll library detected)

## Section Order (top to bottom)

### 1. Header (Fixed/Sticky)
- **Desktop:** `.header.header__wrapper.header__oneVersion.header__desktop`
  - Top marquee bar (scrolling text)
  - Right controls (font size, accessibility, sitemap)
  - Logo bar (logo + hospital name + description)
  - Language switcher + search
  - Navigation bar (teal bg, horizontal dropdown menu)
  - Auth button
- **Mobile:** `.header__mobile`
  - Static top (marquee)
  - Static middle (logo + hamburger)
  - Dropdown (expandable: controls, search, menu, phone, auth)
- **Interaction:** Click-driven (dropdowns, mobile menu toggle)
- **Z-index:** Highest (fixed positioning)

### 2. Hero Slider
- **Classes:** `.slider__wrapper`, `#n2-ss-5`
- **Technology:** Smart Slider 3
- **Content:** 5 slides with images and text overlays
- **Controls:** Left/right arrows
- **Interaction:** Auto-play + click arrows
- **Responsive:** Full-width, height adjusts per viewport

### 3. Statistics
- **Classes:** `.statistic__wrapper`, `.statistic__item`
- **Content:** 3 items (422 beds, 20332 treated, 75929 admitted)
- **Layout:** 3-column grid
- **Interaction:** Static (numbers with icons)
- **Responsive:** 3-col → 1-col stack

### 4. About Section
- **Classes:** `.mod__article`
- **Content:** Title + intro text + 4 images + "Подробнее" button
- **Layout:** Text left, images right (2x2 grid)
- **Interaction:** Static
- **Responsive:** Side-by-side → stacked

### 5. Departments Menu
- **Classes:** `.menu__bg--module`
- **Content:** 4 department cards with SVG icons on teal background
- **Layout:** Horizontal row of cards
- **Interaction:** Hover states on cards
- **Responsive:** 4-col → 2x2 → 1-col

### 6. News Module
- **Classes:** `.news__type--one`
- **Content:** 3 news articles with images, dates, titles
- **Layout:** Featured item + 2 smaller items
- **Interaction:** Static (links to articles)
- **Responsive:** Grid → stack

### 7. Photo Gallery
- **Classes:** `.photogallery.photogallery__module.gallery__four`
- **Content:** Tabbed gallery (4 categories) with image grid
- **Layout:** Category tabs left, image grid right
- **Interaction:** Click-driven (tab switching), Lightbox on images
- **Responsive:** Side-by-side → stacked tabs above grid

### 8. Government Programs Carousel
- **Classes:** `.gov-carousel--wrapper`, `.gov-carousel`
- **Technology:** Swiper.js
- **Content:** 4 program cards with images and text
- **Controls:** Pagination dots
- **Interaction:** Swipe/click pagination
- **Responsive:** Multi-slide → single slide

### 9. Quick Links Menu
- **Classes:** `.card__menu--list`
- **Content:** 13 icon cards (some with warning variant)
- **Layout:** Grid of cards
- **Interaction:** Hover states (color inversion)
- **Responsive:** Multi-col grid → 2-col → 1-col

### 10. Map
- **Classes:** `.map__block`
- **Content:** Yandex Maps iframe
- **Layout:** Full-width embedded map
- **Interaction:** Scroll zoom, drag
- **Responsive:** Full-width at all sizes

### 11. Footer
- **Classes:** `footer.footer`
- **Content:** Logo/name, contacts, menu, feedback button, social icons, copyright
- **Layout:** Multi-block footer
- **Interaction:** Static (links, social icons hover)
- **Responsive:** Multi-col → stacked

### 12. Right Sidebar (alongside sections 3-10)
- **Classes:** `.sidebar.sidebar__right`
- **Content:**
  - State symbols (2 items with images)
  - Director block (photo, name, title, blog button)
  - Banner images (2 external links)
  - Useful links (6 government links)
- **Layout:** Vertical stack
- **Interaction:** Static
- **Responsive:** Hidden on mobile (below main content)
