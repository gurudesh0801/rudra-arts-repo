import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Element } from "react-scroll";

import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/About/About";
import Blogs from "./Components/Blogs/Blogs";
import Products from "./Components/Products/Products";
import Contact from "./Components/Contact/Contact";
import AllProducts from "./Components/AllProducts/AllProducts";
import News from "./Components/News/News";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Element name="home">
                <Home />
              </Element>
              <Element name="about">
                <AboutUs />
              </Element>
              <Element name="Products">
                <Products />
              </Element>
              <Element name="news">
                <News />
              </Element>
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <AboutUs />
            </Layout>
          }
        />
        <Route
          path="/Blogs"
          element={
            <Layout>
              <Blogs />
            </Layout>
          }
        />
        <Route
          path="/news"
          element={
            <Layout>
              <News />
            </Layout>
          }
        />
        <Route
          path="/Products"
          element={
            <Layout>
              <AllProducts />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
