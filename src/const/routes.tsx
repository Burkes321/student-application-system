import { Login } from '../routes/login/Login';

export const ROUTES = [
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/register',
    element: <div>register route</div>,
  },
  {
    path: '/home',
    element: <div>Home</div>,
  },
];
