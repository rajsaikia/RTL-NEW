import Header from '@/components/header/Header';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const authTocken = window.sessionStorage.getItem('AuthTocken');
    console.log(authTocken);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <>
      <Header />
      <h2>Home Page</h2>

      <ul style={{ listStyleType: 'none' }}>
        {data.map((res) => (
          <li key={res?.id}>{res?.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Home;
