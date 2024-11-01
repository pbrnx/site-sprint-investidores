import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './Header.scss';
import Logo from '/assets/logo.png';

export default function Header({ children }) {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleRedirect() {
    navigate('/cadastro');
    toast("Essa é a página de cadastro! \n Insira suas informações abaixo.");
  }

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="headerContainer">
      <header className="header">
        <div className="header-icon">
          <img src={Logo} alt="Logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }} />
        </div>
        <div className={`header-user-info ${isMenuOpen ? 'open' : ''}`} id='linkContainer'>
          <span className="header-link" onClick={() => navigate('/')}>Home</span>
          <span className="header-link" onClick={() => handleRedirect()}>Cadastre-se</span>
          <span className="header-link" onClick={() => navigate('/galeria')}>Galeria</span>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </header>
      {children}
    </div>
  );
};
