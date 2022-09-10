import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import ItemsTable from './components/ItemsTable';
import GlobalStyles from './GlobalStyles.styled';
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='app'>
        <GlobalStyles />

        <Header />
        <ItemsTable />
      </div>
    </ThemeProvider>
  );
}

export default App;
