import {
  OrdersFormState,
  OrdersFormAction,
  OrdersFormActionTypes,
} from 'types/redux/orders/ordersForm';

const initialData: OrdersFormState = {
  findLoading: false,
  saveLoading: false,
  record: null,
};

export default (state = initialData, action: OrdersFormAction): OrdersFormState => {
  switch (action.type) {
    case OrdersFormActionTypes.ORDERS_FORM_RESET:
      return {
        ...state,
      };
    case OrdersFormActionTypes.ORDERS_FORM_FIND_STARTED:
      return {
        ...state,
        record: null,
        findLoading: true,
      };
    case OrdersFormActionTypes.ORDERS_FORM_FIND_SUCCESS:
      return {
        ...state,
        record: action.payload,
        findLoading: false,
      };
    case OrdersFormActionTypes.ORDERS_FORM_FIND_ERROR:
      return {
        ...state,
        record: null,
        findLoading: false,
      };
    case OrdersFormActionTypes.ORDERS_FORM_CREATE_STARTED:
      return {
        ...state,
        saveLoading: true,
      };
    case OrdersFormActionTypes.ORDERS_FORM_CREATE_SUCCESS:
      return {
        ...state,
        saveLoading: false,
      };
    case OrdersFormActionTypes.ORDERS_FORM_CREATE_ERROR:
      return {
        ...state,
        saveLoading: false,
      };
    case OrdersFormActionTypes.ORDERS_FORM_UPDATE_STARTED:
      return {
        ...state,
        saveLoading: true,
      };
    case OrdersFormActionTypes.ORDERS_FORM_UPDATE_SUCCESS:
      return {
        ...state,
        saveLoading: false,
      };
    case OrdersFormActionTypes.ORDERS_FORM_UPDATE_ERROR:
      return {
        ...state,
        saveLoading: false,
      };
    default:
      return state;
  }
};
