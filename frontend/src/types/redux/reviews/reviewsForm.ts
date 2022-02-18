export interface ReviewsFormState {
  findLoading: boolean;
  saveLoading: boolean;
  record: null | any;
}

export enum ReviewsFormActionTypes {
  REVIEWS_FORM_RESET = 'REVIEWS_FORM_RESET',
  REVIEWS_FORM_FIND_STARTED = 'REVIEWS_FORM_FIND_STARTED',
  REVIEWS_FORM_FIND_SUCCESS = 'REVIEWS_FORM_FIND_SUCCESS',
  REVIEWS_FORM_FIND_ERROR = 'REVIEWS_FORM_FIND_ERROR',
  REVIEWS_FORM_CREATE_STARTED = 'REVIEWS_FORM_CREATE_STARTED',
  REVIEWS_FORM_CREATE_SUCCESS = 'REVIEWS_FORM_CREATE_SUCCESS',
  REVIEWS_FORM_CREATE_ERROR = 'REVIEWS_FORM_CREATE_ERROR',
  REVIEWS_FORM_UPDATE_STARTED = 'REVIEWS_FORM_UPDATE_STARTED',
  REVIEWS_FORM_UPDATE_SUCCESS = 'REVIEWS_FORM_UPDATE_SUCCESS',
  REVIEWS_FORM_UPDATE_ERROR = 'REVIEWS_FORM_UPDATE_ERROR',
}

interface ReviewsFormReset {
  type: ReviewsFormActionTypes.REVIEWS_FORM_RESET;
}

interface ReviewsFormFindStarted {
  type: ReviewsFormActionTypes.REVIEWS_FORM_FIND_STARTED;
}

interface ReviewsFormFindSuccess {
  type: ReviewsFormActionTypes.REVIEWS_FORM_FIND_SUCCESS;
  payload: any;
}

interface ReviewsFormFindError {
  type: ReviewsFormActionTypes.REVIEWS_FORM_FIND_ERROR;
}

interface ReviewsFormCreateStarted {
  type: ReviewsFormActionTypes.REVIEWS_FORM_CREATE_STARTED;
}

interface ReviewsFormCreateSuccess {
  type: ReviewsFormActionTypes.REVIEWS_FORM_CREATE_SUCCESS;
}

interface ReviewsFormCreateError {
  type: ReviewsFormActionTypes.REVIEWS_FORM_CREATE_ERROR;
}

interface ReviewsFormUpdateStarted {
  type: ReviewsFormActionTypes.REVIEWS_FORM_UPDATE_STARTED;
}

interface ReviewsFormUpdateSuccess {
  type: ReviewsFormActionTypes.REVIEWS_FORM_UPDATE_SUCCESS;
}

interface ReviewsFormUpdateError {
  type: ReviewsFormActionTypes.REVIEWS_FORM_UPDATE_ERROR;
}

export type ReviewsFormAction =
  | ReviewsFormReset
  | ReviewsFormFindStarted
  | ReviewsFormFindSuccess
  | ReviewsFormFindError
  | ReviewsFormCreateStarted
  | ReviewsFormCreateSuccess
  | ReviewsFormCreateError
  | ReviewsFormUpdateStarted
  | ReviewsFormUpdateSuccess
  | ReviewsFormUpdateError;
