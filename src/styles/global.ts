import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root {
  --main-font: 400 16px Nunito, sans-serif;
  --font-size: 16px;
  --base-font-size: 1rem;
  --font-weight-light: 200;
  --font-weight-normal: 400;
  --font-weight-bold: 900;
  --base-line-height: 1.25 * --base-font-size;
  --maxWidth: 1200px;
  --font-accent: hsl(200, 50%, 25%);
  --button-primary: hsl(204, 41%, 32%);
  --button-primary-hover: hsl(204, 31%, 28%);
  --button-secondary: hsl(191, 50%, 75%);
  --button-secondary-hover: hsl(191, 50%, 70%);
  --button-secondary-text: hsl(198, 36%, 21%);
  --icon-primary: hsl(155, 100%, 25%);
  --icon-primary-hover: hsl(155, 100%, 15%);
  --scent-850: hsl(191, 100%, 85%);
  --scent-750: hsl(191, 100%, 75%);
  --scent-650: hsl(191, 100%, 65%);
  --scent-600: hsl(191, 100%, 50%);
  --scent-550: hsl(191, 100%, 55%);
  --scent-450: hsl(191, 100%, 45%);
  --scent-350: hsl(191, 100%, 35%);
  --scent-250: hsl(191, 100%, 25%);
  --primary: hsl(0, 0%, 90%);
  --primary-900: hsl(200, 10%, 90%);
  --gray-50: hsl(0, 0%, 5%);
  --gray-100: hsl(0, 0%, 10%);
  --gray-150: hsl(0, 0%, 15%);
  --gray-170: hsl(0,0%,0%,0.3);
  --gray-200: hsl(0, 0%, 20%);
  --gray-300: hsl(0, 0%, 30%);
  --gray-400: hsl(0, 0%, 40%);
  --gray-600: hsl(0, 0%, 60%);
  --success_color: #00e676;
  --coding-scent: #32D218;
  --design-scent: #F1672C;
  --rest-scent: #F4C10D;
  --error_color: tomato;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
  scroll-behavior: smooth;

}

body {
  background: linear-gradient(0.25turn, hsl(201, 50%, 26%), hsl(201, 30%, 26%), hsl(201, 50%, 26%));
  color: var(--primary);
  font: var(--main-font);
  -webkit-font-smoothing: antialiased;
  letter-spacing: 0.3px;
}

p {
  letter-spacing: 1.1;
  margin-bottom: 1rem;
}

.background_light {
  background: linear-gradient(180deg, hsl(200, 100%, 100%) 0%, hsl(190, 40%, 70%,.9) 100%);
}

.light_focus {
  transition: all 0.3s ease 0s;
  
  &:focus {
    outline: 3px solid var(--scent-400);
    border-radius: 0.13rem;
  }
}

.dark_focus {

  transition: all 0.3s ease 0s;
  a {
    &:focus {
      outline: 3px solid var(--scent-250);
      border-radius: 0.13rem;
    }
  }
}

a {
text-decoration: none;
transition: all 0.3s ease 0s;
color: var(--primary);
cursor: pointer;

  &:hover {
    color: var(--scent-600);
  }

  &:focus {
    /* color: var(--scent-600); */
    outline: 3px solid var(--scent-600);
    /* background-color: black; */
    /* padding: .2rem; */
    border-radius: 0.13rem;
    /* border: 2px solid var(--scent-450); */
  }
}

li {
  list-style-type: none;
}

.avatar_photo {
  border-radius: 50%;
  /* overflow: auto; */
}

.border_scented {
  border-top: 2px solid var(--scent-550);
}

.box_shadow_soft {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
}

.italic {
  font-style: italic;
  font-size: .9rem;
}


.horizontal_line {
  width: 100%;
  background: hsl(200, 10%, 30%);
  /* border: 1px solid hsl(200, 10%, 30%); */
  border: 1px solid var(--scent-550);
  
  /* border-radius: 1rem; */
  /* margin: 1rem 0; */
}

.tech_list {
 
  li {
    display: inline-flex;

    span {
      margin-right: .3rem;
    }
  }

  span {
    color: var(--gray-400);
  }
}

.text_highlight_green {
  span {
    color: hsl(160, 110%, 60%,1);
  }
}

.text_underline {
  span {
    color: hsl(200, 100%, 40%,1);
    font-weight: 400;
  }
 
}

