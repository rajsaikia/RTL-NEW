
import Legacy from './legacy/Legacy'
import { Button } from './ui/button'

const Login = () => {
  return (
    <>
      <div className="flex  text-center align-middle flex-col items-center pb-30 pt-4">
        <div className='w-[300px] flex flex-col'>
          <Button size="lg" className='mb-4'>Sign  in with UAE PASS</Button>
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
