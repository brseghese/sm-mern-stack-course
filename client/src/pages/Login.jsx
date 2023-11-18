import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { Logo, FormRow } from '../components';

const Login = () => {
  return (
    <Wrapper>
      <form className='form'>
        <Logo />
        <h4>Entrar na Conta</h4>
        <FormRow
          type='email'
          name='email'
          labelText='e-mail'
          defaultValue='brseghese@gmail.com'
        />
        <FormRow
          type='password'
          name='password'
          labelText='senha'
          defaultValue='secret123'
        />
        <button type='submit' className='btn btn-block'>
          Enviar
        </button>
        <p>
          Não tem conta?
          <Link to='/register' className='member-btn'>
            Criar uma Conta
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Login;
