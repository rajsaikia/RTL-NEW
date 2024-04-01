
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import ProtectedRoute from './routing/protectedRoute';
import Dashboard from './pages/dashboard';
import { AuthProvider } from './routing/authProvider';

function App() {
   

  return (
    <>
<AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/home"
            element={<ProtectedRoute element={<Dashboard />} />}
          />
        </Routes>
    </AuthProvider>
    </>
  )
}

export default App
