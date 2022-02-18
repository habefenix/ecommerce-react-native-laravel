import {
  OrdersListState,
  OrdersListAction,
  OrdersListActionTypes,
} from 'types/redux/orders/ordersList';

const initialData: OrdersListState = {
  rows: [],
  loading: false,
  count: 0,
  modalOpen: false,
  idToDelete: null,
};

export default (state = initialData, action: OrdersListAction): OrdersListState => {
  switch (action.type) {
    case OrdersListActionTypes.ORDERS_LIST_FILTERED:
      return {
        ...state,
        rows: action.payload!.rows,
        loading: false,
      };
    case OrdersListActionTypes.ORDERS_LIST_FETCH_STARTED:
      return {
        ...state,
        loading: true,
      };
    case OrdersListActionTypes.ORDERS_LIST_FETCH_SUCCESS:
      return {
        ...state,
        rows: action.payload!.rows,
        loading: false,
        count: action.payload!.count,
      };
    case OrdersListActionTypes.ORDERS_LIST_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        rows: [],
      };
    case OrdersListActionTypes.ORDERS_LIST_DELETE_STARTED:
      return {
        ...state,
        loading: true,
      };
    case OrdersListActionTypes.ORDERS_LIST_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        modalOpen: false,
      };
    case OrdersListActionTypes.ORDERS_LIST_DELETE_ERROR:
      return {
        ...state,
        loading: false,
        modalOpen: false,
      };
    case OrdersListActionTypes.ORDERS_LIST_OPEN_CONFIRM:
      return {
        ...state,
        loading: false,
        modalOpen: true,
        idToDelete: action.payload.id,
      };
    case OrdersListActionTypes.ORDERS_LIST_CLOSE_CONFIRM:
      return {
        ...state,
        loading: false,
        modalOpen: false,
      };
    default:
      return state;
  }
};
