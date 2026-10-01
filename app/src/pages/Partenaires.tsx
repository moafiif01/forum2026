import PartnerLogosSection from '@/sections/PartnerLogosSection';
import MarqueeLogosSection from '@/sections/MarqueeLogosSection';

export default function Partenaires() {
  return (
    <div className="pt-20 bg-white min-h-screen flex flex-col">
      <PartnerLogosSection />
      <MarqueeLogosSection />
    </div>
  );
}
