import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Users from './Users.jsx';


let router = createBrowserRouter([
  {
    path: "/",
    element: <App />
    
  },{
path:'/users',
element:<Users/>,
loader: ()=>fetch('http://localhost:5000/user')
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />

  </StrictMode>,
)
