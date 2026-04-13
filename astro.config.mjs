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
						{ label: '一覧', slug: 'diseases' },
						{
							label: '卵巣腫瘍',
							items: [
								{ label: 'WHO分類・概要', slug: 'diseases/ovary' },
								{ label: '漿液性嚢胞腺腫', slug: 'diseases/ovary/serous-cystadenoma' },
							],
						},
					],
				},
				{
					label: '鑑別診断',
					items: [
						{ label: '一覧', slug: 'differentials' },
					],
				},
			],
		}),
	],
});