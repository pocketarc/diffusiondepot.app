import Link from 'next/link'
import Image from "next/image";

import logoLight from '../public/assets/logo.light.webp';

const Header = () => {
    return (
        <div className="text-4xl font-bold tracking-tighter leading-tight mb-8 md:mb-20 mt-8">
            <Link href="/" className="flex items-center hover:text-red-600 duration-200 transition-colors">
                <Image
                    quality={100}
                    src={logoLight}
                    width={32}
                    height={45}
                    alt={`PocketArC Logo`}
                    className="w-8 mr-4"
                />
                PocketArC
            </Link>
        </div>
    )
}

export default Header
