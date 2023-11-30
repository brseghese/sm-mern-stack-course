import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import { Link } from 'react-router-dom';
import { Logo } from '../components';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            Vagas <span>Centralizadas</span>
          </h1>
          <p>
            O Trampo é sua ferramenta para simplificar o processo de candidatura
            a empregos. Acompanhe de perto seu progresso, desde a primeira
            candidatura até todas as aplicações de trabalho. Estamos aqui para
            ser parte da sua jornada rumo ao sucesso profissional. Comece agora
            mesmo e simplifique cada passo!
          </p>
          <Link to='/register' className='btn register-link'>
            Cria uma Conta
          </Link>
          <Link to='/login' className='btn register-link'>
            Entrar na Conta
          </Link>
        </div>
        <img src={main} alt='buscando emprego' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
