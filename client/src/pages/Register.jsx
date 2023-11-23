import { Form, redirect, useNavigation, Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { Logo, FormRow } from '../components';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post('auth/register', data);
    toast.success('Conta criada com sucesso!');
    return redirect('/login');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Register = () => {
  const navigation = useNavigation();
  console.log(navigation);
  const isSubmitting = navigation.state === 'submitting';
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
        <button type='submit' className='btn btn-block' disabled={isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'Enviar'}
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
