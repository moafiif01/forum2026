import { Linkedin, Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5">
      <div className="container-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo + Social */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src="/forum%20logo%20white.png" alt="Forum ENSAM-Rabat Logo" className="w-12 h-12 object-contain" />
              <div>
                <div className="font-orbitron font-bold text-sm text-white leading-tight tracking-wider">
                  FORUM
                </div>
                <div className="font-montserrat text-[9px] text-white/70 tracking-[0.2em] leading-tight">
                  ENSAM-RABAT
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              {[
                { Icon: Linkedin, href: '#' },
                { Icon: Facebook, href: '#' },
                { Icon: Instagram, href: '#' },
                { Icon: Youtube, href: '#' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="text-white/60 hover:text-pink hover:shadow-glow-pink transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* À Propos */}
          <div>
            <h4 className="font-montserrat font-semibold text-white text-sm tracking-wider mb-4">
              À Propos
            </h4>
            <p className="font-montserrat text-sm text-white/60 leading-relaxed">
              Le Forum Industriel de l'ENSAM Rabat est un événement majeur visant à consolider l'alliance entre l'Université et l'Entreprise pour former les leaders de demain.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-montserrat font-semibold text-white text-sm tracking-wider mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-white/40 mt-1 shrink-0" />
                <span className="font-montserrat text-sm text-white/60">
                  École Nationale Supérieure d'Arts et Métiers,<br />
                  Université Mohammed V, Rabat, Maroc
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-white/40 shrink-0" />
                <span className="font-montserrat text-sm text-white/60">(+212) 537 687 150</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-white/40 shrink-0" />
                <span className="font-montserrat text-sm text-white/60">contact@forumensamrabat.com</span>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div>
            <h4 className="font-montserrat font-semibold text-white text-sm tracking-wider mb-4">
              Crédits
            </h4>
            <p className="font-montserrat text-sm text-white/60 mb-2">
              Made by <span className="text-white/80">Zyad Khalef</span>
            </p>
            <p className="font-montserrat text-xs text-white/40">
              Forum ENSAM-Rabat &copy; 2024-{new Date().getFullYear()}. All rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
