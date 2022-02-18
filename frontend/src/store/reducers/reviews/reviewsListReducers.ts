import {
  ReviewsListState,
  ReviewsListAction,
  ReviewsListActionTypes,
} from 'types/redux/reviews/reviewsList';

const initialData: ReviewsListState = {
  rows: [],
  loading: false,
  count: 0,
  modalOpen: false,
  idToDelete: null,
};

export default (state = initialData, action: ReviewsListAction): ReviewsListState => {
  switch (action.type) {
    case ReviewsListActionTypes.REVIEWS_LIST_FILTERED:
      return {
        ...state,
        rows: action.payload!.rows,
        loading: false,
      };
    case ReviewsListActionTypes.REVIEWS_LIST_FETCH_STARTED:
      return {
        ...state,
        loading: true,
      };
    case ReviewsListActionTypes.REVIEWS_LIST_FETCH_SUCCESS:
      return {
        ...state,
        rows: action.payload!.rows,
        loading: false,
        count: action.payload!.count,
      };
    case ReviewsListActionTypes.REVIEWS_LIST_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        rows: [],
      };
    case ReviewsListActionTypes.REVIEWS_LIST_DELETE_STARTED:
      return {
        ...state,
        loading: true,
      };
    case ReviewsListActionTypes.REVIEWS_LIST_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        modalOpen: false,
      };
    case ReviewsListActionTypes.REVIEWS_LIST_DELETE_ERROR:
      return {
        ...state,
        loading: false,
        modalOpen: false,
      };
    case ReviewsListActionTypes.REVIEWS_LIST_OPEN_CONFIRM:
      return {
        ...state,
        loading: false,
        modalOpen: true,
        idToDelete: action.payload.id,
      };
    case ReviewsListActionTypes.REVIEWS_LIST_CLOSE_CONFIRM:
      return {
        ...state,
        loading: false,
        modalOpen: false,
      };
    default:
      return state;
  }
};
