import React from 'react';
import Link from 'next/link';
import { ArticleCardContent } from './styles';
import DateFormatter from '../../DateFormatter';

export const ArticleCard = ({ content }) => {
  return (
    <ArticleCardContent
      className="border_scented"
      role="listitem"
      whileHover={{ translateY: -8 }}
      transition={{ type: 'tween' }}
    >
      <Link href={`/articles/${content.slug}`} locale={false}>
        <a>
          <img src={content.coverImage} alt={content.title} width="100%" />
        </a>
      </Link>
      <aside>
        <h4>{content.title}</h4>
        <DateFormatter dateString={content.date} />
        <p>{content.excerpt}</p>
      </aside>
    </ArticleCardContent>
  );
};
