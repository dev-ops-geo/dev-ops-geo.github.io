import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from "react";
import { MantineProvider } from '@mantine/core';
import ColorSchemeContext from "./context/ColorSchemeContext";
import Navbar from "./components/Navbar";
import { HomePage } from "./pages/Home";
import { AboutPage } from './pages/About';
import { ContactPage } from './pages/Contact';

function App() {  
  const [colorScheme, setColorScheme] = useState<any>('light');
  return (
    <ColorSchemeContext.Provider value={{ colorScheme, onChange: setColorScheme }}>
      <MantineProvider theme={colorScheme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
      </MantineProvider>
    </ColorSchemeContext.Provider>
    
    
  );
}

export default App;
