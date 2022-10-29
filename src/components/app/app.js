import React from 'react';
import ShopHeader from '../shop-header';
import { BookListPage, CartPage } from '../pages';

import { Route, Switch } from "react-router-dom";
import './app.css';

const App = () => {
  return (
    <main role="main" className="container">
      <ShopHeader />
      <Switch>
        <Route
          path="/"
          component={BookListPage}
          exact />

        <Route
          path="/cart"
          component={CartPage}
          />
      </Switch>
    </main>
  );
};

export default App;
