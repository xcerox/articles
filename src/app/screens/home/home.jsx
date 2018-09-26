import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { map } from 'lodash';

import * as router from 'Constants/router';
import { fetchArticlesThunk } from 'Actions/article-actions';

class Home extends Component {

  constructor(props) {
    super(props);

    this.renderArticles = this.renderArticles.bind(this);
  }

  componentDidMount() {
    this.props.fetchArticlesThunk();
  }

  renderArticles() {
    if (!this.props.articles) {
      return null;
    }

    return map(this.props.articles, article => {
      return (
        <li className="collection-item avatar" key={article.id}>
          <Link to={`/article/${article.id}`}>
            <img src="https://vignette.wikia.nocookie.net/streetfighter/images/9/90/Character_select_Evil_Ryu_SSFIV.png/revision/latest/scale-to-width-down/310?cb=20180603084457&path-prefix=es" alt="" className="circle" />
            <span className="title">{article.title}</span>
            <span className="secondary-content"><i className="material-icons">send</i></span>
          </Link>
        </li>
      )
    });
  }

  render() {
    return (
      <div>
        <div className="right-align">
          <Link className="btn btn-primary" to={router.ARTICLE_NEW}>New article</Link>
        </div>
        <div className="center-align">
          <h3>Articles</h3>
        </div>
        <ul className="collection">
          {this.renderArticles()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ articles }) {
  return { articles }
}
export default connect(mapStateToProps, { fetchArticlesThunk })(Home);