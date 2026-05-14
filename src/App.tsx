import { useState } from "react";

type LinkIcon = "website" | "x" | "telegram" | "discord";

type LinkItem = {
  label: string;
  href: string;
  eyebrow: string;
  description: string;
  icon: LinkIcon;
};

const logoSources = ["/assets/navbar-logo.png", "https://memewar.zone/assets/navbar-logo.png"];

const links: LinkItem[] = [
  {
    label: "Website",
    href: "https://memewar.zone",
    eyebrow: "Launchpad",
    description: "Enter the arena and open the official MemeWarzone platform.",
    icon: "website",
  },
  {
    label: "X",
    href: "https://x.com/memewarzone",
    eyebrow: "Intel feed",
    description: "Follow announcements, updates, drops, and war-room posts.",
    icon: "x",
  },
  {
    label: "Telegram",
    href: "https://t.me/memewarzonehq",
    eyebrow: "HQ chat",
    description: "Join the fast community channel for updates and campaign talk.",
    icon: "telegram",
  },
  {
    label: "Discord",
    href: "https://discord.gg/aXTkn3Asu",
    eyebrow: "Squad comms",
    description: "Coordinate with squads, follow launches, and get community support.",
    icon: "discord",
  },
];

function SocialIcon({ icon }: { icon: LinkIcon }) {
  if (icon === "website") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="social-icon" fill="none">
        <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3.6 9h16.8M3.6 15h16.8M12 3c2.2 2.3 3.3 5.3 3.3 9s-1.1 6.7-3.3 9M12 3C9.8 5.3 8.7 8.3 8.7 12s1.1 6.7 3.3 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" />
      </svg>
    );
  }

  if (icon === "x") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="social-icon" fill="currentColor">
        <path d="M17.53 3h3.06l-6.68 7.64L21.77 21h-6.16l-4.82-6.3L5.27 21H2.2l7.15-8.18L1.82 3h6.32l4.36 5.76L17.53 3Zm-1.07 16.18h1.7L7.22 4.73H5.4l11.06 14.45Z" />
      </svg>
    );
  }

  if (icon === "telegram") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="social-icon" fill="currentColor">
        <path d="M20.7 3.3c.3-.1.7 0 .9.2.2.2.3.6.2.9l-3 15.1c-.2 1-.9 1.2-1.7.7l-4.6-3.4-2.2 2.1c-.2.2-.4.4-.9.4l.3-4.7 8.6-7.8c.4-.3-.1-.5-.6-.2L7.1 13.3 2.5 11.9c-1-.3-1-1 .2-1.5l18-7.1Z" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="social-icon" fill="currentColor">
      <path d="M19.2 5.2A17 17 0 0 0 15 3.9l-.2.4c1.5.4 2.9 1.1 4 2.1a13.7 13.7 0 0 0-4.8-1.5 14.3 14.3 0 0 0-4 0 13.7 13.7 0 0 0-4.8 1.5c1.2-1 2.5-1.7 4-2.1L9 3.9a17 17 0 0 0-4.2 1.3C2.1 9.2 1.4 13.1 1.8 17c1.8 1.3 3.6 2.1 5.3 2.6l1.1-1.8c-.6-.2-1.2-.5-1.8-.9l.4-.3c3.5 1.6 7.2 1.6 10.6 0l.4.3c-.6.4-1.2.7-1.8.9l1.1 1.8c1.8-.5 3.6-1.3 5.3-2.6.5-4.5-.8-8.4-3.2-11.8ZM8.7 14.7c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2c1 0 1.9 1 1.9 2.2s-.9 2.2-1.9 2.2Zm6.6 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2c1 0 1.9 1 1.9 2.2s-.9 2.2-1.9 2.2Z" />
    </svg>
  );
}

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
      <span className="link-icon" aria-hidden="true"><SocialIcon icon={item.icon} /></span>
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
              <span>links.memewar.zone</span>
              <span className="mwz-orange">Official channels only</span>
            </footer>
          </div>
        </section>
      </div>
    </main>
  );
}
