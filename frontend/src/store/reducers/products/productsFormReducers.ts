import {
  ProductsFormState,
  ProductsFormAction,
  ProductsFormActionTypes,
} from 'types/redux/products/productsForm';

const initialData: ProductsFormState = {
  findLoading: false,
  saveLoading: false,
  record: null,
};

export default (state = initialData, action: ProductsFormAction): ProductsFormState => {
  switch (action.type) {
    case ProductsFormActionTypes.PRODUCTS_FORM_RESET:
      return {
        ...state,
      };
    case ProductsFormActionTypes.PRODUCTS_FORM_FIND_STARTED:
      return {
        ...state,
        record: null,
        findLoading: true,
      };
    case ProductsFormActionTypes.PRODUCTS_FORM_FIND_SUCCESS:
      return {
        ...state,
        record: action.payload,
        findLoading: false,
      };
    case ProductsFormActionTypes.PRODUCTS_FORM_FIND_ERROR:
      return {
        ...state,
        record: null,
        findLoading: false,
      };
    case ProductsFormActionTypes.PRODUCTS_FORM_CREATE_STARTED:
      return {
        ...state,
        saveLoading: true,
      };
    case ProductsFormActionTypes.PRODUCTS_FORM_CREATE_SUCCESS:
      return {
        ...state,
        saveLoading: false,
      };
    case ProductsFormActionTypes.PRODUCTS_FORM_CREATE_ERROR:
      return {
        ...state,
        saveLoading: false,
      };
    case ProductsFormActionTypes.PRODUCTS_FORM_UPDATE_STARTED:
      return {
        ...state,
        saveLoading: true,
      };
    case ProductsFormActionTypes.PRODUCTS_FORM_UPDATE_SUCCESS:
      return {
        ...state,
        saveLoading: false,
      };
    case ProductsFormActionTypes.PRODUCTS_FORM_UPDATE_ERROR:
      return {
        ...state,
        saveLoading: false,
      };
    default:
      return state;
  }
};
