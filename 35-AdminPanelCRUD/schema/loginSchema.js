import * as yup from 'yup';
export let loginSchema = yup.object().shape({
    username: yup.string().min(8,"Name must be at at leatest character").required().lowercase(),
    email: yup.string().email(),
    password: yup
    .string()
    .required('')
  });
 