import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

// NewsBoard component fetches and displays news articles based on the category prop
const NewsBoard = ({ category }) => {
  // useState hook to manage the articles state
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);  // New state for handling errors

  // useEffect hook to fetch news articles when the component mounts or when the category changes
  useEffect(() => {
    // Construct the API URL with the category and API key
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;

    // Fetch the news articles from the API
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Safeguard: Ensure data.articles exists and is an array
        if (data.articles) {
          setArticles(data.articles);
        } else {
          setArticles([]); // Set articles to an empty array if none are returned
        }
      })
      .catch((error) => {
        setError(error.message);  // Capture any errors during the fetch
        setArticles([]);  // Ensure articles is an empty array on error
      });
  }, [category]); // Dependency array to re-run the effect when the category changes

  return (
    <div>
      {/* Handle possible errors */}
      {error && <div>Error: {error}</div>}

      {/* Map over the articles array if it exists and is not empty */}
      {articles.length > 0 ? (
        articles.map((news, index) => (
          <NewsItem
            key={index} // Unique key for each NewsItem component
            title={news.title} // Pass the title prop to NewsItem
            description={news.description} // Pass the description prop to NewsItem
            src={news.urlToImage} // Pass the image URL prop to NewsItem
            url={news.url} // Pass the article URL prop to NewsItem
          />
        ))
      ) : (
        !error && <div>No articles available for this category.</div>  // Show a message when no articles are available and no error occurred
      )}
    </div>
  );
};

export default NewsBoard;
