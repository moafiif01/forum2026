import { useScrollReveal } from '@/hooks/useScrollReveal';
import SectionHeader from '@/components/SectionHeader';

interface PartnerTier {
  name: string;
  gradientClass: string;
  partners: string[];
}

const tiers: PartnerTier[] = [
  {
    name: 'OFFICIEL',
    gradientClass: 'text-gradient-gold',
    partners: ['Banque Populaire', 'Attijariwafa Bank', 'Capgemini', 'Capgemini Engineering', 'CMS'],
  },
  {
    name: 'PLATINIUM',
    gradientClass: 'text-gradient-platinum',
    partners: ['CDM', 'BMCI', 'Maghreb Steel', 'SGM', 'SOGEA', 'TAQA Morocco'],
  },
  {
    name: 'GOLD',
    gradientClass: 'text-gradient-gold',
    partners: ['Société Générale', 'CFG Bank', 'EMB', 'ENGIE', 'UM6P', 'JESA', 'LafargeHolcim', 'La Marocaine Vie', 'Lesieur Cristal', 'Managem', 'Masen', 'NAREVA', 'SNTL', 'Al Omrane'],
  },
  {
    name: 'SILVER+',
    gradientClass: 'text-gradient-silver',
    partners: ['Al Wataniya Bank', 'BAG', 'UGGC', 'BUTEC', 'Clemessy', 'Crouzet', 'Portnet', 'TGCC', 'Total Energies'],
  },
  {
    name: 'SILVER',
    gradientClass: 'text-gradient-silver',
    partners: ['BIM', 'OMCo'],
  },
];

function CrystalBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Iridescent gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 20% 30%, rgba(100,50,200,0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, rgba(0,200,200,0.1) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(200,0,150,0.08) 0%, transparent 60%),
            linear-gradient(135deg, #0a0010 0%, #000510 30%, #001510 60%, #0a0010 100%)
          `,
        }}
      />
      
      {/* Floating crystal shapes */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${6 + Math.random() * 4}s`,
          }}
        >
          <svg
            width={20 + Math.random() * 40}
            height={20 + Math.random() * 40}
            viewBox="0 0 40 40"
            fill="none"
            style={{
              filter: `drop-shadow(0 0 ${8 + Math.random() * 12}px rgba(${100 + Math.random() * 155}, ${50 + Math.random() * 150}, ${200 + Math.random() * 55}, 0.4))`,
              opacity: 0.3 + Math.random() * 0.4,
            }}
          >
            <polygon
              points="20,2 35,15 30,35 10,35 5,15"
              fill={`rgba(${100 + Math.random() * 155}, ${50 + Math.random() * 150}, ${200 + Math.random() * 55}, 0.2)`}
              stroke={`rgba(${150 + Math.random() * 105}, ${100 + Math.random() * 155}, ${200 + Math.random() * 55}, 0.5)`}
              strokeWidth="1"
            />
          </svg>
        </div>
      ))}

      {/* Subtle shimmer overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'url("data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3ClinearGradient id="g" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:rgba(0,200,255,0.03)"/%3E%3Cstop offset="50%25" style="stop-color:rgba(200,0,255,0.02)"/%3E%3Cstop offset="100%25" style="stop-color:rgba(255,200,0,0.03)"/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill="url(%23g)" width="100" height="100"/%3E%3C/svg%3E")',
        }}
      />
    </div>
  );
}

export default function Partenaires() {
  const tiersRef = useScrollReveal<HTMLDivElement>({ children: true, stagger: 0.15 });

  return (
    <div className="relative min-h-screen">
      <CrystalBackground />
      
      <div className="relative z-10 pt-32 pb-20">
        {/* Hero */}
        <div className="container-padding text-center mb-20">
          <h1 className="font-orbitron font-black text-4xl md:text-6xl lg:text-7xl text-white tracking-[0.05em] mb-4">
            NOS PARTENAIRES
          </h1>
          <p className="font-montserrat text-sm md:text-base text-pink tracking-[0.3em] uppercase">
            Ensemble, nous bâtissons l'avenir
          </p>
        </div>

        {/* Partner Tiers */}
        <div className="container-padding max-w-6xl mx-auto" ref={tiersRef}>
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="glass-card rounded-2xl p-6 md:p-10 mb-8"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                {/* Tier Label */}
                <div className="md:w-40 shrink-0 flex items-center md:justify-center">
                  <h3 className={`font-orbitron font-bold text-xl md:text-2xl ${tier.gradientClass} tracking-wider`}>
                    {tier.name}
                  </h3>
                </div>

                {/* Partner Logos */}
                <div className="flex-1">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {tier.partners.map((partner) => (
                      <div
                        key={partner}
                        className="bg-white rounded-lg p-4 flex items-center justify-center h-20 hover:shadow-lg transition-shadow duration-300"
                      >
                        <span className="font-montserrat font-semibold text-xs text-gray-700 text-center leading-tight">
                          {partner}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ILS NOUS ONT FAIT CONFIANCE */}
        <div className="container-padding mt-20">
          <SectionHeader
            title="ILS NOUS ONT FAIT CONFIANCE"
            subtitle=""
            glowColor="gold"
          />
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 md:p-10">
            <div className="flex flex-wrap justify-center gap-3">
              {tiers.flatMap(t => t.partners).map((p, i) => (
                <div key={i} className="px-3 py-1.5 bg-gray-100 rounded-md">
                  <span className="font-montserrat text-[10px] text-gray-600 font-medium">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
