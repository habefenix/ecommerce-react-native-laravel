import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'store/actions/authActions';
import { toast } from 'react-toastify';
import { OrdersFormAction, OrdersFormActionTypes } from 'types/redux/orders/ordersForm';
import { Dispatch } from 'redux';

const actions = {
  doNew: () => {
    return {
      type: OrdersFormActionTypes.ORDERS_FORM_RESET,
    };
  },

  doFind: (id: string) => async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: OrdersFormActionTypes.ORDERS_FORM_FIND_STARTED,
      });

      axios.get(`/orders/${id}`).then((res) => {
        const record = res.data;

        dispatch({
          type: OrdersFormActionTypes.ORDERS_FORM_FIND_SUCCESS,
          payload: record,
        });
      });
    } catch (error: any) {
      Errors.handle(error);

      dispatch({
        type: OrdersFormActionTypes.ORDERS_FORM_FIND_ERROR,
      });

      dispatch(push('/admin/orders'));
    }
  },

  doCreate: (values: any) => async (dispatch: Dispatch<OrdersFormAction | Function | any>) => {
    try {
      dispatch({
        type: OrdersFormActionTypes.ORDERS_FORM_CREATE_STARTED,
      });

      axios.post('/orders', { data: values }).then((res) => {
        dispatch({
          type: OrdersFormActionTypes.ORDERS_FORM_CREATE_SUCCESS,
        });

        toast.success('Orders created');
        dispatch(push('/admin/orders'));
      });
    } catch (error: any) {
      Errors.handle(error);

      dispatch({
        type: OrdersFormActionTypes.ORDERS_FORM_CREATE_ERROR,
      });
    }
  },

  doUpdate:
    (id: string, values: any, isProfile: boolean) =>
    async (dispatch: Dispatch<OrdersFormAction | Function | any>) => {
      try {
        dispatch({
          type: OrdersFormActionTypes.ORDERS_FORM_UPDATE_STARTED,
        });

        await axios.put(`/orders/${id}`, { id, data: values });

        dispatch(doInit());

        dispatch({
          type: OrdersFormActionTypes.ORDERS_FORM_UPDATE_SUCCESS,
        });

        if (isProfile) {
          toast.success('Profile updated');
        } else {
          toast.success('Orders updated');
          dispatch(push('/admin/orders'));
        }
      } catch (error: any) {
        Errors.handle(error);

        dispatch({
          type: OrdersFormActionTypes.ORDERS_FORM_UPDATE_ERROR,
        });
      }
    },
};

export default actions;
