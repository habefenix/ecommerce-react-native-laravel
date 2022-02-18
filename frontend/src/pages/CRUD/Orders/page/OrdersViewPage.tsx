import React, { useEffect } from 'react';
import OrdersWidget from 'pages/CRUD/Orders/page/OrdersWidget';
import actions from 'store/actions/orders/ordersFormActions';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useParams } from 'react-router';

const OrdersViewPage = () => {
  const loading = useTypedSelector((store) => store.users.form.findLoading);
  const record = useTypedSelector((store) => store.users.form.record);
  const dispatch = useDispatch();
  const { id } = useParams<any>();

  useEffect(() => {
    dispatch(actions.doFind(id));
  }, [dispatch, id]);

  return (
    <React.Fragment>
      <OrdersWidget loading={loading} record={record} />
    </React.Fragment>
  );
};

export default OrdersViewPage;
