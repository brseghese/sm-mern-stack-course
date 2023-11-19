import { Link, useRouteError } from 'react-router-dom';
import Wrapper from '../assets/wrappers/ErrorPage';
import img from '../assets/images/not-found.svg';

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt='not found' />
          <h3>Página não encontrada!</h3>
          <p>Não conseguimos encontrar a página que você está procurando...</p>
          <Link to='/dashboard'>Voltar</Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div>
        <h3>Algo deu errado...</h3>
      </div>
    </Wrapper>
  );
};

export default Error;
