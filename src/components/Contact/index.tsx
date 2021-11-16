import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiFillGithub } from 'react-icons/ai';
import { BiText } from 'react-icons/bi';
import { BsTextLeft } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { IoLogoLinkedin } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { postEmail } from '../../helpers/email';
import { contactSchema } from '../../schemas';
import { ErrorComponent } from '../ErrorComponent';
import Button from '../Form/Button';
import Input from '../Form/Input';
import { SuccessComponent } from '../SuccessComponent';
import { ContactContainer, ContactContent } from './styles';

export function ContactComponent({ content }) {
  const { locale } = useRouter();

  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitted, isSubmitting, isSubmitSuccessful },
    formState,
  } = useForm({
    resolver: yupResolver(contactSchema(locale)),
    // defaultValues: {
    //   name: 'Cleber',
    //   email: 'cgbordin@gmail.com',
    //   message: 'Your Message',
    // },
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSuccess(false);
      console.log('isSuccess expired!');
    }, 4000);
    return () => clearTimeout(timer);
  }, [isSubmitSuccessful]);

  useEffect(() => {
    if (isError) {
      const timer = setTimeout(() => {
        setIsError(false);
        console.log('isError expired!');
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isError]);

  const onSubmit = handleSubmit(async ({ name, email, message }) => {
    const [, err] = await postEmail({ name, email, message });

    if (err) {
      return setIsError(true);
    }
    reset();
    return setIsSuccess(true);
  });

  return (
    <ContactContainer>
      <ContactContent>
        <h2>{content.title}</h2>
        <p>{content.message}</p>

        <form onSubmit={onSubmit} method="post">
          <Input
            name="name"
            label={content.form.name}
            type="text"
            placeholder="Your Name"
            icon={BiText}
            register={register}
            errors={errors?.name}
            className="box_shadow_soft"
          />
          <Input
            name="email"
            label={content.form.email}
            type="text"
            placeholder="your@email.com"
            icon={FiMail}
            register={register}
            errors={errors?.email}
            className="box_shadow_soft"
          />
          <Input
            name="message"
            label={content.form.message}
            type="text"
            placeholder="Your Message"
            icon={BsTextLeft}
            register={register}
            errors={errors?.message}
            className="box_shadow_soft"
          />
          <Button
            type="submit"
            primary
            width="100%"
            height="2.8rem"
            padding=".8rem 2rem"
            isLoading={isSubmitting}
          >
            {content.form.submit}
          </Button>
          {isError && <ErrorComponent message={content.errorMessage} />}
          {isSuccess && <SuccessComponent message={content.successMessage} />}
        </form>
      </ContactContent>
      <div className="social_networks svg_anchor_dark dark_focus">
        <a href="https://github.com/cgbinho" target="_blank" rel="noreferrer">
          <AiFillGithub size={28} color={'var(--icon-primary)'} />
        </a>
        <a
          href="https://www.linkedin.com/in/cleberbordin/"
          target="_blank"
          rel="noreferrer"
        >
          <IoLogoLinkedin size={30} color={'var(--icon-primary)'} />
        </a>
        <a
          href="mailto:cgbordin@gmail.com?subject=Hello from a cgbordin.com visitor!"
          target="_blank"
          rel="noreferrer"
        >
          <MdEmail size={30} color={'var(--icon-primary)'} />
        </a>
      </div>
    </ContactContainer>
  );
}
