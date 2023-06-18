import Layout from '../components/layout';
import generateSitemap from "../scripts/generateSitemap";
import Meta from "../components/meta";
import getMetadata from "../lib/getMetadata";
import Hero from "../components/hero";

type Props = {}

export default function Index({}: Props) {
    return (
        <>
            <Layout>
                <Meta metadata={getMetadata()}/>
                <Hero/>
            </Layout>
        </>
    )
}

export const getStaticProps = async () => {
    await generateSitemap();

    return {
        props: {},
    }
}
