# Vermé — Salon & Beauty Academy Platform

**Phases 1–7 of 10 complete — Design System, Homepage, Salon Booking, the Academy, Gallery + Before/After, Testimonials + Offers, and Contact + Multi-language.**

## Phase 7 — Contact + Multi-language (new in this delivery)

- **Full Contact page** (`pages/Contact.jsx`) — a real, validated contact
  form (`components/contact/ContactForm.jsx`) that posts to the backend
  with the same localStorage-fallback pattern as every other form in this
  project, a map section, business details, and social links.
- **Honest map placeholder** (`components/contact/MapPlaceholder.jsx`): NOT
  a real Google Maps embed. The address used throughout this project
  ("Shop 12, MG Road, Nagpur…") is placeholder content, not a real verified
  location — embedding a real map pinned to a fake address would be more
  misleading than an honest placeholder. Swap it for a real Google Maps
  embed (Share → Embed a map on your real listing) once you have one; the
  comment in that file walks through exactly how.
- **Social links consolidated**: previously hard-coded inline in
  `Footer.jsx`; now one `data/socials.js` + `components/ui/SocialLinks.jsx`
  used by both the footer and the Contact page.
- **Multi-language, finished**: every page's headings, eyebrows, intro
  copy, form labels/placeholders, buttons, and confirmation screens are now
  translated (EN done since Phase 1; MR/HI filled in this phase) — not just
  nav/footer. Try the language switcher on any page, not just the
  homepage. See the scope note at the top of `i18n/dictionary.js`: business
  *content* (service/course descriptions, testimonial quotes, offer copy)
  stays in English intentionally — auto-generating professional Marathi/
  Hindi marketing copy isn't something to do without your review. A few
  deep, low-visibility labels (e.g. the `<dl>` field names on booking/
  enrollment confirmation screens, batch seat-status badge text) also
  remain English for now — flag it if you'd like those covered too.
- Marathi and Hindi translations are best-effort; the file recommends a
  native-speaker review pass before this goes live for real customers,
  same spirit as the Phase 1 placeholder notice.

**Backend addition:** `ContactMessage` model + `POST /api/contact` (create)
+ `GET /api/contact` (list, for Phase 8's dashboard, currently
unauthenticated like the rest).

**Routing:** every nav destination is now a real page. The `ComingSoon`
component is no longer used anywhere but is kept in the codebase in case a
future page needs a placeholder again.

---

## Phase 6 — Testimonials + Offers/Promotions (new in this delivery)

- **Full Testimonials page** (`pages/Testimonials.jsx`) — an average-rating
  summary (computed live from the list, with a count-up animation matching
  the homepage stats), all 8 testimonials, and 3 video-testimonial
  placeholder cards.
- **Video placeholder, honestly**: the phase brief explicitly calls for a
  "video placeholder," so `VideoTestimonialPlaceholder.jsx` is exactly
  that — a styled stand-in with a play button that, when clicked, tells the
  visitor plainly that real videos will go here once recorded. Swap its
  frame for a real `<video>` or embed whenever you have actual client
  recordings.
