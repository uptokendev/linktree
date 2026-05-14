import { useState } from "react";

type LinkItem = {
  label: string;
  href: string;
  eyebrow: string;
  description: string;
  hotkey: string;
};

const logoSources = ["/assets/navbar-logo.png", "https://memewar.zone/assets/navbar-logo.png"];

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

function BrandLogo() {
  const [sourceIndex, setSourceIndex] = useState(0);
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <div className="brand-fallback" aria-label="MemeWarzone">MemeWarzone</div>;
  }

  return (
    <img
      src={logoSources[sourceIndex]}
      alt="MemeWarzone"
      className="brand-logo"
      draggable={false}
      onError={() => {
        if (sourceIndex < logoSources.length - 1) {
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
        <header className="mwz-hud-frame topbar-lite" aria-label="MemeWarzone links header">
          <a href="https://memewar.zone" className="brand-link" aria-label="Open MemeWarzone website">
            <BrandLogo />
          </a>
          <div className="topbar-status">
            <span className="status-pip" />
            <span>Links online</span>
          </div>
        </header>

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
              <span>coms.memewar.zone</span>
              <span className="mwz-orange">Official channels only</span>
            </footer>
          </div>
        </section>
      </div>
    </main>
  );
}
