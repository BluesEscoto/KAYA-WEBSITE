# KAYA website

Home-services booking site for Metro Manila: customers describe a problem, choose a verified worker, approve an itemized estimate, track the job and pay by Cash, GCash or QR, with a 30-day warranty. Live at <https://kayaaaaa.vercel.app>.

Static pages (`html/`, `css/`, `js/`, `images/`), no build step.

## Where the data lives

`js/shared/api-config.js` decides which backend the pages use:

- **KAYA backend (Node.js + MySQL)** — used when the site is served from `localhost` or `127.0.0.1`, or anywhere once `API_URL` in that file is set to the deployed backend's `https://` address. Source and setup: [kaya-backend](https://github.com/BluesEscoto/kaya-backend).
- **Supabase** — used by the live site while `API_URL` is empty (`js/shared/supabase-config.js`).
- **Browser-only demo** — used when neither is available (for example, opening a page from `file://`).

## Search engines

- `robots.txt` allows crawling and points to `sitemap.xml`, which lists the public pages.
- Public pages carry a description, a canonical address and sharing (Open Graph) tags; pages that only work after logging in are marked `noindex`.
- The 32-character `.txt` file at the root is the [IndexNow](https://www.indexnow.org/) key, used to tell Bing and other IndexNow search engines about new or changed pages.
- For Google, add the site in [Google Search Console](https://search.google.com/search-console) (URL-prefix property `https://kayaaaaa.vercel.app/`, verified with the HTML-file method) and submit `https://kayaaaaa.vercel.app/sitemap.xml`.

If the site moves to another domain, update the addresses in `robots.txt`, `sitemap.xml` and the canonical/Open Graph tags.

## Run locally with the backend

1. Start the backend (MySQL, `npm run db:migrate`, `npm run db:seed`, `npm run dev`); it listens on port 4000.
2. Serve this folder on port 5173: `npx http-server@14.1.1 . -p 5173 -c-1`
3. Open <http://localhost:5173/html/index.html>.

Demo logins come from the backend's demo data: customer `maria@kaya.ph` / `Customer@123`, worker `juan@kaya.ph` / `Worker@123`, admin `admin@kaya.ph` / `Admin@2026!` (on `admin-login.html`).
