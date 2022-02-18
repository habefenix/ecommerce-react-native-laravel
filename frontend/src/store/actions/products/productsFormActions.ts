import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'store/actions/authActions';
import { toast } from 'react-toastify';
import { ProductsFormAction, ProductsFormActionTypes } from 'types/redux/products/productsForm';
import { Dispatch } from 'redux';

const actions = {
  doNew: () => {
    return {
      type: ProductsFormActionTypes.PRODUCTS_FORM_RESET,
    };
  },

  doFind: (id: string) => async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: ProductsFormActionTypes.PRODUCTS_FORM_FIND_STARTED,
      });

      axios.get(`/products/${id}`).then((res) => {
        const record = res.data;

        dispatch({
          type: ProductsFormActionTypes.PRODUCTS_FORM_FIND_SUCCESS,
          payload: record,
        });
      });
    } catch (error: any) {
      Errors.handle(error);

      dispatch({
        type: ProductsFormActionTypes.PRODUCTS_FORM_FIND_ERROR,
      });

      dispatch(push('/admin/products'));
    }
  },

  doCreate: (values: any) => async (dispatch: Dispatch<ProductsFormAction | Function | any>) => {
    try {
      dispatch({
        type: ProductsFormActionTypes.PRODUCTS_FORM_CREATE_STARTED,
      });

      axios.post('/products', { data: values }).then((res) => {
        dispatch({
          type: ProductsFormActionTypes.PRODUCTS_FORM_CREATE_SUCCESS,
        });

        toast.success('Products created');
        dispatch(push('/admin/products'));
      });
    } catch (error: any) {
      Errors.handle(error);

      dispatch({
        type: ProductsFormActionTypes.PRODUCTS_FORM_CREATE_ERROR,
      });
    }
  },

  doUpdate:
    (id: string, values: any, isProfile: boolean) =>
    async (dispatch: Dispatch<ProductsFormAction | Function | any>) => {
      try {
        dispatch({
          type: ProductsFormActionTypes.PRODUCTS_FORM_UPDATE_STARTED,
        });

        await axios.put(`/products/${id}`, { id, data: values });

        dispatch(doInit());

        dispatch({
          type: ProductsFormActionTypes.PRODUCTS_FORM_UPDATE_SUCCESS,
        });

        if (isProfile) {
          toast.success('Profile updated');
        } else {
          toast.success('Products updated');
          dispatch(push('/admin/products'));
        }
      } catch (error: any) {
        Errors.handle(error);

        dispatch({
          type: ProductsFormActionTypes.PRODUCTS_FORM_UPDATE_ERROR,
        });
      }
    },
};

export default actions;
