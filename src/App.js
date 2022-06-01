import logo from './logo.svg';
import './App.css';
import { useQuery } from '@apollo/client';
import { BOOK } from './api/client';
import Page from './components/Page';

function App() {
  const [loading, error, data] = useQuery(BOOK)
  
  return (
    <Page />
  );
}

export default App;
