import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Register from './Pages/Register'
import Login from './Pages/Login'
import Layout from './Layout';
import Product from './Pages/Product';
import More from './Components/More';
import Search from './Components/SearchComp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product" element={<Product/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/more" element={<More />} />
        </Route>
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
