import Image from 'next/image';
import type {StaticImageData} from 'next/image';

type Props = {
    src: StaticImageData,
    alt: string
    width?: number
    height?: number
}

const PostImage = ({src, alt}: Props) => {
    const width = src.width / 2;
    const height = src.height / 2;

    return <figure>
        <Image quality={100} width={width} height={height} className="mx-auto" placeholder="blur" src={src} alt={alt}/>
        <figcaption>{alt}</figcaption>
    </figure>;
}

export default PostImage
