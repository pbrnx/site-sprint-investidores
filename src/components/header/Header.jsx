import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './Header.scss';
import Logo from "/assets/logo.png";


export default function Header({ children }) {
  const navigate = useNavigate();
  const userName = sessionStorage.getItem('userName');
  const userMail = sessionStorage.getItem('userMail');

  function handleLogout() {
    navigate('/cadastro');
    toast("Essa é a página de cadastro! \n Insira suas informações abaixo.");
  }


  return (
    <div className='headerContainer'>
      <header className="header">
        <div className="header-icon">
          <img src={Logo} alt="Logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }} />

        </div>
        <div className="header-user-info">
          <div id='logoutContainer'>
            <button id="logoutButton" onClick={handleLogout}>Cadastre-se!</button>
          </div>
        </div>
      </header>
      {children}
    </div>
  );
};
