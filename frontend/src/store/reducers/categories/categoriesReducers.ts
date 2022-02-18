import list from 'store/reducers/categories/categoriesListReducers';
import form from 'store/reducers/categories/categoriesFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
