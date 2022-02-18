import Errors from 'components/FormItems/error/errors';
import axios from 'axios';
import { ProductsListActionTypes, ProductsListAction } from 'types/redux/products/productsList';
import { Dispatch } from 'redux';

async function list(filter?: any) {
  const response = await axios.get(
    `/products?page=${filter.page}&limit=${filter.limit}&products=${
      filter.products ? filter.products : ''
    }`,
  );
  return response.data;
}

async function filterProducts(request: any, filter: any) {
  const response = await axios.get(`/products?page=${filter.page}&limit=${filter.limit}${request}`);
  return response.data;
}

const actions = {
  doFilter: (request: any, filter: any) => async (dispatch: Dispatch) => {
    try {
      const response = await filterProducts(request, filter);

      dispatch({
        type: ProductsListActionTypes.PRODUCTS_LIST_FILTERED,
        payload: {
          rows: response.rows,
        },
      });
    } catch (error: any) {
      Errors.handle(error);
      dispatch({
        type: ProductsListActionTypes.PRODUCTS_LIST_FETCH_ERROR,
      });
    }
  },

  doFetch:
    (filter: any, keepPagination = false) =>
    async (dispatch: Dispatch) => {
      try {
        dispatch({
          type: ProductsListActionTypes.PRODUCTS_LIST_FETCH_STARTED,
          payload: { filter, keepPagination },
        });

        const response = await list(filter);

        dispatch({
          type: ProductsListActionTypes.PRODUCTS_LIST_FETCH_SUCCESS,
          payload: {
            rows: response.rows,
            count: response.count,
          },
        });
      } catch (error: any) {
        Errors.handle(error);

        dispatch({
          type: ProductsListActionTypes.PRODUCTS_LIST_FETCH_ERROR,
        });
      }
    },

  doDelete: (id: string, filter: any) => async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: ProductsListActionTypes.PRODUCTS_LIST_DELETE_STARTED,
      });

      await axios.delete(`/products/${id}`);

      dispatch({
        type: ProductsListActionTypes.PRODUCTS_LIST_DELETE_SUCCESS,
      });

      const response = await list(filter);
      dispatch({
        type: ProductsListActionTypes.PRODUCTS_LIST_FETCH_SUCCESS,
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });
    } catch (error: any) {
      Errors.handle(error);

      dispatch({
        type: ProductsListActionTypes.PRODUCTS_LIST_DELETE_ERROR,
      });
    }
  },
  doOpenConfirm: (id: string) => async (dispatch: Dispatch) => {
    dispatch({
      type: ProductsListActionTypes.PRODUCTS_LIST_OPEN_CONFIRM,
      payload: {
        id: id,
      },
    });
  },
  doCloseConfirm: () => async (dispatch: Dispatch) => {
    dispatch({
      type: ProductsListActionTypes.PRODUCTS_LIST_CLOSE_CONFIRM,
    });
  },
};

export default actions;
