import { useState } from "react";
import { HomePage } from "./pages/Home";
import { MantineProvider } from '@mantine/core';
import ColorSchemeContext from "./context/ColorSchemeContext";

function App() {  
  const [colorScheme, setColorScheme] = useState<any>('light');
  return (
    <ColorSchemeContext.Provider value={{ colorScheme, onChange: setColorScheme }}>
      <MantineProvider theme={colorScheme}>
        <main className="min-h-screen">      
          <HomePage/>
        </main>
      </MantineProvider>
    </ColorSchemeContext.Provider>
    
    
  );
}

export default App;
