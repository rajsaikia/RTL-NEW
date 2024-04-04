import { UseDispatch, useDispatch, useSelector } from 'react-redux';

import Header from '@/components/header/Header';
import { fetchData } from '@/store/reducers/usersSlice';
import { useEffect } from 'react';

export const Home = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  console.log(data);
  return (
    <>
      <Header />
      <h2>Home Page</h2>
    </>
  );
};

export default Home;
