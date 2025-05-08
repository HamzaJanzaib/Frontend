import React, { useEffect } from 'react';
import ErrorBoundary from "./Common/ErrorBoundary";
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
import { useDispatch, useSelector } from 'react-redux';
import { AuthActions } from './Store/Auth';
import Profile from './Pages/Client/Profile';
import Favorite from './Components/Client/Favorite.JSX';
import OrderHistry from './Components/Client/OrderHistry';
import Setting from './Components/Client/Setting';

const App = () => {

  const Dispatch = useDispatch()
  useSelector((state) => state.auth.role); // Ensure state is accessed if needed
  useEffect(() => {
    if (
      !localStorage.getItem("role") ||
      !localStorage.getItem("token") ||
      !localStorage.getItem("id")
    ) {
      Dispatch(AuthActions.Logout());
    } else {
      Dispatch(AuthActions.Login());
      Dispatch(AuthActions.ChangeRole(localStorage.getItem("role")));
    }
  }, [Dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/books" element={<Shop />} />
        <Route path="/cart" element={
          <ErrorBoundary>
            <Cart />
          </ErrorBoundary>
        } />
        {/* <Route path="/cart" element={<Cart />} /> */}
        <Route path="/book-details/:id" element={<BookDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/Category/:category" element={<Shop />} />
        <Route path="/profile" element={<Profile />} >
          <Route index element={<Favorite />} />
          <Route path="Order-Histry" element={<OrderHistry />} />
          <Route path="setting" element={<Setting />} />
        </Route >
        <Route path="*" element={<NotFound />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
