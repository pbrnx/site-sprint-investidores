import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

// Função para verificar se o usuário está logado
const requireAuth = () => {
  const token = sessionStorage.getItem('userToken');
  const userMail = sessionStorage.getItem('userMail');
  const userName = sessionStorage.getItem('userName');
  const MIN_TOKEN_LENGTH = 15; 

  return token && token.length >= MIN_TOKEN_LENGTH && userMail && userName;
};


import Cadastro from './routes/Cadastro.jsx';
import Projeto from './routes/Projeto.jsx';
import App from './App.jsx';
import NotFound from './routes/Error.jsx';

const router = createBrowserRouter([
  {path: "/",element: <App />, errorElement:<NotFound/>,
  children: [{
    path: "/",element:<Projeto />},
      { path: "/cadastro", element: <Cadastro /> }  
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
