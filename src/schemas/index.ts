import * as yup from 'yup';

const requiredMessage = (locale) => {
  switch (locale) {
    case 'pt-BR':
      return `Este campo é obrigatório`;
    case 'en':
      return `Field is required.`;
    default:
      return `Field is required.`;
  }
};

const minMessage = (locale) => {
  switch (locale) {
    case 'pt-BR':
      return `O campo precisa de no mínimo 3 caracteres.`;
    case 'en':
      return `Field needs to be at least 3 caracters long.`;
    default:
      return `Field needs to be at least 3 caracters long.`;
  }
};

const maxMessage = (locale) => {
  switch (locale) {
    case 'pt-BR':
      return `O campo não pode ultrapassar o limite de 255 caracteres.`;
    case 'en':
      return `Field exceeded the 255 characters limit.`;
    default:
      return `Field exceeded the 255 characters limit.`;
  }
};

const emailMessage = (locale) => {
  switch (locale) {
    case 'pt-BR':
      return `O campo não é um email válido.`;
    case 'en':
      return `Field is not a valid email.`;
    default:
      return `Field is not a valid email.`;
  }
};

export const contactSchema = (locale: string) => {
  return yup
    .object()
    .shape({
      name: yup
        .string()
        .min(3, minMessage(locale))
        .max(255, maxMessage(locale))
        .required(requiredMessage(locale)),
      email: yup
        .string()
        .email(emailMessage(locale))
        .required(requiredMessage(locale)),
      message: yup
        .string()
        .min(3, minMessage(locale))
        .max(255, maxMessage(locale))
        .required(requiredMessage(locale)),
    })
    .required();
};
