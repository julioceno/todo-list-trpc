import { Button, CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { TodoList } from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TodoList />
    </ThemeProvider>
  );
}

export default App;