- **Full Offers page** (`pages/Offers.jsx`) — 5 concurrent offers across
  categories, each with a **live countdown timer** and a **real working
  "copy code" button** (`hooks/useCopyToClipboard.js` — actually writes to
  the clipboard, with a fallback for contexts where the modern Clipboard
  API isn't available). Category filter tabs, same shared `FilterTabs`
  component as Services/Academy/Gallery.
- **Refactors** (same instinct as Phase 5): the homepage's testimonial
  cards and offer banner were both hand-rolled inline in Phase 2; now
  they're shared components (`TestimonialCard`, `PromoBanner`) used by
  both the homepage previews and these new full pages — same visual, one
  place to edit.

No new backend endpoints this phase, same reasoning as Phase 5 — reviews
and promotions don't need the server-side conflict logic bookings/
enrollments do, so they follow the same owner-editable localStorage
pattern. (A "leave a review" submission form with real backend storage
would be a reasonable future addition, but wasn't part of this phase's
brief — flag it if you want it added.)

**Routing:** `/testimonials` and `/offers` are now real pages (previously
"coming soon" placeholders).

---

## Phase 5 — Gallery + Before/After (new in this delivery)

- **Full Gallery page** (`pages/Gallery.jsx`) — a filterable masonry grid
  (`components/gallery/GalleryGrid.jsx`) of 12 items across every category,
  with `tall`/`wide` size variants for visual rhythm, and a **lightbox**
  (`GalleryLightbox.jsx`) with click/keyboard (Esc, ←/→) navigation between
  items.
- **Interactive before/after slider** (`components/gallery/BeforeAfterSlider.jsx`)
  — a real, working drag comparison: mouse, touch, and keyboard (arrow keys
  on the focused handle) all work through the same Pointer Events code
  path. One pair per category (Hair, Skin, Makeup, Mehendi), switchable via
  tabs.
- **Honest note on before/after content**: the panels shown are
  illustrative (muted vs vibrant versions of the same icon), not real
  client photos — see the important comment in `data/beforeAfter.js` for
  why (no real photography exists yet, and publishing a fake "result"
  photo would misrepresent real outcomes even as a placeholder). The
  slider mechanism itself is fully real and works identically once you
  swap in real `<img>` content with client consent.
- **Refactor**: Services, Academy, and now Gallery all needed the same
  category-filter tabs, so that markup/CSS is now one shared
  `components/ui/FilterTabs.jsx`, and the category-to-gradient color map
  (previously duplicated in `ServiceCard` and `CourseCard`) is now one
  `lib/categoryTheme.js`. Both existing pages were updated to use them —
  no visual change, just one less place to edit when a category's look
  needs to change.

No new backend endpoints this phase — gallery/before-after content doesn't
need server-side conflict logic the way bookings/enrollments do, so it
follows the same owner-editable localStorage pattern as services/courses.

**Routing:** `/gallery` is now a real page (previously a "coming soon"
placeholder).

---

## Phase 4 — Beauty Academy + Courses + Enrollment (new in this delivery)

- **Academy page** (`pages/Academy.jsx`) — 6 real courses across
  Hair/Makeup/Skin/Mehendi/Bridal with category filter tabs, built on a new
  `CourseCard` component (mirrors `ServiceCard`'s layout for visual
  consistency).
- **Working brochure download** — "Download Brochure" on every course card
  generates and downloads a real text file client-side (`lib/download.js`),
  no backend needed. It's a plain-text summary, not a designed PDF — a
  branded PDF brochure is a design-asset task, natural to slot into
  Phase 10's polish pass if you want one.
- **Batch calendar** (`components/academy/BatchCalendar.jsx`) — every
  upcoming batch with **live seat-status badges** (Open / Filling Fast /
  Full) computed from real enrollment counts, not a hand-maintained number.
- **Enrollment form** (`pages/Enrollment.jsx`) — course → batch (full
  batches are shown but disabled) → applicant details (name, phone, email,
  age, qualification, address), full validation, confirmation screen with a
  reference number and a one-tap WhatsApp message.
- **Real seat-capacity enforcement**: the frontend fetches live availability
  from `GET /api/batches` (falls back to counting localStorage enrollments
  if the backend's offline — same fallback pattern as Phase 3's booking
  slots); the backend **re-checks capacity at write time** in
  `POST /api/enrollments` so two applicants can't both grab the last seat
  in the small race window between page load and submit.

**Backend additions:** `Course`, `Batch`, `Enrollment` models;
`/api/courses` (full CRUD), `/api/batches` (list with live seat counts
joined from real enrollment data, create/update), `/api/enrollments`
(create with capacity re-check + server-generated reference number, list
for Phase 8's dashboard). All write routes are unauthenticated for now,
marked `TODO Phase 8`.

**Routing:** `/academy` and `/enroll` are now real pages (previously
"coming soon" placeholders from Phase 3).

---

## Phase 3 — Salon Services + Booking System (new in this delivery)

- A lightweight **hash router** (`frontend/src/router/useHashRoute.js`, no
  external library) now actually switches pages: `#/`, `#/services`,
  `#/book`, `#/book?service=<id>`. Nav links that lead to phases not built
  yet (Academy, Gallery, Testimonials, Offers, Contact) show a polished
  "coming soon" page tagged with the phase that builds them, instead of a
  blank or broken route.
- **Services page** (`pages/Services.jsx`) — the full catalogue (9 services
  across Hair/Makeup/Skin/Mehendi) with category filter tabs, built on a
  new shared `ServiceCard` component also used by the homepage preview, so
  a service looks identical everywhere it appears.
- **Booking page** (`pages/Booking.jsx`) — a real, working appointment flow:
  1. choose a service, 2. choose a date (native date picker, bounded to
  today–60 days out), 3. pick a real available time slot (already-booked
  and past-time slots are greyed out and disabled), 4. enter contact
  details (validated: name, 10-digit Indian mobile, optional email). On
  submit, generates a confirmation with a reference number and offers a
  one-tap WhatsApp message to the salon with the booking details.
- **Real double-booking prevention**, not just decorative: the frontend
  checks `GET /api/bookings/availability` before showing slots, and the
  backend's `Booking` model has a **unique compound index**
  (service + date + start time) so two people can't be given the same
  slot even if they submit at the exact same moment — the database itself
  rejects the second one (`POST /api/bookings` returns `409` in that case).
  If the backend isn't running, the frontend falls back to checking
  `localStorage` bookings instead, so the demo still works standalone —
  same pattern as the Phase 2 newsletter form.
- **Salon-themed icon illustrations** (`components/ui/SalonIcon.jsx`) —
  original line-art (scissors, lipstick, henna cone, graduation cap, veil,
  leaf), not stock photography, used on service cards and the gallery
  preview tiles. See the note in `data/gallery.js` on why stock/scraped
  photos weren't used and how to swap in real studio photos later.

**Backend additions:** `Service` model + full CRUD routes (`/api/services`),
`Booking` model + `/api/bookings` (create), `/api/bookings/availability`
(the real conflict check), `/api/bookings` `GET` (for Phase 8's dashboard).
Write routes are unauthenticated for now — Phase 8 adds admin auth
middleware, marked with `TODO` comments at each route.

---

## Phase 2 — Homepage

`frontend/src/pages/Home.jsx` is now the real homepage, assembled from
self-contained sections in `frontend/src/components/home/`:

- **Hero** — parallax gold-glow layer behind the headline (`useParallax`
  hook), scroll cue, dual CTAs
- **StatsBar** — four stats that count up from 0 when scrolled into view
  (`useCountUp` hook)
- **FeaturedServices** — 4 service cards pulled from `data/services.js`
- **AcademyHighlights** — split layout with a placeholder visual panel and
  a bulleted highlight list from `data/academy.js`
- **TestimonialPreview** — 3 testimonial cards with star ratings
  (`StarRating`, reused as-is in Phase 6) from `data/testimonials.js`
- **OffersPreview** — a promo banner with a **live, real countdown timer**
  (`useCountdown` hook, ticks every second) from `data/offers.js`
- **GalleryPreview** — a 6-tile gradient-placeholder grid from
  `data/gallery.js` (see note on images below)
- **Newsletter** — a signup form that **actually posts to the backend**
  (`POST /api/newsletter/subscribe`), and falls back to saving locally if
  the backend isn't running, so the flow always completes

Every section fades/slides in via the shared `Reveal` component
(`useScrollReveal` hook) — this is the one mechanism used for *all*
scroll-reveal animation on the site, so later phases should reuse `<Reveal>`
rather than adding new animation approaches.

**On images:** the gallery preview and service cards use gradient
placeholder swatches instead of stock photography. This is a real
business's homepage — the right images are the owner's actual salon/work
photos, which Phase 5 (Gallery) is built to accept. Using generic stock
photos here would look worse than an honest placeholder once real photos
go in.

**On content:** every section reads from a small data file in
`frontend/src/data/` via a `getX()` helper that checks for an owner-edited
override in `localStorage` first (see `data/services.js` for the pattern).
This means Phase 3/4/5/6's admin editing will make the homepage update
automatically — no changes needed here later.

**Backend addition:** `NewsletterSubscriber` model +
`POST /api/newsletter/subscribe` / `GET /api/newsletter/subscribers`
(the latter for Phase 8's dashboard, currently open/unauthenticated).

---

**Phase 1 — Design System & Navigation.** This delivers a working,
running project (frontend + backend) with the shared visual language and
site chrome that every later phase builds on: color/type tokens, Button,
Card, the signature `KumkumDivider` motif, sticky Navbar, animated
MobileMenu, Footer, floating WhatsApp button (already fully functional —
no backend needed for that one), scroll progress bar, and a working
language-switcher shell (EN done, MR/HI wired up with placeholder copy for
Phase 7 to finish).

## Stack (recommended, already set up in this repo)

- **Frontend:** React + Vite. Chosen over plain HTML/JS because Phase 8's
  admin dashboard needs real component state and reactivity, and over
  Next.js because you explicitly want a separate backend — a plain SPA
  keeps that boundary clean and easy to deploy (e.g. frontend on
  Vercel/Netlify, backend on Render/Railway).
- **Backend:** Node.js + Express + MongoDB (via Mongoose). MongoDB over
  PostgreSQL here because most of this app's data — services, courses,
  gallery items, offers, testimonials — is document-shaped and will change
  shape as you add fields (e.g. a new course property), which Mongoose
  handles without migrations. If you later want relational integrity
  (e.g. strict foreign keys between bookings and services), Postgres +
  Prisma is a reasonable swap — the route/controller structure here would
  transfer with moderate changes.

## What's real vs. placeholder in Phase 1

| Piece | Status |
|---|---|
| Design tokens, Button, Card, KumkumDivider | Real, final |
| Navbar (sticky, scroll-aware), MobileMenu, Footer | Real, final |
| WhatsApp floating button | Real, final — **works with zero backend**, just edit the phone number |
| Scroll progress bar | Real, final |
| Language selector (EN/MR/HI) + persistence | Mechanism real & final; MR/HI **copy** is placeholder (marked `TODO` in `frontend/src/i18n/dictionary.js`) until Phase 7 |
| `Home.jsx` page content | **Placeholder** — a design-system showcase, not the real homepage. Phase 2 replaces its contents entirely |
| Backend `BusinessInfo` model + routes | Real, minimal — enough for the Footer/WhatsApp data to eventually come from the database in Phase 8, not yet wired to the frontend |
| Everything payments/SMS/email related | Not started — Phase 9 and the confirmation steps in Phases 3/4 |

## Running it locally

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Opens at `http://localhost:5173`. Try: resizing to mobile width (nav
collapses into the animated burger menu), scrolling (progress bar + navbar
backdrop), the language switcher top-right (persists on reload — check
localStorage), and the WhatsApp button bottom-right (opens a real WhatsApp
chat — replace the placeholder number first).

### Backend

```bash
cd backend
cp .env.example .env
# edit .env: set MONGO_URI to a local Mongo instance or a free MongoDB Atlas cluster
npm install
npm run dev
```

Confirms it's running: `curl http://localhost:5000/api/health` should
return `{"status":"ok", ...}`. `GET http://localhost:5000/api/business-info`
returns the default business info document (auto-created on first request).

The frontend and backend are **not connected to each other yet** — Phase 1's
frontend uses hard-coded fallback values (phone number, hours, etc.)
directly in components. Wiring the Footer/WhatsApp button to fetch from
`/api/business-info` happens naturally in Phase 8 when the admin dashboard
needs to edit that same data.

## Design rationale (why it looks like this)

The brief said "luxury salon + academy," which nudges toward either a
cream-and-serif beauty-brand look or a generic dark-mode SaaS look. Neither
says anything specific about *this* business, so the direction taken here
is grounded in the Indian salon/vanity-room world instead:

- **Palette** — deep aubergine-black (`#1B1420`) instead of the common
  cream beauty-brand background, with brushed champagne gold (`#C9A15A`)
  as the precision accent and dusty rose (`#C98A93`) as the warm/human
  note — closer to how a mirror-lit vanity counter actually looks than a
  bright, flat beauty-app palette.
- **Type** — Fraunces (a characterful, slightly eccentric serif) for
  headings, Manrope for body/UI — a pairing chosen for restraint against a
  dark ground rather than the high-contrast serif-on-cream look that's
  become an AI-design default.
- **Signature motif** — `KumkumDivider`, a hand-swept gold ink stroke
  (see `frontend/src/components/ui/KumkumDivider.jsx`) used as section
  dividers everywhere a generic straight `<hr>` or numbered `01/02/03`
  marker would otherwise go. It references a kumkum/sindoor swipe and a
  mirror's gilt edge — specific to this subject rather than decorative.
- **Card hover** — a diagonal "mirror shine" gleam sweep, a single quiet
  motion detail rather than piling on multiple hover effects.

## Roadmap (unchanged from the original plan)

1. ✅ Design System & Navigation
2. ✅ Homepage (hero, stats, previews, scroll-reveal)
3. ✅ Salon Services + Booking System
4. ✅ Beauty Academy + Courses + Enrollment
5. ✅ Gallery + Before/After
6. ✅ Testimonials + Offers/Promotions
7. ✅ Contact + Multi-language — **this delivery**
8. Owner Admin Dashboard
9. Payments (UI + flow, backend-ready — flagged where your real gateway keys plug in)
10. SEO & Performance Polish

## Honest scope reminder

- Payments (Razorpay/Stripe actually charging cards) and real SMS/email
  sending need your own API keys/merchant account — Phase 9 builds the full
  UI and backend endpoints wired to accept those keys, but can't move real
  money without them.
- WhatsApp deep-linking (already working in this phase) needs nothing from
  you but your business's WhatsApp number.
- Multi-language and "instant owner updates" are both fully achievable
  client-side (localStorage now; Phase 8 can optionally move owner edits to
  the real database via the backend above, which is why that model exists
  already).

Ready for review — say the word and Phase 2 (Homepage) starts from this
exact foundation.
