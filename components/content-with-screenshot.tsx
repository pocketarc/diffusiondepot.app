import {CloudIcon, LockIcon, ServerIcon} from "lucide-react";
import * as screenshot from "../public/assets/screenshot.webp";
import Image from "next/image";

export default function ContentWithScreenshot() {
    return (
        <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <svg
                    className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-purple-700 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                            width={200}
                            height={200}
                            x="50%"
                            y={-1}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-purple-700/25">
                        <path
                            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
                </svg>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <p className="text-base font-semibold leading-7 text-red-munsell">Simplify your creative process</p>
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-purple-50 sm:text-4xl">Master your artwork</h1>
                            <p className="mt-6 text-xl leading-8 text-purple-200">
                                Take control of your pictures generated with Stable Diffusion, Midjourney, and DALL-E. You'll never lose track of the countless artistic masterpieces you create.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <Image src={screenshot} alt="App screenshot" className="w-[48rem] max-w-none sm:w-[57rem]"/>
                </div>
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="max-w-xl text-base leading-7 text-purple-200 lg:max-w-lg">
                            <p>
                                It was getting hard to keep track of what I had generated with Stable Diffusion, and hard to keep track of all the prompt variations I had used.
                                That's why I created Diffusion Depot, a powerful, unique app that empowers you to manage your prompts and images, all in one place.
                            </p>
                            <ul role="list" className="mt-8 space-y-8 text-purple-300">
                                <li className="flex gap-x-3">
                                    <CloudIcon className="mt-1 h-5 w-5 flex-none text-red-munsell" aria-hidden="true" />
                                    <span>
                    <strong className="font-semibold text-purple-50">Private and personal.</strong> Sitting conveniently on your own computer, Diffusion Depot keeps everything local and secure. You don't need to upload stuff anywhere or worry about your privacy. It's like having your own personal gallery assistant.
                  </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <LockIcon className="mt-1 h-5 w-5 flex-none text-red-munsell" aria-hidden="true" />
                                    <span>
                    <strong className="font-semibold text-purple-50">Discover creative possibilities.</strong> With its built-in features, you can unleash the greatest potential in your AI-generated images. Tag, search, and explore your creations effortlessly. Just a few clicks can open up a whole new world of creativity.
                  </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <ServerIcon className="mt-1 h-5 w-5 flex-none text-red-munsell" aria-hidden="true" />
                                    <span>
                    <strong className="font-semibold text-purple-50">Unleash the power of AI.</strong> You can reap all these benefits without shelling out a dime. Diffusion Depot is free, open-source, and can handle whatever you throw at it. It was built to handle tens of thousands of pictures, so you can create without limitations.
                  </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
