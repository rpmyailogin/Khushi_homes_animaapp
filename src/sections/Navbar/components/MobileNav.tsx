import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 text-black hover:bg-black/5 rounded transition-colors touch-manipulation"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div
        className={`fixed top-[57px] left-0 right-0 bg-white border-b border-black/10 shadow-lg transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <nav className="flex flex-col p-5 gap-y-1">
          <Link
            to="/"
            onClick={closeMenu}
            className="text-black text-sm uppercase py-3 px-4 hover:bg-black/5 rounded transition-colors touch-manipulation"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={closeMenu}
            className="text-black text-sm uppercase py-3 px-4 hover:bg-black/5 rounded transition-colors touch-manipulation"
          >
            About us
          </Link>
          <Link
            to="/services"
            onClick={closeMenu}
            className="text-black text-sm uppercase py-3 px-4 hover:bg-black/5 rounded transition-colors touch-manipulation"
          >
            Services
          </Link>
          <Link
            to="/projects"
            onClick={closeMenu}
            className="text-black text-sm uppercase py-3 px-4 hover:bg-black/5 rounded transition-colors touch-manipulation"
          >
            Projects
          </Link>
          <Link
            to="/blogs"
            onClick={closeMenu}
            className="text-black text-sm uppercase py-3 px-4 hover:bg-black/5 rounded transition-colors touch-manipulation"
          >
            Blogs
          </Link>
          <Link
            to="/contact"
            onClick={closeMenu}
            className="text-black text-sm uppercase py-3 px-4 hover:bg-black/5 rounded transition-colors touch-manipulation"
          >
            Contact
          </Link>
        </nav>
      </div>
    </>
  );
};
