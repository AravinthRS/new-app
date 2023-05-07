import "./App.css";
import React from "react";
import Header from "./components/Header";
import FooterNav from "./components/FooterNav";
import Content from "./components/Content";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Content />
      <FooterNav />
    </div>
  );
}
export default App;
