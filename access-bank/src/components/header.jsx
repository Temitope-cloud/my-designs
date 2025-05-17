import AccessBankLogo from "../assets/accessbank.png";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute z-10 w-full border-b border-gray-500 py-3 backdrop-blur-2xl">
      <nav className="relative mx-auto flex w-full max-w-7xl flex-wrap items-center px-4 md:px-6 lg:grid lg:grid-cols-12 lg:px-8">
        <div className="flex items-center lg:col-span-3">
          {/* Logo */}
          <a
            className="inline-block flex-none rounded-xl text-xl font-semibold focus:opacity-80 focus:outline-none"
            href="#"
            aria-label="Access Bank"
          >
            <img
              src={AccessBankLogo}
              className="w-40 brightness-0 invert filter"
              alt="Access Bank Logo"
            />
          </a>
        </div>

        {/* Button Group */}
        <div
          className="ms-auto flex items-center gap-x-1 rounded-md lg:order-3 lg:col-span-3 lg:gap-x-2"
          style={{
            clipPath:
              "polygon(0 0, 84% 0, 100% 50%, 100% 100%, 0 100%, 0% 50%)",
            background:
              "linear-gradient(to top right, #ff8400, #ff8400, #fff, #ff8400, #fff, #ff8400, #ff8400)",
            backgroundSize: "400% 400%",
            animation: "animationGradient 5s linear infinite",
          }}
        >
          <button
            type="button"
            className="relative m-1 inline-flex items-center gap-x-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-nowrap text-black hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
            style={{
              clipPath:
                "polygon(0 0, 84% 0, 100% 50%, 100% 100%, 0 100%, 0% 50%)",
            }}
          >
            Sign In
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            type="button"
            className="flex size-[38px] items-center justify-center rounded-xl border border-gray-200 text-sm font-semibold text-black hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? (
              <svg
                className="size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg
                className="size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${isMenuOpen ? "block" : "hidden"} lg:order-2 lg:col-span-6 lg:block lg:w-auto lg:basis-auto`}
        >
          <div className="mt-5 flex flex-col gap-y-4 lg:mt-0 lg:flex-row lg:items-center lg:justify-center lg:gap-x-7 lg:gap-y-0">
            {[
              { name: "Work", href: "#" },
              { name: "Services", href: "#" },
              { name: "About", href: "#" },
              { name: "Careers", href: "#" },
              { name: "Blog", href: "#" },
            ].map((link) => (
              <div key={link.name}>
                <a
                  className="inline-block text-white hover:text-gray-600 focus:text-gray-600 focus:outline-none"
                  href={link.href}
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
