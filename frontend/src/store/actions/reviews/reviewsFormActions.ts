import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'store/actions/authActions';
import { toast } from 'react-toastify';
import { ReviewsFormAction, ReviewsFormActionTypes } from 'types/redux/reviews/reviewsForm';
import { Dispatch } from 'redux';

const actions = {
  doNew: () => {
    return {
      type: ReviewsFormActionTypes.REVIEWS_FORM_RESET,
    };
  },

  doFind: (id: string) => async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: ReviewsFormActionTypes.REVIEWS_FORM_FIND_STARTED,
      });

      axios.get(`/reviews/${id}`).then((res) => {
        const record = res.data;

        dispatch({
          type: ReviewsFormActionTypes.REVIEWS_FORM_FIND_SUCCESS,
          payload: record,
        });
      });
    } catch (error: any) {
      Errors.handle(error);

      dispatch({
        type: ReviewsFormActionTypes.REVIEWS_FORM_FIND_ERROR,
      });

      dispatch(push('/admin/reviews'));
    }
  },

  doCreate: (values: any) => async (dispatch: Dispatch<ReviewsFormAction | Function | any>) => {
    try {
      dispatch({
        type: ReviewsFormActionTypes.REVIEWS_FORM_CREATE_STARTED,
      });

      axios.post('/reviews', { data: values }).then((res) => {
        dispatch({
          type: ReviewsFormActionTypes.REVIEWS_FORM_CREATE_SUCCESS,
        });

        toast.success('Reviews created');
        dispatch(push('/admin/reviews'));
      });
    } catch (error: any) {
      Errors.handle(error);

      dispatch({
        type: ReviewsFormActionTypes.REVIEWS_FORM_CREATE_ERROR,
      });
    }
  },

  doUpdate:
    (id: string, values: any, isProfile: boolean) =>
    async (dispatch: Dispatch<ReviewsFormAction | Function | any>) => {
      try {
        dispatch({
          type: ReviewsFormActionTypes.REVIEWS_FORM_UPDATE_STARTED,
        });

        await axios.put(`/reviews/${id}`, { id, data: values });

        dispatch(doInit());

        dispatch({
          type: ReviewsFormActionTypes.REVIEWS_FORM_UPDATE_SUCCESS,
        });

        if (isProfile) {
          toast.success('Profile updated');
        } else {
          toast.success('Reviews updated');
          dispatch(push('/admin/reviews'));
        }
      } catch (error: any) {
        Errors.handle(error);

        dispatch({
          type: ReviewsFormActionTypes.REVIEWS_FORM_UPDATE_ERROR,
        });
      }
    },
};

export default actions;
