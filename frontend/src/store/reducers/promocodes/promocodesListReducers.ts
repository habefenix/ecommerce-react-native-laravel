import {
  PromocodesListState,
  PromocodesListAction,
  PromocodesListActionTypes,
} from 'types/redux/promocodes/promocodesList';

const initialData: PromocodesListState = {
  rows: [],
  loading: false,
  count: 0,
  modalOpen: false,
  idToDelete: null,
};

export default (state = initialData, action: PromocodesListAction): PromocodesListState => {
  switch (action.type) {
    case PromocodesListActionTypes.PROMOCODES_LIST_FILTERED:
      return {
        ...state,
        rows: action.payload!.rows,
        loading: false,
      };
    case PromocodesListActionTypes.PROMOCODES_LIST_FETCH_STARTED:
      return {
        ...state,
        loading: true,
      };
    case PromocodesListActionTypes.PROMOCODES_LIST_FETCH_SUCCESS:
      return {
        ...state,
        rows: action.payload!.rows,
        loading: false,
        count: action.payload!.count,
      };
    case PromocodesListActionTypes.PROMOCODES_LIST_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        rows: [],
      };
    case PromocodesListActionTypes.PROMOCODES_LIST_DELETE_STARTED:
      return {
        ...state,
        loading: true,
      };
    case PromocodesListActionTypes.PROMOCODES_LIST_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        modalOpen: false,
      };
    case PromocodesListActionTypes.PROMOCODES_LIST_DELETE_ERROR:
      return {
        ...state,
        loading: false,
        modalOpen: false,
      };
    case PromocodesListActionTypes.PROMOCODES_LIST_OPEN_CONFIRM:
      return {
        ...state,
        loading: false,
        modalOpen: true,
        idToDelete: action.payload.id,
      };
    case PromocodesListActionTypes.PROMOCODES_LIST_CLOSE_CONFIRM:
      return {
        ...state,
        loading: false,
        modalOpen: false,
      };
    default:
      return state;
  }
};
