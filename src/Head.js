// @flow

import React from 'react';
import NextHead from 'next/head';
import config from './config';

function Head() {
  return (
    <NextHead>
      <title>{config.title}</title>
      {config.description ? (
        <meta
          key="description"
          name="description"
          content={config.description}
        />
      ) : null}
      {config.description ? (
        <meta
          key="og:description"
          name="og:description"
          content={config.description}
        />
      ) : null}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@bdougieYO" />
      <meta name="twitter:title" content="bdougie 💯 on the internet"   />
      <meta name="twitter:description" content="A digital garden for all things dougie." />
      <meta name="twitter:image" content="/social.png" />
      <meta name="twitter:image:alt" content="bdougie on the internet" />

      <meta charSet="utf-8" />
      <meta key="og:title" property="og:title" content={config.title} />
      <meta property="og:site_name" content={config.title} />
      <meta property="og:image" content="/social.png" key="ogimage" />
      <meta property="og:locale" content="en_US" />
      <meta key="type" property="og:type" content="website" />

      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link
        rel="alternate"
        type="application/rss+xml"
        title="RSS Feed"
        href="/feed.rss"
      />
      <link
        rel="alternate"
        href="/feed.atom"
        title="Atom feed"
        type="application/atom+xml"
      />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    </NextHead>
  );
}

export default Head;
