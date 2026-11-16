
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Men', path: '/men' },
    { name: 'Women', path: '/women' },
    { name: 'Kids', path: '/kids' },
    { name: 'Categories', path: '/#categories' },
    { name: 'Shop', path: '/#shop' },
    { name: 'About', path: '/#about' },
  ];

  const linkClass = ({ isActive }) =>
    `text-sm transition-colors hover:text-[#7898a5] ${
      isActive ? 'font-semibold text-[#7898a5]' : 'text-[#252a30]'
    }`;

  return (
    <header className="relative z-50 border-b border-gray-100 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="text-2xl font-bold tracking-tight text-[#252a30]"
        >
          CozyCart<span className="text-[#7898a5]">.</span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={linkClass}
              end={link.path === '/'}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Bag and mobile menu button */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="whitespace-nowrap text-sm font-medium text-[#252a30]"
          >
            Bag (0)
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 text-[#252a30] lg:hidden"
          >
            {menuOpen ? (
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="absolute left-0 top-full w-full border-t border-gray-100 bg-white px-5 py-3 shadow-lg lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `border-b border-gray-100 px-2 py-3 text-sm transition-colors last:border-b-0 hover:text-[#7898a5] ${
                    isActive
                      ? 'font-semibold text-[#7898a5]'
                      : 'text-[#252a30]'
                  }`
                }
                end={link.path === '/'}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
