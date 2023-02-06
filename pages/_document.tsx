import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="nl">
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://unpkg.com/@utrecht/design-tokens/dist/index.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
