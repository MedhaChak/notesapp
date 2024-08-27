import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ColorModeProvider} from '@chakra-ui/react';
import LogIn from './pages/LogIn';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/log-in",
    element: <LogIn/>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ColorModeProvider>
    <RouterProvider router={router}/>
    </ColorModeProvider>
  </React.StrictMode>
);

