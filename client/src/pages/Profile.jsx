import { FormRow } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { useOutletContext } from 'react-router-dom';
import { useNavigation, Form } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

const Profile = () => {
  const { user } = useOutletContext();
  const { name, lastName, email, location } = user;

  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Wrapper>
      <Form method='post' className='form' encType='multipart/form-data'>
        <h4 className='form-title'>Perfil</h4>
        <div className='form-center'>
          <div className='form-row'>
            <label htmlFor='avatar' className='form-label'>
              Avatar (máximo 0.5 MB)
            </label>
            <input
              type='file'
              id='avatar'
              name='avatar'
              className='form-input'
              accept='image/*'
            />
          </div>
          <FormRow
            type='text'
            name='name'
            labelText='nome'
            defaultValue={name}
          />
          <FormRow
            type='text'
            name='lastName'
            labelText='sobrenome'
            defaultValue={lastName}
          />
          <FormRow
            type='email'
            name='email'
            labelText='email'
            defaultValue={email}
          />
          <FormRow
            type='text'
            name='location'
            labelText='endereço'
            defaultValue={location}
          />
          <button
            type='submit'
            className='btn btn-block form-btn'
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar'}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default Profile;
