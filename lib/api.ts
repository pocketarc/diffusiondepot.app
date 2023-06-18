import fs from 'fs';
import {join} from 'path';
import PostType from "../interfaces/post";
import {MDXContent} from "mdx/types";
import ReactDOMServer from 'react-dom/server';
import React from "react";

const postsDirectory = join(process.cwd(), 'posts');

export function getPostSlugs() {
    return fs.readdirSync(postsDirectory)
}

export async function getPostBySlug(slug: string, fields: string[] = []) {
    const content = (await import((`/posts/${slug}`)));
    const meta = content.meta as PostType;
    meta.html = ReactDOMServer.renderToString(React.createElement(content.default));
    return meta;
}

export async function getAllPosts(fields: string[] = []) {
    const slugs = getPostSlugs();
    return (await Promise.all(slugs.map(async (slug) => await getPostBySlug(slug, fields))))
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}
