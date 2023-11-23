import { Form, redirect, useNavigation, Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { Logo, FormRow } from '../components';

export const action = async (data) => {
  console.log(data);
  return null;
};

const Register = () => {
  return (
    <Wrapper>
      <Form method='post' className='form'>
        <Logo />
        <h4>Criar uma Conta</h4>
        <FormRow
          type='text'
          name='name'
          labelText='nome'
          defaultValue='Bruno'
        />
        <FormRow
          type='text'
          name='lastName'
          labelText='sobrenome'
          defaultValue='Seghese'
        />
        <FormRow
          type='text'
          name='location'
          labelText='endereço'
          defaultValue='Ramiz Gattaz, 120'
        />
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
          Já tem conta?
          <Link to='/login' className='member-btn'>
            Entrar na Conta
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Register;
