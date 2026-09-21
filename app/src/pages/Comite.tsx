import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Linkedin, Mail } from 'lucide-react';

interface CommitteeMember {
  name: string;
  role: string;
  department: string;
  linkedin?: string;
  email: string;
  image: string;
}

interface CommitteeSection {
  title: string;
  members: CommitteeMember[];
}

const bureauData: CommitteeSection[] = [
  {
    title: 'LE BUREAU EXÉCUTIF',
    members: [
      { name: 'Nihale Fenzari', role: 'Présidente', department: 'Ingénierie automobile et aéronautique', email: 'Nihale_Fenzari@um5.ac.ma', linkedin: 'https://linkedin.com', image: '/images/bureau/Nihale Fenzari.jpg' },
      { name: 'Rim Jouilil', role: 'Vice-présidente', department: 'Génie mécanique', email: 'jouililrim.ensamr@gmail.com', linkedin: 'https://linkedin.com', image: '/images/bureau/Rim Jouilil.jpg' },
      { name: 'Malak Moukrim', role: 'Cheffe de Pôle communication et partenariats', department: 'Génie électrique et industrie numérique', email: 'malakmoukruni@gmail.com', image: '/images/bureau/Malak Moukrim.jpg' },
    ]
  },
  {
    title: 'CELLULE COMMUNICATION ET PROSPECTION',
    members: [
      { name: 'Sara Nadi', role: 'Cheffe Cellule Communication et Prospection', department: 'Génie électrique et industries numériques', email: 'nadisara1805@gmail.com', linkedin: 'https://linkedin.com', image: '/images/bureau/Nadi Sara.jpg' },
      { name: 'Ayoub Ait Boubker', role: 'Membre Cellule Communication et Prospection', department: 'Génie électrique et industries numériques', email: 'ayoub.aitboubker.um5r@gmail.com', linkedin: 'https://linkedin.com', image: '/images/bureau/Ayoub Ait Boubker.jpg' },
      { name: 'Ghita Saidi', role: 'Membre Cellule Communication et Prospection', department: 'Années préparatoires intégrées', email: 'saidighita07@gmail.com', linkedin: 'https://linkedin.com', image: '/images/bureau/Ghita Saidi.jpg' },
    ]
  },
  {
    title: 'CELLULE SPONSORING & PARTENARIATS',
    members: [
      { name: 'Fatima Azzahrae Madani', role: 'Cheffe Cellule Sponsoring et Partenariats', department: 'Génie biomédical', email: 'faellacimadani@gmail.com', linkedin: 'https://linkedin.com', image: '/images/bureau/Fatima Azzahrae Madani.jpg' },
      { name: 'Ilias Iazza', role: 'Membre Cellule Sponsoring et Partenariats', department: 'Ingénierie Automobile et Aéronautique', email: 'iliasiazza0@gmail.com', linkedin: 'https://linkedin.com', image: '/images/bureau/Ilias Lazza.jpg' },
      { name: 'Alae Hnine', role: 'Membre Cellule Sponsoring et Partenariats', department: 'Génie électrique et industrie numérique', email: 'hninealae05@gmail.com', linkedin: 'https://linkedin.com', image: '/images/bureau/Alae Hnine.jpg' },
      { name: 'Siham Ait SI', role: 'Membre Cellule Sponsoring et Partenariats', department: 'Ingénierie des systèmes énergétiques', email: 'sihamaitsi34@gmail.com', linkedin: 'https://linkedin.com', image: '/images/bureau/Siham Ait SI.jpg' },
    ]
  },
  {
    title: 'CELLULE LOGISTIQUE',
    members: [
      { name: 'Nouhaila Salek', role: 'Cheffe Cellule Logistique', department: 'Ingénierie des systèmes énergétiques et environnement', email: 'nouhailasalek05@gmail.com', linkedin: 'https://linkedin.com', image: '/images/bureau/Nouhaila Salek.jpg' },
      { name: 'Imane Khalid', role: 'Membre Cellule Logistique', department: '', email: 'Imanekhalidofficiel777@gmail.com', linkedin: 'https://linkedin.com', image: '/images/bureau/Imane khalid.jpg' },
      { name: 'Hassan Rakkan', role: 'Membre Cellule Logistique', department: 'Génie électrique et industrie numérique', email: 'reknehassn@gmail.com', linkedin: 'https://linkedin.com', image: '/images/bureau/Hassan Rakkan.jpg' },
    ]
  },
  {
    title: 'CELLULE MEDIA ET DESIGN',
    members: [
      { name: 'Douae Laarod', role: 'Cheffe Cellule Media et design', department: 'Génie électrique et industrie numérique', email: 'douaelaar123@gmail.com', linkedin: 'https://linkedin.com', image: '/images/bureau/Laarod Douae.jpg' },
      { name: 'Kazelma Izerou Chaibou', role: 'Membre Cellule Media et design', department: 'Ingénierie automobile et aéronautique', email: 'izeirouk@gmail.com', linkedin: 'https://linkedin.com', image: '/images/bureau/Kazelma Izerou Chaibou.jpg' },
      { name: 'Amira El Bir', role: 'Membre Cellule Media et design', department: 'Ingénierie numérique en data et IA', email: 'amiraelbir36@gmail.com', linkedin: 'https://linkedin.com', image: '/images/bureau/Amira El Bir.jpg' },
      { name: 'Hajar Fatam', role: 'Membre Cellule Media et design', department: 'Ingénierie aéronautique', email: 'hajarfatam853@gmail.com', linkedin: 'https://linkedin.com', image: '/images/bureau/Hajar Fatam.jpg' },
    ]
  }
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
      className="border border-navy/10 rounded-2xl bg-white shadow-sm overflow-hidden group hover:shadow-md transition-shadow duration-300"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="overflow-hidden flex flex-col h-full">
        {/* Photo */}
        <div className="relative h-64 md:h-72 overflow-hidden bg-slate-100 flex-shrink-0">
          <img 
            src={member.image} 
            alt={member.name}
            className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80" />
        </div>

        {/* Info */}
        <div className="p-5 flex flex-col flex-grow">
          <h4 className="font-orbitron font-bold text-base text-navy tracking-wider mb-1">
            {member.name}
          </h4>
          <p className="font-montserrat text-xs text-teal font-bold tracking-wider uppercase mb-2">
            {member.role}
          </p>
          {member.department && (
            <p className="font-montserrat text-[11px] text-navy/60 font-medium tracking-wider mb-4 flex-grow">
              {member.department}
            </p>
          )}
          
          {/* Social icons */}
          <div className="flex gap-4 mt-auto pt-2">
            {member.linkedin && (
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-navy/40 hover:text-teal transition-colors">
                <Linkedin size={18} />
              </a>
            )}
            <a href={`mailto:${member.email}`} className="text-navy/40 hover:text-teal transition-colors">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Comite() {
  const gridRef = useScrollReveal<HTMLDivElement>({ children: true, stagger: 0.1 });

  return (
    <div className="relative min-h-screen">
      <CosmicBackground />
      
      <div className="relative z-10 pt-32 pb-20">
        {/* Hero */}
        <div className="container-padding text-center mb-20">
          <h1 className="font-orbitron font-black text-4xl md:text-5xl lg:text-6xl text-navy tracking-tight">
            LE BUREAU DU FORUM
          </h1>
          <p className="font-orbitron font-bold text-lg md:text-2xl text-teal tracking-[0.15em] mt-4">
            XXXIIÈME ÉDITION
          </p>
        </div>

        {/* Committee Sections */}
        <div className="container-padding max-w-7xl mx-auto" ref={gridRef}>
          {bureauData.map((section) => (
            <div key={section.title} className="mb-20">
              <h3 className="font-orbitron font-bold text-2xl md:text-3xl text-navy tracking-wider mb-8 border-b-2 border-teal/20 pb-4 inline-block">
                {section.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {section.members.map((member, i) => (
                  <MemberCard key={member.name} member={member} index={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
