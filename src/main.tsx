import './main.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';

import { ROUTES } from './const/routes.tsx';
import React from 'react';
import ReactDOM from 'react-dom/client';

const router = createBrowserRouter(ROUTES);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);
