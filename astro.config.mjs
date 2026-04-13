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
			customCss: ['./src/styles/custom.css'],
			components: {
				PageTitle: './src/components/PageTitle.astro',
				Footer: './src/components/Footer.astro',
			},
			pagination: false,
			sidebar: [
				{
					// Starlight 0.38.x の制約:
					//   SidebarLinkItemSchema  → link あり、items なし（クリッカブルリンク）
					//   ManualSidebarGroupSchema → items あり、link なし（折りたたみグループ）
					// link と items を同一要素に付与することは不可。
					// 婦人科: SidebarLinkItemSchema（クリッカブル）
					// 卵巣腫瘍: ManualSidebarGroupSchema（collapsed グループ）
					// として疾患別の直下に並列配置する。
					label: '疾患別',
					items: [
						{ label: '婦人科', link: '/radiology-wiki/diseases/gynecology/' },
						{
							label: '卵巣腫瘍',
							collapsed: true,
							items: [
								{ label: 'WHO分類・概要', slug: 'diseases/gynecology/ovary' },
								{ label: '漿液性嚢胞腺腫', slug: 'diseases/gynecology/ovary/serous-cystadenoma' },
							],
						},
						// 今後の追加例:
						// { label: '腹部', link: '/radiology-wiki/diseases/hepatobiliary/' },
						// { label: '中枢神経', link: '/radiology-wiki/diseases/brain/' },
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
