export interface ProductsFormState {
  findLoading: boolean;
  saveLoading: boolean;
  record: null | any;
}

export enum ProductsFormActionTypes {
  PRODUCTS_FORM_RESET = 'PRODUCTS_FORM_RESET',
  PRODUCTS_FORM_FIND_STARTED = 'PRODUCTS_FORM_FIND_STARTED',
  PRODUCTS_FORM_FIND_SUCCESS = 'PRODUCTS_FORM_FIND_SUCCESS',
  PRODUCTS_FORM_FIND_ERROR = 'PRODUCTS_FORM_FIND_ERROR',
  PRODUCTS_FORM_CREATE_STARTED = 'PRODUCTS_FORM_CREATE_STARTED',
  PRODUCTS_FORM_CREATE_SUCCESS = 'PRODUCTS_FORM_CREATE_SUCCESS',
  PRODUCTS_FORM_CREATE_ERROR = 'PRODUCTS_FORM_CREATE_ERROR',
  PRODUCTS_FORM_UPDATE_STARTED = 'PRODUCTS_FORM_UPDATE_STARTED',
  PRODUCTS_FORM_UPDATE_SUCCESS = 'PRODUCTS_FORM_UPDATE_SUCCESS',
  PRODUCTS_FORM_UPDATE_ERROR = 'PRODUCTS_FORM_UPDATE_ERROR',
}

interface ProductsFormReset {
  type: ProductsFormActionTypes.PRODUCTS_FORM_RESET;
}

interface ProductsFormFindStarted {
  type: ProductsFormActionTypes.PRODUCTS_FORM_FIND_STARTED;
}

interface ProductsFormFindSuccess {
  type: ProductsFormActionTypes.PRODUCTS_FORM_FIND_SUCCESS;
  payload: any;
}

interface ProductsFormFindError {
  type: ProductsFormActionTypes.PRODUCTS_FORM_FIND_ERROR;
}

interface ProductsFormCreateStarted {
  type: ProductsFormActionTypes.PRODUCTS_FORM_CREATE_STARTED;
}

interface ProductsFormCreateSuccess {
  type: ProductsFormActionTypes.PRODUCTS_FORM_CREATE_SUCCESS;
}

interface ProductsFormCreateError {
  type: ProductsFormActionTypes.PRODUCTS_FORM_CREATE_ERROR;
}

interface ProductsFormUpdateStarted {
  type: ProductsFormActionTypes.PRODUCTS_FORM_UPDATE_STARTED;
}

interface ProductsFormUpdateSuccess {
  type: ProductsFormActionTypes.PRODUCTS_FORM_UPDATE_SUCCESS;
}

interface ProductsFormUpdateError {
  type: ProductsFormActionTypes.PRODUCTS_FORM_UPDATE_ERROR;
}

export type ProductsFormAction =
  | ProductsFormReset
  | ProductsFormFindStarted
  | ProductsFormFindSuccess
  | ProductsFormFindError
  | ProductsFormCreateStarted
  | ProductsFormCreateSuccess
  | ProductsFormCreateError
  | ProductsFormUpdateStarted
  | ProductsFormUpdateSuccess
  | ProductsFormUpdateError;
