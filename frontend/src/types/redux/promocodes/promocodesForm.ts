export interface PromocodesFormState {
  findLoading: boolean;
  saveLoading: boolean;
  record: null | any;
}

export enum PromocodesFormActionTypes {
  PROMOCODES_FORM_RESET = 'PROMOCODES_FORM_RESET',
  PROMOCODES_FORM_FIND_STARTED = 'PROMOCODES_FORM_FIND_STARTED',
  PROMOCODES_FORM_FIND_SUCCESS = 'PROMOCODES_FORM_FIND_SUCCESS',
  PROMOCODES_FORM_FIND_ERROR = 'PROMOCODES_FORM_FIND_ERROR',
  PROMOCODES_FORM_CREATE_STARTED = 'PROMOCODES_FORM_CREATE_STARTED',
  PROMOCODES_FORM_CREATE_SUCCESS = 'PROMOCODES_FORM_CREATE_SUCCESS',
  PROMOCODES_FORM_CREATE_ERROR = 'PROMOCODES_FORM_CREATE_ERROR',
  PROMOCODES_FORM_UPDATE_STARTED = 'PROMOCODES_FORM_UPDATE_STARTED',
  PROMOCODES_FORM_UPDATE_SUCCESS = 'PROMOCODES_FORM_UPDATE_SUCCESS',
  PROMOCODES_FORM_UPDATE_ERROR = 'PROMOCODES_FORM_UPDATE_ERROR',
}

interface PromocodesFormReset {
  type: PromocodesFormActionTypes.PROMOCODES_FORM_RESET;
}

interface PromocodesFormFindStarted {
  type: PromocodesFormActionTypes.PROMOCODES_FORM_FIND_STARTED;
}

interface PromocodesFormFindSuccess {
  type: PromocodesFormActionTypes.PROMOCODES_FORM_FIND_SUCCESS;
  payload: any;
}

interface PromocodesFormFindError {
  type: PromocodesFormActionTypes.PROMOCODES_FORM_FIND_ERROR;
}

interface PromocodesFormCreateStarted {
  type: PromocodesFormActionTypes.PROMOCODES_FORM_CREATE_STARTED;
}

interface PromocodesFormCreateSuccess {
  type: PromocodesFormActionTypes.PROMOCODES_FORM_CREATE_SUCCESS;
}

interface PromocodesFormCreateError {
  type: PromocodesFormActionTypes.PROMOCODES_FORM_CREATE_ERROR;
}

interface PromocodesFormUpdateStarted {
  type: PromocodesFormActionTypes.PROMOCODES_FORM_UPDATE_STARTED;
}

interface PromocodesFormUpdateSuccess {
  type: PromocodesFormActionTypes.PROMOCODES_FORM_UPDATE_SUCCESS;
}

interface PromocodesFormUpdateError {
  type: PromocodesFormActionTypes.PROMOCODES_FORM_UPDATE_ERROR;
}

export type PromocodesFormAction =
  | PromocodesFormReset
  | PromocodesFormFindStarted
  | PromocodesFormFindSuccess
  | PromocodesFormFindError
  | PromocodesFormCreateStarted
  | PromocodesFormCreateSuccess
  | PromocodesFormCreateError
  | PromocodesFormUpdateStarted
  | PromocodesFormUpdateSuccess
  | PromocodesFormUpdateError;
