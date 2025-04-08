import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Nano3Page from './pages/Nano3Page';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import POSPage from './pages/POSPage';

const App = () => {
  return (
    <Router>
      <div className="background-container"></div>
      <div className="content-container">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/nano3" element={<Nano3Page />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/pos" element={<POSPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;