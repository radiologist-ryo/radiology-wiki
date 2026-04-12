// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://radiologist-ryo.github.io',
	base: '/radiology-wiki',
	integrations: [
		starlight({
			title: '画像診断Wiki',
			defaultLocale: 'ja',
			locales: {
				root: {
					label: '日本語',
					lang: 'ja',
				},
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/radiologist-ryo/radiology-wiki' }],
			sidebar: [
				{
					label: '疾患別',
					items: [
						{ label: 'トップ', slug: 'diseases' },
					],
				},
				{
					label: '鑑別診断',
					items: [
						{ label: 'トップ', slug: 'differentials' },
					],
				},
			],
		}),
	],
});