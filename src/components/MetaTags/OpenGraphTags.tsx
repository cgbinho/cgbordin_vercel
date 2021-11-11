import React from 'react';

export function OpenGraphTags() {
  return (
    <>
      <title>Cleber Galves Bordin - Personal Website</title>
      <meta name="title" content="Cleber Galves Bordin - Personal Website" />
      <meta
        name="description"
        content="This is the personal website and portfolio of a Front-end Developer and UX Motion Designer."
      />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://cgbordin.com/" />
      <meta
        property="og:title"
        content="Cleber Galves Bordin - Personal Website"
      />
      <meta
        property="og:description"
        content="This is the personal website and portfolio of a Front-end Developer and UX Motion Designer."
      />
      <meta
        property="og:image"
        content="https://cgbordin.com/images/cgbordin_banner.png"
      />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://cgbordin.com/" />
      <meta
        property="twitter:title"
        content="Cleber Galves Bordin - Personal Website"
      />
      <meta
        property="twitter:description"
        content="This is the personal website and portfolio of a Front-end Developer and UX Motion Designer."
      />
      <meta
        property="twitter:image"
        content="https://cgbordin.com/images/cgbordin_banner.png"
      />
    </>
  );
}
