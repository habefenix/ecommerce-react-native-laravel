import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'store/actions/authActions';
import { toast } from 'react-toastify';
import {
  CategoriesFormAction,
  CategoriesFormActionTypes,
} from 'types/redux/categories/categoriesForm';
import { Dispatch } from 'redux';

const actions = {
  doNew: () => {
    return {
      type: CategoriesFormActionTypes.CATEGORIES_FORM_RESET,
    };
  },

  doFind: (id: string) => async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: CategoriesFormActionTypes.CATEGORIES_FORM_FIND_STARTED,
      });

      axios.get(`/categories/${id}`).then((res) => {
        const record = res.data;

        dispatch({
          type: CategoriesFormActionTypes.CATEGORIES_FORM_FIND_SUCCESS,
          payload: record,
        });
      });
    } catch (error: any) {
      Errors.handle(error);

      dispatch({
        type: CategoriesFormActionTypes.CATEGORIES_FORM_FIND_ERROR,
      });

      dispatch(push('/admin/categories'));
    }
  },

  doCreate: (values: any) => async (dispatch: Dispatch<CategoriesFormAction | Function | any>) => {
    try {
      dispatch({
        type: CategoriesFormActionTypes.CATEGORIES_FORM_CREATE_STARTED,
      });

      axios.post('/categories', { data: values }).then((res) => {
        dispatch({
          type: CategoriesFormActionTypes.CATEGORIES_FORM_CREATE_SUCCESS,
        });

        toast.success('Categories created');
        dispatch(push('/admin/categories'));
      });
    } catch (error: any) {
      Errors.handle(error);

      dispatch({
        type: CategoriesFormActionTypes.CATEGORIES_FORM_CREATE_ERROR,
      });
    }
  },

  doUpdate:
    (id: string, values: any, isProfile: boolean) =>
    async (dispatch: Dispatch<CategoriesFormAction | Function | any>) => {
      try {
        dispatch({
          type: CategoriesFormActionTypes.CATEGORIES_FORM_UPDATE_STARTED,
        });

        await axios.put(`/categories/${id}`, { id, data: values });

        dispatch(doInit());

        dispatch({
          type: CategoriesFormActionTypes.CATEGORIES_FORM_UPDATE_SUCCESS,
        });

        if (isProfile) {
          toast.success('Profile updated');
        } else {
          toast.success('Categories updated');
          dispatch(push('/admin/categories'));
        }
      } catch (error: any) {
        Errors.handle(error);

        dispatch({
          type: CategoriesFormActionTypes.CATEGORIES_FORM_UPDATE_ERROR,
        });
      }
    },
};

export default actions;
