import React, { useState as useHoverState } from 'react';
import Footer from "../components/footer/Footer.jsx";
import "../scss/Projeto.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

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
            <p>A LEPIC (Laboratório de Ensino e Pesquisa em Inovação Cirúrgica) é uma instituição dedicada ao avanço das práticas cirúrgicas e à formação de profissionais que prezam pela excelência e inovação. Com valores pautados na responsabilidade, no desenvolvimento técnico-científico e no compromisso com a segurança do paciente, a LEPIC acredita na importância de capacitar cirurgiões com as melhores tecnologias e métodos de ensino.</p>
            <br />

            <p>Nesse contexto, o LaparoscopySim surge como uma solução alinhada aos princípios da LEPIC. A plataforma utiliza óculos VR para proporcionar uma experiência imersiva e segura, permitindo que os alunos pratiquem técnicas cirúrgicas de alta precisão em um ambiente controlado. Além disso, o LaparoscopySim se destaca pelo uso da Unreal Engine 5 (UE5), que proporciona qualidade gráfica superior, recriando com realismo os cenários de uma sala de cirurgia e oferecendo um nível de detalhamento essencial para o treinamento avançado.</p>
            <br />

            <p>O realismo da UE5 tem um efeito psicológico profundo na construção da confiança dos alunos. A imersão total no cenário virtual facilita a criação de uma representação mental realista do ambiente cirúrgico, o que reforça a segurança dos estudantes ao praticarem procedimentos em um contexto que simula fielmente uma situação de vida real. Essa ambientação virtual ajuda a reduzir a ansiedade e o medo de cometer erros, permitindo que o aluno se concentre em desenvolver precisão e eficiência.</p>
            <br />

            <p>Assim, o LaparoscopySim está em sintonia com a missão da LEPIC de transformar o ensino cirúrgico. Combinando tecnologia de ponta e um ambiente educacional que incentiva o aprendizado contínuo, a plataforma promove o desenvolvimento das habilidades motoras e cognitivas dos futuros cirurgiões. Esse alinhamento de propósitos faz do LaparoscopySim uma ferramenta poderosa e um verdadeiro parceiro para profissionais que buscam não apenas aprimorar suas técnicas, mas também atuar com segurança e excelência em cada procedimento.</p>
          </aside>
        </section>
      </main>
      
      <div className='vantagens'>
        <h1>Por que utilizar o LaparoscopySim?</h1>
        <p><b>Desenvolva sua habilidade cirúrgica</b> com práticas de laparoscopia de alto nível em um ambiente seguro e controlado. Com a nossa plataforma, você poderá:
          <ul>
            <li>Praticar técnicas minimamente invasivas sem riscos reais para os pacientes;</li>
            <li>Aprimorar sua precisão e coordenação motora em cada etapa da cirurgia;</li>
            <li>Receber feedback imediato para uma evolução contínua;</li>
            <li>Desenvolver uma abordagem holística, integrando ergonomia e eficiência de movimento;</li>
            <li>Ganhar confiança com um ambiente realista que prepara a mente para situações reais.</li>
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
