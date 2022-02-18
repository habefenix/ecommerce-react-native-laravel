import list from 'store/reducers/promocodes/promocodesListReducers';
import form from 'store/reducers/promocodes/promocodesFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
