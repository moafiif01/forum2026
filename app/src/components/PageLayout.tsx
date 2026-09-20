import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import SponsoringFAB from './SponsoringFAB';

export default function PageLayout() {
  return (
    <div className="min-h-screen bg-slate-50 text-navy">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <SponsoringFAB />
    </div>
  );
}
