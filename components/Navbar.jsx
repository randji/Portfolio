import { useState } from 'react';
import Link from 'next/link';
import { Menu, X,Github } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <img src="/logo.png" alt="Logo" className="h-40 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/#about" className="hover:text-primary transition-colors">
              À propos
            </Link>
            <Link href="/#projects" className="hover:text-primary transition-colors">
              Projets
            </Link>
            <Link href="/#contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
            <a
                  href="https://github.com/randji"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Github size={18} />
                  GitHub
                </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
            <Link
              href="/#about"
              className="block px-3 py-2 hover:bg-gray-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              À propos
            </Link>
            <Link
              href="/#projects"
              className="block px-3 py-2 hover:bg-gray-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Projets
            </Link>
            <Link
              href="/#contact"
              className="block px-3 py-2 hover:bg-gray-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 