.text_highlight {
  span {
    color: var(--primary);
    background-color: none;
    padding: 0 0.4rem;
    border-radius: 0.3rem;
    animation: span_highlight 1000ms ease-out;
    animation-delay: 1s;
    animation-fill-mode: forwards;
  }
  @keyframes span_highlight {
    0% {
      background-color: none;
    }
    100% {
      background-color: hsl(200, 100%, 40%,.4);
    }
  }
}

.card {
  padding: 2rem;
  margin-bottom: 1rem;
  background-color: var(--gray-170);
  /* backdrop-filter: blur(20px); */
  border-radius:0.3rem;
  transition: all 0.1s ease 0s;

  @media screen and (max-width: 800px) {
    padding: 1.5rem;
    margin-bottom: 1rem;
    backdrop-filter: unset;
  }
}

.vertical_line {
  border-left: 2px solid var(--gray-200);
  height: 28px;
}

.error_message {
    color: var(--error_color);
    padding-top: 0.2rem;
  }

  .underline {
  text-decoration: none;
  position: relative;
}

.underline:after {
  position: absolute;
  content: '';
  height: 8px;
  /* adjust this to move up and down. you may have to adjust the line height of the paragraph if you move it down a lot. */
  bottom: -6px;

  /****** 
     optional values below 
     ******/

  /* center - (optional) use with adjusting width   */
  margin: 0 0;
  left: 0;
  right: 0;
  width: 105%;
  background: var(--scent-450);

  /* optional animation */
  -o-transition: 0.5s;
  -ms-transition: 0.5s;
  -moz-transition: 0.5s;
  -webkit-transition: 0.5s;
  transition: 0.5s;

  border-radius: 2rem;
}

/* optional hover classes used with anmiation */
.underline:hover:after {
  width: 100%;
  background: var(--scent-450);
}

  .border_radius_50 {
    border-radius: 50%;
  }

  .anchor {
    display: block;
    position: relative;
    top: -100px;
    visibility: hidden;
  }

  .anchor_projects {
    top: -30px;
  }
  .anchor_about {
    top: -120px;
  }
  

  /* scrollbar */
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px var(--dark_gray);
  box-shadow: inset 0 0 6px var(--dark_gray);
  border-radius: 0;
  background-color: hsl(0, 0%, 15%);
  /* background-color: var(--gray-150); */
}

::-webkit-scrollbar {
  width: 12px;
  height: 8px;
  background-color: hsl(0, 0%, 100%);
}

::-webkit-scrollbar-thumb {
  /* border-radius:0.3rem; */
  -webkit-box-shadow: inset 0 0 6px var(--dark_gray);
  box-shadow: inset 0 0 1px var(--dark_gray);
  background-color: hsl(0, 0%, 33%);
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: hsl(0, 0%, 50%);
  /* background: var(--scent-750); */
}

.skip_main {
    left:-999px;
    position:absolute;
    top:auto;
    width:1px;
    height:1px;
    overflow:hidden;
    z-index:-999;
}

.skip_main:focus, .skip_main:active {
  padding: 0.5rem;
  border-radius:0.3rem;
  left: 20px;
  top: 70px;
  width: 30%;
  height: auto;
  overflow:auto;
  text-align:center;
  z-index:999;
  background: black;
}

/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.flip_card {
  background-color: transparent;
  width: 200px;
  height: 200px;
  cursor: pointer;
  /* border: 1px solid #f1f1f1; */
  /* perspective: 1000px;  */
}

/* This container is needed to position the front and back side */
.flip_card_inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip_card:hover .flip_card_inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip_card_front, .flip_card_back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip_card_front {
  /* background-color: #bbb; */
  display: flex;
  place-items: center;
}

/* Style the back side */
.flip_card_back {
  display: flex;
  place-items: center;
  /* background-color: dodgerblue; */
  transform: rotateY(180deg);
}

.social_networks {
    display: flex;
    height: auto;
    align-items: center;
    margin-top: 0.5rem;

    a:not(:last-child) {
      margin-right: 0.5rem;
    }
  }

.svg_anchor_dark {
    a {
      svg {
        transition: all 0.3s ease;
        fill: var(--scent-350);
      }

      svg {
        &:hover {
          fill: var(--scent-250);
        }
      }
    }
  }

  .svg_anchor_light {

    a {
      svg {
        transition: all 0.3s ease;
        fill: var(--scent-650);
      }

      svg {
        &:hover {
          fill: var(--scent-450);
        }
      }
    }
  }
`;
