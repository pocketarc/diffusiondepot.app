import {BASE_URL} from "../lib/constants";
import fs from "fs";
import {globby} from "globby";

export default async function generateSitemap() {
    // Fetch all routes based on patterns
    // Your folder structure might be different so change below to match your needs
    const pages = await globby([
        'pages/**/*.{ts,tsx,mdx}', // All routes inside /pages
        '!pages/**/[*.{ts,tsx}', // Ignore my dynamic route index Example /pages/blog/[slug].tsx
        '!pages/_*.{ts,tsx}', // Ignore next.js files
        '!pages/api', // Ignore API routes
        '!pages/admin.tsx' // Ignore pages not meant to be indexed
    ]);

    const urlSet = pages
        .map((page) => {
            // Remove none route related parts of filename.
            const path = page
                .replace('pages', '')
                .replace(/(\.tsx|\.ts)/, '')
                .replace(/(\.md|\.mdx)/, '');
            // Remove the word index from route
            const route = path === '/index' ? '' : path;

            // Get the last modified date of the page
            const stats = fs.statSync(`./${page}`);
            const lastmod = new Date(stats.mtime).toISOString().split('T')[0];

            // Build url portion of sitemap.xml
            return `<url><loc>${BASE_URL}${route}</loc><lastmod>${lastmod}</lastmod><changefreq>monthly</changefreq></url>`;
        })
        .join('');

    // Add urlSet to entire sitemap string
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlSet}</urlset>`;

    // Create sitemap file
    fs.writeFileSync('./public/sitemap.xml', sitemap);
}