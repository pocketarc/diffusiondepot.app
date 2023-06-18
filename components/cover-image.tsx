import cn from 'classnames'
import Link from 'next/link'
import Image, {StaticImageData} from 'next/image'

type Props = {
    title: string
    src: StaticImageData;
    slug?: string
    width: number
    height: number
}

const CoverImage = ({title, src, slug, width, height}: Props) => {
    const image = (
        <Image
            width={width}
            height={height}
            quality={100}
            placeholder="blur"
            src={src}
            alt={`Cover Image for ${title}`}
            className={cn('shadow-sm w-full', {
                'group-hover:shadow-lg group-hover:ring group-hover:ring-red-600 transition-shadow duration-200': slug,
            })}
        />
    )
    return (
        <div className="sm:mx-0">
            {slug ? (
                <Link href={`/posts/${slug}`} aria-label={title}>
                    {image}
                </Link>
            ) : (
                image
            )}
        </div>
    )
}

export default CoverImage
