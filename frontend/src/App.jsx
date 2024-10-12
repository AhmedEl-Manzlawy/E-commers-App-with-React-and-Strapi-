import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import MainContent from "./Components/MainContent/MainContent";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import FloatingBtn from "./Components/FloatingBtn/FloatingBtn";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <Box sx={{bgcolor:theme.palette.bg.main , pb:10}}>
            <Hero />
            <MainContent />
            
          </Box>
          <Footer />
          <FloatingBtn  /> 
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
