export interface ReviewsListState {
  rows: {
    [key: string]: any;
  }[];
  loading: boolean;
  count: number;
  modalOpen: boolean;
  idToDelete: null | string;
}

export enum ReviewsListActionTypes {
  REVIEWS_LIST_FILTERED = 'REVIEWS_LIST_FILTERED',
  REVIEWS_LIST_FETCH_STARTED = 'REVIEWS_LIST_FETCH_STARTED',
  REVIEWS_LIST_FETCH_SUCCESS = 'REVIEWS_LIST_FETCH_SUCCESS',
  REVIEWS_LIST_FETCH_ERROR = 'REVIEWS_LIST_FETCH_ERROR',
  REVIEWS_LIST_DELETE_STARTED = 'REVIEWS_LIST_DELETE_STARTED',
  REVIEWS_LIST_DELETE_SUCCESS = 'REVIEWS_LIST_DELETE_SUCCESS',
  REVIEWS_LIST_DELETE_ERROR = 'REVIEWS_LIST_DELETE_ERROR',
  REVIEWS_LIST_OPEN_CONFIRM = 'REVIEWS_LIST_OPEN_CONFIRM',
  REVIEWS_LIST_CLOSE_CONFIRM = 'REVIEWS_LIST_CLOSE_CONFIRM',
}

interface ReviewsListFiltered {
  type: ReviewsListActionTypes.REVIEWS_LIST_FILTERED;
  payload?: {
    rows: {
      [key: string]: any;
    }[];
    count: number;
  };
}

interface ReviewsListFetchStarted {
  type: ReviewsListActionTypes.REVIEWS_LIST_FETCH_STARTED;
}

interface ReviewsListFetchSuccess {
  type: ReviewsListActionTypes.REVIEWS_LIST_FETCH_SUCCESS;
  payload?: {
    rows: {
      [key: string]: any;
    }[];
    count: number;
  };
}

interface ReviewsListFetchError {
  type: ReviewsListActionTypes.REVIEWS_LIST_FETCH_ERROR;
}

interface ReviewsListDeleteStarted {
  type: ReviewsListActionTypes.REVIEWS_LIST_DELETE_STARTED;
}

interface ReviewsListDeleteSuccess {
  type: ReviewsListActionTypes.REVIEWS_LIST_DELETE_SUCCESS;
}

interface ReviewsListDeleteError {
  type: ReviewsListActionTypes.REVIEWS_LIST_DELETE_ERROR;
}

interface ReviewsListOpenConfirm {
  type: ReviewsListActionTypes.REVIEWS_LIST_OPEN_CONFIRM;
  payload: {
    id: string;
  };
}

interface ReviewsListCloseConfirm {
  type: ReviewsListActionTypes.REVIEWS_LIST_CLOSE_CONFIRM;
}

export type ReviewsListAction =
  | ReviewsListFiltered
  | ReviewsListFetchStarted
  | ReviewsListFetchSuccess
  | ReviewsListFetchError
  | ReviewsListDeleteStarted
  | ReviewsListDeleteSuccess
  | ReviewsListDeleteError
  | ReviewsListOpenConfirm
  | ReviewsListCloseConfirm;
