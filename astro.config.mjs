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
				PageFrame: './src/components/PageFrame.astro',
				Sidebar: './src/components/overrides/Sidebar.astro',
			},
			pagination: false,
			sidebar: [
				{
					label: '疾患別',
					items: [
						{
							label: '婦人科',
							collapsed: true,
							items: [
								{ label: '婦人科トップ', slug: 'diseases/gynecology' },
								{
									label: '卵巣腫瘍',
									collapsed: true,
									items: [
										{ label: 'WHO分類・概要', slug: 'diseases/gynecology/ovary' },
										{ label: '漿液性嚢胞腺腫', slug: 'diseases/gynecology/ovary/serous-cystadenoma' },
										{ label: '漿液性境界悪性腫瘍', slug: 'diseases/gynecology/ovary/serous-borderline' },
										{ label: '高異型度漿液性癌', slug: 'diseases/gynecology/ovary/high-grade-serous-carcinoma' },
										{ label: '低異型度漿液性癌', slug: 'diseases/gynecology/ovary/low-grade-serous-carcinoma' },
										{ label: '粘液性嚢胞腺腫', slug: 'diseases/gynecology/ovary/mucinous-cystadenoma' },
										{ label: '粘液性癌', slug: 'diseases/gynecology/ovary/mucinous-carcinoma' },
										{ label: '類内膜腫瘍', slug: 'diseases/gynecology/ovary/endometrioid-carcinoma' },
										{ label: '明細胞癌', slug: 'diseases/gynecology/ovary/clear-cell-carcinoma' },
										{ label: 'ブレンナー腫瘍', slug: 'diseases/gynecology/ovary/brenner-tumor' },
										{ label: '顆粒膜細胞腫', slug: 'diseases/gynecology/ovary/granulosa-cell-tumor' },
										{ label: '線維腫・莢膜細胞腫', slug: 'diseases/gynecology/ovary/fibroma-thecoma' },
										{ label: '成熟嚢胞性奇形腫', slug: 'diseases/gynecology/ovary/mature-teratoma' },
										{ label: '未熟奇形腫', slug: 'diseases/gynecology/ovary/immature-teratoma' },
										{ label: '無性細胞腫', slug: 'diseases/gynecology/ovary/dysgerminoma' },
										{ label: '卵黄嚢腫瘍', slug: 'diseases/gynecology/ovary/yolk-sac-tumor' },
										{ label: 'クルーケンベルグ腫瘍', slug: 'diseases/gynecology/ovary/krukenberg-tumor' },
									],
								},
							],
						},
						{
							label: '骨・関節・軟部',
							collapsed: true,
							items: [
								{
									label: '骨腫瘍',
									collapsed: true,
									items: [
										{ label: '概要', slug: 'diseases/bone' },
										{
											label: '総論',
											collapsed: false,
											items: [
												{ label: 'X線読影（辺縁解析・骨膜反応・基質）', slug: 'diseases/bone/general/xray' },
												{ label: 'CT・MRI・PETの役割', slug: 'diseases/bone/general/imaging' },
											],
										},
										{
											label: '骨形成性腫瘍',
											collapsed: false,
											items: [
												{ label: '骨肉腫', slug: 'diseases/bone/osteogenic/osteosarcoma' },
											],
										},
										{
											label: '軟骨形成性腫瘍',
											collapsed: false,
											items: [
												{ label: '軟骨肉腫', slug: 'diseases/bone/chondrogenic/chondrosarcoma' },
											],
										},
										{ label: '骨巨細胞腫', slug: 'diseases/bone/gct' },
										{
											label: '小円形細胞・その他',
											collapsed: false,
											items: [
												{ label: 'Ewing肉腫', slug: 'diseases/bone/small-round-cell/ewing' },
												{ label: '悪性リンパ腫', slug: 'diseases/bone/small-round-cell/lymphoma' },
											],
										},
									],
								},
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
