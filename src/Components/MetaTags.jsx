import React from 'react'
import Head from 'next/head';

function MetaTags({title}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="keywords" content="next app" />
      <meta name="description" content="Contacts Portal, created using next JS" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/logo.png" />
    </Head>
  );
}

export default MetaTags;
