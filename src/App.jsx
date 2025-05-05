import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Common/Header';
import Footer from './Common/Footer';
import Home from './Pages/Client/Home';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import Shop from './Pages/Client/Shop';
import BookDetails from './Pages/Client/BookDetails';
import Cart from './Pages/Client/Cart';
import About from './Pages/Client/About';
import Contact from './Pages/Client/Contact';
import Blog from './Pages/Client/Blog';
import Checkout from './Pages/Client/checkout';
import NotFound from './Pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/books" element={<Shop />} />
        <Route path="/book-details/:id" element={<BookDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/Category/:category" element={<Shop />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
