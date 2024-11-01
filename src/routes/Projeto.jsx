import React, { useState as useHoverState } from 'react';
import Footer from "../components/footer/Footer.jsx";
import "../scss/Projeto.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// Instalação do Bootstrap via npm
// Para instalar o Bootstrap no seu projeto via npm, execute o comando abaixo no terminal:
// npm install bootstrap

export default function Home() {
  document.title = "LaparoscopySim | Home";
  const [hoveredImage, setHoveredImage] = useHoverState(null);

  return (
    <>
      <main className="main-content">
        <section className="carousel-container">
          <aside className="carousel">
            <div id="carouselExampleIndicators" className="carousel slide w-100" data-bs-ride="carousel" data-bs-interval="3000">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner w-100">
                <div className="carousel-item active" aria-current="true">
                  <img src="/assets/imgtexto.png" className="d-block img-fluid w-100" alt="Solução inteligente" />
                </div>
                <div className="carousel-item">
                  <img src="/assets/imgtexto2.png" className="d-block img-fluid w-100" alt="Segunda solução" />
                </div>
                <div className="carousel-item">
                  <img src="/assets/imgtexto3.png" className="d-block img-fluid w-100" alt="Terceira solução" />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Próximo</span>
              </button>
            </div>

            <div className='solution-title-container'>
              <h1 className="solution-title">LaparoscopySim</h1>
              <p>Domine as técnicas de laparoscopia, sua precisão e confiança. Somos o futuro da saúde e da segurança dos seus pacientes — e ele começa aqui.</p>
            </div>
          </aside>
        </section>
        <section className="solution-container">
          <aside className="additional-info">
            <p>Aprender laparoscopia vai muito além de simplesmente adquirir uma habilidade; é uma necessidade essencial para os profissionais de saúde que desejam liderar em suas áreas de atuação. Nesse contexto, o Laparoscopy Sim emerge como uma ferramenta fundamental para os futuros cirurgiões, oferecendo uma abordagem inovadora e eficaz para o treinamento de técnicas laparoscópicas. Com os desafios únicos que envolvem procedimentos minimamente invasivos, a prática constante e adaptativa é crucial para desenvolver as habilidades motoras e cognitivas necessárias. O Laparoscopy Sim oferece um ambiente seguro e personalizado onde os médicos podem praticar, cometendo erros e aprendendo com eles sem riscos reais para os pacientes. O foco em orientação detalhada, feedback imediato e um desenvolvimento progressivo torna essa experiência de aprendizagem indispensável para uma preparação confiante e de alto nível.</p><br />

            <p>Além do aperfeiçoamento técnico, o Laparoscopy Sim ajuda a fomentar a precisão e a coordenação necessárias para cada etapa de uma cirurgia laparoscópica. O treinamento através de simulações realistas permite aos alunos não apenas desenvolver competências operacionais, mas também criar uma abordagem holística à cirurgia, incorporando aspectos como ergonomia, eficiência de movimento e solução de problemas em tempo real. Ao combinar análises detalhadas de progresso e planos personalizados de aprendizado, o Laparoscopy Sim capacita futuros médicos a alcançarem uma alta proficiência em um ambiente de aprendizado acessível e motivador. Assim, ele não é apenas uma plataforma de treinamento, mas sim um verdadeiro aliado na formação de cirurgiões que estarão prontos para fazer a diferença na vida dos pacientes e na evolução da medicina minimamente invasiva. </p>
          </aside>
        </section>
      </main>
      
      {/* Seção "Por que utilizar?" adaptada */}
      <div className='vantagens'>
        <h1>Por que utilizar o LaparoscopySim?</h1>
        <p><b>Desenvolva sua habilidade cirúrgica</b> com práticas de laparoscopia de alto nível em um ambiente seguro e controlado. Com a nossa plataforma, você poderá:
          <ul>
            <li>Praticar técnicas minimamente invasivas sem riscos reais para os pacientes;</li>
            <li>Aprimorar sua precisão e coordenação motora em cada etapa da cirurgia;</li>
            <li>Receber feedback imediato para uma evolução contínua;</li>
            <li>Desenvolver uma abordagem holística, integrando ergonomia e eficiência de movimento.</li>
          </ul>
          O LaparoscopySim é uma ferramenta indispensável para o aprendizado e domínio da laparoscopia, preparando você para enfrentar os desafios do futuro da medicina com confiança e habilidade.
          <br /><br /><b>Clique nas imagens para interagir!</b>
        </p>
      </div>

      <div className='photos-section'>
        <div className="img-container">
          <img className='imgP1'
            src={hoveredImage === 1 ? "/assets/vantagem2.png" : "/assets/vantagem1.png"}
            alt="Vantagem"
            onMouseEnter={() => setHoveredImage(1)}
            onMouseLeave={() => setHoveredImage(null)}
          />
        </div>

        <div className="img-container">
          <img className='imgP1'
            src={hoveredImage === 2 ? "/assets/vantagem4.png" : "/assets/vantagem3.png"}
            alt="Vantagem"
            onMouseEnter={() => setHoveredImage(2)}
            onMouseLeave={() => setHoveredImage(null)}
          />
        </div>

      </div>
    </>
  );
}
