import Legacy from "@/components/legacy/Legacy"
import { Button } from "@/components/ui/button"
import { AuthContext } from '@/routing/authProvider';
import React from "react";


const Login = () => {
  const { login } = React.useContext(AuthContext);
    const handleClick = () =>{
        console.log('yyy');
        login();
    }
  return (
    <>
      <div className="flex  text-center align-middle flex-col items-center pb-30 pt-4">
        <div className='w-[300px] flex flex-col'>
          <Button size="lg" className='mb-4' onClick={handleClick}>Sign  in with UAE PASS</Button>
          <small>
            A single trusted digital identify for all citizens, residents and visitors.
          </small>
          <Legacy />
        </div>
      </div>

    </>

  )
}

export default Login

