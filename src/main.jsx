import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';




import Cadastro from './routes/Cadastro.jsx';
import Projeto from './routes/Projeto.jsx';
import Galeria from './routes/Galeria.jsx';
import App from './App.jsx';
import NotFound from './routes/Error.jsx';


const router = createBrowserRouter([
  {path: "/",element: <App />, errorElement:<NotFound/>,
  children: [{
    path: "/",element:<Projeto />},
      { path: "/cadastro", element: <Cadastro /> },
      { path: "/galeria", element: <Galeria /> } 
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
