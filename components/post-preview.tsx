import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import type Author from '../interfaces/author'
import {StaticImageData} from "next/image";
import PostType from "../interfaces/post";

type Props = {
    title: string
    cover: PostType['cover']
    date: string
    excerpt: string
    author: Author
    slug: string
}

const PostPreview = ({
                         title,
                         cover,
                         date,
                         excerpt,
                         slug,
                     }: Props) => {
    return (
        <div className="group">
            <div className="mb-5">
                <CoverImage width={cover.width} height={cover.height} slug={slug} title={title} src={cover.image}/>
            </div>
            <h3 className="text-3xl mb-1 leading-snug">
                <Link
                    href={`/posts/${slug}`}
                    className="font-title text-gray-900 font-bold group-hover:text-red-600 duration-200 transition-colors"
                >
                    {title}
                </Link>
            </h3>
            <div className="text-gray-500 mb-4">
                <DateFormatter dateString={date}/>
            </div>
            <p className="text-lg text-gray-800 leading-relaxed mb-4">{excerpt}</p>
        </div>
    )
}

export default PostPreview
