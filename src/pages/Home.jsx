import React from 'react';
import Top from '../components/Top';
import useNewsStore from '../stores/useStore';
import NewCard_2 from '../components/NewCard_2';

const Home = () => {
  const { articles, keywordState } = useNewsStore();

  return (
    <div style={{ margin: '15px' }}>
    
      {articles.length > 0 ? (
        // show articles if they exist
        <>
        <div style={{color:'black', margin:'10px', fontSize:`20px`}}>
            <span>Search Result of {keywordState}</span>
        </div>
          {articles.map((article, index) => (
            <NewCard_2 key={index} news={article} />
          ))}
        </>
      ) : (
        // otherwise fetch and display top headlines
        <Top />
      )}
    </div>
  );
};

export default Home;
