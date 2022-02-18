import {
  CategoriesFormState,
  CategoriesFormAction,
  CategoriesFormActionTypes,
} from 'types/redux/categories/categoriesForm';

const initialData: CategoriesFormState = {
  findLoading: false,
  saveLoading: false,
  record: null,
};

export default (state = initialData, action: CategoriesFormAction): CategoriesFormState => {
  switch (action.type) {
    case CategoriesFormActionTypes.CATEGORIES_FORM_RESET:
      return {
        ...state,
      };
    case CategoriesFormActionTypes.CATEGORIES_FORM_FIND_STARTED:
      return {
        ...state,
        record: null,
        findLoading: true,
      };
    case CategoriesFormActionTypes.CATEGORIES_FORM_FIND_SUCCESS:
      return {
        ...state,
        record: action.payload,
        findLoading: false,
      };
    case CategoriesFormActionTypes.CATEGORIES_FORM_FIND_ERROR:
      return {
        ...state,
        record: null,
        findLoading: false,
      };
    case CategoriesFormActionTypes.CATEGORIES_FORM_CREATE_STARTED:
      return {
        ...state,
        saveLoading: true,
      };
    case CategoriesFormActionTypes.CATEGORIES_FORM_CREATE_SUCCESS:
      return {
        ...state,
        saveLoading: false,
      };
    case CategoriesFormActionTypes.CATEGORIES_FORM_CREATE_ERROR:
      return {
        ...state,
        saveLoading: false,
      };
    case CategoriesFormActionTypes.CATEGORIES_FORM_UPDATE_STARTED:
      return {
        ...state,
        saveLoading: true,
      };
    case CategoriesFormActionTypes.CATEGORIES_FORM_UPDATE_SUCCESS:
      return {
        ...state,
        saveLoading: false,
      };
    case CategoriesFormActionTypes.CATEGORIES_FORM_UPDATE_ERROR:
      return {
        ...state,
        saveLoading: false,
      };
    default:
      return state;
  }
};
