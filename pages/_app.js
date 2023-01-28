import React from "react";
import config from "@config/config.json";
import theme from "@config/theme.json";
import './index.css';
import Script from 'next/script'
import Head from "next/head";
import { useEffect, useState } from "react";
import { config as fontawesomeConfig} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';   
fontawesomeConfig.autoAddCss = false


const App = ({ Component, pageProps }) => {

  // import google font css
  const pf = theme.fonts.font_family.primary;
  const sf = theme.fonts.font_family.secondary;
  const [fontcss, setFontcss] = useState();



  return (
    <>
      <Head>
        {/* google font css */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `${fontcss}`,
          }}
        />
        {/* responsive meta */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        
      </Head>
      <Component {...pageProps} />
    
      </>
  );
};

export default App;
