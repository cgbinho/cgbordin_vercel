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

type AboutCardData = {
  reference: any;
  inView: boolean;
  imageVariants: Variants;
  textVariants: Variants;
  image: {
    src: string;
    alt: string;
  };
  content: string[];
};

const AboutCardLeft = ({
  reference,
  inView,
  imageVariants,
  textVariants,
  image,
  content,
}: AboutCardData) => {
  return (
    <AboutCardLeftContainer ref={reference}>
      <motion.aside
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={textVariants}
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'tween' }}
      >
        {content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </motion.aside>
      <motion.img
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={imageVariants}
        whileHover={{ scale: 1.02 }}
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
}: AboutCardData) => {
  return (
    <AboutCardRightContainer ref={reference}>
      <motion.img
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={imageVariants}
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'tween' }}
        src={image.src}
        alt={image.alt}
      />
      <motion.aside
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={textVariants}
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'tween' }}
      >
        {content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
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
  const [refAbout06, inViewAbout06] = useInView();

  return (
    <AboutContainer>
      <h2>{content.title}</h2>
      <motion.section
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'tween' }}
      >
        <Image
          src="/images/cgbordin_profile_02.jpg"
          alt="Cleber Galves Bordin"
          width="180px"
          height="180px"
          className="border_radius_50"
          layout="fixed"
        />
      </motion.section>

      <p>{content.description}</p>
      <AboutCardRight
        {...{
          reference: refAbout01,
          inView: inViewAbout01,
          imageVariants: aboutImageVariants,
          textVariants: aboutTextRightVariants,
          image: {
            src: '/images/cgbordin_about_starwars.svg',
            alt: 'Starwars',
          },
          content: [
            content.experience.paragraph01,
            content.experience.paragraph02,
          ],
        }}
      />
      <AboutCardLeft
        {...{
          reference: refAbout02,
          inView: inViewAbout02,
          imageVariants: aboutImageVariants,
          textVariants: aboutTextLeftVariants,
          image: {
            src: '/images/cgbordin_about_graduation.svg',
            alt: 'Graduation',
          },
          content: [content.experience.paragraph03],
        }}
      />
      <AboutCardRight
        {...{
          reference: refAbout04,
          inView: inViewAbout04,
          imageVariants: aboutImageVariants,
          textVariants: aboutTextRightVariants,
          image: {
            src: '/images/cgbordin_about_motion.svg',
            alt: 'Motion',
          },
          content: [content.experience.paragraph04],
        }}
      />
      <AboutCardLeft
        {...{
          reference: refAbout05,
          inView: inViewAbout05,
          imageVariants: aboutImageVariants,
          textVariants: aboutTextLeftVariants,
          image: {
            src: '/images/cgbordin_about_javascript.svg',
            alt: 'Javascript',
          },
          content: [
            content.experience.paragraph05,
            content.experience.paragraph06,
          ],
        }}
      />
      <AboutCardRight
        {...{
          reference: refAbout06,
          inView: inViewAbout06,
          imageVariants: aboutImageVariants,
          textVariants: aboutTextRightVariants,
          image: {
            src: '/images/cgbordin_about_apps.svg',
            alt: 'Apps',
          },
          content: [content.experience.paragraph07],
        }}
      />
      <AboutCardFooter>
        <p>{content.contact.title}</p>
        <h3>cgbordin @ gmail.com</h3>
      </AboutCardFooter>
    </AboutContainer>
  );
}
