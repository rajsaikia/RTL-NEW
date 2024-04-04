import logo from '@/assets/logo-uaemei.jpg';
import { useAuth } from '@/routing/authProvider';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Header() {
  const authTocken = window.sessionStorage.getItem('AuthTocken');

  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogin = () => {
    navigate('/');
  };

  const handleLogout = () => {
    logout();
    window.sessionStorage.removeItem('AuthTocken');
    console.log(authTocken);
    navigate('/home');
  };
  return (
    <>
      <img src={logo} alt='logo' width={420} className='mb-20 mt-2' />
      <ul
        style={{
          display: 'flex',
          listStyle: 'none',
          width: '100%',
          justifyContent: 'space-evenly',
        }}
      >
        <li>
          <NavLink to='/home'>home</NavLink>
        </li>
        {authTocken !== null && (
          <>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink to='/dashboard'>Dashboard</NavLink>
            </li>
          </>
        )}

        <li onClick={handleLogin}>Login</li>
        <li onClick={handleLogout}>Logout</li>
      </ul>
    </>
  );
}
