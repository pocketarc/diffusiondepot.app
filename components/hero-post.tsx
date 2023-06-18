import DateFormatter from './date-formatter';
import CoverImage from './cover-image';
import Link from 'next/link';
import type Author from '../interfaces/author';
import PostType from "../interfaces/post";

type Props = {
    title: string
    cover: PostType['cover']
    date: string
    excerpt: string
    author: Author
    slug: string
}

const HeroPost = ({
                      title,
                      cover,
                      date,
                      excerpt,
                      slug,
                  }: Props) => {
    return (
        <section className="group">
            <div className="mb-8 md:mb-16">
                <CoverImage width={cover.width} height={cover.height} title={title} src={cover.image} slug={slug}/>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
                <div>
                    <h3 className="mb-1 font-title text-gray-900 font-bold text-4xl lg:text-5xl leading-tight">
                        <Link
                            href={`/posts/${slug}`}
                            className="group-hover:text-red-600 duration-200 transition-colors"
                        >
                            {title}
                        </Link>
                    </h3>
                    <div className="mb-4 md:mb-0 text-gray-500">
                        <DateFormatter dateString={date}/>
                    </div>
                </div>
                <div>
                    <p className="text-lg text-gray-800 leading-relaxed mb-4">{excerpt}</p>
                </div>
            </div>
        </section>
    )
}

export default HeroPost
