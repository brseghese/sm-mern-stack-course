import { Link, Form, redirect } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow, Logo, SubmitBtn } from '../components';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post('/auth/login', data);
    toast.success('Login realizado com sucesso!');
    return redirect('/dashboard');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Login = () => {
  return (
    <Wrapper>
      <Form method='post' className='form'>
        <Logo />
        <h4>Entrar na Conta</h4>
        <FormRow type='email' name='email' labelText='e-mail' />
        <FormRow type='password' name='password' labelText='senha' />
        <SubmitBtn />
        <p>
          Não tem conta?
          <Link to='/register' className='member-btn'>
            Criar uma Conta
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Login;
