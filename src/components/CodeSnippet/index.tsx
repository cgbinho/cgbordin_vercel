import React from 'react';
import { useRouter } from 'next/router';
import { CodeSnippetContainer } from './style';

export function CodeSnippet() {
  const router = useRouter();
  const { locale } = router;

  const learnMore = locale !== 'en' ? 'Saiba Mais' : 'Learn More';

  const data = { idle: true, singing: false };

  return (
    <CodeSnippetContainer>
      <img
        width="40px"
        src="/images/code_snippet_buttons.svg"
        alt="code_snippet_buttons"
      />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </CodeSnippetContainer>
  );
}
