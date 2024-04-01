import { NavLink } from 'react-router-dom';

export const Profile = () => {
  return (
    <>
      <h2>Profile page</h2>
      <NavLink to='/login'>Login</NavLink>
    </>
  );
};

export default Profile;
