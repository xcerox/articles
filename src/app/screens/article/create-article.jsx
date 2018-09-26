import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { createActicleThunk } from 'Actions/article-actions';
import * as router from 'Constants/router';

class CreateArticle extends Component {

  constructor(props) {
    super(props);

    this.drawField = this.drawField.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  drawField(field) {

    const Error = ({ meta }) => {
      
      if (!meta.touched) {
        return null;
      }

      return <span className="helper-text">{meta.error}</span>
    };

    return (
      <div className="row">
      <div className="input-field col s6">
        <input type={field.type} { ...field.input} />
        <label htmlFor="first_name2">{field.label}</label>
        <Error meta={field.meta} />
      </div>
    </div>
    );
  }

  onSubmitForm(values) {
    this.props.createActicleThunk({
      article: values,
      next: () =>{
        this.props.history.push(router.HOME);
      }
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (

      <form onSubmit={handleSubmit(this.onSubmitForm)}>
        <Field name="title" label="Title" type="text" component={this.drawField} />
        <Field name="categories" label="Categories" type="text" component={this.drawField}/>
        <Field name="content" label="Comment" type="text" component={this.drawField}/>
        <button type="submit" className="btn btn-primary" >submit</button >
        <Link className="btn red" to="/">Cancel</Link>
      </form>
    )
  }
}

function validate(values) {
  const err = {};

  if (!values.title) {
    err.title = '! Enter a title';
  }

  if (!values.categories) {
    err.categories = '! Enter some categories';
  }

  if (!values.content) {
    err.content = '! Enter a comment';
  }

  return err;
}

export default reduxForm({validate: validate, form: 'CreateArticle',})
(connect(null, { createActicleThunk })(CreateArticle));