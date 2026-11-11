# outtoseevision.com

The Out to See Vision Care website. Built with [Astro](https://astro.build), stored here on GitHub, published by Netlify.
Every push to `main` goes live automatically once Netlify is connected.

## Where things live

| What | Where |
| --- | --- |
| Page content (one file per page) | `src/site/pages/<url>.html` |
| Blog posts (one file per post) | `src/site/blog/<slug>.html` |
| Titles, meta descriptions, schema, post dates | `src/site/meta.json` |
| Header menu | `src/components/Header.astro` |
| Footer | `src/site/footer.html` |
| Booking link, gift card link, social links, tracking IDs | `src/site/links.ts` |
| Business schema (hours, address, phone) | `src/site/business.json` |
| Colors, fonts, section themes, layout grid | `src/styles/global.css` |
| Images | `public/images/` |
| PDFs (kept at their old /s/ URLs) | `public/s/` |
| Redirects | `public/_redirects` |
| Store pages, thank you page, 404 | `src/pages/` |

## How pages work

Each page is a stack of sections, copied one for one from the Squarespace site:

```html
<section class="sec t-dark h-small">   <!-- color theme + height -->
  <div class="fe" style="--rm:8;--rd:12">  <!-- layout grid -->
    <div class="b b-code" style="--m:1/2/7/10;--d:1/2/12/26"> ... </div>  <!-- block position on mobile and desktop -->
  </div>
</section>
```

Themes: `t-white`, `t-white-bold`, `t-light`, `t-light-bold`, `t-bright`, `t-bright-inverse`, `t-dark`, `t-dark-bold`, `t-black`, `t-black-bold`.

## SEO rules

* URLs never end in a slash and never change. If a URL must change, add a 301 in `public/_redirects`.
* Titles and descriptions in `meta.json` were copied exactly from Squarespace on Nov 10, 2026.
* `/friend` is noindex. `/thank-you` and `/404` are noindex.

## Forms

Forms use Netlify Forms (`data-netlify="true"`). Submissions show up in Netlify under Forms, and Netlify can email them.

## Run locally

```
npm install
npm run dev
```
