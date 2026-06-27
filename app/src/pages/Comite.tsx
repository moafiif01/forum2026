import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Linkedin, Mail } from 'lucide-react';

interface CommitteeMember {
  name: string;
  role: string;
  department: string;
  isLead?: boolean;
}

const committee: CommitteeMember[] = [
  { name: 'ARHERHOUR ELIAS', role: 'PRÉSIDENT', department: 'GÉNIE INFORMATIQUE ET DIGITALISATION', isLead: true },
  { name: 'WALIDI RANIA', role: 'VICE-PRÉSIDENTE', department: 'GÉNIE INDUSTRIEL', isLead: true },
  { name: 'ESSAKNI CHAIMAA', role: 'RESPONSABLE COMMUNICATION EXTERNE', department: 'GÉNIE INDUSTRIEL' },
  { name: 'DADSSI MANAL', role: 'RESPONSABLE COMMUNICATION EXTERNE', department: 'GÉNIE INDUSTRIEL' },
  { name: 'BACHERKI ABDERRAHMAN', role: 'RESPONSABLE COMMUNICATION EXTERNE', department: 'GÉNIE CIVIL' },
  { name: 'SOUADI NOUAMANE', role: 'RESPONSABLE TRÉSORERIE ET LOGISTIQUE', department: 'GÉNIE ÉLECTRIQUE' },
  { name: 'EL AAGOUBY SOFIA', role: 'RESPONSABLE TRÉSORERIE ET LOGISTIQUE', department: 'GÉNIE INDUSTRIEL' },
  { name: 'BIK OUSAMA', role: 'RESPONSABLE COMMUNICATION DIGITALE', department: 'GÉNIE INDUSTRIEL' },
  { name: 'RAYME NIKIEMA', role: 'RESPONSABLE COMMUNICATION DIGITALE', department: 'GÉNIE ÉLECTRIQUE' },
  { name: 'BAZOUY ABDESSAMAD', role: 'RESPONSABLE CONFÉRENCE ET FORMATION', department: 'GÉNIE CIVIL' },
  { name: 'OUAKIL OUMAIMA', role: 'RESPONSABLE REVUE', department: 'GÉNIE MIS' },
];

function CosmicBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 30% 20%, rgba(255,20,147,0.12) 0%, transparent 40%),
            radial-gradient(ellipse at 70% 80%, rgba(156,39,176,0.1) 0%, transparent 40%),
            radial-gradient(ellipse at 50% 50%, rgba(80,0,60,0.15) 0%, transparent 50%),
            linear-gradient(180deg, #0a0008 0%, #050005 50%, #08000a 100%)
          `,
        }}
      />
      
      {/* Floating pink crystals */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${5 + Math.random() * 5}s`,
          }}
        >
          <svg
            width={15 + Math.random() * 35}
            height={15 + Math.random() * 35}
            viewBox="0 0 40 40"
            fill="none"
            style={{
              filter: `drop-shadow(0 0 ${10 + Math.random() * 15}px rgba(255,20,147,0.5))`,
              opacity: 0.2 + Math.random() * 0.3,
            }}
          >
            <polygon
              points="20,0 38,15 32,38 8,38 2,15"
              fill="rgba(255,20,147,0.1)"
              stroke="rgba(255,20,147,0.4)"
              strokeWidth="1"
            />
            <polygon
              points="20,5 33,16 28,34 12,34 7,16"
              fill="rgba(233,30,140,0.08)"
            />
          </svg>
        </div>
      ))}

      {/* Stars */}
      {[...Array(30)].map((_, i) => (
        <div
          key={`star-${i}`}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            width: `${1 + Math.random() * 2}px`,
            height: `${1 + Math.random() * 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.2 + Math.random() * 0.5,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
}

function MemberCard({ member, index }: { member: CommitteeMember; index: number }) {
  return (
    <div
      className={`gradient-border-pink group ${member.isLead ? 'md:col-span-1' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="overflow-hidden">
        {/* Photo placeholder */}
        <div className="relative h-64 md:h-72 overflow-hidden bg-gradient-to-b from-[#1a0a15] to-[#0d050a]">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pink/20 to-purple/20 flex items-center justify-center border border-pink/20">
              <span className="font-orbitron font-bold text-2xl text-pink/60">
                {member.name.charAt(0)}
              </span>
            </div>
          </div>
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
        </div>

        {/* Info */}
        <div className="p-5">
          <h4 className="font-orbitron font-bold text-sm text-white tracking-wider mb-1">
            {member.name}
          </h4>
          <p className="font-montserrat text-[11px] text-pink tracking-wider uppercase mb-1">
            {member.role}
          </p>
          <p className="font-montserrat text-[10px] text-white/40 tracking-wider">
            {member.department}
          </p>
          
          {/* Social icons */}
          <div className="flex gap-3 mt-4">
            <button className="text-white/30 hover:text-pink transition-colors">
              <Linkedin size={16} />
            </button>
            <button className="text-white/30 hover:text-pink transition-colors">
              <Mail size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Comite() {
  const leads = committee.filter((m) => m.isLead);
  const members = committee.filter((m) => !m.isLead);
  const gridRef = useScrollReveal<HTMLDivElement>({ children: true, stagger: 0.1 });

  return (
    <div className="relative min-h-screen">
      <CosmicBackground />
      
      <div className="relative z-10 pt-32 pb-20">
        {/* Hero */}
        <div className="container-padding text-center mb-12">
          <h1 className="font-orbitron font-black text-4xl md:text-6xl text-white tracking-[0.05em]">
            LE COMITÉ DE LA
          </h1>
          <p className="font-orbitron font-bold text-lg md:text-2xl text-pink glow-pink tracking-[0.15em] mt-2">
            XXXIIÈME ÉDITION
          </p>
        </div>

        {/* Group Photo */}
        <div className="container-padding max-w-4xl mx-auto mb-20">
          <div className="relative rounded-2xl overflow-hidden border border-pink/20 shadow-[0_0_30px_rgba(255,20,147,0.1)]">
            <div className="aspect-video bg-gradient-to-br from-[#1a0a15] via-[#0d050a] to-[#1a0a15] flex items-center justify-center">
              <div className="text-center">
                <div className="flex justify-center gap-4 mb-6">
                  {[...Array(6)].map((_, i) => (
                    <div 
                      key={i} 
                      className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-pink/20 to-purple/20 border border-pink/20"
                    />
                  ))}
                </div>
                <p className="font-orbitron font-bold text-lg md:text-xl text-white/80 tracking-wider">
                  UN COMITÉ PRODIGE,
                </p>
                <p className="font-orbitron font-bold text-lg md:text-xl text-pink tracking-wider">
                  POUR UN FORUM D'EXCEPTION
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Committee Grid */}
        <div className="container-padding max-w-6xl mx-auto" ref={gridRef}>
          {/* Leads */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {leads.map((member, i) => (
              <MemberCard key={member.name} member={member} index={i} />
            ))}
          </div>

          {/* Members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((member, i) => (
              <MemberCard key={member.name} member={member} index={i + leads.length} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
