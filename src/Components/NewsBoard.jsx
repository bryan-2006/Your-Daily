import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

// NewsBoard component fetches and displays news articles based on the category prop
const NewsBoard = ({category}) => {
  // useState hook to manage the articles state
  const [articles, setArticles] = useState([]);

  // useEffect hook to fetch news articles when the component mounts or when the category changes
  useEffect(() => {
    // Construct the API URL with the category and API key
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    // Fetch the news articles from the API
    fetch(url).then((response) => response.json()).then((data) =>
        // Update the articles state with the fetched data
        setArticles(data.articles));
    }, [category]); // Dependency array to re-run the effect when the category changes

  return (
    <div>
      {/* Map over the articles array and render a NewsItem component for each article */}
      {articles.map((news, index) => {
        return (
          <NewsItem
            key={index} // Unique key for each NewsItem component
            title={news.title} // Pass the title prop to NewsItem
            description={news.description} // Pass the description prop to NewsItem
            src={news.urlToImage} // Pass the image URL prop to NewsItem
            url={news.url} // Pass the article URL prop to NewsItem
          />
        );
      })}
    </div>
  );
};

export default NewsBoard;

// A prop (short for "property") is a special keyword in React for passing data from one component to another.