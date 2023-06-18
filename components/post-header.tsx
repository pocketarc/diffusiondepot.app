import DateFormatter from './date-formatter'
import PostTitle from './post-title'
import type Author from '../interfaces/author'
import Image, {StaticImageData} from "next/image";

type Props = {
    title: string
    coverImage?: StaticImageData;
    date: string
    author: Author
    width?: number
    height?: number
}

const PostHeader = ({title, coverImage, date, author, width, height}: Props) => {
    return (
        <>
            <PostTitle>{title}</PostTitle>
            {coverImage && (
                <>
                    <div className="mb-8 md:mb-16 mx-auto">
                        <Image
                            quality={100}
                            priority={true}
                            width={width}
                            height={height}
                            placeholder="blur"
                            src={coverImage}
                            alt={`Cover Image for ${title}`}
                            className="shadow-sm w-full"
                        />
                    </div>
                    <div className="max-w-3xl mx-auto">
                        <div className="mb-6 text-gray-500">
                            <DateFormatter dateString={date}/>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default PostHeader
