# thisiskushal31.github.io

Redirect site for GitHub Pages. Sends visitors to the current links:

| URL | Redirects to |
|-----|--------------|
| `https://thisiskushal31.github.io/` | https://kushal.cv/ (portfolio) |
| `https://thisiskushal31.github.io/link` | https://bio.kushal.cv/ (link in bio) |
| `https://thisiskushal31.github.io/blog` | https://blog.kushal.cv/ (blog) |

Unknown paths (e.g. `/test`) and 404s show a “wrong URL” page with links to portfolio, link in bio, and blog.

Static buffer pages live in `site/`. CI deploys `site/` to the `gh-pages` branch on push to `main`.
