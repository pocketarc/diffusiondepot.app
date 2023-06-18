import Footer from './footer';
import Image from "next/image";
import * as logo from "../public/assets/logo.png";
import {MenuIcon, XIcon} from "lucide-react";
import DiscordIcon from "./icons/discord-icon";
import {Dialog} from "@headlessui/react";
import {useState} from "react";
import Link from "next/link";

type Props = {
    preview?: boolean
    children: React.ReactNode
}

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'About', href: '/about' },
]

const Layout = ({preview, children}: Props) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="bg-purple-800">
            <div className="min-h-screen">
                <div>
                    <header className="absolute inset-x-0 top-0 z-50">
                        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                            <div className="flex lg:flex-1">
                                <Link href="/" className="-m-1.5 p-1.5">
                                    <span className="sr-only">Diffusion Depot</span>
                                    <Image src={logo} alt="Diffusion Depot" className="h-12 w-auto" />
                                </Link>
                            </div>
                            {/*
                            <div className="flex lg:hidden">
                                <button
                                    type="button"
                                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-purple-200"
                                    onClick={() => setMobileMenuOpen(true)}
                                >
                                    <span className="sr-only">Open main menu</span>
                                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                            <div className="hidden lg:flex lg:gap-x-12">
                                {navigation.map((item) => (
                                    <Link key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-purple-50 hover:text-red-munsell-600 duration-200 transition-colors">
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                                <a
                                    aria-label="Join Discord"
                                    href="https://discord.gg/C2asJd3MDv"
                                    target="_blank"
                                    rel="author me noopener noreferrer external"
                                    className="flex mx-1 hover:text-red-munsell-600 text-sm font-semibold leading-6 text-purple-50 rounded-xl duration-200 transition-colors"
                                >
                                    <span className="mr-4">Join me on Discord</span> <DiscordIcon />
                                </a>
                            </div>
                            */}
                        </nav>
                        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                            <div className="fixed inset-0 z-50" />
                            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-purple-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-purple-50/10">
                                <div className="flex items-center justify-between">
                                    <a href="#" className="-m-1.5 p-1.5">
                                        <span className="sr-only">Diffusion Depot</span>
                                        <Image src={logo} alt="Diffusion Depot" className="h-8 w-auto" />
                                    </a>
                                    <button
                                        type="button"
                                        className="-m-2.5 rounded-md p-2.5 text-purple-300"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>
                                <div className="mt-6 flow-root">
                                    <div className="-my-6 divide-y divide-purple-300/25">
                                        <div className="space-y-2 py-6">
                                            {navigation.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-purple-50 hover:bg-purple-700 duration-200 transition-colors"
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                        <div className="py-6">
                                            <Link
                                                href="#"
                                                className="flex items-center -mx-3 rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-purple-50 hover:bg-purple-700 duration-200 transition-colors"
                                            >
                                                <span className="mr-4 flex-grow">Join me on Discord</span> <DiscordIcon />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Dialog>
                    </header>
                    <main className="relative isolate pt-14">
                        {children}
                    </main>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Layout
