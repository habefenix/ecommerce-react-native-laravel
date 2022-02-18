export interface CategoriesFormState {
  findLoading: boolean;
  saveLoading: boolean;
  record: null | any;
}

export enum CategoriesFormActionTypes {
  CATEGORIES_FORM_RESET = 'CATEGORIES_FORM_RESET',
  CATEGORIES_FORM_FIND_STARTED = 'CATEGORIES_FORM_FIND_STARTED',
  CATEGORIES_FORM_FIND_SUCCESS = 'CATEGORIES_FORM_FIND_SUCCESS',
  CATEGORIES_FORM_FIND_ERROR = 'CATEGORIES_FORM_FIND_ERROR',
  CATEGORIES_FORM_CREATE_STARTED = 'CATEGORIES_FORM_CREATE_STARTED',
  CATEGORIES_FORM_CREATE_SUCCESS = 'CATEGORIES_FORM_CREATE_SUCCESS',
  CATEGORIES_FORM_CREATE_ERROR = 'CATEGORIES_FORM_CREATE_ERROR',
  CATEGORIES_FORM_UPDATE_STARTED = 'CATEGORIES_FORM_UPDATE_STARTED',
  CATEGORIES_FORM_UPDATE_SUCCESS = 'CATEGORIES_FORM_UPDATE_SUCCESS',
  CATEGORIES_FORM_UPDATE_ERROR = 'CATEGORIES_FORM_UPDATE_ERROR',
}

interface CategoriesFormReset {
  type: CategoriesFormActionTypes.CATEGORIES_FORM_RESET;
}

interface CategoriesFormFindStarted {
  type: CategoriesFormActionTypes.CATEGORIES_FORM_FIND_STARTED;
}

interface CategoriesFormFindSuccess {
  type: CategoriesFormActionTypes.CATEGORIES_FORM_FIND_SUCCESS;
  payload: any;
}

interface CategoriesFormFindError {
  type: CategoriesFormActionTypes.CATEGORIES_FORM_FIND_ERROR;
}

interface CategoriesFormCreateStarted {
  type: CategoriesFormActionTypes.CATEGORIES_FORM_CREATE_STARTED;
}

interface CategoriesFormCreateSuccess {
  type: CategoriesFormActionTypes.CATEGORIES_FORM_CREATE_SUCCESS;
}

interface CategoriesFormCreateError {
  type: CategoriesFormActionTypes.CATEGORIES_FORM_CREATE_ERROR;
}

interface CategoriesFormUpdateStarted {
  type: CategoriesFormActionTypes.CATEGORIES_FORM_UPDATE_STARTED;
}

interface CategoriesFormUpdateSuccess {
  type: CategoriesFormActionTypes.CATEGORIES_FORM_UPDATE_SUCCESS;
}

interface CategoriesFormUpdateError {
  type: CategoriesFormActionTypes.CATEGORIES_FORM_UPDATE_ERROR;
}

export type CategoriesFormAction =
  | CategoriesFormReset
  | CategoriesFormFindStarted
  | CategoriesFormFindSuccess
  | CategoriesFormFindError
  | CategoriesFormCreateStarted
  | CategoriesFormCreateSuccess
  | CategoriesFormCreateError
  | CategoriesFormUpdateStarted
  | CategoriesFormUpdateSuccess
  | CategoriesFormUpdateError;
