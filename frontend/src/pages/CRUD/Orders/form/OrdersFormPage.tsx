import React, { useState, useEffect } from 'react';
import OrdersForm from 'pages/CRUD/Orders/form/OrdersForm';
import { push } from 'connected-react-router';
import actions from 'store/actions/orders/ordersFormActions';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useParams, useRouteMatch } from 'react-router';

type OrdersFormProps = {
  isEditing: boolean;
  isProfile: boolean;
  findLoading: boolean;
  saveLoading: boolean;
  record: {
    [rest: string]: any;
  };
  onSubmit: Function;
  onCancel: Function;
  modal: any;
  currentUser?: any;
};

const OrdersFormPage = (props: OrdersFormProps) => {
  const record = useTypedSelector((store) => store.orders.form.record);
  const findLoading = useTypedSelector((store) => store.orders.form.findLoading);
  const saveLoading = useTypedSelector((store) => store.orders.form.saveLoading);
  const currentUser = useTypedSelector((store) => store.auth.currentUser);

  // @ts-ignore
  const { id } = useParams();
  const match = useRouteMatch();
  const dispatch = useDispatch();

  const [dispatched, setDispatched] = useState(false);

  const isEditing = () => {
    return !!id;
  };

  const isProfile = () => {
    return match.url === '/app/profile';
  };

  const doSubmit = (id: string, data: any) => {
    if (isEditing() || isProfile()) {
      dispatch(actions.doUpdate(id, data, isProfile()));
    } else {
      dispatch(actions.doCreate(data));
    }
  };

  useEffect(() => {
    if (isEditing()) {
      dispatch(actions.doFind(id));
    } else {
      if (isProfile()) {
        // @ts-ignore
        const currentUser = JSON.parse(localStorage.getItem('user'));
        const currentUserId = currentUser.user.id;
        dispatch(actions.doFind(currentUserId));
      } else {
        dispatch(actions.doNew());
      }
    }
    setDispatched(true);
  }, [match, dispatch]);

  return (
    <React.Fragment>
      {dispatched && (
        <OrdersForm
          saveLoading={saveLoading}
          findLoading={findLoading}
          currentUser={currentUser}
          record={isEditing() || isProfile() ? record : {}}
          isEditing={isEditing()}
          isProfile={isProfile()}
          onSubmit={doSubmit}
          onCancel={() => dispatch(push('/admin/orders'))}
        />
      )}
    </React.Fragment>
  );
};

export default OrdersFormPage;
