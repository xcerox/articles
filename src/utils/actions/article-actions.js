import { createActionThunk, createAction } from 'Factories/create-action';
import ArticleService from 'Services/article-service';
import { FETCH_ARTICLES, CREATE_ARTICLE, FETCH_ARTICLE, DELETE_ARTICLE} from 'Constants/articles-types';

const fetchArticles = createAction(FETCH_ARTICLES, 'payload')
const createActicle = createAction(CREATE_ARTICLE);
const getActicleById = createAction(FETCH_ARTICLE, 'payload');
const deleteActicleById = createAction(DELETE_ARTICLE, 'payload');

const fetchArticlesThunk = createActionThunk((props, dispatch) => {
  ArticleService.getAll().then((data) => dispatch(fetchArticles(data)));
});

const createActicleThunk = createActionThunk((props, dispatch) => {
  ArticleService.create(props.article).then(() => {
    dispatch(createActicle());
    props.next()
  });
});

const getActicleByIdThunk = createActionThunk((id, dispatch) => {
  ArticleService.getById(id).then((data) => dispatch(getActicleById(data)));
});

const deleteArticleThunk = createActionThunk((props, dispatch) => {
  ArticleService.deleteById(props.id).then(() => {
    dispatch(deleteActicleById(props.id));
    props.next()
  });
});

export { fetchArticlesThunk, createActicleThunk, getActicleByIdThunk, deleteArticleThunk };