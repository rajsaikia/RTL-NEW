import Header from '@/components/header/Header';
import Legacy from '@/components/legacy/Legacy';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/routing/authProvider';

const Login = () => {
  const { login, logout } = useAuth();
  const handleClick = () => {
    login();
  };
  const handleLogout = () => {
    logout();
  };
  return (
    <>
      <Header />
      <div className='flex  text-center align-middle flex-col items-center pb-30 pt-4'>
        <div className='w-[300px] flex flex-col'>
          <Button size='lg' className='mb-4' onClick={handleClick}>
            Sign in with UAE PASS
          </Button>
          <small>A single trusted digital identify for all citizens, residents and visitors.</small>
          <Legacy />
        </div>
      </div>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
};

export default Login;
