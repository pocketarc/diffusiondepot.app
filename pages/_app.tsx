import {AppProps} from 'next/app';
import '../styles/index.css';
import 'prismjs/themes/prism-okaidia.css';
import {MDXProvider} from '@mdx-js/react';
import mdxComponents from "../lib/mdxComponents";

export default function MyApp({Component, pageProps}: AppProps) {
    return <MDXProvider components={mdxComponents}>
        <Component {...pageProps} />
    </MDXProvider>
}
