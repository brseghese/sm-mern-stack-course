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
            O Trampo é a sua ferramenta para simplificar o processo de
            candidatura a empregos. Voçê estará sempre ciente das datas e
            horários marcados para suas entrevistas. Acompanhe o seu progresso,
            desde a primeira candidatura até as fases finais de contratação.
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
