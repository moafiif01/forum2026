import { Routes, Route } from 'react-router-dom';
import PageLayout from './components/PageLayout';
import Home from './pages/Home';
import Partenaires from './pages/Partenaires';
import Comite from './pages/Comite';
import Ecole from './pages/Ecole';
import Services from './pages/Services';
import Mediatheque from './pages/Mediatheque';

export default function App() {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/partenaires" element={<Partenaires />} />
        <Route path="/comite" element={<Comite />} />
        <Route path="/ecole" element={<Ecole />} />
        <Route path="/services" element={<Services />} />
        <Route path="/mediatheque" element={<Mediatheque />} />
      </Route>
    </Routes>
  );
}
