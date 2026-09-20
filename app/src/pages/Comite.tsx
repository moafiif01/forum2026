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
    <div className="absolute inset-0 z-0 overflow-hidden bg-slate-50">
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(ellipse at 30% 20%, rgba(105,161,184,0.15) 0%, transparent 40%),
            radial-gradient(ellipse at 70% 80%, rgba(30,45,74,0.1) 0%, transparent 40%),
            radial-gradient(ellipse at 50% 50%, rgba(105,161,184,0.1) 0%, transparent 50%),
            linear-gradient(180deg, #f8fafc 0%, #ffffff 50%, #f1f5f9 100%)
          `,
        }}
      />
    </div>
  );
}

function MemberCard({ member, index }: { member: CommitteeMember; index: number }) {
  return (
    <div
      className={`border border-navy/10 rounded-xl bg-white shadow-sm overflow-hidden group ${member.isLead ? 'md:col-span-1' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="overflow-hidden">
        {/* Photo placeholder */}
        <div className="relative h-64 md:h-72 overflow-hidden bg-slate-100">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-teal/10 flex items-center justify-center border border-teal/20">
              <span className="font-orbitron font-bold text-2xl text-teal/80">
                {member.name.charAt(0)}
              </span>
            </div>
          </div>
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </div>

        {/* Info */}
        <div className="p-5">
          <h4 className="font-orbitron font-bold text-sm text-navy tracking-wider mb-1">
            {member.name}
          </h4>
          <p className="font-montserrat text-[11px] text-teal font-bold tracking-wider uppercase mb-1">
            {member.role}
          </p>
          <p className="font-montserrat text-[10px] text-navy/60 font-medium tracking-wider">
            {member.department}
          </p>
          
          {/* Social icons */}
          <div className="flex gap-3 mt-4">
            <button className="text-navy/40 hover:text-teal transition-colors">
              <Linkedin size={16} />
            </button>
            <button className="text-navy/40 hover:text-teal transition-colors">
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
          <h1 className="font-orbitron font-black text-4xl md:text-6xl text-navy tracking-[0.05em]">
            LE COMITÉ DE LA
          </h1>
          <p className="font-orbitron font-bold text-lg md:text-2xl text-teal tracking-[0.15em] mt-2">
            XXXIIÈME ÉDITION
          </p>
        </div>

        {/* Group Photo */}
        <div className="container-padding max-w-4xl mx-auto mb-20">
          <div className="relative rounded-2xl overflow-hidden border border-navy/10 shadow-sm bg-white p-2">
            <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-slate-100 via-white to-slate-100 flex items-center justify-center">
              <div className="text-center">
                <div className="flex justify-center gap-4 mb-6">
                  {[...Array(6)].map((_, i) => (
                    <div 
                      key={i} 
                      className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-teal/10 to-navy/10 border border-teal/20"
                    />
                  ))}
                </div>
                <p className="font-orbitron font-bold text-lg md:text-xl text-navy/80 tracking-wider">
                  UN COMITÉ PRODIGE,
                </p>
                <p className="font-orbitron font-bold text-lg md:text-xl text-teal tracking-wider">
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
