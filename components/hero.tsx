import React, {useEffect, useState} from 'react';
import Image from "next/image";
import * as screenshot from "../public/assets/screenshot.webp";
import getOperatingSystem from "../lib/getOperatingSystem";
import Features from "./features";
import Link from "next/link";
import Waitlist from "./Waitlist";

export default function Hero() {
    const [os, setOs] = useState<string | null>(null);

    useEffect(() => {
        setOs(getOperatingSystem(window));
    });

    return (
        <div>
            <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-red-munsell to-steel-blue opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div className="py-24 sm:py-32 lg:pb-40">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h1 className="text-2xl sm:text-4xl leading-snug sm:leading-snug font-bold tracking-tight text-white md:text-6xl">
                            Smart image manager for Stable Diffusion, Midjourney, and DALL-E
                        </h1>
                        <p className="mt-6 sm:text-lg sm:leading-8 text-purple-200">
                            Free and open source.
                            <span className="whitespace-nowrap">
                                For Windows, macOS, and Linux.
                            </span>
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link
                                href="#"
                                className="hidden rounded-md bg-red-munsell-600 px-3.5 py-2.5 text-sm font-semibold text-red-munsell-50 shadow-sm hover:bg-red-munsell-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-munsell-500"
                            >
                                <span>Download {os && `for ${os}`} (free!)</span>
                            </Link>

                            <Waitlist/>

                            <Link href="/features" hidden
                                  className="text-sm font-semibold leading-6 text-purple-50 hover:text-red-munsell-600 duration-200 transition-colors">
                                Learn more <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>
                    <Image src={screenshot} alt="App screenshot" className="mt-16"/>
                    <Features/>
                </div>
            </div>
            <div
                className="absolute pointer-events-none inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-35rem)]"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-red-munsell to-steel-blue opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
        </div>
    )
}
