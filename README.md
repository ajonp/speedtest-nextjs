This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

If you stop at this point you will see a page score of 99 on mobile.

## Next.js GTM

This example setup is linked from the [Docs](https://nextjs.org/docs/basic-features/script) using this [repo](https://github.com/vercel/next.js/tree/canary/examples/with-google-tag-manager)

Now if you were to stop here you will get a score of between 85-92 on mobile
[Example with just GTM](https://pagespeed.web.dev/report?url=https%3A%2F%2Fspeedtest-nextjs-2d8m9rnc1-ajonp.vercel.app%2F)
## Partytown

For implementing [Partytown](https://github.com/builderio/partytown) we use the [Getting Started Guide](https://github.com/BuilderIO/partytown/wiki/Getting-Started).

Add a simple script to `package.json` so that it now updates the `build` script.

```
  "scripts": {
    "dev": "next dev",
    "build": "npm run partytown && next build",
    "start": "next start",
    "lint": "next lint",
    "partytown":"partytown copylib public/~partytown"
  },
```

Run `npm run build` to see this locally, you will now see files in `public/~partytown`

You can also add to `.gitignore`, this way it will be done on production build for you.

```
#partytown
public/~partytown
```
