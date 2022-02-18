import React, { useEffect } from 'react';
import ReviewsWidget from 'pages/CRUD/Reviews/page/ReviewsWidget';
import actions from 'store/actions/reviews/reviewsFormActions';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useParams } from 'react-router';

const ReviewsViewPage = () => {
  const loading = useTypedSelector((store) => store.users.form.findLoading);
  const record = useTypedSelector((store) => store.users.form.record);
  const dispatch = useDispatch();
  const { id } = useParams<any>();

  useEffect(() => {
    dispatch(actions.doFind(id));
  }, [dispatch, id]);

  return (
    <React.Fragment>
      <ReviewsWidget loading={loading} record={record} />
    </React.Fragment>
  );
};

export default ReviewsViewPage;
