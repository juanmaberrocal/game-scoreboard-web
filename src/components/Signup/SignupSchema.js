import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .required('Required'),
  password_confirmation: Yup.string()
    .test('match', 'Password doesn\'t match', function (password) {
      return password === this.parent.password
    }),
  nickname: Yup.string()
    .required('Required'),
  first_name: Yup.string()
    .required('Required'),
  last_name: Yup.string()
    .required('Required')
});

export default SignupSchema;
