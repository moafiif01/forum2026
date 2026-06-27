import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Calendar, MapPin, Clock } from 'lucide-react';

interface Presentation {
  company: string;
  color: string;
  textColor: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

const presentations: Presentation[] = [
  {
    company: 'Schneider Electric',
    color: '#3C8F37',
    textColor: '#fff',
    date: 'Mercredi 30 Octobre',
    time: '18h30',
    location: "Grand Amphi de l'EMI",
    description: 'Du spécialiste mondial en gestion de l\'énergie et en automatisation',
  },
  {
    company: 'Wavestone',
    color: '#6B2D8E',
    textColor: '#fff',
    date: 'Jeudi 21 Novembre',
    time: '12h30',
    location: "Grand Amphi de l'EMI",
    description: 'Du cabinet de Conseil en Management et Transformation d\'Entreprises et d\'Organisations',
  },
  {
    company: 'Forvis Mazars',
    color: '#1A3A8C',
    textColor: '#fff',
    date: 'Lundi 25 Novembre',
    time: '12h00',
    location: "Grand Amphi de l'EMI",
    description: 'Du spécialiste dans l\'audit, la fiscalité et le conseil',
  },
  {
    company: 'VINCI ENERGIES',
    color: '#E6E6FA',
    textColor: '#333',
    date: 'Lundi 9 Décembre',
    time: '12h00',
    location: "Grand Amphi de l'EMI",
    description: 'Spécialiste des solutions énergétiques et des réseaux de télécommunications',
  },
];

const pfeBanners = [
  { color: 'from-orange-500 to-orange-700', label: 'PFE 2024 - Filière Informatique' },
  { color: 'from-green-500 to-green-700', label: 'PFE 2024 - Filière Industriel' },
  { color: 'from-purple-500 to-purple-700', label: 'PFE 2024 - Filière Électrique' },
  { color: 'from-blue-500 to-blue-700', label: 'PFE 2024 - Filière Mécanique' },
];

const recruitBanners = [
  { color: 'from-cyan-500 to-blue-700', label: 'Recrutement 2024 - CDI' },
  { color: 'from-pink-500 to-purple-700', label: 'Recrutement 2024 - Stage' },
  { color: 'from-yellow-500 to-orange-700', label: 'Recrutement 2024 - Alternance' },
];

function LightStreaks() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute h-px animate-streak"
          style={{
            width: '150%',
            left: '-25%',
            top: `${15 + i * 15}%`,
            background: `linear-gradient(90deg, transparent, rgba(255,255,255,${0.03 + Math.random() * 0.05}), transparent)`,
            animationDelay: `${i * 1.5}s`,
            animationDuration: `${8 + Math.random() * 6}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function Services() {
  const presRef = useScrollReveal<HTMLDivElement>({ children: true, stagger: 0.1 });

  return (
    <div className="relative min-h-screen bg-black">
      <LightStreaks />
      
      <div className="relative z-10 pt-32 pb-20">
        {/* Hero */}
        <div className="container-padding text-center mb-16">
          <h1 className="font-orbitron font-black text-4xl md:text-6xl text-cyan glow-cyan tracking-[0.05em]">
            XXXI ÉDITION
          </h1>
          <p className="font-montserrat text-base md:text-lg text-white/60 italic tracking-wider mt-3">
            L'ÉLAN DU RENOUVEAU ET DE L'EXCELLENCE
          </p>
        </div>

        {/* Présentations 2024 */}
        <div className="container-padding mb-20">
          <h2 className="font-montserrat font-bold text-xl md:text-2xl text-white tracking-wider mb-8">
            Présentations 2024
          </h2>
          
          <div ref={presRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {presentations.map((pres) => (
              <div
                key={pres.company}
                className="rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300"
                style={{ backgroundColor: pres.color }}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-montserrat font-bold text-lg" style={{ color: pres.textColor }}>
                      {pres.company}
                    </span>
                    <div className="font-orbitron text-xs opacity-60" style={{ color: pres.textColor }}>
                      XXXI
                    </div>
                  </div>
                  
                  <p className="font-montserrat text-xs leading-relaxed mb-6 opacity-80" style={{ color: pres.textColor }}>
                    {pres.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2" style={{ color: pres.textColor }}>
                      <Calendar size={14} className="opacity-60" />
                      <span className="font-montserrat text-xs opacity-80">{pres.date}</span>
                    </div>
                    <div className="flex items-center gap-2" style={{ color: pres.textColor }}>
                      <Clock size={14} className="opacity-60" />
                      <span className="font-montserrat text-xs opacity-80">{pres.time}</span>
                    </div>
                    <div className="flex items-center gap-2" style={{ color: pres.textColor }}>
                      <MapPin size={14} className="opacity-60" />
                      <span className="font-montserrat text-xs opacity-80">{pres.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Campagne PFE 2024 */}
        <div className="container-padding mb-16">
          <h2 className="font-montserrat font-bold text-xl md:text-2xl text-white tracking-wider mb-8">
            Campagne PFE 2024
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {pfeBanners.map((banner, i) => (
              <div
                key={i}
                className={`shrink-0 w-64 md:w-80 h-32 rounded-xl bg-gradient-to-r ${banner.color} flex items-center justify-center`}
              >
                <span className="font-orbitron font-bold text-sm text-white tracking-wider text-center px-4">
                  {banner.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Campagne Recrutement 2024 */}
        <div className="container-padding">
          <h2 className="font-montserrat font-bold text-xl md:text-2xl text-white tracking-wider mb-8">
            Campagne Recrutement 2024
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {recruitBanners.map((banner, i) => (
              <div
                key={i}
                className={`shrink-0 w-64 md:w-80 h-32 rounded-xl bg-gradient-to-r ${banner.color} flex items-center justify-center`}
              >
                <span className="font-orbitron font-bold text-sm text-white tracking-wider text-center px-4">
                  {banner.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
