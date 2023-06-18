import Link from "next/link";

export default function Custom404() {
    return (
        <main className="relative isolate min-h-screen bg-purple-800">
            <div
                className="absolute -z-10 transform-gpu overflow-hidden blur-3xl -top-40 left-1/3"
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
            <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
                <p className="text-base font-semibold leading-8 text-white">404</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Page not found</h1>
                <p className="mt-4 text-base text-white/70 sm:mt-6">
                    Oops! We couldn't find the page you're looking for.<br/>It must be on a secret mission.
                </p>
                <div className="mt-10 flex justify-center">
                    <Link href="/" className="text-sm font-semibold leading-7 text-white">
                        <span aria-hidden="true">&larr;</span> Return to base (home)
                    </Link>
                </div>
            </div>
        </main>
    )
}
