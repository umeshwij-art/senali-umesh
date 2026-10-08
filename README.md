# Senali & Umesh · Save the Date

Static website, no build step. Upload the contents of this folder as-is.

## Files
- `index.html` – the page
- `assets/css/style.css`, `assets/js/main.js` – styles, envelope + countdown
- `assets/img/` – photos
- `og.jpg` – link-preview card
- `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`, `site.webmanifest` – icons
- `404.html` – sends stray links back to the home page
- `robots.txt` – keeps the site out of Google (it's a private invite)

## Link preview
Share card image is `og.jpg`. Preview tags in `index.html` point to
https://senali-umesh.vercel.app. Update them if you move to a custom domain.

## Hosting (pick one, all free)
- **Netlify Drop**: go to app.netlify.com/drop and drag this folder in.
- **Vercel**: `npx vercel` inside this folder, or import via the dashboard.
- **GitHub Pages**: push to a repo → Settings → Pages → deploy from `main` / root.
- **Any web host (cPanel etc.)**: upload everything into `public_html`.

## Want it searchable?
Remove the `robots` meta tag in `index.html` and delete `robots.txt`.
