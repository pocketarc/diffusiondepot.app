import PostType from "../interfaces/post";
import PageType from "../interfaces/page";
import {BASE_URL} from "./constants";
import {Metadata} from "next";

export default (page?: PostType | PageType) => {
    const description = page?.shareExcerpt ?? "Smart image manager for Stable Diffusion, Midjourney, and DALL-E";

    return {
        alternates: {
            canonical: page?.url ? page?.url : "https://diffusiondepot.app",
        },
        manifest: '/favicon/site.webmanifest',
        themeColor: '#201A2E',
        icons: {
            apple: {
                url: "/favicon/apple-touch-icon.png",
                sizes: "180x180",
            },
            shortcut: {
                url: "/favicon/favicon.ico"
            },
            icon: [
                {
                    url: "/favicon/favicon-32x32.png",
                    sizes: "32x32",
                },
                {
                    url: "/favicon/favicon-16x16.png",
                    sizes: "16x16",
                }
            ]
        },
        title: page?.title ? `${page.title} · Diffusion Depot` : 'Diffusion Depot · Smart image manager for Stable Diffusion, Midjourney, and DALL-E',
        description: description,
        openGraph: {
            title: page?.title ?? 'Diffusion Depot',
            description: description,
            type: page ? 'article' : 'website',
            images: {
                url: page?.ogImage?.url ?? BASE_URL + '/assets/og.image.png',
                width: page?.ogImage?.width ?? 600,
                height: page?.ogImage?.height ?? 315,
            },
        },
        twitter: {
            card: "summary_large_image",
            title: page?.title ?? 'Diffusion Depot',
            description: description,
            creator: "@pocketarc",
            site: "@pocketarc",
            images: {
                url: page?.ogImage?.url ?? BASE_URL + '/assets/og.image.png',
                width: page?.ogImage?.width ?? 600,
                height: page?.ogImage?.height ?? 315
            }
        }
    } satisfies Metadata;
};