import Errors from 'components/FormItems/error/errors';
import axios from 'axios';
import {
  PromocodesListActionTypes,
  PromocodesListAction,
} from 'types/redux/promocodes/promocodesList';
import { Dispatch } from 'redux';

async function list(filter?: any) {
  const response = await axios.get(
    `/promocodes?page=${filter.page}&limit=${filter.limit}&promocodes=${
      filter.promocodes ? filter.promocodes : ''
    }`,
  );
  return response.data;
}

async function filterPromocodes(request: any, filter: any) {
  const response = await axios.get(
    `/promocodes?page=${filter.page}&limit=${filter.limit}${request}`,
  );
  return response.data;
}

const actions = {
  doFilter: (request: any, filter: any) => async (dispatch: Dispatch) => {
    try {
      const response = await filterPromocodes(request, filter);

      dispatch({
        type: PromocodesListActionTypes.PROMOCODES_LIST_FILTERED,
        payload: {
          rows: response.rows,
        },
      });
    } catch (error: any) {
      Errors.handle(error);
      dispatch({
        type: PromocodesListActionTypes.PROMOCODES_LIST_FETCH_ERROR,
      });
    }
  },

  doFetch:
    (filter: any, keepPagination = false) =>
    async (dispatch: Dispatch) => {
      try {
        dispatch({
          type: PromocodesListActionTypes.PROMOCODES_LIST_FETCH_STARTED,
          payload: { filter, keepPagination },
        });

        const response = await list(filter);

        dispatch({
          type: PromocodesListActionTypes.PROMOCODES_LIST_FETCH_SUCCESS,
          payload: {
            rows: response.rows,
            count: response.count,
          },
        });
      } catch (error: any) {
        Errors.handle(error);

        dispatch({
          type: PromocodesListActionTypes.PROMOCODES_LIST_FETCH_ERROR,
        });
      }
    },

  doDelete: (id: string, filter: any) => async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: PromocodesListActionTypes.PROMOCODES_LIST_DELETE_STARTED,
      });

      await axios.delete(`/promocodes/${id}`);

      dispatch({
        type: PromocodesListActionTypes.PROMOCODES_LIST_DELETE_SUCCESS,
      });

      const response = await list(filter);
      dispatch({
        type: PromocodesListActionTypes.PROMOCODES_LIST_FETCH_SUCCESS,
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });
    } catch (error: any) {
      Errors.handle(error);

      dispatch({
        type: PromocodesListActionTypes.PROMOCODES_LIST_DELETE_ERROR,
      });
    }
  },
  doOpenConfirm: (id: string) => async (dispatch: Dispatch) => {
    dispatch({
      type: PromocodesListActionTypes.PROMOCODES_LIST_OPEN_CONFIRM,
      payload: {
        id: id,
      },
    });
  },
  doCloseConfirm: () => async (dispatch: Dispatch) => {
    dispatch({
      type: PromocodesListActionTypes.PROMOCODES_LIST_CLOSE_CONFIRM,
    });
  },
};

export default actions;
