
import './App.css';
import Header from "../src/components/Header";
import Head from './components/Head';
import BlogList from './components/BlogList';
import FullArticle from './pages/FullArticle';
import Footer from './components/Footer';
import articles from "./data.json";

import React, { useState } from 'react';


function App() {
  const [selectedArticleId, setSelectedArticleId] = useState(null);


  return (
    <React.Fragment>
      <Header />
      <Head />
      {selectedArticleId ? (
        <FullArticle articleId={selectedArticleId} />
      ) : (
        <BlogList 
          articles={articles.articles}
          onArticleClick={(id) => setSelectedArticleId(id)} />
      )}
      <Footer />
    </React.Fragment>
  );
}

export default App;
