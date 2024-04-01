import logo from '@/assets/logo-uaemei.jpg';
import { NavLink } from 'react-router-dom';
export default function Header() {
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
        <li>
          <NavLink to='/'>profile</NavLink>
        </li>
        <li>
          <NavLink to='/login'>login</NavLink>
        </li>
      </ul>
    </>
  );
}
