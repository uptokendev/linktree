type LinkItem = {
  label: string;
  href: string;
  eyebrow: string;
  description: string;
  hotkey: string;
};

const links: LinkItem[] = [
  {
    label: "Website",
    href: "https://memewar.zone",
    eyebrow: "Enter Arena",
    description: "Launchpad, battles, creator campaigns, and live platform activity.",
    hotkey: "01",
  },
  {
    label: "X",
    href: "https://x.com/memewarzone",
    eyebrow: "Intel Feed",
    description: "Official announcements, updates, drops, and war-room posts.",
    hotkey: "02",
  },
  {
    label: "Telegram",
    href: "https://t.me/memewarzonehq",
    eyebrow: "HQ Chat",
    description: "Community coordination, quick updates, and campaign talk.",
    hotkey: "03",
  },
  {
    label: "Discord",
    href: "https://discord.gg/aXTkn3Asu",
    eyebrow: "Squad Comms",
    description: "Join the server, find squads, follow launches, and get support.",
    hotkey: "04",
  },
];

function ExternalArrow() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
      fill="none"
    >
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

function LinkCard({ item }: { item: LinkItem }) {
  return (
    <a
      className="hud-card group block p-4 sm:p-5"
      href={item.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open MemeWarzone ${item.label}`}
    >
      <div className="relative z-10 flex items-center gap-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center border border-warzone-green/50 bg-warzone-green/5 text-sm text-warzone-orange shadow-orange">
          {item.hotkey}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs uppercase tracking-[0.28em] text-warzone-orange">
              {item.eyebrow}
            </p>
            <ExternalArrow />
          </div>
          <h2 className="mt-1 text-2xl uppercase tracking-[0.18em] text-warzone-green sm:text-3xl">
            {item.label}
          </h2>
          <p className="mt-1 text-sm leading-6 tracking-[0.08em] text-warzone-green/65 sm:text-base">
            {item.description}
          </p>
        </div>
      </div>
    </a>
  );
}

export default function App() {
  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-6 font-hud text-warzone-green sm:px-6 lg:px-8">
      <div className="scanlines" />
      <div className="radar-pulse left-[8%] top-[12%]" />
      <div className="radar-pulse right-[9%] bottom-[12%] delay-700" />

      <section className="relative z-10 mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-xl flex-col justify-center">
        <div className="hud-frame p-5 sm:p-7">
          <div className="mb-5 flex items-center justify-between gap-4 border-b border-warzone-green/30 pb-4">
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-warzone-orange">
                Official Links
              </p>
              <h1 className="mt-2 text-4xl uppercase leading-none tracking-[0.12em] text-warzone-green sm:text-5xl">
                MemeWarzone
              </h1>
            </div>
            <div className="relative hidden h-16 w-16 shrink-0 border border-warzone-green/50 bg-warzone-green/5 sm:block">
              <div className="absolute inset-3 rounded-full border border-warzone-green/45" />
              <div className="absolute left-1/2 top-1/2 h-px w-8 origin-left animate-radar bg-warzone-green" />
              <div className="absolute inset-x-0 top-1/2 h-px bg-warzone-green/35" />
              <div className="absolute inset-y-0 left-1/2 w-px bg-warzone-green/35" />
            </div>
          </div>

          <p className="mb-6 text-base leading-7 tracking-[0.09em] text-warzone-green/72 sm:text-lg">
            One clean command hub for the arena. Pick your channel, join the
            community, and follow the launchpad in real time.
          </p>

          <div className="grid gap-3">
            {links.map((item) => (
              <LinkCard key={item.href} item={item} />
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-warzone-green/25 pt-4 text-[0.7rem] uppercase tracking-[0.24em] text-warzone-green/55">
            <span>links.memewar.zone</span>
            <span className="text-warzone-orange">Status: Online</span>
          </div>
        </div>
      </section>
    </main>
  );
}
