import { useState } from 'react';
import SectionHeader from '@/components/SectionHeader';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface Event {
  time: string;
  title: string;
  description?: string;
  type: 'break' | 'event' | 'panel';
}

interface DayProgramme {
  date: string;
  events: Event[];
}

const programmeData: DayProgramme[] = [
  {
    date: '11 NOVEMBRE',
    events: [
      { time: '09H00 — 10H00', title: 'ACCUEIL DES INVITÉS', type: 'event' },
      { time: '10H00 — 12H00', title: "CÉRÉMONIE D'OUVERTURE", type: 'event' },
      { time: '12H00 — 12H30', title: 'PAUSE CAFÉ & NETWORKING', type: 'break' },
      { time: '12H30 — 14H00', title: 'PAUSE DÉJEUNER', type: 'break' },
      { time: '14H00 — 15H30', title: 'PANEL 1', description: 'L\'USINE COGNITIVE ET LA RÉSILIENCE CYBER-PHYSIQUE : PILIER NUMÉRIQUE DE LA SOUVERAINETÉ OPÉRATIONNELLE', type: 'panel' },
      { time: '15H30 — 16H00', title: 'PAUSE CAFÉ & NETWORKING', type: 'break' },
      { time: '16H00 — 17H30', title: 'PANEL 2', description: 'SOUVERAINETÉ ÉNERGÉTIQUE ET STRESS HYDRIQUE : L\'HYDROGÈNE VERT AU SERVICE DU CALCUL SOUVERAIN', type: 'panel' },
      { time: '17H30 — 18H30', title: 'SYNTHÈSE DES PANELS', type: 'event' },
    ]
  },
  {
    date: '12 NOVEMBRE',
    events: [
      { time: '10H00 — 12H00', title: 'PANEL 3', description: 'MÉTAMORPHOSE DES COMPÉTENCES ET AGILITÉ COGNITIVE : STRUCTURER LE CAPITAL HUMAIN DE L\'INGÉNIERIE DE DEMAIN', type: 'panel' },
      { time: '12H00 — 14H30', title: 'PAUSE DÉJEUNER & VISITE DES STANDS', type: 'break' },
      { time: '14H30 — 15H00', title: 'PAUSE CAFÉ', type: 'break' },
      { time: '15H00 — 17H00', title: 'SYNTHÈSE & CLÔTURE', type: 'event' },
    ]
  }
];

export default function ProgrammeSection() {
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const revealRef = useScrollReveal<HTMLDivElement>();
  
  const activeDay = programmeData[activeDayIndex];

  return (
    <section className="relative bg-slate-50 py-20">
      <div className="container-padding">
        <SectionHeader
          title="PROGRAMME 2026"
          subtitle="Deux journées pour penser l'ingénierie de demain"
          glowColor="pink"
        />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="font-montserrat text-navy/80 text-sm md:text-base leading-relaxed font-medium">
            Les 11 et 12 novembre 2026, le Forum Industriel de l'ENSAM Rabat réunira les acteurs académiques, industriels et institutionnels autour d'un programme consacré aux mutations technologiques, énergétiques, humaines et industrielles.
          </p>
        </div>

        {/* Day Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          {programmeData.map((day, index) => (
            <button
              key={index}
              onClick={() => setActiveDayIndex(index)}
              className={`px-6 py-3 rounded-full font-orbitron font-bold text-sm tracking-wider transition-all duration-300 ${
                activeDayIndex === index 
                  ? 'bg-teal text-white shadow-sm'
                  : 'bg-white text-navy/50 hover:bg-slate-100 hover:text-navy/80 border border-navy/10'
              }`}
            >
              {day.date}
            </button>
          ))}
        </div>

        {/* Timeline Content */}
        <div ref={revealRef} className="max-w-4xl mx-auto glass-card bg-white/90 rounded-2xl p-6 md:p-10 border border-navy/10 shadow-sm">
          <div className="space-y-6">
            {activeDay.events.map((event, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row gap-4 md:gap-8 p-5 rounded-xl border transition-colors duration-300 ${
                  event.type === 'break' 
                    ? 'border-navy/5 bg-slate-50/50' 
                    : event.type === 'panel'
                    ? 'border-teal/30 bg-teal/5 hover:border-teal/50'
                    : 'border-navy/10 bg-white hover:bg-slate-50'
                }`}
              >
                <div className="md:w-48 shrink-0 flex items-center md:border-r md:border-navy/10">
                  <span className={`font-orbitron font-bold text-lg ${
                    event.type === 'panel' ? 'text-teal' : 'text-navy/80'
                  }`}>
                    {event.time}
                  </span>
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <h4 className={`font-orbitron font-bold text-lg mb-1 ${
                    event.type === 'break' ? 'text-navy/50' : 'text-navy'
                  }`}>
                    {event.title}
                  </h4>
                  {event.description && (
                    <p className="font-montserrat text-sm text-navy/70 leading-relaxed font-medium">
                      {event.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
