import './App.css';
import React, { useEffect } from 'react'
import { Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
import CityPage from './pages/CityPage/CityPage';
import HomePage from './pages/HomePage/HomePage';


function App() {
  return (
    <>
      <Header></Header>
      <div className="container">
        <Switch>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>
          <Route path="/city/:query">
            <CityPage></CityPage>
          </Route>
          <Route path="/404">
            <h1>404 not found</h1>
          </Route>
        </Switch>
        



      </div>
    </>
  );
}

export default App;
