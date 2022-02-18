export interface ProductsListState {
  rows: {
    [key: string]: any;
  }[];
  loading: boolean;
  count: number;
  modalOpen: boolean;
  idToDelete: null | string;
}

export enum ProductsListActionTypes {
  PRODUCTS_LIST_FILTERED = 'PRODUCTS_LIST_FILTERED',
  PRODUCTS_LIST_FETCH_STARTED = 'PRODUCTS_LIST_FETCH_STARTED',
  PRODUCTS_LIST_FETCH_SUCCESS = 'PRODUCTS_LIST_FETCH_SUCCESS',
  PRODUCTS_LIST_FETCH_ERROR = 'PRODUCTS_LIST_FETCH_ERROR',
  PRODUCTS_LIST_DELETE_STARTED = 'PRODUCTS_LIST_DELETE_STARTED',
  PRODUCTS_LIST_DELETE_SUCCESS = 'PRODUCTS_LIST_DELETE_SUCCESS',
  PRODUCTS_LIST_DELETE_ERROR = 'PRODUCTS_LIST_DELETE_ERROR',
  PRODUCTS_LIST_OPEN_CONFIRM = 'PRODUCTS_LIST_OPEN_CONFIRM',
  PRODUCTS_LIST_CLOSE_CONFIRM = 'PRODUCTS_LIST_CLOSE_CONFIRM',
}

interface ProductsListFiltered {
  type: ProductsListActionTypes.PRODUCTS_LIST_FILTERED;
  payload?: {
    rows: {
      [key: string]: any;
    }[];
    count: number;
  };
}

interface ProductsListFetchStarted {
  type: ProductsListActionTypes.PRODUCTS_LIST_FETCH_STARTED;
}

interface ProductsListFetchSuccess {
  type: ProductsListActionTypes.PRODUCTS_LIST_FETCH_SUCCESS;
  payload?: {
    rows: {
      [key: string]: any;
    }[];
    count: number;
  };
}

interface ProductsListFetchError {
  type: ProductsListActionTypes.PRODUCTS_LIST_FETCH_ERROR;
}

interface ProductsListDeleteStarted {
  type: ProductsListActionTypes.PRODUCTS_LIST_DELETE_STARTED;
}

interface ProductsListDeleteSuccess {
  type: ProductsListActionTypes.PRODUCTS_LIST_DELETE_SUCCESS;
}

interface ProductsListDeleteError {
  type: ProductsListActionTypes.PRODUCTS_LIST_DELETE_ERROR;
}

interface ProductsListOpenConfirm {
  type: ProductsListActionTypes.PRODUCTS_LIST_OPEN_CONFIRM;
  payload: {
    id: string;
  };
}

interface ProductsListCloseConfirm {
  type: ProductsListActionTypes.PRODUCTS_LIST_CLOSE_CONFIRM;
}

export type ProductsListAction =
  | ProductsListFiltered
  | ProductsListFetchStarted
  | ProductsListFetchSuccess
  | ProductsListFetchError
  | ProductsListDeleteStarted
  | ProductsListDeleteSuccess
  | ProductsListDeleteError
  | ProductsListOpenConfirm
  | ProductsListCloseConfirm;
