import { yupResolver } from '@hookform/resolvers/yup';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FiLock, FiMail } from 'react-icons/fi';
import Button from '../components/Form/Button';
import Input from '../components/Form/Input';
import Layout from '../components/Layout';
import { forgotPasswordSchema } from '../schemas';
import { Container } from '../styles/home';
import { ModalContainer } from '../styles/modal';
import { FormContainer } from '../styles/form';

const ForgotPassword = ({ content }) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(forgotPasswordSchema),
    defaultValues: {
      email: 'cgbordin@gmail.com',
    },
  });

  const onSubmit = handleSubmit(async ({ email }) => {
    router.push('/reset-password');
  });

  return (
    <Layout>
      <Head>
        <title>CGBORDIN.com - {content.title}</title>
      </Head>
      <Container>
        <h1>{content.title}</h1>
        <p>{content.description}</p>
        <form onSubmit={onSubmit} method="post">
          <FormContainer>
            <Input
              name="email"
              label="Email"
              type="text"
              placeholder="seu@email.com"
              icon={FiMail}
              register={register}
              errors={errors?.email}
            />
            <Button
              type="submit"
              primary
              isLoading={false}
              width="100%"
              height="40px"
              padding="1em"
            >
              {content.action_button}
            </Button>
            {/* {isError && <p className="error_message">{isError}</p>} */}
          </FormContainer>
        </form>
      </Container>
    </Layout>
  );
};

export async function getStaticProps({ locale }) {
  // get the locale text for the selected language:
  const content = (await import(`../locales/${locale}/forgot_password.js`))
    .default;

  return {
    props: {
      content,
    },
  };
}

export default ForgotPassword;
