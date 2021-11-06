import { useForm } from 'react-hook-form';
import { useAuthContext } from '../context/AuthContext';

interface Props {}

const Login = (props: Props) => {
  const { register, handleSubmit } = useForm();

  const { signIn } = useAuthContext();

  const onSubmit = (formData: any) => {
    signIn(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type='text' placeholder='Email' {...register('email')} />
      <input type='password' placeholder='Password' {...register('password')} />
      <input type='submit' />
    </form>
  );
};

export default Login;
