import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import Footer from '../components/footer/Footer.jsx';
import '../scss/Form.scss';

function Cadastro() {
  document.title = "Laparoscopy Sim | Cadastre-se";
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [nomeEmpresa, setnomeEmpresa] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [avaliacao, setAvaliacao] = useState('1'); // Novo estado para a avaliação

  const history = useNavigate();

  // Defina a URL do backend diretamente aqui
  const backendUrl = "https://legible-chipmunk-only.ngrok-free.app"; // Substitua pela URL pública do backend

  const handleNomeChange = (event) => setNome(event.target.value);
  const handlenomeEmpresaChange = (event) => setnomeEmpresa(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleCelularChange = (event) => {
    let value = event.target.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d{5})(\d)/, "$1-$2");
    setCelular(value);
  };
  const handleMensagemChange = (event) => setMensagem(event.target.value);
  const handleCheckboxChange = (event) => setCheckboxChecked(event.target.checked);
  const handleAvaliacaoChange = (event) => setAvaliacao(event.target.value); // Novo handle para a avaliação

  const handleSubmit = async (event) => {
    event.preventDefault();

    const checkMail = email.trim();
    const celularRegex = /^\(\d{2}\)\s\d{5}-\d{4}$/;

    if (nome.length === 0) {
      toast.error("Nome completo é obrigatório!");
      return;
    }

    if (email.length === 0 || !checkMail.includes('@')) {
      toast.error("Email inválido! Verifique o formato do email.");
      return;
    }

    if (!celularRegex.test(celular)) {
      toast.error("Celular inválido! Use o formato (XX) XXXXX-XXXX.");
      return;
    }

    if (!checkboxChecked) {
      toast.error("Você deve aceitar os termos e condições!");
      return;
    }

    const newUser = { nome, email, celular, nomeEmpresa, mensagem, avaliacao };

    try {
      const response = await fetch(`${backendUrl}/users`, { // Usando a URL direta
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Erro ao cadastrar. Tente novamente.');
      }

      toast.success('Cadastro realizado com sucesso! Suas informações foram enviadas e entraremos em contato. \nObrigado por fazer parte do Laparoscopy Sim!', { duration: 10000 });
      history('/');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <h1>Cadastre-se e faça parte do nosso projeto!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nomeCompleto">*Nome Completo: </label>
        <input type="text" id="nomeCompleto" placeholder='Digite seu nome completo' value={nome} onChange={handleNomeChange} />
        <br />

        <label htmlFor="email">*Email: </label>
        <input type="text" id="email" placeholder='Digite seu Email' value={email} onChange={handleEmailChange} />
        <br />

        <label htmlFor="celular">*Celular: </label>
        <input type="text" id="celular" placeholder='Digite seu celular' value={celular} maxLength="15" onChange={handleCelularChange} />
        <br />

        <label htmlFor="empresa">*Nome da Empresa: </label>
        <input type="text" id="empresa" placeholder='Digite o nome da sua empresa' value={nomeEmpresa} onChange={handlenomeEmpresaChange} />
        <br />

        {/* Combo box de Avaliação */}
        <label htmlFor="avaliacao">*Avaliação: </label>
        <select id="avaliacao" value={avaliacao} onChange={handleAvaliacaoChange}>
          <option value="5">5 - Muito Bom</option>
          <option value="4">4 - Bom</option>
          <option value="3">3 - Médio</option>
          <option value="2">2 - Ruim</option>
          <option value="1">1 - Muito Ruim</option>
        </select>
        <br /><br /> 

        <label htmlFor="mensagem">Mensagem: </label>
        <textarea id="mensagem" placeholder='Deixe uma mensagem (até 400 caracteres)' value={mensagem} onChange={handleMensagemChange} maxLength="400" style={{ width: '100%', maxWidth: '400px', height: '100px', maxHeight: '400px' }} />
        <br />

        <input type="checkbox" id="checkbox" checked={checkboxChecked} onChange={handleCheckboxChange} />
        <label htmlFor="checkbox">*Concordo com o uso dos meus dados de acordo com a <a href='https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm' target='_blank'>LGPD (Lei Geral de Proteção de Dados)</a></label>
        <br /> 

        <button type="submit" id="cadastroButton">Cadastrar</button>
      </form>
    </>
  );
}

export default Cadastro;
