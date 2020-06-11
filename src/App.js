import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage"
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <h1>happy coding :)</h1>
      <Navbar/>
      <Switch>
        <Route path="/discover" component={DiscoverMoviesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
