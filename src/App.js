import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";

const App = () => {
  return (
    <HashRouter>
      {/* 누군가 path로 접근하면 component를 마운트 */}
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
};

export default App;
