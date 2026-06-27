import { ClipboardList } from 'lucide-react';

export default function SponsoringFAB() {
  return (
    <button className="fixed bottom-6 right-6 z-[999] flex items-center gap-3 px-6 py-3 rounded-full bg-[#1a1a1a]/90 backdrop-blur-lg border border-pink/30 text-white font-montserrat text-xs font-semibold tracking-wider hover:shadow-glow-pink hover:scale-[1.02] transition-all duration-300 group">
      <ClipboardList size={18} className="text-pink group-hover:scale-110 transition-transform" />
      DEMANDE DE SPONSORING
    </button>
  );
}
