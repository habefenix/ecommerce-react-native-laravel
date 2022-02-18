import list from 'store/reducers/products/productsListReducers';
import form from 'store/reducers/products/productsFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
