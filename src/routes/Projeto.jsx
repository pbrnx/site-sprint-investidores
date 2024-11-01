import React, { useState, useEffect } from 'react';
import Footer from "../components/footer/Footer.jsx";
import "../scss/Projeto.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function Home() {
  document.title = "LaparoscopySim | Home";
  const [hoveredImage, setHoveredImage] = useState(null);

  // Precarregar imagens para evitar delay durante a animação
  useEffect(() => {
    const imagesToPreload = [
      "/assets/vantagem1.png",
      "/assets/vantagem2.png",
      "/assets/vantagem3.png",
      "/assets/vantagem4.png",
    ];

    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

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
            <p>A LEPIC (Laboratório de Ensino e Pesquisa em Inovação Cirúrgica) é uma instituição dedicada ao avanço das práticas cirúrgicas e à formação de profissionais que prezam pela excelência e inovação...</p>
          </aside>
        </section>
      </main>
      
      <div className='vantagens'>
        <h1>Por que utilizar o LaparoscopySim?</h1>
        <p><b>Desenvolva sua habilidade cirúrgica</b> com práticas de laparoscopia de alto nível em um ambiente seguro e controlado...</p>
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
