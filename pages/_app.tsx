import {AppProps} from 'next/app';
import '../styles/index.css';
import 'prismjs/themes/prism-okaidia.css';
import {MDXProvider} from '@mdx-js/react';
import mdxComponents from "../lib/mdxComponents";
import Script from "next/script";

export default function MyApp({Component, pageProps}: AppProps) {
    return <>
        <MDXProvider components={mdxComponents}>
            <Component {...pageProps} />
        </MDXProvider>
        <Script src="https://plausible.io/js/script.js" data-domain="diffusiondepot.app" strategy="afterInteractive"/>
    </>
}
