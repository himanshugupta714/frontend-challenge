import { Inter } from "next/font/google";
import "../src/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "components/layout";

const inter = Inter({
  subsets: ["latin"],
  preload: true,
  adjustFontFallback: true,
  variable: "--inter-font",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --inter-font: ${inter.style.fontFamily};
          }
        `}
      </style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
