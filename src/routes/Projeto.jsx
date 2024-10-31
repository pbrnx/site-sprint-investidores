import React, { useState } from 'react';
import Footer from "../components/footer/Footer.jsx";
import "../scss/Projeto.scss";


export default function Home() {
  document.title = "LaparoscopySim | Home";
  const [hoveredImage, setHoveredImage] = useState(null);


  return (
    <>
      <main className="main-content">
        <section className="carousel-container">
          <aside className="carousel">
            <img src="/assets/imgtexto.png" alt="Solução inteligente" />
            <div className='solution-title-container'>
              <h1 className="solution-title">LaparoscopySim</h1>

              <p>Domine as técnicas de laparoscopia, sua precisão e confiança. Somos o futuro da saúde e da segurança dos seus pacientes — e ele começa aqui.</p>
            </div>

            {/* Título 
            
             posicionado aqui */}
          </aside>
        </section>
        <section className="solution-container">
          <aside className="additional-info">
            <p>Aprender laparoscopia vai muito além de simplesmente adquirir uma habilidade; é uma necessidade essencial para os profissionais de saúde que desejam liderar em suas áreas de atuação. Nesse contexto, o Laparoscopy Sim emerge como uma ferramenta fundamental para os futuros cirurgiões, oferecendo uma abordagem inovadora e eficaz para o treinamento de técnicas laparoscópicas. Com os desafios únicos que envolvem procedimentos minimamente invasivos, a prática constante e adaptativa é crucial para desenvolver as habilidades motoras e cognitivas necessárias. O Laparoscopy Sim oferece um ambiente seguro e personalizado onde os médicos podem praticar, cometendo erros e aprendendo com eles sem riscos reais para os pacientes. O foco em orientação detalhada, feedback imediato e um desenvolvimento progressivo torna essa experiência de aprendizagem indispensável para uma preparação confiante e de alto nível.</p><br />

            <p>Além do aperfeiçoamento técnico, o Laparoscopy Sim ajuda a fomentar a precisão e a coordenação necessárias para cada etapa de uma cirurgia laparoscópica. O treinamento através de simulações realistas permite aos alunos não apenas desenvolver competências operacionais, mas também criar uma abordagem holística à cirurgia, incorporando aspectos como ergonomia, eficiência de movimento e solução de problemas em tempo real. Ao combinar análises detalhadas de progresso e planos personalizados de aprendizado, o Laparoscopy Sim capacita futuros médicos a alcançarem uma alta proficiência em um ambiente de aprendizado acessível e motivador. Assim, ele não é apenas uma plataforma de treinamento, mas sim um verdadeiro aliado na formação de cirurgiões que estarão prontos para fazer a diferença na vida dos pacientes e na evolução da medicina minimamente invasiva. </p>


          </aside>
        </section>
      </main>
      <div className='vantagens'>
        <h1>Por que utilizar?</h1>
        <p><b>Envelheça com saúde</b>, <b>controle seu peso </b>e <b>ajuste sua dieta</b>, tudo em apenas um lugar! Consulte nossos preços e escolha o plano que melhor atenda às suas necessidades.</p>
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
      <Footer />
    </>
  );
}
