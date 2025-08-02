import React, { useEffect, useState } from 'react';
import NewCard_1 from './NewCard_1';
import { CircularProgress } from '@mui/material';

const Top = () => {
  const apiKey = process.env.REACT_APP_API_KEY; // ✅ corrected env variable
  const baseURL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(baseURL);
        const data = await res.json();
        console.log(data)
        console.log(baseURL)
        setArticles(data.articles); // ✅ get only the articles array
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []); 

  if (loading) return <div style={{display:'flex', justifyContent:'center', alignContent:'center', height:'90vh', alignItems:'center', textAlign:'center'}}> 
    <CircularProgress />
  </div>;

  return (
    <>
    <div style={{textAlign:'center', fontSize:'2em', fontWeight:'bold'}}>
      <span >Top Headlines</span>

    </div>
     <div style={{display:'flex', flexWrap:'wrap'}}>
      {articles.map((item, index) => (
        <NewCard_1 key={index} news={item} />
      ))}
    </div>
    </>
   
  );
};

export default Top;
