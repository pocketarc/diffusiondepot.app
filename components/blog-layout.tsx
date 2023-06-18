import Container from "./container";
import Header from "./header";
import PostHeader from "./post-header";
import Layout from "./layout";
import PostType from "../interfaces/post";
import classNames from "classnames";
import PageType from "../interfaces/page";
import React from "react";
import Meta from "./meta";
import getMetadata from "../lib/getMetadata";

type Props = {
    post: PostType | PageType,
    wide?: boolean,
    children: React.ReactNode
}

const BlogLayout = ({post, wide, children}: Props) => {
    const title = `${post.title} · PocketArC`;

    return (
        <Layout>
            <Meta metadata={getMetadata(post)}/>
            <Container>
                <Header/>
                <article className="mb-32">
                    <PostHeader
                        title={post.title}
                        coverImage={post.cover?.image}
                        width={post.cover?.width}
                        height={post.cover?.height}
                        date={post.date}
                        author={post.author}
                    />
                    <div className={classNames("prose lg:prose-xl mx-auto", {
                        "max-w-3xl": !wide,
                        "max-w-full": wide,
                    })}>
                        {children}
                    </div>
                </article>
            </Container>
        </Layout>
    )
}

export default BlogLayout;
