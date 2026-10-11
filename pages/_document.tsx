import {Html, Head, Main, NextScript} from 'next/document';

// tvsort.com proxies Plausible, because ad-blocker lists include plausible.io.
// The proxy serves only the trackers listed in a separate infrastructure
// configuration, so add a new tracker there too.
const plausibleUrl = "https://tvsort.com";

const plausibleInit = `window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init({endpoint:"${plausibleUrl}/api/event"})`;

export default function Document() {
    return (
        <Html className="min-h-screen" lang="en">
            {/*
              * Plain tags, so the tracker is in the exported HTML. A
              * monitoring probe reads that HTML without running JavaScript
              * and alerts when the tracker is missing.
              */}
            <Head>
                <script async src={`${plausibleUrl}/js/pa-q5g6LH4OrSECkV-0DbrH8.js`}/>
                <script dangerouslySetInnerHTML={{__html: plausibleInit}}/>
            </Head>
            <body className="min-h-screen selection:bg-purple-400 selection:text-purple-50">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
