import { useState } from 'react';
import Preloader from './components/Preloader';
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Conceito from './components/Conceito';
import Servicos from './components/Servicos';
import Metodo from './components/Metodo';
import Resultados from './components/Resultados';
import Comparacao from './components/Comparacao';
import Depoimentos from './components/Depoimentos';
import Faq from './components/Faq';
import Contato from './components/Contato';
import Footer from './components/Footer';
import FormModal from './components/FormModal';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <Preloader />
      <Header onOpenMenu={() => setMenuOpen(true)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <Hero onOpenForm={() => setFormOpen(true)} />
      <Sobre />
      <Conceito />
      <Servicos />
      <Metodo />
      <Resultados />
      <Comparacao />
      <Depoimentos />
      <Faq />
      <Contato />
      <Footer />
      {formOpen && <FormModal onClose={() => setFormOpen(false)} />}
    </>
  );
}
