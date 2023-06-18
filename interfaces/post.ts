import type {StaticImageData} from "next/image";
import PageType from "./page";

interface PostType extends PageType {
    slug: string
    excerpt: string
    html: string
    cover: {
        image: StaticImageData,
        height: number,
        width: number,
    }
    ogImage: {
        url: string
        width: number
        height: number
    }
}

export default PostType
