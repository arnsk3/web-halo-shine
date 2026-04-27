import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Page not found — Senthil Nagappan";
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <a
        href="#notfound-main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-[#1B3A5C] focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8913A]"
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
            className="text-6xl font-extrabold text-[#1B3A5C] mb-2 tracking-tight"
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
            className="inline-block bg-[#1B3A5C] text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#E8913A] hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B3A5C] focus-visible:ring-offset-2"
          >
            Return to home
          </a>
        </div>
      </main>
    </>
  );
};

export default NotFound;
