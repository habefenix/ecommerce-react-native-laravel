import list from 'store/reducers/orders/ordersListReducers';
import form from 'store/reducers/orders/ordersFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
