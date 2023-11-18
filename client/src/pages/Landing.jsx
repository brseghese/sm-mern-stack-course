import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import logo from '../assets/images/logo.svg';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt='trampo' className='logo' />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            Vagas <span>centralizadas</span>
          </h1>
          <p>
            Nunca perca uma entrevista! O Trampo é a sua ferramenta para
            simplificar o processo de candidatura a empregos. Voçê estará sempre
            ciente das datas e horários marcados para suas entrevistas.
            Acompanhe o seu progresso, desde a primeira candidatura até as fases
            finais de contratação.
          </p>
          <Link to='/register' className='btn register-link'>
            criar conta
          </Link>
          <Link to='/login' className='btn register-link'>
            entrar conta
          </Link>
        </div>
        <img src={main} alt='buscando emprego' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
