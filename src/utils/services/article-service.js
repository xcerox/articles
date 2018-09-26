import axios from 'axios';
import { ARTICLE_API_KEY } from 'Constants/keys';

let me;

class ArticleService {

  constructor() {
    if (!me) {
      me = this;

      me.API_URL = `http://reduxblog.herokuapp.com/api`;
      me.API_KEY = `?key=${ARTICLE_API_KEY}`;
      
      me.getAll = me.getAll.bind(me);
      me.getById = me.getById.bind(me);
      me.create = me.create.bind(me);
      me.deleteById = me.deleteById.bind(me);
    } 

    return me;
  }

  getAll() {
    return axios.get(`${this.API_URL}/posts${this.API_KEY}`);
  }

  getById (id) {
    return axios.get(`${this.API_URL}/posts/${id}${this.API_KEY}`);
  }

  create(article) {
    return axios.post(`${this.API_URL}/posts${this.API_KEY}`, article);
  }

  deleteById(id) {
    return axios.delete(`${this.API_URL}/posts/${id}${this.API_KEY}`);
  }
 }

 export default new ArticleService();