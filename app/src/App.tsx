import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import PageLayout from './components/PageLayout';
import Home from './pages/Home';
import Programme from './pages/Programme';
import Partenaires from './pages/Partenaires';
import Comite from './pages/Comite';
import Ecole from './pages/Ecole';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/programme" element={<Programme />} />
          <Route path="/ecole" element={<Ecole />} />
          <Route path="/partenaires" element={<Partenaires />} />
          <Route path="/comite" element={<Comite />} />
        </Route>
      </Routes>
    </>
  );
}
