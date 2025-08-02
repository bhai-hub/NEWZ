import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { useEffect } from 'react';
import useNewsStore from './stores/useStore';

function App() {

  const setArticles = useNewsStore((state) => state.setArticles);
  const setLoading = useNewsStore((state) => state.setLoading);

  useEffect(() => {
    setArticles([]);        // clear news data
    setLoading(true);       // reset loading state
  }, []);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
