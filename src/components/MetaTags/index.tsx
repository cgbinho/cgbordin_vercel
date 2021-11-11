import React from 'react';
import { FaviconTags } from './FaviconTags';
import { FontAndStyleTags } from './FontAndStyleTags';
import { GoogleAnalyticsTags } from './GoogleAnalyticsTags';
import { OpenGraphTags } from './OpenGraphTags';

export function MetaTags() {
  return (
    <>
      <FontAndStyleTags />
      <OpenGraphTags />
      <FaviconTags />
      <GoogleAnalyticsTags />
    </>
  );
}
