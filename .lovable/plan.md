# Akniet — Road to a production-ready site

Everything today lives in one page (`src/routes/index.tsx`, ~700 lines) with static text, images and no backend. Below is the work, grouped and prioritised. Nothing is implemented yet.

Priority key: **P0** must-do before launch · **P1** soon after · **P2** nice to have

---

## 1. Critical fixes
| Task | Today | Change | Priority | Touches |
|---|---|---|---|---|
| Split the giant page | One 700-line file holds every section and all three languages | Break into section components and move translations into a `src/i18n/` dictionary | P0 | `src/routes/index.tsx`, new `src/components/sections/*`, `src/i18n/*` |
| Hydration warning after the map was added | Server and browser render slightly different markup | Render the map only after the page loads in the browser | P0 | map section |
| Language choice is forgotten on reload | Language lives in page state only | Remember it (stored preference) and restore on load | P1 | language switcher, i18n module |
| Fixed "© 2026" footer | Hardcoded year | Compute it safely without breaking server rendering | P2 | footer |

## 2. UI/UX improvements
- **Exists:** hero with poster, about, programs, gallery, video, map, contact, footer.
- **Change:** consistent spacing scale; hover/focus states on every clickable element; gallery opens a lightbox instead of static tiles; visible language switcher with flags/labels; scroll-to-section smoothness; a real "Enroll" call-to-action in the header. Priority **P1**.
- **Touches:** all section components, `src/styles.css`, new lightbox component.

## 3. Mobile responsiveness
- **Exists:** layout works but the hero title and poster crowd each other on small screens; gallery grid and map are untested at 320–420px.
- **Change:** mobile-first pass on hero (poster below title on phones), burger menu for navigation, tap targets ≥44px, video and map scale to width, test at 320/375/768/1024.
- **Priority:** **P0** — most parents will open this on a phone.
- **Touches:** header, hero, gallery, map, contact.

## 4. Enrollment form
- **Exists:** only "Call us" and "Email us" buttons.
- **Change:** a real application form — child name, birth date, desired group, parent name, phone, email, message, consent checkbox. Validation in all three languages, success/error states, spam protection (honeypot + rate limit), confirmation email to the parent and notification email to the kindergarten.
- **Priority:** **P0** — this is the site's main business goal.
- **Touches:** new `src/components/EnrollmentForm.tsx`, new server function `src/lib/enrollment.functions.ts`, contact section.

## 5. Database
- **Exists:** nothing — no backend is connected.
- **Change:** enable Lovable Cloud, then create:
  - `applications` — enrollment submissions with status (new / contacted / enrolled / declined)
  - `groups` — age groups and capacity
  - `announcements` — news for parents (optional)
  - `profiles` + `user_roles` — staff accounts and roles
  Each table gets row-level security so parents can never read other people's data; only staff can read applications.
- **Priority:** **P0** (comes with the form).
- **Touches:** database migration, generated types.

## 6. Admin dashboard
- **Exists:** nothing.
- **Change:** a protected `/admin` area listing applications with search, status filter, detail view, status change, notes and CSV export. Later: manage gallery photos and announcements.
- **Priority:** **P1** (email notifications can carry the first weeks).
- **Touches:** `src/routes/_authenticated/admin*`, data-fetch server functions.

## 7. Authentication and permissions
- **Exists:** nothing.
- **Change:** email + password sign-in for staff only (no public sign-up), a protected area for admin pages, roles stored in a separate `user_roles` table (`admin`, `staff`) and checked on the server for every read of applications. Sign-out clears cached data.
- **Priority:** **P1**, but must land together with the dashboard.
- **Touches:** `/auth` route, protected layout, role checks in server functions.

## 8. SEO
- **Exists:** page title/description exist; no sitemap, no robots file, no structured data, no social preview image, one URL for all three languages.
- **Change:** per-language pages (`/`, `/ru`, `/ky`) with their own titles and descriptions, `robots.txt`, `sitemap.xml`, LocalBusiness structured data (address, phone, hours, geo), absolute social-preview image, alt text on every photo, single H1 per page.
- **Priority:** **P0** for the basics (robots, sitemap, structured data, social image), **P1** for per-language URLs.
- **Touches:** route `head()` blocks, `public/robots.txt`, `public/sitemap.xml`.

## 9. Performance optimization
- **Exists:** 12+ full-size 2GIS photos, a poster PNG and an MP4 tour all loaded on one page; images are unsized.
- **Change:** compress and convert photos to modern formats, generate responsive sizes, lazy-load everything below the hero, set explicit width/height to stop layout jumping, load the video only on click (poster first), preload the hero image only.
- **Priority:** **P1** (P0 if mobile load turns out slow on Kyrgyz networks).
- **Touches:** `src/assets/akniet/*`, gallery and hero components.

## 10. Security
- **Exists:** static site, so little exposure — but the map iframe and outbound social links are unhardened and there is no protection for the future form.
- **Change:** `rel="noopener noreferrer"` on external links, sandboxed map iframe, server-side validation on every submission, rate limiting, row-level security on all tables, no secret keys in browser code, privacy notice + consent text since child data is involved (relevant to Kyrgyz personal-data rules).
- **Priority:** **P0** for anything touching the form and database.
- **Touches:** footer, map, server functions, database policies, new `/privacy` page.

## 11. Testing
- **Exists:** no tests.
- **Change:** unit tests for form validation and the translation dictionary (no missing keys across EN/RU/KY); an end-to-end test covering submit-application and admin-sees-it; a manual checklist for phones, languages and links before each release.
- **Priority:** **P2**, raised to **P1** once the form is live.
- **Touches:** new `tests/` folder.

## 12. Production deployment
- **Exists:** not published; `akniet.kg` not connected; code not on GitHub.
- **Change:** publish, connect `akniet.kg` (A records + verification), connect GitHub for backups, verify the site in Google Search Console, add basic visitor analytics, set up the notification email sender domain, and re-check every phone/email/map link on the live domain.
- **Priority:** **P0**.
- **Touches:** project settings, not code.

---

## Suggested order
1. Mobile pass + critical fixes + SEO basics → publish on `akniet.kg`
2. Enable the backend, add the enrollment form with email notifications
3. Staff login + admin dashboard
4. Images/video optimisation, tests, privacy page

## Technical notes
- Sections stay pure presentation; all data access goes through server functions.
- Translations move to a typed dictionary so a missing key fails at build time.
- Applications table is staff-read-only; the public can only insert through the validated server function.
