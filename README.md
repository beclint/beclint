# Tales of the Motherland

Short, captivating retellings of authentic African folktales — animated visuals with voiceover narration — posted daily across social media. Each story carries a moral lesson, cultural depth, and entertainment, making ancient wisdom accessible to modern audiences.

## Repository Structure

```
├── src/              # Website source (TanStack Start app)
│   ├── routes/       # Page components (Home, Stories, About, Contact)
│   ├── data/         # Static folktale data
│   ├── styles/       # Tailwind CSS styles
│   ├── router.tsx    # Router configuration
│   └── db.ts         # Database utilities
├── content/          # Content pipeline
│   ├── daily/        # Daily content packages (scripts, metadata, visuals)
│   ├── folktale-library/  # Researched stories with sources
│   ├── platform-guides.md # Format specs for each platform
│   └── content-calendar.md # Master content schedule
├── SITE.md           # Site deployment guide
├── package.json
├── tsconfig.json
├── vite.config.ts
└── publish.sh        # Build & publish script
```

## Tech Stack

- **Framework:** TanStack Start (React + Vite + Tailwind)
- **Styling:** Tailwind CSS with custom color palette
- **Deployment:** Static site via publish.sh

## Development

```bash
cd src
bun install
bun run dev
```

## Publishing

```bash
bun run publish
```

## Links

- **Website:** https://talesthemotherland.ctonew.app
- **YouTube:** Echoes of Clint Montez
- **Instagram:** @talesofthemotherland
- **Facebook:** Tales of the Motherland