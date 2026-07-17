import { createFileRoute, Link } from "@tanstack/react-router";
import { folktales } from "~/data/folktales";

export const Route = createFileRoute("/stories")({
  component: Stories,
});

// Group stories by region
const storiesByRegion: Record<string, typeof folktales> = {};
for (const tale of folktales) {
  if (!storiesByRegion[tale.region]) {
    storiesByRegion[tale.region] = [];
  }
  storiesByRegion[tale.region].push(tale);
}

const regionOrder = [
  "West Africa",
  "East Africa",
  "Southern Africa",
  "Northeast Africa",
  "Central Africa",
];

function Stories() {
  return (
    <div>
      {/* ====== PAGE HEADER ====== */}
      <section className="relative overflow-hidden bg-[#0a0a0a] pt-24 pb-16">
        <div className="absolute inset-0 bg-pattern-dots opacity-30" />
        <div className="absolute left-1/3 top-0 h-64 w-64 rounded-full bg-[#c9a84c]/5 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mb-4">
            <span className="text-xs font-bold tracking-widest uppercase text-[#c9a84c]">
              Library of Legends
            </span>
          </div>
          <h1 className="font-serif text-4xl font-bold text-[#f5f0e8] sm:text-5xl md:text-6xl">
            African Folktales
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#d4a574]/70">
            A growing collection of authentic stories from across the African
            continent — each one carrying the voice of an ancient tradition.
          </p>
          <div className="mt-4 text-sm text-[#6b5b4e]">
            {folktales.length} stories &middot;{" "}
            {new Set(folktales.map((f) => f.culture)).size} cultures &middot;{" "}
            {new Set(folktales.map((f) => f.region)).size} regions
          </div>
        </div>
      </section>

      {/* ====== STORIES BY REGION ====== */}
      {regionOrder.map((region) => {
        const tales = storiesByRegion[region];
        if (!tales) return null;

        return (
          <section
            key={region}
            className="border-t border-[#1a1008] bg-[#0a0a0a] py-16"
          >
            <div className="mx-auto max-w-7xl px-6">
              <div className="mb-2">
                <span className="text-xs font-bold tracking-widest uppercase text-[#6b5b4e]">
                  Region
                </span>
              </div>
              <div className="flex items-center gap-4">
                <h2 className="font-serif text-2xl font-bold text-[#d4a574] sm:text-3xl">
                  {region}
                </h2>
                <div className="h-px flex-1 bg-gradient-to-r from-[#6b5b4e]/30 to-transparent" />
                <span className="text-xs text-[#6b5b4e]">
                  {tales.length} {tales.length === 1 ? "story" : "stories"}
                </span>
              </div>

              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {tales.map((story) => (
                  <Link
                    key={story.id}
                    to="/stories"
                    className="glow-gold-hover group relative overflow-hidden rounded-xl border border-[#1a1008] bg-gradient-to-b from-[#1a1008]/60 to-[#0a0a0a] p-6 transition-all hover:border-[#c9a84c]/20"
                  >
                    {/* Corner decoration */}
                    <div className="absolute right-0 top-0 h-16 w-16 bg-[#c9a84c]/5 blur-[24px] rounded-full" />

                    <div className="relative z-10">
                      <div className="mb-3 flex flex-wrap items-center gap-2">
                        <span className="rounded bg-[#c9a84c]/10 px-2 py-0.5 text-xs font-medium text-[#c9a84c]">
                          {story.culture}
                        </span>
                        <span className="rounded bg-[#8b4513]/10 px-2 py-0.5 text-xs font-medium text-[#d4a574]">
                          {story.origin}
                        </span>
                        <span className="text-xs text-[#6b5b4e]">
                          {story.readingTime}
                        </span>
                      </div>
                      <h3 className="font-serif text-lg font-bold text-[#f5f0e8] transition-colors group-hover:text-[#c9a84c]">
                        {story.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#6b5b4e]">
                        {story.description}
                      </p>
                      <div className="mt-4 border-l-2 border-[#c9a84c]/30 pl-3">
                        <p className="text-xs italic text-[#c9a84c]/60">
                          "{story.moral}"
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* ====== BOTTOM CTA ====== */}
      <section className="border-t border-[#1a1008] bg-[#1a1008] py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-2xl font-bold text-[#f5f0e8] sm:text-3xl">
            Know a story we should include?
          </h2>
          <p className="mt-3 text-[#6b5b4e]">
            We're always researching and adding new tales. If you have a folktale
            from your culture you'd like to share, we'd love to hear it.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-block rounded-lg border border-[#c9a84c] px-8 py-3 font-medium text-[#c9a84c] transition-all hover:bg-[#c9a84c] hover:text-[#0a0a0a]"
          >
            Suggest a Story
          </Link>
        </div>
      </section>
    </div>
  );
}