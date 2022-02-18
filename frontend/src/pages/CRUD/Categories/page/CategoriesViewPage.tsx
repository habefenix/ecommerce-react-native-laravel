import React, { useEffect } from 'react';
import CategoriesWidget from 'pages/CRUD/Categories/page/CategoriesWidget';
import actions from 'store/actions/categories/categoriesFormActions';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useParams } from 'react-router';

const CategoriesViewPage = () => {
  const loading = useTypedSelector((store) => store.users.form.findLoading);
  const record = useTypedSelector((store) => store.users.form.record);
  const dispatch = useDispatch();
  const { id } = useParams<any>();

  useEffect(() => {
    dispatch(actions.doFind(id));
  }, [dispatch, id]);

  return (
    <React.Fragment>
      <CategoriesWidget loading={loading} record={record} />
    </React.Fragment>
  );
};

export default CategoriesViewPage;
