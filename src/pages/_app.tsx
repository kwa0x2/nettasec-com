import { CONFIG } from "@/libs/config";
import { pageview } from "@/libs/ga";
import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";
import { useEffect } from "react";
import Favicon from "../assets/icon.svg";
import Head from "next/head";
import { PagesProgressBar as ProgressBar } from "next-nprogress-bar";

import "@/styles/index.scss";
import { Toaster } from "@/components/ui/toaster";

const App = ({ Component, pageProps }: any) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events]);

  return (
    <>
      <Head>
        <title>{CONFIG.SEO.title}</title>
        <link rel="icon" href={Favicon} />
        <link rel="canonical" href={CONFIG.SEO.publishDomain} />
        <meta charSet="utf-8" />
        <meta name="HandheldFriendly" content="true" />
        <meta
          name="copyright"
          content="NettaSec Solutions, contact@nettasec.com"
        />
        <meta name="theme-color" content={CONFIG.SEO.themeColor} />
        <meta
          name="author"
          content="NettaSec Solutions, contact@nettasec.com"
        />
        <meta name="keywords" content={CONFIG.SEO.keywords.join(",")} />
        <meta name="description" content={CONFIG.SEO.description} />
        <meta property="og:title" content={CONFIG.SEO.title} />
        <meta property="og:description" content={CONFIG.SEO.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={CONFIG.SEO.publishDomain} />
        <meta property="og:site_name" content={CONFIG.SEO.title} />
        <meta property="og:image" content={Favicon} />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:locale:alternate" content="tr_TR" />
        <meta property="og:locale:alternate" content="en_US" />
        <meta property="twitter:url" content={CONFIG.SEO.publishDomain} />
        <meta property="twitter:title" content={CONFIG.SEO.title} />
        <meta property="twitter:description" content={CONFIG.SEO.description} />
        <meta property="twitter:image" content={Favicon} />

        <meta property="twitter:card" content={Favicon} />
      </Head>

      <DefaultSeo titleTemplate={CONFIG.SEO.layoutTitle} />
      <Component {...pageProps} />
      <ProgressBar
        height="4px"
        color="#a44246"
        options={{ showSpinner: true }}
        shallowRouting
      />
      <Toaster />
    </>
  );
};

export default App;
