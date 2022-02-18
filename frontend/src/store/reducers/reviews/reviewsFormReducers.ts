import {
  ReviewsFormState,
  ReviewsFormAction,
  ReviewsFormActionTypes,
} from 'types/redux/reviews/reviewsForm';

const initialData: ReviewsFormState = {
  findLoading: false,
  saveLoading: false,
  record: null,
};

export default (state = initialData, action: ReviewsFormAction): ReviewsFormState => {
  switch (action.type) {
    case ReviewsFormActionTypes.REVIEWS_FORM_RESET:
      return {
        ...state,
      };
    case ReviewsFormActionTypes.REVIEWS_FORM_FIND_STARTED:
      return {
        ...state,
        record: null,
        findLoading: true,
      };
    case ReviewsFormActionTypes.REVIEWS_FORM_FIND_SUCCESS:
      return {
        ...state,
        record: action.payload,
        findLoading: false,
      };
    case ReviewsFormActionTypes.REVIEWS_FORM_FIND_ERROR:
      return {
        ...state,
        record: null,
        findLoading: false,
      };
    case ReviewsFormActionTypes.REVIEWS_FORM_CREATE_STARTED:
      return {
        ...state,
        saveLoading: true,
      };
    case ReviewsFormActionTypes.REVIEWS_FORM_CREATE_SUCCESS:
      return {
        ...state,
        saveLoading: false,
      };
    case ReviewsFormActionTypes.REVIEWS_FORM_CREATE_ERROR:
      return {
        ...state,
        saveLoading: false,
      };
    case ReviewsFormActionTypes.REVIEWS_FORM_UPDATE_STARTED:
      return {
        ...state,
        saveLoading: true,
      };
    case ReviewsFormActionTypes.REVIEWS_FORM_UPDATE_SUCCESS:
      return {
        ...state,
        saveLoading: false,
      };
    case ReviewsFormActionTypes.REVIEWS_FORM_UPDATE_ERROR:
      return {
        ...state,
        saveLoading: false,
      };
    default:
      return state;
  }
};
