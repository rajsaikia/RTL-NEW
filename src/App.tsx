import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import { AuthProvider } from './routing/authProvider';
import Profile from './pages/profile';
import Home from './pages/home';
import { PrivateRoute } from './routing/privateRoute';

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route exact path='/' element={<PrivateRoute />}>
            <Route exact path='/' element={<Profile />} />
          </Route>
          <Route path='*' element={<Home />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
