import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useNewsStore from '../stores/useStore';

const Navbar = () => {
  const [keyword, setKeyword] = useState('');
  const { setArticles, setLoading, setKeywordState } = useNewsStore();
  const apiKey = process.env.REACT_APP_API_KEY;

  const handleChange = (e) => {
    setKeyword(e.target.value);
    setKeywordState(e.target.value)
  };

  const fetchNews = async () => {
    if (!keyword.trim()) return; // prevent empty search

    const url = `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${apiKey}`;
    try {
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      console.log(data)
      setArticles(data.articles || []);
    } catch (error) {
      console.error('Error fetching search results:', error);
    } finally {
      setLoading(false);
      setKeyword('')
    }
  };

  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.logo}>Newz</Link>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'center', flexWrap: 'wrap' }}>
        <input
          type="text"
          name="search"
          placeholder="Search"
          value={keyword}
          onChange={handleChange}
          style={styles.input}
        />
        <button
          style={styles.button}
          onClick={fetchNews}
        >
          Search
        </button>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px',
    backgroundColor: '#0077b6',
  },
  logo: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: 'white',
    textDecoration: 'none',
    fontFamily: 'Fjalla One',
  },
  input: {
    width: '80%',
    maxWidth: '400px',
    padding: '12px 16px',
    borderRadius: '10px',
    border: '1px solid #ccc',
    fontSize: '16px',
    boxSizing: 'border-box',
    marginBottom: '10px',
  },
  button: {
    borderRadius: '10px',
    marginLeft: '10px',
    padding: '12px 20px',
    border: 'none',
    backgroundColor: '#023e8a',
    color: 'white',
    cursor: 'pointer',
    fontWeight: 'bold',
  }
};

export default Navbar;
