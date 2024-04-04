import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import { AuthProvider } from './routing/authProvider';
import Home from './pages/home';
import { PrivateRoute } from './routing/privateRoute';
import DashboardPage from './pages/dashboard';
import About from './pages/about';

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route exact path='/' element={<PrivateRoute />}>
            <Route exact path='/about' element={<About />} />
          </Route>
          <Route exact path='/' element={<PrivateRoute />}>
            <Route exact path='/dashboard' element={<DashboardPage />} />
          </Route>
          <Route path='*' element={<Login />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
