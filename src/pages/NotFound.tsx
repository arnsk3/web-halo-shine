import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    const title = "Page not found (404) — Senthil Nagappan";
    const description =
      "The page you're looking for can't be found. Return to senthilnagappan.com for AI safety, human systems integration, and accessibility work.";
    const canonical = `https://web-halo-shine.lovable.app${location.pathname}`;

    document.title = title;

    const upsertMeta = (attr: "name" | "property", key: string, content: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", "noindex, follow");
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonical);
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);

    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonical);

    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <a
        href="#notfound-main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-[rgb(var(--c-primary))] focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--c-accent-light))]"
      >
        Skip to main content
      </a>
      <main
        id="notfound-main"
        tabIndex={-1}
        className="flex min-h-screen items-center justify-center bg-[#fafbfc] focus:outline-none"
      >
        <div className="text-center px-6 max-w-lg">
          <p
            aria-hidden="true"
            className="text-6xl font-extrabold text-[rgb(var(--c-primary))] mb-2 tracking-tight"
          >
            404
          </p>
          <h1 className="text-2xl font-bold text-gray-900 mb-3">
            Page not found
          </h1>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We can't find the page you're looking for. The link may be broken, or
            the page may have moved.
          </p>
          <a
            href="/"
            className="inline-block bg-[rgb(var(--c-primary))] text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-[rgb(var(--c-accent-light))] hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--c-primary))] focus-visible:ring-offset-2"
          >
            Return to home
          </a>
        </div>
      </main>
    </>
  );
};

export default NotFound;
