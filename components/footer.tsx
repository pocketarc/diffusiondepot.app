import Container from './container'
import TwitterIcon from "./icons/twitter-icon";
import GitHubIcon from "./icons/github-icon";
import MastodonIcon from "./icons/mastodon-icon";
import DiscordIcon from "./icons/discord-icon";

const Footer = () => {
    return (
        <Container>
            <footer className="border-t border-t-purple-600/50 text-purple-300">
                <div className="py-12 flex flex-col lg:flex-row items-center">
                    <p className="tracking-tighter leading-tight text-center lg:text-left mb-4 lg:mb-0 lg:pr-4 lg:w-3/4">
                        Made by <a className="underline hover:text-red-munsell-600 duration-200 transition-colors" href="https://pocketarc.com">PocketArC</a>
                    </p>
                    <div className="flex flex-row justify-end items-center lg:pl-4 lg:w-1/4">
                        <a
                            aria-label="Join me on Discord"
                            href="https://discord.gg/uBzF2esKvn"
                            target="_blank"
                            rel="author me noopener noreferrer external"
                            className="mx-1 hover:text-white hover:bg-[#5865f2] py-3 px-3 rounded-xl duration-200 transition-colors">
                            <DiscordIcon/>
                        </a>
                        <a
                            aria-label="Follow me on Twitter"
                            href="https://twitter.com/pocketarc"
                            target="_blank"
                            rel="author me noopener noreferrer external"
                            className="mx-1 hover:text-white hover:bg-[#1da1f2] py-3 px-3 rounded-xl duration-200 transition-colors"
                        >
                            <TwitterIcon/>
                        </a>
                        <a
                            aria-label="Follow me on GitHub"
                            href="https://github.com/pocketarc"
                            target="_blank"
                            rel="author me noopener noreferrer external"
                            className="mx-1 hover:text-white hover:bg-[#1e2327] py-3 px-3 rounded-xl duration-200 transition-colors"
                        >
                            <GitHubIcon/>
                        </a>
                        <a
                            aria-label="Follow me on Mastodon"
                            href="https://tech.lgbt/@pocketarc"
                            target="_blank"
                            rel="author me noopener noreferrer external"
                            className="mx-1 hover:text-white hover:bg-[#6364FF] py-3 px-3 rounded-xl duration-200 transition-colors">
                            <MastodonIcon/>
                        </a>
                    </div>
                </div>
            </footer>
        </Container>
    )
}

export default Footer
