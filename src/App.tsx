import { useState } from "react";

type LinkItem = {
  label: string;
  href: string;
  eyebrow: string;
  description: string;
  hotkey: string;
};

const heroLogoSources = [
  "/assets/hero/logo.png",
  "https://memewar.zone/assets/hero/logo.png",
  "/assets/navbar-logo.png",
  "https://memewar.zone/assets/navbar-logo.png",
];

const hudSources = [
  "/assets/hero/orange_hud_true_transparent.png",
  "https://memewar.zone/assets/hero/orange_hud_true_transparent.png",
];

const links: LinkItem[] = [
  {
    label: "Website",
    href: "https://memewar.zone",
    eyebrow: "Launchpad",
    description: "Enter the arena and open the official MemeWarzone platform.",
    hotkey: "01",
  },
  {
    label: "X",
    href: "https://x.com/memewarzone",
    eyebrow: "Intel feed",
    description: "Follow announcements, updates, drops, and war-room posts.",
    hotkey: "02",
  },
  {
    label: "Telegram",
    href: "https://t.me/memewarzonehq",
    eyebrow: "HQ chat",
    description: "Join the fast community channel for updates and campaign talk.",
    hotkey: "03",
  },
  {
    label: "Discord",
    href: "https://discord.gg/aXTkn3Asu",
    eyebrow: "Squad comms",
    description: "Coordinate with squads, follow launches, and get community support.",
    hotkey: "04",
  },
];

function ExternalArrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="external-arrow" fill="none">
      <path
        d="M7 17 17 7M9 7h8v8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

function CyclingImage({ sources, alt, className }: { sources: string[]; alt: string; className: string }) {
  const [sourceIndex, setSourceIndex] = useState(0);
  const [failed, setFailed] = useState(false);

  if (failed) return null;

  return (
    <img
      src={sources[sourceIndex]}
      alt={alt}
      className={className}
      draggable={false}
      onError={() => {
        if (sourceIndex < sources.length - 1) {
          setSourceIndex((current) => current + 1);
          return;
        }
        setFailed(true);
      }}
    />
  );
}

function LinkCard({ item }: { item: LinkItem }) {
  return (
    <a
      className="mwz-card link-card"
      href={item.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open MemeWarzone ${item.label}`}
    >
      <span className="link-number">{item.hotkey}</span>
      <span className="link-copy">
        <span className="link-eyebrow">{item.eyebrow}</span>
        <span className="link-label">{item.label}</span>
        <span className="link-description">{item.description}</span>
      </span>
      <ExternalArrow />
    </a>
  );
}

export default function App() {
  return (
    <main className="mwz-link-page">
      <div className="mwz-app-shell">
        <section className="mwz-tactical-hero compact-hero" aria-label="MemeWarzone command banner">
          <div className="mwz-tactical-hero__bg" />
          <div className="mwz-tactical-hero__terminal mwz-tactical-hero__terminal--left" aria-hidden="true">
            <div>MWZ TERMINAL</div>
            <div>STATUS: OPERATIONAL</div>
            <div>LINK: SECURE ▣</div>
          </div>
          <div className="mwz-tactical-hero__terminal mwz-tactical-hero__terminal--right" aria-hidden="true">
            <div>OFFICIAL CHANNELS</div>
            <strong>04 ONLINE</strong>
            <div className="mwz-tactical-hero__pulse" />
          </div>
          <a href="https://memewar.zone" className="mwz-tactical-hero__center" aria-label="Open MemeWarzone website">
            <CyclingImage sources={hudSources} alt="" className="mwz-tactical-hero__crosshair" />
            <CyclingImage sources={heroLogoSources} alt="MemeWarzone" className="mwz-tactical-hero__logo" />
          </a>
          <div className="mwz-tactical-hero__wave" aria-hidden="true" />
          <div className="mwz-tactical-hero__scanlines" aria-hidden="true" />
          <div className="mwz-tactical-hero__vignette" aria-hidden="true" />
        </section>

        <section className="link-shell" aria-labelledby="links-title">
          <div className="mwz-hud-frame link-panel">
            <div className="panel-header">
              <div>
                <p className="section-kicker">Official Links</p>
                <h1 id="links-title" className="mwz-section-title">Command Hub</h1>
              </div>
              <div className="topbar-status">
                <span className="status-pip" />
                <span>Online</span>
              </div>
            </div>

            <p className="intro-copy">
              One clean entry point for the MemeWarzone arena. Choose your channel and follow the launchpad in real time.
            </p>

            <div className="links-grid">
              {links.map((item) => (
                <LinkCard key={item.href} item={item} />
              ))}
            </div>

            <footer className="link-footer">
              <span>links.memewar.zone</span>
              <span className="mwz-orange">Official channels only</span>
            </footer>
          </div>
        </section>
      </div>
    </main>
  );
}
