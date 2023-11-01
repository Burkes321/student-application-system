import { Login } from '../routes/login/Login';
import { Register } from '../routes/register/Register';

export const ROUTES = [
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/home',
    element: <div>Home</div>,
  },
];
