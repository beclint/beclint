import { createFileRoute, Link } from "@tanstack/react-router";
import { featuredFolktales, folktales } from "~/data/folktales";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const storyOfTheDay = featuredFolktales[0];
  const totalStories = folktales.length;
  const cultures = new Set(folktales.map((f) => f.culture)).size;
  const regions = new Set(folktales.map((f) => f.region)).size;

  return (
    <div>
      {/* ====== HERO SECTION ====== */}
      <section className="relative min-h-screen overflow-hidden bg-[#0a0a0a]">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-pattern-grid opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/30 via-[#0a0a0a]/60 to-[#0a0a0a]" />

        {/* Decorative glow */}
        <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c9a84c]/5 blur-[120px]" />
        <div className="absolute right-1/4 top-1/4 h-64 w-64 rounded-full bg-[#8b4513]/10 blur-[100px]" />

        {/* Hero content */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
          {/* Badge */}
          <div className="animate-fade-in-down mb-6 rounded-full border border-[#c9a84c]/30 bg-[#c9a84c]/10 px-4 py-1.5">
            <span className="text-xs font-medium tracking-widest uppercase text-[#c9a84c]">
              Ancient Stories — Reborn Daily
            </span>
          </div>

          {/* Main heading */}
          <h1 className="animate-fade-in-up stagger-1 text-shadow-glow max-w-4xl font-serif text-5xl font-bold leading-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Tales of the <br />
            <span className="text-[#c9a84c]">Motherland</span>
          </h1>

          {/* Tagline */}
          <p className="animate-fade-in-up stagger-2 mt-6 max-w-2xl text-lg leading-relaxed text-[#d4a574] sm:text-xl">
            Forgotten legends. Ancient wisdom. Timeless morals. Every day, a new
            story from the heart of Africa — told with the reverence they
            deserve.
          </p>

          {/* CTA buttons */}
          <div className="animate-fade-in-up stagger-3 mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/stories"
              className="group relative overflow-hidden rounded-lg border border-[#c9a84c] bg-[#c9a84c] px-8 py-3 font-medium text-[#0a0a0a] transition-all hover:bg-[#d4a574]"
            >
              <span className="relative z-10">Explore Stories</span>
            </Link>
            <Link
              to="/about"
              className="rounded-lg border border-[#6b5b4e] px-8 py-3 font-medium text-[#f5f0e8] transition-all hover:border-[#c9a84c] hover:text-[#c9a84c]"
            >
              Our Mission
            </Link>
          </div>

          {/* Social links */}
          <div className="animate-fade-in-up stagger-4 mt-12 flex items-center gap-6">
            <span className="text-xs font-medium tracking-widest uppercase text-[#6b5b4e]">
              Follow us
            </span>
            <div className="h-px w-8 bg-[#6b5b4e]" />
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#6b5b4e] transition-colors hover:text-[#c9a84c]"
            >
              YouTube
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#6b5b4e] transition-colors hover:text-[#c9a84c]"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#6b5b4e] transition-colors hover:text-[#c9a84c]"
            >
              Facebook
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="animate-fade-in stagger-6 absolute bottom-8 left-1/2 -translate-x-1/2">
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs tracking-widest uppercase text-[#6b5b4e]">
                Scroll
              </span>
              <div className="h-8 w-px bg-gradient-to-b from-[#6b5b4e] to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ====== STORY OF THE DAY SECTION ====== */}
      <section className="relative overflow-hidden bg-[#1a1008] py-24">
        <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-[#c9a84c]/5 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mb-4">
            <span className="text-xs font-bold tracking-widest uppercase text-[#c9a84c]">
              Featured Story
            </span>
          </div>
          <div className="flex items-center gap-4">
            <h2 className="font-serif text-3xl font-bold text-[#f5f0e8] sm:text-4xl">
              Story of the Day
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-[#c9a84c]/50 to-transparent" />
          </div>

          {storyOfTheDay && (
            <div className="mt-10 glow-gold group relative overflow-hidden rounded-xl border border-[#c9a84c]/20 bg-[#0a0a0a]/60 p-8 transition-all hover:border-[#c9a84c]/40 sm:p-12">
              <div className="absolute right-0 top-0 h-32 w-32 bg-[#c9a84c]/5 blur-[60px] rounded-full" />

              <div className="relative z-10">
                {/* Origin badge */}
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <span className="rounded bg-[#c9a84c]/15 px-2.5 py-0.5 text-xs font-medium text-[#c9a84c]">
                    {storyOfTheDay.origin}
                  </span>
                  <span className="rounded bg-[#8b4513]/20 px-2.5 py-0.5 text-xs font-medium text-[#d4a574]">
                    {storyOfTheDay.culture}
                  </span>
                  <span className="rounded bg-[#6b5b4e]/20 px-2.5 py-0.5 text-xs font-medium text-[#6b5b4e]">
                    {storyOfTheDay.readingTime}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#f5f0e8] sm:text-3xl">
                  {storyOfTheDay.title}
                </h3>
                <p className="mt-4 max-w-3xl leading-relaxed text-[#d4a574]/80">
                  {storyOfTheDay.description}
                </p>

                <div className="mt-6 border-l-2 border-[#c9a84c]/40 pl-4">
                  <p className="text-sm italic text-[#c9a84c]">
                    "{storyOfTheDay.moral}"
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    to="/stories"
                    className="rounded-lg border border-[#c9a84c] px-6 py-2 text-sm font-medium text-[#c9a84c] transition-all hover:bg-[#c9a84c] hover:text-[#0a0a0a]"
                  >
                    Read Full Story
                  </Link>
                  <Link
                    to="/stories"
                    className="text-sm text-[#6b5b4e] transition-colors hover:text-[#d4a574]"
                  >
                    Browse All Stories &rarr;
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ====== STATS SECTION ====== */}
      <section className="relative border-y border-[#1a1008] bg-[#0a0a0a] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="font-serif text-4xl font-bold text-[#c9a84c] sm:text-5xl">
                {totalStories}
              </div>
              <div className="mt-2 text-sm font-medium uppercase tracking-wider text-[#6b5b4e]">
                Stories
              </div>
            </div>
            <div className="text-center">
              <div className="font-serif text-4xl font-bold text-[#c9a84c] sm:text-5xl">
                {cultures}
              </div>
              <div className="mt-2 text-sm font-medium uppercase tracking-wider text-[#6b5b4e]">
                Cultures
              </div>
            </div>
            <div className="text-center">
              <div className="font-serif text-4xl font-bold text-[#c9a84c] sm:text-5xl">
                {regions}
              </div>
              <div className="mt-2 text-sm font-medium uppercase tracking-wider text-[#6b5b4e]">
                African Regions
              </div>
            </div>
            <div className="text-center">
              <div className="font-serif text-4xl font-bold text-[#c9a84c] sm:text-5xl">
                Daily
              </div>
              <div className="mt-2 text-sm font-medium uppercase tracking-wider text-[#6b5b4e]">
                New Stories
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== PREVIEW STORIES SECTION ====== */}
      <section className="bg-[#0a0a0a] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold tracking-widest uppercase text-[#c9a84c]">
              Discover
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-[#f5f0e8] sm:text-4xl">
              Featured Folktales
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[#6b5b4e]">
              Stories passed down through generations, preserved in the oral
              traditions of Africa's diverse cultures.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredFolktales.map((story, i) => (
              <Link
                key={story.id}
                to="/stories"
                className={`glow-gold-hover group relative overflow-hidden rounded-xl border border-[#1a1008] bg-gradient-to-b from-[#1a1008]/80 to-[#0a0a0a] p-6 transition-all hover:border-[#c9a84c]/30 animate-fade-in-up stagger-${
                  i + 1
                }`}
              >
                {/* Decorative corner */}
                <div className="absolute right-0 top-0 h-20 w-20 bg-[#c9a84c]/5 blur-[30px] rounded-full" />

                <div className="relative z-10">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="rounded bg-[#c9a84c]/10 px-2 py-0.5 text-xs font-medium text-[#c9a84c]">
                      {story.origin}
                    </span>
                    <span className="text-xs text-[#6b5b4e]">
                      {story.readingTime}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#f5f0e8] transition-colors group-hover:text-[#c9a84c]">
                    {story.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#6b5b4e]">
                    {story.description}
                  </p>
                  <div className="mt-4 flex items-center text-xs font-medium text-[#c9a84c]">
                    Read more &rarr;
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ====== NEWSLETTER / CTA SECTION ====== */}
      <section className="relative overflow-hidden bg-[#1a1008] py-24">
        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#c9a84c]/5 to-transparent" />

        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-[#f5f0e8] sm:text-4xl">
            Join the Circle of Storytellers
          </h2>
          <p className="mt-4 text-[#d4a574]/70">
            Follow us on social media for a new folktale every day — stories of
            wisdom, courage, and wonder from across the African continent.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-[#c9a84c] px-8 py-3 font-medium text-[#0a0a0a] transition-all hover:bg-[#d4a574]"
            >
              Subscribe on YouTube
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-[#6b5b4e] px-8 py-3 font-medium text-[#f5f0e8] transition-all hover:border-[#c9a84c] hover:text-[#c9a84c]"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}