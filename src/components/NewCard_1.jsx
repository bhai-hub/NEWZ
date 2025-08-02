import React from 'react';

const NewCard_1 = ({ news }) => {
  return (
    <div style={styles.card}>
      {news.urlToImage && (
        <img src={news.urlToImage} alt="news" style={styles.image} />
      )}
      <div style={styles.content}>
        <h2 style={styles.title}>{news.title}</h2>
        <p style={styles.description}>{news.description}</p>
        <a href={news.url} target="_blank" rel="noopener noreferrer" style={styles.link}>
          Read more →
        </a>
      </div>
    </div>
  );
};

const styles = {
  card: {
    maxWidth: '600px',
    width: '90%',
    margin: '16px auto',
    border: '1px solid #ccc',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
  },
  content: {
    padding: '16px',
  },
  title: {
    fontSize: '1.25rem',
    marginBottom: '8px',
  },
  description: {
    fontSize: '1rem',
    color: '#555',
    marginBottom: '12px',
  },
  link: {
    textDecoration: 'none',
    color: '#0077b6',
    fontWeight: 'bold',
  },
};

export default NewCard_1;
