# MemeWarzone Links

Official MemeWarzone link hub for `links.memewar.zone`.

## Links

- Website: https://memewar.zone
- X: https://x.com/memewarzone
- Telegram: https://t.me/memewarzonehq
- Discord: https://discord.gg/aXTkn3Asu

## Local development

```bash
npm install
npm run dev
```

Open the local Vite URL shown in the terminal.

## Production build

```bash
npm run build
```

The static production output is generated in:

```txt
dist
```

## Netlify

The repo includes `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

Point the custom domain to the deployed Netlify site:

```txt
links.memewar.zone
```
