import SectionHeader from '@/components/SectionHeader';

const logoRows = [
  ['CDG', 'Orange', 'ONCF', 'OCP', 'VINCI', 'Maroc Telecom', 'Redal'],
  ['Veolia', 'Capgemini', 'Banque Populaire', 'SGM', 'Maghreb Steel', 'SOGEA', 'Amendis'],
  ['BMCI', 'JESA', 'LafargeHolcim', 'La Marocaine Vie', 'Lesieur Cristal', 'Managem', 'Masen'],
  ['Nareva', 'SNTL', 'Al Omrane', 'CFG Bank', 'Société Générale', 'ENGIE', 'EMB'],
];

export default function PartnerLogosSection() {
  return (
    <section className="relative bg-black py-16 md:py-24">
      <div className="container-padding">
        <SectionHeader
          title="ILS NOUS ONT FAIT CONFIANCE"
          subtitle=""
          glowColor="pink"
        />

        {/* Logo Collage Card */}
        <div className="max-w-5xl mx-auto bg-white rounded-2xl p-6 md:p-10 overflow-hidden">
          <div className="space-y-4">
            {logoRows.map((row, rowIndex) => (
              <div key={rowIndex} className="flex flex-wrap justify-center gap-3 md:gap-4">
                {row.map((logo, logoIndex) => (
                  <div
                    key={logoIndex}
                    className="px-4 py-2 md:px-6 md:py-3 bg-gray-100 rounded-lg"
                  >
                    <span className="font-montserrat font-semibold text-xs md:text-sm text-gray-700 tracking-wide">
                      {logo}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Additional logos in smaller text */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              {['Al Wataniya Bank', 'BAG', 'UGGC', 'BUTEC', 'Clemessy', 'Crouzet', 'Portnet', 'TGCC', 'Total Energies', 'BIM', 'OMCo', 'Deloitte', 'Schneider', 'SAFRAN', 'Grant Thornton', 'KIA', 'Super Auto', 'Red Bull', 'Nestlé', 'Coca-Cola', 'Pepsi', 'Evian'].map((name, i) => (
                <span key={i} className="font-montserrat text-[10px] text-gray-500 tracking-wider">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
