import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  component: Contact,
});

function Contact() {
  return (
    <div>
      {/* ====== PAGE HEADER ====== */}
      <section className="relative overflow-hidden bg-[#0a0a0a] pt-24 pb-16">
        <div className="absolute inset-0 bg-pattern-dots opacity-30" />
        <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-[#c9a84c]/5 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mb-4">
            <span className="text-xs font-bold tracking-widest uppercase text-[#c9a84c]">
              Get in Touch
            </span>
          </div>
          <h1 className="font-serif text-4xl font-bold text-[#f5f0e8] sm:text-5xl md:text-6xl">
            Let's Connect
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#d4a574]/70">
            Have a story to share? A question about our work? We'd love to hear
            from you.
          </p>
        </div>
      </section>

      {/* ====== CONTACT SECTION ====== */}
      <section className="border-t border-[#1a1008] bg-[#0a0a0a] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#f5f0e8] sm:text-3xl">
                Send Us a Message
              </h2>
              <p className="mt-3 text-[#6b5b4e]">
                Whether you'd like to suggest a folktale, collaborate, or just
                say hello — we read every message.
              </p>

              <form
                className="mt-8 space-y-6"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[#d4a574]"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      className="mt-1 w-full rounded-lg border border-[#1a1008] bg-[#1a1008]/50 px-4 py-3 text-sm text-[#f5f0e8] placeholder-[#6b5b4e] transition-colors focus:border-[#c9a84c]/50 focus:outline-none focus:ring-1 focus:ring-[#c9a84c]/30"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[#d4a574]"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your@email.com"
                      className="mt-1 w-full rounded-lg border border-[#1a1008] bg-[#1a1008]/50 px-4 py-3 text-sm text-[#f5f0e8] placeholder-[#6b5b4e] transition-colors focus:border-[#c9a84c]/50 focus:outline-none focus:ring-1 focus:ring-[#c9a84c]/30"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-[#d4a574]"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="mt-1 w-full rounded-lg border border-[#1a1008] bg-[#1a1008]/50 px-4 py-3 text-sm text-[#f5f0e8] transition-colors focus:border-[#c9a84c]/50 focus:outline-none focus:ring-1 focus:ring-[#c9a84c]/30"
                  >
                    <option value="" className="bg-[#0a0a0a]">
                      Select a subject
                    </option>
                    <option value="story" className="bg-[#0a0a0a]">
                      Suggest a Story
                    </option>
                    <option value="collaboration" className="bg-[#0a0a0a]">
                      Collaboration
                    </option>
                    <option value="feedback" className="bg-[#0a0a0a]">
                      Feedback
                    </option>
                    <option value="other" className="bg-[#0a0a0a]">
                      Other
                    </option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#d4a574]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Share your story, thoughts, or question..."
                    className="mt-1 w-full rounded-lg border border-[#1a1008] bg-[#1a1008]/50 px-4 py-3 text-sm text-[#f5f0e8] placeholder-[#6b5b4e] transition-colors focus:border-[#c9a84c]/50 focus:outline-none focus:ring-1 focus:ring-[#c9a84c]/30"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-lg bg-[#c9a84c] px-8 py-3 font-medium text-[#0a0a0a] transition-all hover:bg-[#d4a574]"
                >
                  Send Message
                </button>
                <p className="text-xs text-[#6b5b4e]">
                  This is a demo contact form — backend integration coming soon.
                </p>
              </form>
            </div>

            {/* Contact Info & Social */}
            <div className="space-y-10">
              <div>
                <h2 className="font-serif text-2xl font-bold text-[#f5f0e8] sm:text-3xl">
                  Connect With Us
                </h2>
                <p className="mt-3 text-[#6b5b4e]">
                  Follow along on social media for a new story every day, behind-
                  the-scenes content, and more.
                </p>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-lg border border-[#1a1008] bg-[#1a1008]/30 p-4 transition-all hover:border-[#c9a84c]/30 hover:bg-[#1a1008]/60"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c9a84c]/10 text-center font-serif font-bold text-[#c9a84c]">
                    YT
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-[#f5f0e8] group-hover:text-[#c9a84c]">
                      YouTube
                    </h3>
                    <p className="text-sm text-[#6b5b4e]">
                      Full narrated folktales with animated visuals
                    </p>
                  </div>
                  <span className="ml-auto text-[#6b5b4e]">&rarr;</span>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-lg border border-[#1a1008] bg-[#1a1008]/30 p-4 transition-all hover:border-[#c9a84c]/30 hover:bg-[#1a1008]/60"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c9a84c]/10 text-center font-serif font-bold text-[#c9a84c]">
                    IG
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-[#f5f0e8] group-hover:text-[#c9a84c]">
                      Instagram
                    </h3>
                    <p className="text-sm text-[#6b5b4e]">
                      Daily Reels, quotes, and story previews
                    </p>
                  </div>
                  <span className="ml-auto text-[#6b5b4e]">&rarr;</span>
                </a>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-lg border border-[#1a1008] bg-[#1a1008]/30 p-4 transition-all hover:border-[#c9a84c]/30 hover:bg-[#1a1008]/60"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c9a84c]/10 text-center font-serif font-bold text-[#c9a84c]">
                    FB
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-[#f5f0e8] group-hover:text-[#c9a84c]">
                      Facebook
                    </h3>
                    <p className="text-sm text-[#6b5b4e]">
                      Community discussions and story sharing
                    </p>
                  </div>
                  <span className="ml-auto text-[#6b5b4e]">&rarr;</span>
                </a>
              </div>

              {/* Email contact */}
              <div className="rounded-xl border border-[#1a1008] bg-[#1a1008]/30 p-6">
                <h3 className="font-serif text-base font-bold text-[#d4a574]">
                  Prefer Email?
                </h3>
                <p className="mt-1 text-sm text-[#6b5b4e]">
                  Reach out directly at{" "}
                  <span className="text-[#c9a84c]">
                    hello@talesofthemotherland.com
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== BOTTOM CTA ====== */}
      <section className="border-t border-[#1a1008] bg-[#1a1008] py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-2xl font-bold text-[#f5f0e8] sm:text-3xl">
            Know a Story the World Should Hear?
          </h2>
          <p className="mt-3 text-[#6b5b4e]">
            If you have a folktale from your family or culture, we want to
            feature it. Help us preserve these stories for future generations.
          </p>
          <Link
            to="/stories"
            className="mt-6 inline-block rounded-lg border border-[#c9a84c] px-8 py-3 font-medium text-[#c9a84c] transition-all hover:bg-[#c9a84c] hover:text-[#0a0a0a]"
          >
            Explore Our Library
          </Link>
        </div>
      </section>
    </div>
  );
}