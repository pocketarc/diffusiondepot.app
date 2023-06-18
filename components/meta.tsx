import Head from 'next/head';
import React from "react";
import getMetadata from "../lib/getMetadata";

type Props = {
    metadata: ReturnType<typeof getMetadata>
}

const Meta = ({metadata}: Props) => {
    const title = metadata.title;

    return (
        <Head>
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/favicon/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon/favicon-16x16.png"
            />
            <link rel="manifest" href="/favicon/site.webmanifest"/>
            <link rel="shortcut icon" href="/favicon/favicon.ico"/>
            <meta name="theme-color" content={metadata.themeColor} />
            <title>{title}</title>
            <link rel="canonical" href={metadata.alternates.canonical}/>
            <meta property="og:title" content={metadata.title as string}/>
            <meta property="og:description" content={metadata.openGraph.description}/>
            <meta property="og:image" content={metadata.openGraph.images.url}/>
            <meta property="og:image:width" content={metadata.openGraph.images.width + ''}/>
            <meta property="og:image:height" content={metadata.openGraph.images.height + ''}/>
            <meta property="og:type" content={metadata.openGraph.type}/>
            <meta name="twitter:card" content={metadata.twitter.card}/>
            <meta property="twitter:site" content={metadata.twitter.site}/>
            <meta property="twitter:creator" content={metadata.twitter.creator}/>
            <meta property="twitter:title" content={metadata.twitter.title}/>
            <meta property="twitter:description" content={metadata.twitter.description}/>
            <meta property="twitter:image" content={metadata.twitter.images.url}/>
            <meta property="twitter:image:width" content={metadata.twitter.images.width + ''}/>
            <meta property="twitter:image:height" content={metadata.twitter.images.height + ''}/>

        </Head>
    )
}

export default Meta
