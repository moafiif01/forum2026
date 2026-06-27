import { Linkedin, Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5">
      <div className="container-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo + Social */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 border-2 border-white rounded-lg flex items-center justify-center">
                <span className="font-orbitron font-bold text-lg text-white">F</span>
              </div>
              <div>
                <div className="font-orbitron font-bold text-sm text-white leading-tight tracking-wider">
                  FORUM
                </div>
                <div className="font-montserrat text-[9px] text-white/70 tracking-[0.2em] leading-tight">
                  EMI-ENTREPRISES
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
              Indétrônable du palmarès des salons de recrutement au Maroc, le Forum EMI-Enterprises se dépasse
              d'année en année. Les éditions se succèdent, en gardant toujours son statut de Leader National.
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
                  Ecole Mohammadia d'Ingénieurs,<br />
                  Av Ibn Sina, Agdal. Rabat, Maroc
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-white/40 shrink-0" />
                <span className="font-montserrat text-sm text-white/60">(+212) 537 687 150</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-white/40 shrink-0" />
                <span className="font-montserrat text-sm text-white/60">contact@forumemientreprises.com</span>
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
              Forum EMI-Entreprises &copy; 1994-{new Date().getFullYear()}. All rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
