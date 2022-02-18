import React, { useEffect } from 'react';
import PromocodesWidget from 'pages/CRUD/Promocodes/page/PromocodesWidget';
import actions from 'store/actions/promocodes/promocodesFormActions';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useParams } from 'react-router';

const PromocodesViewPage = () => {
  const loading = useTypedSelector((store) => store.users.form.findLoading);
  const record = useTypedSelector((store) => store.users.form.record);
  const dispatch = useDispatch();
  const { id } = useParams<any>();

  useEffect(() => {
    dispatch(actions.doFind(id));
  }, [dispatch, id]);

  return (
    <React.Fragment>
      <PromocodesWidget loading={loading} record={record} />
    </React.Fragment>
  );
};

export default PromocodesViewPage;
