import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
  Link,
  useLocation,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "~/styles/app.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Tales of the Motherland — African Folktales & Ancient Wisdom" },
      {
        name: "description",
        content:
          "Discover authentic African folktales, forgotten legends, and ancient wisdom. Daily stories that connect the diaspora to the motherland.",
      },
      { name: "theme-color", content: "#0a0a0a" },
      { property: "og:title", content: "Tales of the Motherland" },
      {
        property: "og:description",
        content:
          "Ancient African stories, forgotten legends, and timeless wisdom — retold daily.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
    ],
  }),
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-[#0a0a0a]">
      <div className="text-center">
        <h1 className="font-serif text-6xl font-bold text-[#c9a84c]">404</h1>
        <p className="mt-4 text-[#6b5b4e]">This page has been lost to time...</p>
        <Link
          to="/"
          className="mt-6 inline-block rounded border border-[#c9a84c] px-6 py-2 font-medium text-[#c9a84c] transition-colors hover:bg-[#c9a84c] hover:text-[#0a0a0a]"
        >
          Return Home
        </Link>
      </div>
    </div>
  ),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function NavBar() {
  const location = useLocation();
  const path = location.pathname;

  const links = [
    { to: "/", label: "Home" },
    { to: "/stories", label: "Stories" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-[#1a1008] bg-[#0a0a0a]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-serif text-2xl font-bold tracking-wide text-[#c9a84c]">
            Tales of the Motherland
          </span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium tracking-wide uppercase transition-colors ${
                path === link.to
                  ? "text-[#c9a84c]"
                  : "text-[#6b5b4e] hover:text-[#d4a574]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        {/* Mobile menu - simple for now */}
        <div className="flex items-center gap-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-xs font-medium tracking-wide uppercase transition-colors ${
                path === link.to
                  ? "text-[#c9a84c]"
                  : "text-[#6b5b4e] hover:text-[#d4a574]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#1a1008] bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-serif text-xl font-bold text-[#c9a84c]">
              Tales of the Motherland
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#6b5b4e]">
              Preserving the ancient art of African storytelling for a new
              generation. Every story is a bridge between past and present.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-bold tracking-wide uppercase text-[#d4a574]">
              Connect
            </h4>
            <div className="flex flex-col gap-2 text-sm text-[#6b5b4e]">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#c9a84c]"
              >
                YouTube
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#c9a84c]"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#c9a84c]"
              >
                Facebook
              </a>
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-bold tracking-wide uppercase text-[#d4a574]">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2 text-sm text-[#6b5b4e]">
              <Link
                to="/stories"
                className="transition-colors hover:text-[#c9a84c]"
              >
                Browse Stories
              </Link>
              <Link
                to="/about"
                className="transition-colors hover:text-[#c9a84c]"
              >
                Our Mission
              </Link>
              <Link
                to="/contact"
                className="transition-colors hover:text-[#c9a84c]"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-[#1a1008] pt-8 text-center text-xs text-[#6b5b4e]">
          <p>
            &copy; {new Date().getFullYear()} Tales of the Motherland. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body className="bg-[#0a0a0a] text-[#f5f0e8]">
        <NavBar />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
        <Scripts />
      </body>
    </html>
  );
}