export interface OrdersListState {
  rows: {
    [key: string]: any;
  }[];
  loading: boolean;
  count: number;
  modalOpen: boolean;
  idToDelete: null | string;
}

export enum OrdersListActionTypes {
  ORDERS_LIST_FILTERED = 'ORDERS_LIST_FILTERED',
  ORDERS_LIST_FETCH_STARTED = 'ORDERS_LIST_FETCH_STARTED',
  ORDERS_LIST_FETCH_SUCCESS = 'ORDERS_LIST_FETCH_SUCCESS',
  ORDERS_LIST_FETCH_ERROR = 'ORDERS_LIST_FETCH_ERROR',
  ORDERS_LIST_DELETE_STARTED = 'ORDERS_LIST_DELETE_STARTED',
  ORDERS_LIST_DELETE_SUCCESS = 'ORDERS_LIST_DELETE_SUCCESS',
  ORDERS_LIST_DELETE_ERROR = 'ORDERS_LIST_DELETE_ERROR',
  ORDERS_LIST_OPEN_CONFIRM = 'ORDERS_LIST_OPEN_CONFIRM',
  ORDERS_LIST_CLOSE_CONFIRM = 'ORDERS_LIST_CLOSE_CONFIRM',
}

interface OrdersListFiltered {
  type: OrdersListActionTypes.ORDERS_LIST_FILTERED;
  payload?: {
    rows: {
      [key: string]: any;
    }[];
    count: number;
  };
}

interface OrdersListFetchStarted {
  type: OrdersListActionTypes.ORDERS_LIST_FETCH_STARTED;
}

interface OrdersListFetchSuccess {
  type: OrdersListActionTypes.ORDERS_LIST_FETCH_SUCCESS;
  payload?: {
    rows: {
      [key: string]: any;
    }[];
    count: number;
  };
}

interface OrdersListFetchError {
  type: OrdersListActionTypes.ORDERS_LIST_FETCH_ERROR;
}

interface OrdersListDeleteStarted {
  type: OrdersListActionTypes.ORDERS_LIST_DELETE_STARTED;
}

interface OrdersListDeleteSuccess {
  type: OrdersListActionTypes.ORDERS_LIST_DELETE_SUCCESS;
}

interface OrdersListDeleteError {
  type: OrdersListActionTypes.ORDERS_LIST_DELETE_ERROR;
}

interface OrdersListOpenConfirm {
  type: OrdersListActionTypes.ORDERS_LIST_OPEN_CONFIRM;
  payload: {
    id: string;
  };
}

interface OrdersListCloseConfirm {
  type: OrdersListActionTypes.ORDERS_LIST_CLOSE_CONFIRM;
}

export type OrdersListAction =
  | OrdersListFiltered
  | OrdersListFetchStarted
  | OrdersListFetchSuccess
  | OrdersListFetchError
  | OrdersListDeleteStarted
  | OrdersListDeleteSuccess
  | OrdersListDeleteError
  | OrdersListOpenConfirm
  | OrdersListCloseConfirm;
