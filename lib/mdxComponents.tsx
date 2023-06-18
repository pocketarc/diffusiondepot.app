import Image from "next/image";

const ResponsiveImage = (props: any) => (
    <Image {...props} />
)

const Pre = (props: any) => (
    <pre>{props.children}</pre>
)

const components = {
    img: ResponsiveImage,
    pre: Pre
};

export default components;