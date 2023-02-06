import type { AppProps } from "next/app";

import "@utrecht/component-library-css";
import "@utrecht/design-tokens/dist/index.css";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="utrecht-theme">
      <Component {...pageProps} />
    </div>
  );
}
