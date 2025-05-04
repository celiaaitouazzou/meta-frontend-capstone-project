import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import AboutPage from './Pages/AboutPage.js'
import Menu from './Pages/Menu.js'
import Reservation from './Pages/Reservation.js'
import OrderOnline from './Pages/OrderOnline.js'
import Login from './Pages/Login.js'


const router = createBrowserRouter([
  {path:'/',element:<App />},
  {path:'/About',element:<AboutPage />},
  {path:'/Menu',element:<Menu />},
  {path:'/Reservation',element:<Reservation />},
  {path:'/OrderOnline',element:<OrderOnline />},
  {path:'/Login',element:<Login />}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
