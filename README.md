# Next.js portfolio

A one-page portfolio with project cards, a page per project, an about section and a contact link.

[![Deploy on Naijacloud](https://img.shields.io/badge/Deploy%20on-Naijacloud-008751)](https://naijacloud.com/new?template=nextjs-portfolio&ref=template-nextjs-portfolio)

## Deploy

Click **Deploy** above, or open <https://naijacloud.com/new?template=nextjs-portfolio&ref=template-nextjs-portfolio>. Naijacloud builds it from this public repo and gives you a live HTTPS address. No GitHub connection needed; you can switch the service to your own fork later.

## What's inside

- Next.js 15 with the App Router and TypeScript
- Projects as plain data in `content/site.ts`, each with its own page at `/projects/<slug>`
- An about section and `mailto:` contact links; a health check at `/healthz`
- Naijacloud detects Next.js, runs `npm ci && npm run build`, then `npm run start` on `$PORT`

## Making it yours

Edit `content/site.ts`: your role, intro, about text, links and projects. Swap the gradient covers for images in `public/` when you have them.

## Environment variables

| Name | What it's for | Default |
| --- | --- | --- |
| `SITE_NAME` | Your name, in the header and page titles (read at request time) | `Ada Obi` |
| `CONTACT_EMAIL` | Where the contact links send email | `hello@example.com` |

## Run it locally

```sh
git clone https://github.com/naijacloud/template-nextjs-portfolio
cd template-nextjs-portfolio
cp .env.example .env
npm install
npm run dev
```

## License

MIT
