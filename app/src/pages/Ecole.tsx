import { useScrollReveal } from '@/hooks/useScrollReveal';
import SectionHeader from '@/components/SectionHeader';
import GlassCard from '@/components/GlassCard';
import { BookOpen, GraduationCap, Award, Globe, Users, Target, Rocket, Lightbulb, Activity, Zap, Cpu, Wrench } from 'lucide-react';

const formations = [
  { title: 'CLASSES PRÉPARATOIRES', desc: 'Deux années de formation scientifique intégrée.', icon: <BookOpen size={24} /> },
  { title: 'CYCLE INGÉNIEUR', desc: 'Trois années de spécialisation dans 7 filières d\'ingénierie.', icon: <GraduationCap size={24} /> },
  { title: 'MASTERS', desc: 'Master en Mécanique Avancée · Master en Management de l\'Innovation et de la Technologie.', icon: <Award size={24} /> },
  { title: 'DOCTORAT', desc: 'Formation et recherche scientifique.', icon: <Target size={24} /> },
  { title: 'FORMATION CONTINUE', desc: 'Développement et actualisation des compétences professionnelles.', icon: <Users size={24} /> },
];

const filieres = [
  { name: 'GÉNIE ÉLECTRIQUE ET INDUSTRIES NUMÉRIQUES', icon: <Zap size={24} /> },
  { name: 'GÉNIE MÉCANIQUE', icon: <Wrench size={24} /> },
  { name: 'INGÉNIERIE AUTOMOBILE ET AÉRONAUTIQUE', icon: <Rocket size={24} /> },
  { name: 'GÉNIE BIOMÉDICAL', icon: <Activity size={24} /> },
  { name: 'INGÉNIERIE DES MATÉRIAUX ET QUALITÉ', icon: <Award size={24} /> },
  { name: 'INGÉNIERIE DES SYSTÈMES ÉNERGÉTIQUES ET ENVIRONNEMENT', icon: <Lightbulb size={24} /> },
  { name: 'INGÉNIERIE NUMÉRIQUE EN DATA SCIENCE, INTELLIGENCE ARTIFICIELLE ET SANTÉ DIGITALE', icon: <Cpu size={24} /> },
];

