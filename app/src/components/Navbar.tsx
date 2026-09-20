import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'FORUM', path: '/' },
  { label: 'PROGRAMME', path: '/programme' },
  { label: 'ENSAM RABAT', path: '/ecole' },
  { label: 'PARTENAIRES', path: '/partenaires' },
  { label: 'COMITÉ', path: '/comite' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-xl border-b border-navy/10 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container-padding flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src="/forum%20logo%20white.png" alt="Forum Industriel ENSAM-Rabat Logo" className="w-12 h-12 object-contain invert opacity-90" />
            <div className="hidden sm:block">
              <div className="font-orbitron font-bold text-sm text-navy leading-tight tracking-wider">
                FORUM
              </div>
              <div className="font-montserrat text-[9px] text-navy/70 tracking-[0.2em] leading-tight">
                ENSAM-RABAT
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-montserrat text-[11px] font-bold tracking-[0.15em] transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-teal'
                    : 'text-navy/70 hover:text-navy'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* INFOMÉDIAIRE CTA */}
          <div className="hidden lg:block">
            <span className="font-montserrat text-sm font-bold text-teal tracking-wider">
              INFOMÉDIAIRE
            </span>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-navy p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-orbitron font-bold text-xl tracking-[0.1em] transition-colors duration-300 ${
                location.pathname === link.path
                  ? 'text-teal'
                  : 'text-navy/70 hover:text-navy'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <span className="font-montserrat text-lg font-bold text-teal tracking-wider mt-4">
            INFOMÉDIAIRE
          </span>
        </div>
      </div>
    </>
  );
}
