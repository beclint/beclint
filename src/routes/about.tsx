import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div>
      {/* ====== PAGE HEADER ====== */}
      <section className="relative overflow-hidden bg-[#0a0a0a] pt-24 pb-16">
        <div className="absolute inset-0 bg-pattern-grid opacity-40" />
        <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-[#c9a84c]/5 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mb-4">
            <span className="text-xs font-bold tracking-widest uppercase text-[#c9a84c]">
              About Us
            </span>
          </div>
          <h1 className="font-serif text-4xl font-bold text-[#f5f0e8] sm:text-5xl md:text-6xl">
            Our Mission
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#d4a574]/70">
            How we're preserving the ancient art of African storytelling for a
            new generation.
          </p>
        </div>
      </section>

      {/* ====== OUR STORY ====== */}
      <section className="border-t border-[#1a1008] bg-[#0a0a0a] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <h2 className="font-serif text-3xl font-bold text-[#f5f0e8]">
                The <span className="text-[#c9a84c]">Motherland</span> Speaks
              </h2>
              <div className="mt-6 space-y-4 leading-relaxed text-[#d4a574]/70">
                <p>
                  Africa is home to over 3,000 distinct ethnic groups, each with
                  its own rich tradition of oral storytelling. For centuries,
                  these tales were the way wisdom was passed down — from elders
                  to children, around fires under starlit skies.
                </p>
                <p>
                  But in the modern world, these voices are fading. The old ways
                  are being replaced by screens, and the ancient stories are
                  being forgotten by a generation that has never heard them.
                </p>
                <p>
                  <strong className="text-[#f5f0e8]">
                    Tales of the Motherland
                  </strong>{" "}
                  exists to change that. We research, preserve, and retell
                  authentic African folktales — not as dry academic texts, but as
                  living, breathing stories that captivate and inspire.
                </p>
              </div>
            </div>
            <div className="relative">
              {/* Decorative element */}
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-[#c9a84c]/10" />
              <div className="absolute -bottom-5 -left-5 h-32 w-32 rounded-full border border-[#c9a84c]/10" />

              <div className="relative space-y-6 rounded-xl border border-[#1a1008] bg-gradient-to-br from-[#1a1008]/80 to-[#0a0a0a] p-8">
                <h3 className="font-serif text-xl font-bold text-[#c9a84c]">
                  Our Core Values
                </h3>
                <div className="space-y-5">
                  <div className="border-l-2 border-[#c9a84c]/40 pl-4">
                    <h4 className="font-serif text-base font-bold text-[#f5f0e8]">
                      Authenticity
                    </h4>
                    <p className="mt-1 text-sm text-[#6b5b4e]">
                      Every story we tell is researched and verified. We respect
                      the cultures and traditions they come from.
                    </p>
                  </div>
                  <div className="border-l-2 border-[#c9a84c]/40 pl-4">
                    <h4 className="font-serif text-base font-bold text-[#f5f0e8]">
                      Accessibility
                    </h4>
                    <p className="mt-1 text-sm text-[#6b5b4e]">
                      Ancient wisdom shouldn't be locked in academic journals. We
                      make it available to everyone, everywhere.
                    </p>
                  </div>
                  <div className="border-l-2 border-[#c9a84c]/40 pl-4">
                    <h4 className="font-serif text-base font-bold text-[#f5f0e8]">
                      Cultural Connection
                    </h4>
                    <p className="mt-1 text-sm text-[#6b5b4e]">
                      For the African diaspora, these stories are a bridge home.
                      We help reconnect people with their heritage.
                    </p>
                  </div>
                  <div className="border-l-2 border-[#c9a84c]/40 pl-4">
                    <h4 className="font-serif text-base font-bold text-[#f5f0e8]">
                      Daily Consistency
                    </h4>
                    <p className="mt-1 text-sm text-[#6b5b4e]">
                      A new story every day, without fail. The ancient tradition
                      of storytelling, reborn in the digital age.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== STATS ====== */}
      <section className="relative border-y border-[#1a1008] bg-[#1a1008] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="font-serif text-4xl font-bold text-[#c9a84c]">
                12+
              </div>
              <div className="mt-2 text-sm font-medium uppercase tracking-wider text-[#6b5b4e]">
                Cultures Represented
              </div>
            </div>
            <div className="text-center">
              <div className="font-serif text-4xl font-bold text-[#c9a84c]">
                5
              </div>
              <div className="mt-2 text-sm font-medium uppercase tracking-wider text-[#6b5b4e]">
                African Regions
              </div>
            </div>
            <div className="text-center">
              <div className="font-serif text-4xl font-bold text-[#c9a84c]">
                Daily
              </div>
              <div className="mt-2 text-sm font-medium uppercase tracking-wider text-[#6b5b4e]">
                Story Delivery
              </div>
            </div>
            <div className="text-center">
              <div className="font-serif text-4xl font-bold text-[#c9a84c]">
                Free
              </div>
              <div className="mt-2 text-sm font-medium uppercase tracking-wider text-[#6b5b4e]">
                Always
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== THE TEAM ====== */}
      <section className="bg-[#0a0a0a] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl font-bold text-[#f5f0e8] sm:text-4xl">
              Who We Are
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[#6b5b4e]">
              A team of storytellers, researchers, and visual artists united by
              a love for Africa's oral traditions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-[#1a1008] bg-gradient-to-b from-[#1a1008]/60 to-[#0a0a0a] p-6 text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#c9a84c]/10 text-2xl font-serif font-bold text-[#c9a84c]">
                EK
              </div>
              <h3 className="font-serif text-lg font-bold text-[#f5f0e8]">
                Storyteller in Chief
              </h3>
              <p className="mt-2 text-sm text-[#6b5b4e]">
                Researches and adapts authentic folktales, ensuring every story
                honors its cultural roots.
              </p>
            </div>
            <div className="rounded-xl border border-[#1a1008] bg-gradient-to-b from-[#1a1008]/60 to-[#0a0a0a] p-6 text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#c9a84c]/10 text-2xl font-serif font-bold text-[#c9a84c]">
                VA
              </div>
              <h3 className="font-serif text-lg font-bold text-[#f5f0e8]">
                Visual Artist
              </h3>
              <p className="mt-2 text-sm text-[#6b5b4e]">
                Creates the atmospheric visuals that bring each story's world to
                life.
              </p>
            </div>
            <div className="rounded-xl border border-[#1a1008] bg-gradient-to-b from-[#1a1008]/60 to-[#0a0a0a] p-6 text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#c9a84c]/10 text-2xl font-serif font-bold text-[#c9a84c]">
                NH
              </div>
              <h3 className="font-serif text-lg font-bold text-[#f5f0e8]">
                Cultural Researcher
              </h3>
              <p className="mt-2 text-sm text-[#6b5b4e]">
                Verifies the authenticity and cultural accuracy of every tale we
                tell.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== CTA ====== */}
      <section className="bg-[#1a1008] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-[#f5f0e8] sm:text-4xl">
            Start Your Journey
          </h2>
          <p className="mt-4 text-[#d4a574]/70">
            Every story is a door to another world. Begin exploring the wisdom
            of the motherland today.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/stories"
              className="rounded-lg bg-[#c9a84c] px-8 py-3 font-medium text-[#0a0a0a] transition-all hover:bg-[#d4a574]"
            >
              Browse Stories
            </Link>
            <Link
              to="/contact"
              className="rounded-lg border border-[#6b5b4e] px-8 py-3 font-medium text-[#f5f0e8] transition-all hover:border-[#c9a84c] hover:text-[#c9a84c]"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}