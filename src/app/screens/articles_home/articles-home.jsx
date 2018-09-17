import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArticles } from 'Actions/article-actions';
import { map } from 'lodash';

class ArticlesHome extends Component {

  static uid(){
    return "ArticlesHome";
  }

  constructor(props){
    super(props);

    this.renderArticles = this.renderArticles.bind(this);
  }

  componentDidMount() {
    this.props.fetchArticles(ArticlesHome.uid());
  }

  renderArticles() {
    if (!this.props.articles) {
      return null;
    }

    return map(this.props.articles.data, article => {
      return (
        <li className="collection-item" key={article.id}>
          {article.title}
        </li>
      )
    });
  }

  render() {
    return (
      <div>
        <h3>Articles</h3>
        <ul className="collection">
          {this.renderArticles()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ loading }) {
  return {
    articles: loading[ArticlesHome.uid()]
  }
}
export default connect(mapStateToProps, { fetchArticles })(ArticlesHome);