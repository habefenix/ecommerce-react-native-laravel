import {
  CategoriesListState,
  CategoriesListAction,
  CategoriesListActionTypes,
} from 'types/redux/categories/categoriesList';

const initialData: CategoriesListState = {
  rows: [],
  loading: false,
  count: 0,
  modalOpen: false,
  idToDelete: null,
};

export default (state = initialData, action: CategoriesListAction): CategoriesListState => {
  switch (action.type) {
    case CategoriesListActionTypes.CATEGORIES_LIST_FILTERED:
      return {
        ...state,
        rows: action.payload!.rows,
        loading: false,
      };
    case CategoriesListActionTypes.CATEGORIES_LIST_FETCH_STARTED:
      return {
        ...state,
        loading: true,
      };
    case CategoriesListActionTypes.CATEGORIES_LIST_FETCH_SUCCESS:
      return {
        ...state,
        rows: action.payload!.rows,
        loading: false,
        count: action.payload!.count,
      };
    case CategoriesListActionTypes.CATEGORIES_LIST_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        rows: [],
      };
    case CategoriesListActionTypes.CATEGORIES_LIST_DELETE_STARTED:
      return {
        ...state,
        loading: true,
      };
    case CategoriesListActionTypes.CATEGORIES_LIST_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        modalOpen: false,
      };
    case CategoriesListActionTypes.CATEGORIES_LIST_DELETE_ERROR:
      return {
        ...state,
        loading: false,
        modalOpen: false,
      };
    case CategoriesListActionTypes.CATEGORIES_LIST_OPEN_CONFIRM:
      return {
        ...state,
        loading: false,
        modalOpen: true,
        idToDelete: action.payload.id,
      };
    case CategoriesListActionTypes.CATEGORIES_LIST_CLOSE_CONFIRM:
      return {
        ...state,
        loading: false,
        modalOpen: false,
      };
    default:
      return state;
  }
};
