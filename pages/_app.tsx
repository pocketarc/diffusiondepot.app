import {AppProps} from 'next/app';
import '../styles/index.css';
import 'prismjs/themes/prism-okaidia.css';
import {MDXProvider} from '@mdx-js/react';
import mdxComponents from "../lib/mdxComponents";
import Script from "next/script";

const plausibleUrl = "https://tvsort.com";

export default function MyApp({Component, pageProps}: AppProps) {
    return <>
        <MDXProvider components={mdxComponents}>
            <Component {...pageProps} />
        </MDXProvider>
        <Script id="plausible-init" strategy="beforeInteractive">
            {`window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init({endpoint:"${plausibleUrl}/api/event"})`}
        </Script>
        <Script
            src={`${plausibleUrl}/js/pa-q5g6LH4OrSECkV-0DbrH8.js`}
            strategy="afterInteractive"
        />
    </>
}
