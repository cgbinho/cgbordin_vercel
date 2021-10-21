import styled from 'styled-components';

export const ArticlesContent = styled.div`
  display: grid;
  grid-auto-flow: row;
  justify-content: center;
  align-items: center;
  max-width: 850px;
  margin: 2rem auto;

  > h1 {
    text-align: center;
  }

  section {
    display: grid;
    grid-auto-flow: row;
    align-items: center;
    justify-items: flex-start;
    align-items: flex-start;
    width: 100%;
    gap: 2rem;
    padding: 2rem;
    background-color: var(--gray-170);
    backdrop-filter: blur(20px);
    border-radius: 4px;
    grid-auto-rows: 1fr;
  }

  @media screen and (max-width: 800px) {
    section {
      backdrop-filter: unset;
    }
  }

  .article_list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    align-items: center;
    justify-items: flex-start;
    align-items: flex-start;
    gap: 2rem;
    padding: 2rem;

    @media screen and (max-width: 800px) {
      padding: 1rem;
    }
  }
`;

export const ArticleContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  margin: 0 2rem;
  justify-content: center;
  align-items: center;
  max-width: 650px;

  .video_container {
    position: relative;
    padding-top: 56.25%;
    margin: 2rem 0;
  }

  .video_content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  h2 {
    line-height: 1.35;
    margin-bottom: 1rem;
  }

  p {
    margin: 1rem 0;
    line-height: 1.4;
  }

  pre {
    background-color: var(--gray-100);
    border-radius: 4px;
    padding: 1rem;
  }

  a {
    color: var(--scent-450);

    &:hover {
      color: var(--scent-550);
    }
  }

  img,
  figure {
    width: 100%;
    display: block;
    margin: 1rem auto;
    border: 2px solid var(--gray-100);
    box-shadow: 4px 4px 16px var(--gray-100);
  }

  img[src*='width_auto'] {
    text-align: center;
    width: auto;
  }

  img[src*='width_80'] {
    text-align: center;
    width: 80%;
  }

  img[src*='width_100'] {
    text-align: center;
    width: 100%;
  }

  img[src~='bordered'] {
    border: 2px solid var(--gray-100);
  }

  em {
    padding-bottom: 0.5rem;
    display: block;
    text-align: center;
  }
`;
