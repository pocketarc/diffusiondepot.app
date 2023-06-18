import html from 'remark-html';
import remarkGfm from 'remark-gfm';
import remarkPrism from 'remark-prism';
// @ts-expect-error We know that there are no types for this plugin.
import remarkFigureCaption from '@microflash/remark-figure-caption'
import {defaultSchema} from 'hast-util-sanitize';
import merge from 'deepmerge';
import mdx from '@next/mdx';
import withExportImages from 'next-export-optimize-images';
import bundleAnalyzer from '@next/bundle-analyzer';


const schema = merge(defaultSchema, {attributes: {'*': ['className']}});

const withMDX = mdx({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [
            remarkGfm,
            [html, {sanitize: schema}],
            remarkFigureCaption,
            remarkPrism,
        ],
        rehypePlugins: [],
        providerImportSource: "@mdx-js/react",
    },
});

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
    reactStrictMode: true,
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    output: 'export',
};

const withBundleAnalyzer = bundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer(withExportImages(withMDX(nextConfig)));