import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import SponsoringFAB from './SponsoringFAB';

export default function PageLayout() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <SponsoringFAB />
    </div>
  );
}
