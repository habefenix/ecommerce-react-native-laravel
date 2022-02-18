import {
  PromocodesFormState,
  PromocodesFormAction,
  PromocodesFormActionTypes,
} from 'types/redux/promocodes/promocodesForm';

const initialData: PromocodesFormState = {
  findLoading: false,
  saveLoading: false,
  record: null,
};

export default (state = initialData, action: PromocodesFormAction): PromocodesFormState => {
  switch (action.type) {
    case PromocodesFormActionTypes.PROMOCODES_FORM_RESET:
      return {
        ...state,
      };
    case PromocodesFormActionTypes.PROMOCODES_FORM_FIND_STARTED:
      return {
        ...state,
        record: null,
        findLoading: true,
      };
    case PromocodesFormActionTypes.PROMOCODES_FORM_FIND_SUCCESS:
      return {
        ...state,
        record: action.payload,
        findLoading: false,
      };
    case PromocodesFormActionTypes.PROMOCODES_FORM_FIND_ERROR:
      return {
        ...state,
        record: null,
        findLoading: false,
      };
    case PromocodesFormActionTypes.PROMOCODES_FORM_CREATE_STARTED:
      return {
        ...state,
        saveLoading: true,
      };
    case PromocodesFormActionTypes.PROMOCODES_FORM_CREATE_SUCCESS:
      return {
        ...state,
        saveLoading: false,
      };
    case PromocodesFormActionTypes.PROMOCODES_FORM_CREATE_ERROR:
      return {
        ...state,
        saveLoading: false,
      };
    case PromocodesFormActionTypes.PROMOCODES_FORM_UPDATE_STARTED:
      return {
        ...state,
        saveLoading: true,
      };
    case PromocodesFormActionTypes.PROMOCODES_FORM_UPDATE_SUCCESS:
      return {
        ...state,
        saveLoading: false,
      };
    case PromocodesFormActionTypes.PROMOCODES_FORM_UPDATE_ERROR:
      return {
        ...state,
        saveLoading: false,
      };
    default:
      return state;
  }
};
