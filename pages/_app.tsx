import type { AppProps } from "next/app";
import { SignalProvider } from "@/contexts/signal";

import "@utrecht/design-tokens/dist/index.css";
import "@utrecht/component-library-css/dist/index.css";
import "@utrecht/component-library-css/dist/html.css";

import "@/styles/globals.scss";
import "@/styles/utrecht-theme.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="utrecht-theme">
      <SignalProvider>
        <Component {...pageProps} />
      </SignalProvider>
    </div>
  );
}
