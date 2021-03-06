import Head from "next/head";

interface MetaProps {}

const Meta: React.FC<MetaProps> = () => (
  <Head>
    <meta charSet="utf-8" />
    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="royalblue" />
    <link rel="shortcut icon" href="/favicon.svg" />

    <title>Regirock365</title>
  </Head>
);

export default Meta;
