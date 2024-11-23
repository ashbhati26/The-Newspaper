import React, { useState, useEffect } from "react";
import axios from "axios";
import Masonry from "react-masonry-css";
import Navbar from "./components/Navbar";
import NewsCard from "./components/NewsCard";
import LocomotiveScroll from "locomotive-scroll";
import Marque from "./components/Marque";
import Footer from "./components/Footer";

function App() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("latest");
  const [query, setQuery] = useState("");
  const [isSearchMode, setIsSearchMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    
    const fetchNews = async () => {
      setLoading(true);
      const apiKey = "3813ec20369e792bee4c7588f86f1a59";
      let url;

      if (isSearchMode && query !== "") {
        url = `https://gnews.io/api/v4/search?q=${query}&token=${apiKey}&lang=en&max=60`;
      } else {
        url = `https://gnews.io/api/v4/top-headlines?topic=${category.toLowerCase()}&token=${apiKey}&lang=en&max=60`;
      }

      try {
        const response = await axios.get(url);
        const uniqueArticles = removeDuplicates(response.data.articles);
        setArticles(uniqueArticles.slice(0, 60));
      } catch (error) {
        console.error("Error fetching news:", error);
        setError("Failed to fetch news. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();

    return () => {
      locomotiveScroll.destroy();
    };
  }, [category, query, isSearchMode]);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    setIsSearchMode(true);
  };

  const removeDuplicates = (articles) => {
    const uniqueArticles = [];
    const seenTitles = new Set();

    articles.forEach((article) => {
      if (!seenTitles.has(article.title)) {
        uniqueArticles.push(article);
        seenTitles.add(article.title);
      }
    });

    return uniqueArticles;
  };

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className="bg-[#c3bcb2] min-h-screen font-[Gilroy] overflow-hidden select-none">
      <Navbar
        setCategory={setCategory}
        handleSearch={handleSearch}
        setIsSearchMode={setIsSearchMode}
      />

      {/* Displaying news */}
      <main className="p-6">
        {loading && <p>Loading articles...</p>}
        {error && <p className="text-red-500">{error}</p>}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {articles.length ? (
            articles.map((article, index) => (
              <NewsCard key={index} article={article} />
            ))
          ) : (
            !loading && <p>No news found</p>
          )}
        </Masonry>
      </main>

      <Marque />
      <Footer />
    </div>
  );
}

export default App;
