import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root {
  --main-font: 400 16px Nunito, sans-serif;
  --font-size: 16px;
  --base-font-size:1rem;
  --font-weight-light: 200;
  --font-weight-normal: 400;
  --font-weight-bold: 900;
  --base-line-height: 1.25 * --base-font-size;
  --maxWidth: 1200px;
  --font-accent: hsl(200, 50%, 25%);
  --scent-850: hsl(200, 100%, 85%);
  --scent-750: hsl(200, 100%, 75%);
  --scent-650: hsl(200, 100%, 65%);
  --scent-550: hsl(200, 100%, 55%);
  --scent-450: hsl(200, 100%, 45%);
  --scent-350: hsl(200, 100%, 35%);
  --scent-250: hsl(200, 100%, 25%);
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
  /* background: var(--gray-200); */
  background: linear-gradient(0.25turn, hsl(201, 50%, 26%), hsl(201, 30%, 26%), hsl(201, 50%, 26%));
  color: var(--primary);
  font: var(--main-font);
  -webkit-font-smoothing: antialiased;
  letter-spacing: 0.3px;
}

p {
  letter-spacing: 1.1px;
  margin-bottom: 1rem;
  /* line-height: 1.4; */
}

/* h1,h2,h3,h4,h5,h6 {
  letter-spacing: 0.1rem;
  line-height: 2;
} */

.background_light {
  background: linear-gradient(180deg, hsl(200, 100%, 100%) 30%, hsl(190, 40%, 70%,.9) 100%);
}

a {
text-decoration: none;
transition: all 0.3s ease 0s;
color: var(--primary);
font-weight: normal;
cursor: pointer;

&:hover {
  color: var(--scent-550);
}

&:focus {
  color: var(--scent-550);
  background-color: black;
  padding: .2rem;
  border-radius: 4px;
  border: 2px solid var(--scent-450);
}
}

li {
  list-style-type: none;
}

.avatar_photo {
  border-radius: 50%;
  overflow: auto;
}

  .border_scented {
    /* border-top: 2px solid var(--scent-550); */
    border-top: 2px solid var(--scent-550);
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
  ul li{
  display: inline;
  }

  span {
    color: var(--gray-400);
  }
}


.text_underline {
  span {
    display: inline;
    background-image: linear-gradient(to right, hsl(150, 100%, 50%,.3) 100%, hsl(200, 100%, 40%,.8) 100%);
    background-position: 0 0.8rem;
    background-repeat: repeat-x;
    border-radius: 4px;
    /* background-size: 1px; */
  }
}

.text_highlight {
  span {
    color: var(--primary);
    background-color: none;
    padding: 0px 6px;
    border-radius: 4px;
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
  backdrop-filter: blur(20px);
  border-radius: 4px;
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
  border-radius: 0px;
  background-color: hsl(0, 0%, 15%);
  /* background-color: var(--gray-150); */
}

::-webkit-scrollbar {
  width: 12px;
  height: 8px;
  background-color: hsl(0, 0%, 100%);
}

::-webkit-scrollbar-thumb {
  /* border-radius: 4px; */
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
  color: var(--scent-550);
  background-color: black;
  padding: .5rem;
  border-radius: 4px;
  border: 2px solid var(--scent-450);

  left: auto;
  top: 70px;
  width: 30%;
  height: auto;
  overflow:auto;  
  border: 2px solid var(--scent-450);
  text-align:center;
  z-index:999;
}
`;
