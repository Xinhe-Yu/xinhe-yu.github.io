import './css/App.css';
import { ChakraProvider } from '@chakra-ui/react';
import chakraTheme from './components/provider/chakraTheme';

import Navbar from './components/Navbar';
import LandingSection from './components/LandingSection';
import ResearchSection from './components/ResearchSection';
import LanguageSection from './components/LanguageSection';
/* import CodingSection from './components/CodingSection' */
function App() {
  return (
    <ChakraProvider theme={chakraTheme}>
      <main>
        <Navbar />
        <LandingSection />
        <ResearchSection />
        <LanguageSection />
        {/*     <CodingSection /> */}
      </main>
    </ChakraProvider>
  );
}

export default App;
