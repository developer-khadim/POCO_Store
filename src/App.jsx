import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Layout from './Layout';
import Product from './Pages/Product';
import More from './Components/More';
import Account from './Pages/Account';
import ProtectedRoute from './Components/ProtectedRoute';
import Search from './Components/SearchComp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="product" element={<Product />} />
          <Route path="login" element={<Login />} />
          <Route path="more" element={<More />} />
          <Route 
            path="account" 
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            } 
          />
        </Route>
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{ zIndex: 9999 }}
      />
    </Router>
  );
}

export default App;
