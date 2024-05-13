import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import compress from 'astro-compress';
import rehypeSlug from 'rehype-slug';
import rehypeAutoLinkHeadings from 'rehype-autolink-headings';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism';
import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  site: 'https://naveenjetty.com',
	markdown: {
		syntaxHighlight: 'prism',
		rehypePlugins: [
			rehypeSlug,
			rehypeAutoLinkHeadings,
			rehypeCodeTitles,
			rehypePrism,
		],
  },
  integrations: [
    svelte(),
		tailwind({ config: { applyBaseStyles: false } }),
		expressiveCode(),
		mdx(),
		sitemap(),
		compress(),
	],
	vite: {
		server: {
			proxy: {
				'/api': 'http://localhost:8787',
			},
		},
	},
})