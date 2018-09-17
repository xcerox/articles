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
    } 

    return me;
  }

  getAll() {
    return axios.get(`${this.API_URL}/posts${me.API_KEY}`);
  }
 }

 export default new ArticleService();