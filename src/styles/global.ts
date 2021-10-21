import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root {
  --main-font: 400 16px Cabin, sans-serif;
  --font-size: 16px;
  --base-font-size:1rem;
  --base-line-height: 1.25 * --base-font-size;
  --maxWidth: 1200px;
  --scent-850: hsl(200, 100%, 85%);
  --scent-750: hsl(200, 100%, 75%);
  --scent-650: hsl(200, 100%, 65%);
  --scent-550: hsl(200, 100%, 55%);
  --scent-450: hsl(200, 100%, 45%);
  --scent-350: hsl(200, 100%, 35%);
  --scent-250: hsl(200, 100%, 25%);
  --primary: hsl(0, 0%, 90%);
  --gray-50: hsl(0, 0%, 5%);
  --gray-100: hsl(0, 0%, 10%);
  --gray-150: hsl(0, 0%, 15%);
  --gray-170: hsl(0,0%,0%,0.3);
  --gray-200: hsl(0, 0%, 20%);
  --gray-300: hsl(0, 0%, 30%);
  --gray-400: hsl(0, 0%, 40%);
  --gray-600: hsl(0, 0%, 60%);
  --success_color: #00e676;
  --error_color: tomato;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
  scroll-behavior: smooth;
  /* overflow: hidden; */
}

body {
  background: var(--gray-200);
  color: var(--primary);
  font: var(--main-font);
  -webkit-font-smoothing: antialiased;
  letter-spacing: 0.3px;
}

p {
  letter-spacing: 1.1px;
  line-height: 1.4;
}

h1,h2,h3,h4,h5,h6 {
  /* letter-spacing: 1.2px; */
  letter-spacing: 0.1rem;
  line-height: 2;
}

a {
text-decoration: none;
transition: all 0.3s ease 0s;
color: var(--primary);
/* color: var(--scent-750); */
font-weight: normal;
cursor: pointer;

  &:hover {
    color: var(--scent-550);
  }
}

li {
  list-style-type: none;
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

  /* .image {
  aspect-ratio: 1;
  margin: 0 auto;
} */

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

`;
