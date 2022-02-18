export interface OrdersFormState {
  findLoading: boolean;
  saveLoading: boolean;
  record: null | any;
}

export enum OrdersFormActionTypes {
  ORDERS_FORM_RESET = 'ORDERS_FORM_RESET',
  ORDERS_FORM_FIND_STARTED = 'ORDERS_FORM_FIND_STARTED',
  ORDERS_FORM_FIND_SUCCESS = 'ORDERS_FORM_FIND_SUCCESS',
  ORDERS_FORM_FIND_ERROR = 'ORDERS_FORM_FIND_ERROR',
  ORDERS_FORM_CREATE_STARTED = 'ORDERS_FORM_CREATE_STARTED',
  ORDERS_FORM_CREATE_SUCCESS = 'ORDERS_FORM_CREATE_SUCCESS',
  ORDERS_FORM_CREATE_ERROR = 'ORDERS_FORM_CREATE_ERROR',
  ORDERS_FORM_UPDATE_STARTED = 'ORDERS_FORM_UPDATE_STARTED',
  ORDERS_FORM_UPDATE_SUCCESS = 'ORDERS_FORM_UPDATE_SUCCESS',
  ORDERS_FORM_UPDATE_ERROR = 'ORDERS_FORM_UPDATE_ERROR',
}

interface OrdersFormReset {
  type: OrdersFormActionTypes.ORDERS_FORM_RESET;
}

interface OrdersFormFindStarted {
  type: OrdersFormActionTypes.ORDERS_FORM_FIND_STARTED;
}

interface OrdersFormFindSuccess {
  type: OrdersFormActionTypes.ORDERS_FORM_FIND_SUCCESS;
  payload: any;
}

interface OrdersFormFindError {
  type: OrdersFormActionTypes.ORDERS_FORM_FIND_ERROR;
}

interface OrdersFormCreateStarted {
  type: OrdersFormActionTypes.ORDERS_FORM_CREATE_STARTED;
}

interface OrdersFormCreateSuccess {
  type: OrdersFormActionTypes.ORDERS_FORM_CREATE_SUCCESS;
}

interface OrdersFormCreateError {
  type: OrdersFormActionTypes.ORDERS_FORM_CREATE_ERROR;
}

interface OrdersFormUpdateStarted {
  type: OrdersFormActionTypes.ORDERS_FORM_UPDATE_STARTED;
}

interface OrdersFormUpdateSuccess {
  type: OrdersFormActionTypes.ORDERS_FORM_UPDATE_SUCCESS;
}

interface OrdersFormUpdateError {
  type: OrdersFormActionTypes.ORDERS_FORM_UPDATE_ERROR;
}

export type OrdersFormAction =
  | OrdersFormReset
  | OrdersFormFindStarted
  | OrdersFormFindSuccess
  | OrdersFormFindError
  | OrdersFormCreateStarted
  | OrdersFormCreateSuccess
  | OrdersFormCreateError
  | OrdersFormUpdateStarted
  | OrdersFormUpdateSuccess
  | OrdersFormUpdateError;
