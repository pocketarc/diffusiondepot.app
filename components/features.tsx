import {DnaIcon, ImagePlusIcon, LibraryIcon, PackageOpenIcon, ScalingIcon, TagIcon} from "lucide-react";

const features = [
    {
        name: 'Tag to your heart\'s content.',
        description: 'Diffusion Depot lets you organise all your images with tags. You can easily find any picture you’re looking for, keep track of all your favorites, and filter out the ones you want to keep to yourself.',
        icon: TagIcon,
    },
    {
        name: 'Your own prompt library.',
        description: 'Diffusion Depot extracts all your images\' prompts for you and keeps them in your own prompt library. You can see which images were generated with which prompt, so you never have to try to remember which prompt you used for that special set of images.',
        icon: LibraryIcon,
    },
    {
        name: 'Automatic CLIP and age/gender tagging.',
        description: 'Diffusion Depot tags all your images automatically with CLIP, so you don’t have to think about going through thousands of images one by one.',
        icon: DnaIcon,
    },
    {
        name: 'Upscale on demand.',
        description: 'If you have a low-res generated image, you can upscale it right from Diffusion Depot, using the same upscaler models and configuration you have in Stable Diffusion.',
        icon: ScalingIcon,
    },
    {
        name: 'Keep generating.',
        description: 'Diffusion Depot can generate more images from any image. So if you find an image you like, it’s effortless to have it generate more like it.',
        icon: ImagePlusIcon,
    },
    {
        name: 'Free and open source.',
        description: 'Diffusion Depot is built by pocketarc. You can help contribute on GitHub and join the Discord server if you want to chat.',
        icon: PackageOpenIcon,
    },
]

export default function Features() {
    return (
        <div className="py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <p className="mt-2 text-3xl font-bold tracking-tight text-purple-50 sm:text-4xl">
                        Ready for everything.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-purple-300">
                        Diffusion Depot automatically tracks all your stable diffusion images and prompts, so you can organise everything you’ve ever generated, and never lose a prompt.
                    </p>
                </div>
                <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-purple-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
                    {features.map((feature) => (
                        <div key={feature.name} className="relative pl-9">
                            <dt className="inline font-semibold text-purple-50">
                                <feature.icon className="absolute left-1 top-1 h-5 w-5 text-red-munsell"
                                              aria-hidden="true"/>
                                {feature.name}
                            </dt>
                            {' '}
                            <dd className="inline">{feature.description}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    )
}