export default function Ecole() {
  const introRef = useScrollReveal<HTMLDivElement>();
  const formationRef = useScrollReveal<HTMLDivElement>({ children: true, stagger: 0.1 });
  const filieresRef = useScrollReveal<HTMLDivElement>({ children: true, stagger: 0.1 });
  const bottomRef = useScrollReveal<HTMLDivElement>({ children: true, stagger: 0.2 });

  return (
    <div className="relative min-h-screen bg-slate-50">
      {/* Title */}
      <section className="pt-32 pb-12 bg-slate-50 text-center relative z-10">
        <h1 className="font-orbitron font-black text-3xl md:text-5xl lg:text-6xl text-navy tracking-wide leading-tight">
          L'ENSAM RABAT
        </h1>
        <p className="mt-4 font-montserrat text-lg md:text-xl text-navy/70 uppercase tracking-widest max-w-3xl mx-auto font-medium">
          Former les ingénieurs qui construiront l'industrie de demain
        </p>
      </section>

      {/* Hero Video */}
      <section className="relative w-full h-[60vh] md:h-[80vh] bg-slate-200">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/school_video.mp4" type="video/mp4" />
        </video>
      </section>

      {/* Intro Description */}
      <section className="section-padding">
        <div className="container-padding max-w-5xl mx-auto" ref={introRef}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-montserrat text-base md:text-lg text-navy/80 font-medium leading-relaxed mb-6">
                L'École Nationale Supérieure d'Arts et Métiers de Rabat — ENSAM Rabat, composante de l'Université Mohammed V, se distingue par une formation d'ingénieurs d'État pluridisciplinaires, fortement ancrée dans les réalités scientifiques, technologiques et industrielles.
              </p>
              <p className="font-montserrat text-base md:text-lg text-navy/80 font-medium leading-relaxed mb-6">
                À travers un cursus combinant une forte exigence scientifique et un ancrage technologique profond, l'école prépare des profils capables de répondre aux transformations de l'industrie et aux enjeux de souveraineté technologique.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-navy/10 bg-white shadow-sm">
              <div className="aspect-[4/3] flex items-center justify-center p-8">
                <img src="/logo_ensam.jpg" alt="ENSAM Rabat Logo" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approche pédagogique */}
      <section className="section-padding bg-white">
        <div className="container-padding max-w-5xl mx-auto">
          <SectionHeader
            title="UNE FORMATION AU CŒUR DES TRANSFORMATIONS INDUSTRIELLES"
            subtitle="L'ENSAM Rabat s'appuie sur un cycle préparatoire intégré de deux ans, suivi d'un cycle ingénieur de trois ans."
            glowColor="purple"
          />
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <GlassCard className="p-8">
              <h3 className="font-orbitron font-bold text-lg text-teal mb-3">Une exigence scientifique solide</h3>
              <p className="font-montserrat text-navy/70 text-sm font-medium">Pour construire des bases techniques et analytiques robustes.</p>
            </GlassCard>
            <GlassCard className="p-8">
              <h3 className="font-orbitron font-bold text-lg text-teal mb-3">Un ancrage technologique profond</h3>
              <p className="font-montserrat text-navy/70 text-sm font-medium">En prise avec les nouvelles technologies et les mutations industrielles.</p>
            </GlassCard>
            <GlassCard className="p-8">
              <h3 className="font-orbitron font-bold text-lg text-teal mb-3">Une proximité avec le monde socio-économique</h3>
              <p className="font-montserrat text-navy/70 text-sm font-medium">Favorisant les interactions avec les entreprises et les acteurs industriels.</p>
            </GlassCard>
            <GlassCard className="p-8">
              <h3 className="font-orbitron font-bold text-lg text-teal mb-3">Une culture du « faire »</h3>
              <p className="font-montserrat text-navy/70 text-sm font-medium">Plaçant la pratique, l'expérimentation et la résolution de problématiques concrètes au cœur de la formation.</p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Offre de Formation */}
      <section className="section-padding">
        <div className="container-padding max-w-6xl mx-auto">
          <SectionHeader
            title="UNE OFFRE DE FORMATION DIVERSIFIÉE"
            subtitle=""
            glowColor="purple"
          />
          <div ref={formationRef} className="flex flex-col md:flex-row flex-wrap justify-center gap-6 mt-12">
            {formations.map((item, i) => (
              <div key={i} className="flex-1 min-w-[250px] glass-card bg-white/50 p-6 rounded-xl border border-navy/10 hover:border-teal/30 transition-all text-center group">
                <div className="w-12 h-12 mx-auto rounded-full bg-teal/10 flex items-center justify-center text-teal mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="font-orbitron font-bold text-sm text-navy mb-2">{item.title}</h4>
                <p className="font-montserrat text-xs text-navy/70 font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filières d'Ingénieurs */}
      <section className="section-padding bg-white">
        <div className="container-padding max-w-6xl mx-auto">
          <SectionHeader
            title="LES FILIÈRES D'INGÉNIEURS"
            subtitle="7 FILIÈRES D'EXCELLENCE POUR L'INDUSTRIE DE DEMAIN"
            glowColor="purple"
          />
          <div ref={filieresRef} className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-12">
            {filieres.map((filiere, i) => (
              <div key={i} className="glass-card bg-slate-50/50 p-5 rounded-lg border border-navy/5 hover:border-teal/20 flex items-center gap-4 transition-colors">
                <div className="text-teal/80">
                  {filiere.icon}
                </div>
                <span className="font-montserrat font-bold text-xs text-navy/80 uppercase">
                  {filiere.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom sections (International, Culture, Vie étudiante) */}
      <section className="section-padding">
        <div ref={bottomRef} className="container-padding max-w-5xl mx-auto space-y-16">
          <div className="glass-card bg-white/80 p-8 md:p-10 rounded-2xl border-l-4 border-l-teal shadow-sm">
            <h3 className="font-orbitron font-bold text-xl md:text-2xl text-navy mb-4 flex items-center gap-3">
              <Globe className="text-teal" /> OUVERTURE INTERNATIONALE
            </h3>
            <p className="font-montserrat text-sm md:text-base text-navy/80 font-medium leading-relaxed">
              Consciente des enjeux liés à la mondialisation, l'ENSAM Rabat développe une politique d'ouverture internationale permettant à ses élèves-ingénieurs de bénéficier d'opportunités de mobilité académique, de stages à l'étranger et de double diplomation, grâce à un réseau de partenaires académiques notamment en Europe et en Amérique du Nord.
            </p>
          </div>

          <div className="glass-card bg-white/80 p-8 md:p-10 rounded-2xl border-l-4 border-l-teal shadow-sm">
            <h3 className="font-orbitron font-bold text-xl md:text-2xl text-navy mb-4 flex items-center gap-3">
              <Award className="text-teal" /> UNE CULTURE DE L'EXCELLENCE ET DE L'INNOVATION
            </h3>
            <p className="font-montserrat text-sm md:text-base text-navy/80 font-medium leading-relaxed mb-4">
              L'ENSAM Rabat compte également de nombreuses distinctions dans des domaines tels que l'innovation, la robotique, la cybersécurité, l'entrepreneuriat social et les compétitions technologiques.
            </p>
            <p className="font-montserrat text-sm md:text-base text-navy/80 font-medium leading-relaxed">
              Cette dynamique reflète une ambition : former non seulement des ingénieurs maîtrisant les fondamentaux scientifiques, mais également des profils capables d'innover, de collaborer, d'entreprendre et de répondre aux défis industriels émergents.
            </p>
          </div>

          <div className="glass-card bg-white/80 p-8 md:p-10 rounded-2xl border-l-4 border-l-teal shadow-sm">
            <h3 className="font-orbitron font-bold text-xl md:text-2xl text-navy mb-4 flex items-center gap-3">
              <Users className="text-teal" /> UNE VIE ÉTUDIANTE QUI FORME AUSSI DES LEADERS
            </h3>
            <p className="font-montserrat text-sm md:text-base text-navy/80 font-medium leading-relaxed mb-4">
              Au-delà de la formation académique, l'ENSAM Rabat bénéficie d'une vie étudiante riche, portée par des clubs techniques, culturels et sportifs ainsi que par des comités d'envergure.
            </p>
            <p className="font-montserrat text-sm md:text-base text-navy/80 font-medium leading-relaxed mb-4">
              Ces expériences permettent aux élèves-ingénieurs de développer des compétences transversales essentielles : leadership, gestion de projet, esprit d'équipe, communication et capacité à travailler sur des projets complexes.
            </p>
            <p className="font-montserrat text-sm md:text-base text-navy font-bold italic">
              Le Comité d'Organisation du Forum Industriel s'inscrit pleinement dans cette dynamique.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
