import Image from "next/image";
import Link from "next/link";

import logoLight from '../public/assets/logo.light.webp';

const Intro = () => {
    return (
        <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
            <h1 className="md:pr-8 flex items-center">
                <Image
                    quality={100}
                    src={logoLight}
                    width={64}
                    height={89}
                    alt={`PocketArC Logo`}
                    className="w-16 mr-6"
                />
                <div>
                    <span className="text-5xl text-gray-900 md:text-7xl font-bold tracking-tighter leading-tight">PocketArC</span>
                    <div className="text-center md:hidden text-gray-500 md:text-left space-x-4 text-lg">
                        <Link href="/" className="hover:text-red-600 duration-200 transition-colors">Home</Link>
                        <Link href="/about" className="hover:text-red-600 duration-200 transition-colors">About Me</Link>
                    </div>
                </div>
            </h1>
            <div className="text-center hidden md:block text-gray-500 md:text-left space-x-4 text-lg mt-5 md:pl-8">
                <Link href="/" className="hover:text-red-600 duration-200 transition-colors">Home</Link>
                <Link href="/about" className="hover:text-red-600 duration-200 transition-colors">About Me</Link>
            </div>
        </section>
    )
}

export default Intro
