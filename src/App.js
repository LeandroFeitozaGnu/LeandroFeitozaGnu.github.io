import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { blue } from '@material-ui/core/colors';

import './App.css';

function App() {
  return (
    <>
      <header className='cabecalho-principal'>
        <ul>
          <li>
            <a href="...">Home</a>
          </li>
          <li>
            <a href="...">Sobre</a>
          </li>
          <li>
            <a href="...">Contato</a>
          </li>
        </ul>
      </header>
      <section className="apresentacao-pessoal">
        <h3>{'<Hello World />'}</h3>
        <h1> Me chamo Leandro</h1>
        <h2>sou desenvolvedor Front-End Junior</h2>
      </section>
      <section className='section-sobre'>
        <div className="wraper-text-sobre">
          <p>
            Seja bem-vindo ao meu site pessoal. Fique à vontade para explorar e conhecer a seção Projetos onde você confere meus projetos desenvolvidos, e a seção Sobre para que me conheça um pouco mais.
          </p>
          <p>
            Após de uma larga experiência profissional como Suporte Técnico, no ano de 2020 resolvi mudar para área de desenvolvimento Web
          </p>
          <p>
            Em junho de 2020 comecei a estudar desenvolvimento web na Trybe e em dezembro de 2020 me formei como Desenvolvedor Front-End Júnior. Neste primeiro semestre de 2021 estudarei desenvolvimento Back-End e Science Computer, me formando como desenvolvedor Full-Stack
          </p>
          <p>
            Procuro uma oportunidade de iniciar a carreira de desenvolvedor, e continuar aperfeiçoando as minhas habilidades de Dev.
          </p>
        </div>
      </section>
      <section className="section-contato">
        <span>Entre em contato</span>
        <div className="wraper-links-contato">
          <a href="https://github.com/LeandroFeitozaGnu" target="_blank">
            <GitHubIcon style={{ color: blue[50] }} fontSize="large" />
          </a>
          <a href="https://www.linkedin.com/in/leandrofeitoza" target="_blank">
            <LinkedInIcon style={{ color: blue[50] }} fontSize="large" />
          </a>
        </div>
      </section>
    </>
  );  
}

export default App;
