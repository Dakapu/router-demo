import React, { Component } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <React.StrictMode>
          <NavBar />
          <div className="content">
            <Routes>
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route
                path="/products/*"
                element={<Products sortBy="newest" />}
              />
              <Route path="/posts" element={<Posts />}>
                <Route path=":year" element={<Posts />}>
                  <Route path=":month" element={<Posts />} />
                  <Route path="" element={<Posts />} />
                </Route>
                <Route path="" element={<Posts />} />
              </Route>
              <Route
                path="/messages"
                element={<Navigate replace to="/posts" />}
              />
              <Route path="/admin/*" element={<Dashboard />} />
              <Route path="/" exact element={<Home />} />
              <Route path="*" element={<NotFound to="/not-found" replace />} />
            </Routes>
          </div>
        </React.StrictMode>
      </div>
    );
  }
}

export default App;
