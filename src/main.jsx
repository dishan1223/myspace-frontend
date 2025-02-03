import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/style.css'
import './style/globals.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// pages
import NotFound from './Pages/NotFound/NotFoundPage.jsx'
import App from './App.jsx'
import LoginPage from './Pages/Login/LoginPage.jsx'; 



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: '/login',
    element: <LoginPage/>,
    errorElement: <NotFound/>
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
