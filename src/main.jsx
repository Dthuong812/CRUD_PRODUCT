import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import Product from './pages/Product';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([{
  path :"/",
  element :<App></App>,
  errorElement:<ErrorPage></ErrorPage>,
  children:[
    {
      index : true,
      element:<Product></Product>
    }
  ]

}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router= {router}/>
  </StrictMode>,
)
