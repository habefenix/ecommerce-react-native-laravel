import list from 'store/reducers/reviews/reviewsListReducers';
import form from 'store/reducers/reviews/reviewsFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
