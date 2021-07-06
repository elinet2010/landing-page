import { GlobalStyle } from '../../Styles/globalStyle'
import { ThemeProvider } from 'styled-components'
import theme from '../../Constants/themeStyles';
import Home from "./../Home/index";

function App() {
  return (
    <>
      <ThemeProvider theme={theme} >
        <GlobalStyle />
        <Home/>
      </ThemeProvider>
    </>
  );
}

export default App;
