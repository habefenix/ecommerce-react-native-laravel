import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'store/actions/authActions';
import { toast } from 'react-toastify';
import {
  PromocodesFormAction,
  PromocodesFormActionTypes,
} from 'types/redux/promocodes/promocodesForm';
import { Dispatch } from 'redux';

const actions = {
  doNew: () => {
    return {
      type: PromocodesFormActionTypes.PROMOCODES_FORM_RESET,
    };
  },

  doFind: (id: string) => async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: PromocodesFormActionTypes.PROMOCODES_FORM_FIND_STARTED,
      });

      axios.get(`/promocodes/${id}`).then((res) => {
        const record = res.data;

        dispatch({
          type: PromocodesFormActionTypes.PROMOCODES_FORM_FIND_SUCCESS,
          payload: record,
        });
      });
    } catch (error: any) {
      Errors.handle(error);

      dispatch({
        type: PromocodesFormActionTypes.PROMOCODES_FORM_FIND_ERROR,
      });

      dispatch(push('/admin/promocodes'));
    }
  },

  doCreate: (values: any) => async (dispatch: Dispatch<PromocodesFormAction | Function | any>) => {
    try {
      dispatch({
        type: PromocodesFormActionTypes.PROMOCODES_FORM_CREATE_STARTED,
      });

      axios.post('/promocodes', { data: values }).then((res) => {
        dispatch({
          type: PromocodesFormActionTypes.PROMOCODES_FORM_CREATE_SUCCESS,
        });

        toast.success('Promocodes created');
        dispatch(push('/admin/promocodes'));
      });
    } catch (error: any) {
      Errors.handle(error);

      dispatch({
        type: PromocodesFormActionTypes.PROMOCODES_FORM_CREATE_ERROR,
      });
    }
  },

  doUpdate:
    (id: string, values: any, isProfile: boolean) =>
    async (dispatch: Dispatch<PromocodesFormAction | Function | any>) => {
      try {
        dispatch({
          type: PromocodesFormActionTypes.PROMOCODES_FORM_UPDATE_STARTED,
        });

        await axios.put(`/promocodes/${id}`, { id, data: values });

        dispatch(doInit());

        dispatch({
          type: PromocodesFormActionTypes.PROMOCODES_FORM_UPDATE_SUCCESS,
        });

        if (isProfile) {
          toast.success('Profile updated');
        } else {
          toast.success('Promocodes updated');
          dispatch(push('/admin/promocodes'));
        }
      } catch (error: any) {
        Errors.handle(error);

        dispatch({
          type: PromocodesFormActionTypes.PROMOCODES_FORM_UPDATE_ERROR,
        });
      }
    },
};

export default actions;
