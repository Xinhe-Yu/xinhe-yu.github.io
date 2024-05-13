import './css/App.css';
import { ChakraProvider } from '@chakra-ui/react';
import chakraTheme from './components/provider/chakraTheme';

import Navbar from './components/Navbar';
import LandingSection from './components/LandingSection';
import ResearchSection from './components/ResearchSection';
import LanguageSection from './components/LanguageSection';
import CodingSection from './components/CodingSection';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider theme={chakraTheme}>
      <main>
        <Navbar />

        <LandingSection />
        <CodingSection />
        <ResearchSection />
        <LanguageSection />

        <Footer />
      </main>
    </ChakraProvider>
  );
}

export default App;
