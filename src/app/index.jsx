import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import ArticlesHome from 'App/screens/articles_home/articles-home';

import 'Styles/app.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={ArticlesHome} />
      </div>
    );
  }
}
