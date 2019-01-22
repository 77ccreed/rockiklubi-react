import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Et from './../Pages/et';
import En from './../Pages/en';
import De from './../Pages/de';
import Fi from './../Pages/fi';
import Lv from './../Pages/lv';
import NotFoundPage from './../Component/NotFoundPage';
import Navbar from './../Component/Navbar';
import "./../../Css/App.css";


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Navbar />
      <Switch>
        <Route path="/" component={Et} exact={true} />
        <Route path="/en" component={En} />
        <Route path="/de" component={De} />
        <Route path="/fi" component={Fi} />
        <Route path="/lv" component={Lv} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;