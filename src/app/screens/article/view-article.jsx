import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getActicleByIdThunk, deleteArticleThunk } from 'Actions/article-actions';
import * as router from 'Constants/router';

class ViewArticle extends Component {

  constructor(props) {
    super(props);

    this.OnDeleteArticle = this.OnDeleteArticle.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getActicleByIdThunk(id);
  }

  OnDeleteArticle() {
    const { id } = this.props.match.params;
    this.props.deleteArticleThunk({
      id,
      next: () => {
        this.props.history.push(router.HOME);
      }
    });
  }

  render() {
    const { article } = this.props;

    if (!article) {
      return <div>Loading</div>
    }

    return (
      <div className="row">
        <div className="col s12 m6">
          <div className="card">
            <div className="card-content">
              <span className="card-title">{article.title}</span>
            </div>
            <div className="card-content">
              <p>Categories: {article.categories}</p>
              <p>{article.content}</p>
            </div>
            <div className="card-action">
              <Link to={router.HOME} className="btn btn-primary">back</Link>
              <button className="btn red" onClick={this.OnDeleteArticle}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ articles }, ownProps) {
  return { article: articles[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { getActicleByIdThunk, deleteArticleThunk })(ViewArticle);