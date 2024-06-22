import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {Provider} from "react-redux"
import {
  createBrowserRouter,
  RouterProvider,
 
} from "react-router-dom";
import Store from './Store/Store.jsx';

const router=createBrowserRouter([{
  path:"/",
  element:<App/>,

}

    
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store} >
    <RouterProvider router={router}/>

    </Provider>
    
  </React.StrictMode>,
)
