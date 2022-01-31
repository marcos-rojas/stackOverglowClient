import * as yup from 'yup';

export const userSchema = yup.object().shape({
  name: yup.string().required(),
  password: yup.string().required(),
});

export const registerSchema = yup.object().shape({
    name: yup.string().required(),
    password: yup.string().min(6, 'Como minimo 6 caracteres').required(),
  });