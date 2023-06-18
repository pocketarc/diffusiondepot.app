import type Author from './author';
import {StaticImageData} from "next/image";

interface PageType {
    shareExcerpt: string
    url: string
    title: string
    date: string
    author: Author
    cover?: {
        image: StaticImageData,
        height: number,
        width: number,
    }
    ogImage?: {
        url: string
        width: number
        height: number
    }
}

export default PageType
