import './App.css';
import { Route, Routes } from 'react-router-dom';
import ViewToken from './components/ViewToken';
import Book from './components/Book';
import BookProvider from './BookProvider';

function App() {
  return (
    <BookProvider>
      <Routes>
        <Route path='/' element={<Book />} />
        <Route path='/token' element={<ViewToken />} />
      </Routes>
    </BookProvider>
  );
}

export default App;
