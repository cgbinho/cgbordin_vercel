import React, { forwardRef } from 'react';
import Image from 'next/image';
import {
  AboutContainer,
  AboutCardLeftContainer,
  AboutCardRightContainer,
  AboutCardFooter,
} from './styles';
import { isValidMotionProp, motion, Variants } from 'framer-motion';
import { InViewHookResponse, useInView } from 'react-intersection-observer';
import { useLottie, Lottie, Renderer, EventListener } from 'react-lottie-hook';
import animationData from '../../../public/cgbordin_avatar_data_v01.json';

type AboutCardData = {
  reference: any;
  inView: boolean;
  imageVariants: Variants;
  textVariants: Variants;
  scentColor: string;
  image: {
    src: string;
    alt: string;
  };
  content: string;
};

const aboutImageVariants: Variants = {
  hidden: {
    translateY: '40%',
    translateZ: '0px',
    opacity: 0,
  },
  visible: {
    translateY: '0%',
    translateZ: '0px',
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.5,
    },
  },
};

const aboutTextRightVariants: Variants = {
  hidden: {
    translateX: '40%',
    translateZ: '0px',
    opacity: 0,
  },
  visible: {
    translateX: '0px',
    translateZ: '0px',
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.5,
    },
  },
};

const aboutTextLeftVariants: Variants = {
  hidden: {
    translateX: '-40%',
    translateZ: '0px',
    opacity: 0,
  },
  visible: {
    translateX: '0px',
    translateZ: '0px',
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.5,
    },
  },
};

const AboutCardLeft = ({
  reference,
  inView,
  imageVariants,
  textVariants,
  image,
  content,
  scentColor,
}: AboutCardData) => {
  return (
    <AboutCardLeftContainer scentColor={scentColor} ref={reference}>
      <motion.aside
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={textVariants}
        whileHover={{ translateY: -8 }}
        transition={{ type: 'tween' }}
      >
        <div
          className="text_highlight_green"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </motion.aside>
      <motion.img
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={imageVariants}
        transition={{ type: 'tween' }}
        src={image.src}
        alt={image.alt}
      />
    </AboutCardLeftContainer>
  );
};

const AboutCardRight = ({
  reference,
  inView,
  imageVariants,
  textVariants,
  image,
  content,
  scentColor,
}: AboutCardData) => {
  return (
    <AboutCardRightContainer scentColor={scentColor} ref={reference}>
      <motion.img
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={imageVariants}
        transition={{ type: 'tween' }}
        src={image.src}
        alt={image.alt}
      />
      <motion.aside
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={textVariants}
        whileHover={{ translateY: -8 }}
        transition={{ type: 'tween' }}
      >
        <div
          className="text_highlight_green"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </motion.aside>
    </AboutCardRightContainer>
  );
};

export function AboutComponent({ content }) {
  const [refAbout01, inViewAbout01] = useInView();
  const [refAbout02, inViewAbout02] = useInView();
  const [refAbout03, inViewAbout03] = useInView();
  const [refAbout04, inViewAbout04] = useInView();
  const [refAbout05, inViewAbout05] = useInView();

  const [lottieRef, { isPaused, isStopped }, controls] = useLottie({
    renderer: Renderer.svg,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
      progressiveLoad: true,
    },
    animationData,
  });

  return (
    <AboutContainer>
      <h2>{content.title}</h2>
      <div className="flip_card">
        <div className="flip_card_inner">
          <div className="flip_card_front">
            <Image
              src="/images/cgbordin_profile_02.jpg"
              alt="Cleber Galves Bordin"
              layout="fill"
              className="avatar_photo"
            />
          </div>
          <div className="flip_card_back">
            <Lottie lottieRef={lottieRef} width={240} height={240} />
          </div>
        </div>
      </div>
      <div
        className="text_highlight_green"
        dangerouslySetInnerHTML={{ __html: content.description }}
      />
      <AboutCardRight
        {...{
          reference: refAbout01,
          inView: inViewAbout01,
          imageVariants: aboutImageVariants,
          textVariants: aboutTextRightVariants,
          scentColor: '#00B5B5',
          image: {
            src: '/images/cgbordin_about_starwars.svg',
            alt: 'Starwars',
          },
          content: content.experience.paragraph01,
        }}
      />
      <AboutCardLeft
        {...{
          reference: refAbout02,
          inView: inViewAbout02,
          imageVariants: aboutImageVariants,
          textVariants: aboutTextLeftVariants,
          scentColor: '#3FC6FF',
          image: {
            src: '/images/cgbordin_about_graduation.svg',
            alt: 'Graduation',
          },
          content: content.experience.paragraph02,
        }}
      />
      <AboutCardRight
        {...{
          reference: refAbout03,
          inView: inViewAbout03,
          imageVariants: aboutImageVariants,
          textVariants: aboutTextRightVariants,
          scentColor: '#F16B32',
          image: {
            src: '/images/cgbordin_about_motion.svg',
            alt: 'Motion',
          },
          content: content.experience.paragraph03,
        }}
      />
      <AboutCardLeft
        {...{
          reference: refAbout04,
          inView: inViewAbout04,
          imageVariants: aboutImageVariants,
          textVariants: aboutTextLeftVariants,
          scentColor: '#ECD824',
          image: {
            src: '/images/cgbordin_about_javascript.svg',
            alt: 'Javascript',
          },
          content: content.experience.paragraph04,
        }}
      />
      <AboutCardRight
        {...{
          reference: refAbout05,
          inView: inViewAbout05,
          imageVariants: aboutImageVariants,
          textVariants: aboutTextRightVariants,
          scentColor: '#AA27D8',
          image: {
            src: '/images/cgbordin_about_apps.svg',
            alt: 'Apps',
          },
          content: content.experience.paragraph05,
        }}
      />
      <AboutCardFooter>
        <p>{content.contact.title}</p>
        <a href="https://github.com/cgbinho" target="_blank" rel="noreferrer">
          <Image
            src="/images/cgbordin_github.svg"
            alt="Cleber Galves Bordin GitHub"
            width="24px"
            height="24px"
          />
          <span>github.com/cgbinho</span>
        </a>
        <a href="mailto:cgbordin@gmail.com" target="_blank" rel="noreferrer">
          <Image
            src="/images/cgbordin_email.svg"
            alt="Cleber Galves Bordin email"
            width="24px"
            height="24px"
          />
          <span>cgbordin @ gmail.com</span>
        </a>
      </AboutCardFooter>
    </AboutContainer>
  );
}
