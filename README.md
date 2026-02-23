# thisiskushal31.github.io

Redirect site for GitHub Pages. Sends visitors to the current links:

| URL | Redirects to |
|-----|--------------|
| `https://thisiskushal31.github.io/` | https://kushal.cv/ (portfolio) |
| `https://thisiskushal31.github.io/link` | https://bio.kushal.cv/ (link in bio) |
| `https://thisiskushal31.github.io/blog` | https://blog.kushal.cv/ (blog) |

### Non-handled URLs

Any other path (e.g. `/test`, `/old-page`, or a 404) does **not** redirect. The visitor sees a **“wrong URL”** page that:

- Shows the same profile info (name, title, location) and photo
- Says: “My links have moved to new URLs. You’re on the right page — pick where you want to go.”
- Lists three links: **Portfolio** (kushal.cv), **Link in bio** (bio.kushal.cv), **Blog** (blog.kushal.cv)

Served by `site/404.html` (GitHub Pages 404) and explicitly by `site/test/index.html` for `/test`.

---

Static buffer pages live in `site/`. CI deploys `site/` to the `gh-pages` branch on push to `main`.
