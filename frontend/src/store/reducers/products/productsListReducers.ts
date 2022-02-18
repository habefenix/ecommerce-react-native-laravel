import {
  ProductsListState,
  ProductsListAction,
  ProductsListActionTypes,
} from 'types/redux/products/productsList';

const initialData: ProductsListState = {
  rows: [],
  loading: false,
  count: 0,
  modalOpen: false,
  idToDelete: null,
};

export default (state = initialData, action: ProductsListAction): ProductsListState => {
  switch (action.type) {
    case ProductsListActionTypes.PRODUCTS_LIST_FILTERED:
      return {
        ...state,
        rows: action.payload!.rows,
        loading: false,
      };
    case ProductsListActionTypes.PRODUCTS_LIST_FETCH_STARTED:
      return {
        ...state,
        loading: true,
      };
    case ProductsListActionTypes.PRODUCTS_LIST_FETCH_SUCCESS:
      return {
        ...state,
        rows: action.payload!.rows,
        loading: false,
        count: action.payload!.count,
      };
    case ProductsListActionTypes.PRODUCTS_LIST_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        rows: [],
      };
    case ProductsListActionTypes.PRODUCTS_LIST_DELETE_STARTED:
      return {
        ...state,
        loading: true,
      };
    case ProductsListActionTypes.PRODUCTS_LIST_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        modalOpen: false,
      };
    case ProductsListActionTypes.PRODUCTS_LIST_DELETE_ERROR:
      return {
        ...state,
        loading: false,
        modalOpen: false,
      };
    case ProductsListActionTypes.PRODUCTS_LIST_OPEN_CONFIRM:
      return {
        ...state,
        loading: false,
        modalOpen: true,
        idToDelete: action.payload.id,
      };
    case ProductsListActionTypes.PRODUCTS_LIST_CLOSE_CONFIRM:
      return {
        ...state,
        loading: false,
        modalOpen: false,
      };
    default:
      return state;
  }
};
