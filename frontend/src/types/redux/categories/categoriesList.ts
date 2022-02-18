export interface CategoriesListState {
  rows: {
    [key: string]: any;
  }[];
  loading: boolean;
  count: number;
  modalOpen: boolean;
  idToDelete: null | string;
}

export enum CategoriesListActionTypes {
  CATEGORIES_LIST_FILTERED = 'CATEGORIES_LIST_FILTERED',
  CATEGORIES_LIST_FETCH_STARTED = 'CATEGORIES_LIST_FETCH_STARTED',
  CATEGORIES_LIST_FETCH_SUCCESS = 'CATEGORIES_LIST_FETCH_SUCCESS',
  CATEGORIES_LIST_FETCH_ERROR = 'CATEGORIES_LIST_FETCH_ERROR',
  CATEGORIES_LIST_DELETE_STARTED = 'CATEGORIES_LIST_DELETE_STARTED',
  CATEGORIES_LIST_DELETE_SUCCESS = 'CATEGORIES_LIST_DELETE_SUCCESS',
  CATEGORIES_LIST_DELETE_ERROR = 'CATEGORIES_LIST_DELETE_ERROR',
  CATEGORIES_LIST_OPEN_CONFIRM = 'CATEGORIES_LIST_OPEN_CONFIRM',
  CATEGORIES_LIST_CLOSE_CONFIRM = 'CATEGORIES_LIST_CLOSE_CONFIRM',
}

interface CategoriesListFiltered {
  type: CategoriesListActionTypes.CATEGORIES_LIST_FILTERED;
  payload?: {
    rows: {
      [key: string]: any;
    }[];
    count: number;
  };
}

interface CategoriesListFetchStarted {
  type: CategoriesListActionTypes.CATEGORIES_LIST_FETCH_STARTED;
}

interface CategoriesListFetchSuccess {
  type: CategoriesListActionTypes.CATEGORIES_LIST_FETCH_SUCCESS;
  payload?: {
    rows: {
      [key: string]: any;
    }[];
    count: number;
  };
}

interface CategoriesListFetchError {
  type: CategoriesListActionTypes.CATEGORIES_LIST_FETCH_ERROR;
}

interface CategoriesListDeleteStarted {
  type: CategoriesListActionTypes.CATEGORIES_LIST_DELETE_STARTED;
}

interface CategoriesListDeleteSuccess {
  type: CategoriesListActionTypes.CATEGORIES_LIST_DELETE_SUCCESS;
}

interface CategoriesListDeleteError {
  type: CategoriesListActionTypes.CATEGORIES_LIST_DELETE_ERROR;
}

interface CategoriesListOpenConfirm {
  type: CategoriesListActionTypes.CATEGORIES_LIST_OPEN_CONFIRM;
  payload: {
    id: string;
  };
}

interface CategoriesListCloseConfirm {
  type: CategoriesListActionTypes.CATEGORIES_LIST_CLOSE_CONFIRM;
}

export type CategoriesListAction =
  | CategoriesListFiltered
  | CategoriesListFetchStarted
  | CategoriesListFetchSuccess
  | CategoriesListFetchError
  | CategoriesListDeleteStarted
  | CategoriesListDeleteSuccess
  | CategoriesListDeleteError
  | CategoriesListOpenConfirm
  | CategoriesListCloseConfirm;
