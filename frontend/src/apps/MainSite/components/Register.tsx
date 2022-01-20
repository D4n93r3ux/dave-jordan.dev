import { useForm } from 'react-hook-form';
import { useAuthContext } from 'context/AuthContext';

interface Props {}

const Register = (props: Props) => {
  const {
    register,
    handleSubmit
    // formState: { errors }
  } = useForm();

  const { signUp } = useAuthContext();

  const onSubmit = (formData: unknown) => {
    signUp(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type='text' placeholder='Email' {...register('email')} />
      <input type='password' placeholder='Password' {...register('password')} />
      <input type='submit' />
    </form>
  );
};

export default Register;
