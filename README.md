# MemeWarzone Links

Official MemeWarzone link hub for `coms.memewar.zone`.

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

## Brand assets

The page is styled to match the MemeBattles `dev` frontend HUD theme.

Expected local asset paths:

```txt
public/assets/navbar-logo.png
public/assets/background.png
```

Source assets in the main frontend repo:

```txt
uptokendev/MemeBattles
frontend/public/assets/navbar-logo.png
frontend/public/assets/background.png
```

Current behavior:

- The logo first tries `/assets/navbar-logo.png`.
- If that is missing, it falls back to `https://memewar.zone/assets/navbar-logo.png`.
- The background uses `/assets/background.png`; if missing, the gradient/grid HUD background still renders.

For a fully self-contained deployment, copy both asset files into this repo under `public/assets/`.

## Netlify

The repo includes `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

Point the custom domain to the deployed Netlify site:

```txt
coms.memewar.zone
```
