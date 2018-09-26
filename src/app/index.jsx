import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import * as router from 'Constants/router';

import Home from 'App/screens/home/home';
import CreateArticle from 'App/screens/article/create-article';
import ViewArticle from 'App/screens/article/view-article';

import 'Styles/app.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path={router.HOME} component={Home} />
          <Route path={router.ARTICLE_NEW} component={CreateArticle} />
          <Route path={router.ARTICLE_VIEW} component={ViewArticle} />
        </Switch>
      </div>
    );
  }
}
