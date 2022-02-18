export interface PromocodesListState {
  rows: {
    [key: string]: any;
  }[];
  loading: boolean;
  count: number;
  modalOpen: boolean;
  idToDelete: null | string;
}

export enum PromocodesListActionTypes {
  PROMOCODES_LIST_FILTERED = 'PROMOCODES_LIST_FILTERED',
  PROMOCODES_LIST_FETCH_STARTED = 'PROMOCODES_LIST_FETCH_STARTED',
  PROMOCODES_LIST_FETCH_SUCCESS = 'PROMOCODES_LIST_FETCH_SUCCESS',
  PROMOCODES_LIST_FETCH_ERROR = 'PROMOCODES_LIST_FETCH_ERROR',
  PROMOCODES_LIST_DELETE_STARTED = 'PROMOCODES_LIST_DELETE_STARTED',
  PROMOCODES_LIST_DELETE_SUCCESS = 'PROMOCODES_LIST_DELETE_SUCCESS',
  PROMOCODES_LIST_DELETE_ERROR = 'PROMOCODES_LIST_DELETE_ERROR',
  PROMOCODES_LIST_OPEN_CONFIRM = 'PROMOCODES_LIST_OPEN_CONFIRM',
  PROMOCODES_LIST_CLOSE_CONFIRM = 'PROMOCODES_LIST_CLOSE_CONFIRM',
}

interface PromocodesListFiltered {
  type: PromocodesListActionTypes.PROMOCODES_LIST_FILTERED;
  payload?: {
    rows: {
      [key: string]: any;
    }[];
    count: number;
  };
}

interface PromocodesListFetchStarted {
  type: PromocodesListActionTypes.PROMOCODES_LIST_FETCH_STARTED;
}

interface PromocodesListFetchSuccess {
  type: PromocodesListActionTypes.PROMOCODES_LIST_FETCH_SUCCESS;
  payload?: {
    rows: {
      [key: string]: any;
    }[];
    count: number;
  };
}

interface PromocodesListFetchError {
  type: PromocodesListActionTypes.PROMOCODES_LIST_FETCH_ERROR;
}

interface PromocodesListDeleteStarted {
  type: PromocodesListActionTypes.PROMOCODES_LIST_DELETE_STARTED;
}

interface PromocodesListDeleteSuccess {
  type: PromocodesListActionTypes.PROMOCODES_LIST_DELETE_SUCCESS;
}

interface PromocodesListDeleteError {
  type: PromocodesListActionTypes.PROMOCODES_LIST_DELETE_ERROR;
}

interface PromocodesListOpenConfirm {
  type: PromocodesListActionTypes.PROMOCODES_LIST_OPEN_CONFIRM;
  payload: {
    id: string;
  };
}

interface PromocodesListCloseConfirm {
  type: PromocodesListActionTypes.PROMOCODES_LIST_CLOSE_CONFIRM;
}

export type PromocodesListAction =
  | PromocodesListFiltered
  | PromocodesListFetchStarted
  | PromocodesListFetchSuccess
  | PromocodesListFetchError
  | PromocodesListDeleteStarted
  | PromocodesListDeleteSuccess
  | PromocodesListDeleteError
  | PromocodesListOpenConfirm
  | PromocodesListCloseConfirm;
