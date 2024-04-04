import { useAuth } from '@/routing/authProvider';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleClick = async () => {
    const tocken = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'kminchelle',
        password: '0lelplR',
        expiresInMins: 30, // optional, defaults to 60
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        window.sessionStorage.setItem('AuthTocken', data.token);
        console.log(data);
        return data.token;
      });
    if (tocken) {
      login();
      navigate('/home');
    }
  };
  return (
    <>
      <div>
        <button onClick={handleClick}>Login</button>
      </div>
    </>
  );
};

export default Login;
