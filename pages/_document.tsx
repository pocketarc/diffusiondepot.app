import {Html, Head, Main, NextScript} from 'next/document';

export default function Document() {
    return (
        <Html className="min-h-screen" lang="en">
            <Head />
            <body className="min-h-screen selection:bg-purple-400 selection:text-purple-50">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
