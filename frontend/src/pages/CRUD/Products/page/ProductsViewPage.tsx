import React, { useEffect } from 'react';
import ProductsWidget from 'pages/CRUD/Products/page/ProductsWidget';
import actions from 'store/actions/products/productsFormActions';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useParams } from 'react-router';

const ProductsViewPage = () => {
  const loading = useTypedSelector((store) => store.users.form.findLoading);
  const record = useTypedSelector((store) => store.users.form.record);
  const dispatch = useDispatch();
  const { id } = useParams<any>();

  useEffect(() => {
    dispatch(actions.doFind(id));
  }, [dispatch, id]);

  return (
    <React.Fragment>
      <ProductsWidget loading={loading} record={record} />
    </React.Fragment>
  );
};

export default ProductsViewPage;
