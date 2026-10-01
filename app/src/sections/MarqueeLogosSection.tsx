import { partnerLogos } from '@/data/logos';

export default function MarqueeLogosSection() {
  // Split logos into two rows
  const half = Math.ceil(partnerLogos.length / 2);
  const row1 = partnerLogos.slice(0, half);
  const row2 = partnerLogos.slice(half);

  return (
    <section className="bg-navy py-20 overflow-hidden">
      <div className="container-padding text-center mb-12">
        <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-white">
          Nos Partenaires Officiels
        </h2>
      </div>

      <div className="flex flex-col gap-8 relative z-10 w-full">
        {/* Row 1 - Scroll Left */}
        <div className="flex w-max animate-scroll-logos">
          <div className="flex w-1/2 justify-around items-center gap-6 px-3">
            {row1.map((logo, i) => (
              <div key={i} className="shrink-0 bg-white rounded-xl h-24 md:h-32 w-48 md:w-64 flex items-center justify-center p-4 shadow-sm hover:scale-105 transition-transform cursor-pointer">
                <img 
                  src={`/images/logos/${logo}`} 
                  alt={`Partenaire ${i + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
          {/* Duplicate for seamless looping */}
          <div className="flex w-1/2 justify-around items-center gap-6 px-3">
            {row1.map((logo, i) => (
              <div key={`dup-${i}`} className="shrink-0 bg-white rounded-xl h-24 md:h-32 w-48 md:w-64 flex items-center justify-center p-4 shadow-sm hover:scale-105 transition-transform cursor-pointer">
                <img 
                  src={`/images/logos/${logo}`} 
                  alt={`Partenaire ${i + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Scroll Right */}
        <div className="flex w-max animate-scroll-logos-reverse">
          <div className="flex w-1/2 justify-around items-center gap-6 px-3">
            {row2.map((logo, i) => (
              <div key={i} className="shrink-0 bg-white rounded-xl h-24 md:h-32 w-48 md:w-64 flex items-center justify-center p-4 shadow-sm hover:scale-105 transition-transform cursor-pointer">
                <img 
                  src={`/images/logos/${logo}`} 
                  alt={`Partenaire ${i + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
          {/* Duplicate for seamless looping */}
          <div className="flex w-1/2 justify-around items-center gap-6 px-3">
            {row2.map((logo, i) => (
              <div key={`dup-${i}`} className="shrink-0 bg-white rounded-xl h-24 md:h-32 w-48 md:w-64 flex items-center justify-center p-4 shadow-sm hover:scale-105 transition-transform cursor-pointer">
                <img 
                  src={`/images/logos/${logo}`} 
                  alt={`Partenaire ${i + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
