import * as yup from 'yup';
export let loginSchema = yup.object().shape({
    username: yup.string().min(8,"Name must be at at leatest character").required().lowercase(),
    email: yup.string().email(),
    password: yup
    .string()
    .required('Please Enter your password')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    )

  });
 