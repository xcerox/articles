import { createActionThunk } from 'Factories/create-action';
import ArticleService from 'Services/article-service';
import  { StartLoading, completeLoading, failLoading} from 'Actions/loading-actions';

const fetchArticles = createActionThunk((component, dispatch) => {
  dispatch(StartLoading(component));

  ArticleService
              .getAll()
              .then((data ) => {
                dispatch(completeLoading(component, data));
              })
              .catch(() => {
                dispatch(failLoading(component));
              });

});

export { fetchArticles };