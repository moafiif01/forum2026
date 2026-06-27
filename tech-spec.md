# Forum EMI-Entreprises - Technical Specification

## Dependencies

### Core
- `react` ^19.0.0 - UI framework
- `react-dom` ^19.0.0 - DOM renderer
- `react-router-dom` ^7.6.0 - Multi-page routing
- `typescript` ~5.7.0 - Type safety
- `vite` ^6.3.0 - Build tool

### Styling
- `tailwindcss` ^4.0.0 - Utility-first CSS
- `@tailwindcss/vite` - Tailwind Vite plugin

### Animation
- `gsap` ^3.12.0 - Core animation engine (ScrollTrigger, timelines)
- `lenis` ^1.3.0 - Smooth scroll

### 3D/Effects
- `three` ^0.172.0 - WebGL iridescent crystal effect
- `@react-three/fiber` ^9.1.0 - React Three.js renderer
- `@react-three/drei` ^10.0.0 - R3F helpers (useTexture, Environment)

### Fonts
- `@fontsource/orbitron` ^5.0.0 - Display font
- `@fontsource/montserrat` ^5.0.0 - Body font
- `@fontsource/amiri` ^5.0.0 - Arabic text font

### Icons
- `lucide-react` ^0.468.0 - Icon library

### Dev Dependencies
- `@types/react` ^19.0.0
- `@types/react-dom` ^19.0.0
- `@types/three` ^0.172.0

---

## Component Inventory

### Layout (shared across all pages)

| Component | Source | Notes |
|-----------|--------|-------|
| `Navbar` | Custom | Fixed, blur backdrop, logo + nav links + CTA |
| `Footer` | Custom | 4-column grid, social icons, contact info |
| `SponsoringFAB` | Custom | Fixed pill button bottom-right |
| `PageLayout` | Custom | Wraps Navbar + content + Footer + FAB |
| `IridescentBackground` | R3F Canvas | Full-viewport WebGL crystal scene (partenaires, comite) |

### Page Sections

**LE FORUM (Home):**
| Component | Source | Notes |
|-----------|--------|-------|
| `HeroSection` | Custom | Video bg, patronage text, title + subtitle |
| `TimelineSection` | Custom | Interactive vertical timeline with content cards |
| `StatsSection` | Custom | Animated counter stats + FE logo |
| `ValuesSection` | Custom | Tabbed interface (Serment/Elite/Prestige) |
| `PartnerLogosSection` | Custom | Logo collage display |

**NOS PARTENAIRES:**
| Component | Source | Notes |
|-----------|--------|-------|
| `PartnersHero` | Custom | Title over iridescent bg |
| `PartnerTiers` | Custom | Stacked tier cards with logo grids |

**LE COMITE:**
| Component | Source | Notes |
|-----------|--------|-------|
| `CommitteeHero` | Custom | Title + group photo over cosmic bg |
| `CommitteeGrid` | Custom | Responsive member card grid |

**L'ECOLE:**
| Component | Source | Notes |
|-----------|--------|-------|
| `SchoolHero` | Custom | Video bg + purple title |
| `SchoolDescription` | Custom | Text + image two-column |
| `FilieresSection` | Custom | 9 degree program cards in 3-col grid |

**SERVICES:**
| Component | Source | Notes |
|-----------|--------|-------|
| `ServicesHero` | Custom | Title over light streaks bg |
| `PresentationsSection` | Custom | Horizontal scroll presentation cards |
| `CampagnesSection` | Custom | PFE + Recrutement banner rows |

**MEDIATHEQUE:**
| Component | Source | Notes |
|-----------|--------|-------|
| `MediathequeHero` | Custom | Title + download CTA |

### Reusable Components

| Component | Source | Used By |
|-----------|--------|---------|
| `SectionHeader` | Custom | All sections - centered title + pink subtitle |
| `GlowText` | Custom | All pages - text with colored glow effect |
| `AnimatedCounter` | Custom | Stats section - count-up numbers |
| `GlassCard` | Custom | Partner tiers, degree cards - glassmorphism card |
| `GradientBorderCard` | Custom | Committee member cards - pink/purple gradient border |
| `FloatingCrystal` | Custom (CSS) | Committee page - decorative crystal shapes |
| `LightStreaks` | Custom (CSS) | Services page - animated diagonal lines |
| `LogoCollage` | Custom | Home + Partners pages - partner logo display |
| `TimelineCard` | Custom | Timeline section - year content card |
| `ValuesTab` | Custom | Values section - tab content panel |

