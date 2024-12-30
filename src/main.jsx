import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from '../../todoApp/src/pages/ErrorPage';
import Product from './pages/Product';

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
