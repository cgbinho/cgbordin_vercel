import axios from './axios';

type EmailData = {
  name: string;
  email: string;
  message: string;
};
// Want to use async/await? Add the `async` keyword to your outer function/method.
export async function postEmail(emailData: EmailData) {
  try {
    const { data } = await axios.post('api/contact', emailData);
    return [data];
  } catch (error) {
    console.error(error);
  }
}
