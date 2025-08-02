import React from 'react';

const NewCard_2 = ({ news }) => {
  return (
    <div style={styles.card}>
      <img
        src={news.urlToImage || 'https://via.placeholder.com/150'}
        alt={news.title}
        style={styles.image}
      />
      <div style={styles.content}>
        <h2 style={styles.title}>{news.title}</h2>
        <p style={styles.description}>{news.description}</p>
        <a href={news.url} target="_blank" rel="noopener noreferrer" style={styles.link}>
          Read More
        </a>
      </div>
    </div>
  );
};

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'row',
    gap: '16px',
    padding: '16px',
    marginBottom: '20px',
    backgroundColor: '#0096c7',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  image: {
    width: '150px',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  content: {
    flex: 1,
    minWidth: '200px',
  },
  title: {
    fontSize: '18px',
    margin: '0 0 8px',
  },
  description: {
    fontSize: '14px',
    margin: '0 0 12px',
    color: '#333',
  },
  link: {
    color: '#ffff',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default NewCard_2;
