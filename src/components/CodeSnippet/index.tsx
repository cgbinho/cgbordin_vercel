import React from 'react';
import { useRouter } from 'next/router';
import { CodeSnippetContainer } from './style';

export function CodeSnippet({ birdState }) {
  return (
    <CodeSnippetContainer>
      <img
        width="40px"
        src="/images/code_snippet_buttons.svg"
        alt="code_snippet_buttons"
      />
      <pre>{JSON.stringify(birdState, null, 2)}</pre>
    </CodeSnippetContainer>
  );
}
