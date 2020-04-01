import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation";
import MovieDetail from "./components/MovieDetail";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      {/* 누군가 path로 접근하면 component를 마운트 */}
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={MovieDetail} />
    </BrowserRouter>
  );
};

export default App;