### Hooks

| Hook | Purpose |
|------|---------|
| `useScrollReveal` | IntersectionObserver-based fade-in-up on scroll |
| `useAnimatedCounter` | Count-up animation triggered by visibility |
| `useMouseParallax` | Mouse position tracking for parallax effects |
| `useActiveYear` | Timeline year selection state management |

---

## Animation Implementation

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| Iridescent crystal WebGL bg | Three.js + R3F | Custom shader material with Fresnel iridescence on low-poly gems, animated floating positions | **High** |
| Cosmic crystal bg (Comite) | Three.js + R3F | Same shader with pink/magenta color palette shift | **High** |
| Floating crystal decorations | CSS @keyframes | Absolutely positioned SVGs with float animation, staggered delays | **Low** |
| Glowing text effects | CSS text-shadow | Static layered shadows + optional pulse keyframe | **Low** |
| Diagonal light streaks | CSS | Pseudo-elements with linear-gradient, translateX animation | **Low** |
| Hero text reveal | GSAP | Staggered fade-up timeline on page load | **Medium** |
| Scroll-triggered section reveals | GSAP ScrollTrigger | Batch fade-in-up for all sections | **Medium** |
| Stats counter animation | Custom hook | requestAnimationFrame count-up with easing | **Medium** |
| Timeline year transitions | GSAP | Cross-fade content cards on year change | **Medium** |
| Values tab switching | GSAP | Cross-fade tab content panels | **Low** |
| Logo carousel | CSS animation | Infinite horizontal scroll with duplicated content | **Low** |
| Nav link hover | CSS transition | Color transition 0.3s | **Low** |
| Card hover effects | CSS transition | translateY + box-shadow enhancement | **Low** |
| Sponsoring FAB hover | CSS transition | Scale + glow intensify | **Low** |
| Page transitions | GSAP | Fade out/in between route changes | **Medium** |
| Mouse parallax (crystals) | Custom hook | Cursor position mapped to scene camera offset | **Medium** |
| Smooth scroll | Lenis | Global smooth scroll instance | **Low** |

---

## State & Logic

### Routing
- React Router with 6 routes: `/`, `/partenaires`, `/comite`, `/ecole`, `/services`, `/mediatheque`
- Page transitions handled via GSAP on route change

### Timeline (Home)
- State: `activeYear` (number, default 1994)
- Data array with year objects
- Click on year dot → set active → animate content card change

### Values Tabs (Home)
- State: `activeTab` ("serment" | "elite" | "prestige")
- Data object with tab content
- Tab click → cross-fade to new content

### Stats Counters
- Each stat tracks its own animated value
- Triggered once on first visibility via IntersectionObserver
- Format function handles suffixes (M, k)

### Iridescent Background Lifecycle
- Canvas mounts on page enter, dismounts on page leave (cleanup GPU resources)
- Reduced-motion check: if `prefers-reduced-motion`, show static gradient fallback

---

## Other Key Decisions

### WebGL Architecture
- Use `@react-three/fiber` Canvas component for declarative Three.js
- Custom `IridescentMaterial` component with ShaderMaterial + useFrame for animation
- Crystal geometries: Icosahedron with detail 0, randomized vertices for gem look
- Performance: Limit crystal count on mobile (8 vs 20), lower pixel ratio

### Image Strategy
- All photos stored in `/public/images/`
- WebP format with JPEG fallback
- Lazy loading with IntersectionObserver for below-fold images
- Hero videos: compressed MP4, poster image fallback

### Responsive Breakpoints
- `sm`: 640px, `md`: 768px, `lg`: 1024px, `xl`: 1280px
- Mobile nav: slide-out drawer with hamburger trigger
- WebGL effect disabled below 640px (static gradient fallback)

### Accessibility
- All nav links properly focusable
- Reduced motion support throughout
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text on all images
- Sufficient color contrast (glow effects are decorative, not informational)
