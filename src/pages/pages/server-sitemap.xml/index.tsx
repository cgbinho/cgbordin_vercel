import { getServerSideSitemap } from 'next-sitemap';
import { GetServerSideProps } from 'next';
import { getAllArticles } from '../../../helpers/articles/api_articles'; // Importar a api que cria as páginas dinamicas. Method to source urls from cms

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Vou pegar os primeiros 100 posts do meu blog
  const allArticles = getAllArticles();

  // Vou criar um fields, onde busco o slug da minha resposta
  // E com o slug vou preenchendo dinamicamente cada post que tenho
  const fields = allArticles.map(({ slug }) => ({
    loc: `${process.env.NEXT_PUBLIC_APP_URL}/articles/${slug}`,
    lastmod: new Date().toISOString(),
  }));

  return getServerSideSitemap(ctx, fields);
};

// Default export to prevent next.js errors
// eslint-disable-next-line prettier/prettier
export default () => { };
