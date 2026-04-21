// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://radiologist-ryo.github.io',
	base: '/radiology-wiki',
	devToolbar: { enabled: false },
	redirects: {
		// 上皮性腫瘍（9ページ）
		'/diseases/gynecology/ovary/serous-cystadenoma/': '/obgyn/gynecology/ovary/epithelial-tumors/serous-cystadenoma/',
		'/diseases/gynecology/ovary/serous-borderline/': '/obgyn/gynecology/ovary/epithelial-tumors/serous-borderline/',
		'/diseases/gynecology/ovary/high-grade-serous-carcinoma/': '/obgyn/gynecology/ovary/epithelial-tumors/high-grade-serous-carcinoma/',
		'/diseases/gynecology/ovary/low-grade-serous-carcinoma/': '/obgyn/gynecology/ovary/epithelial-tumors/low-grade-serous-carcinoma/',
		'/diseases/gynecology/ovary/mucinous-cystadenoma/': '/obgyn/gynecology/ovary/epithelial-tumors/mucinous-cystadenoma/',
		'/diseases/gynecology/ovary/mucinous-carcinoma/': '/obgyn/gynecology/ovary/epithelial-tumors/mucinous-carcinoma/',
		'/diseases/gynecology/ovary/endometrioid-carcinoma/': '/obgyn/gynecology/ovary/epithelial-tumors/endometrioid-carcinoma/',
		'/diseases/gynecology/ovary/clear-cell-carcinoma/': '/obgyn/gynecology/ovary/epithelial-tumors/clear-cell-carcinoma/',
		'/diseases/gynecology/ovary/brenner-tumor/': '/obgyn/gynecology/ovary/epithelial-tumors/brenner-tumor/',
		// 性索間質性腫瘍（2ページ）
		'/diseases/gynecology/ovary/fibroma-thecoma/': '/obgyn/gynecology/ovary/sex-cord-stromal/fibroma-thecoma/',
		'/diseases/gynecology/ovary/granulosa-cell-tumor/': '/obgyn/gynecology/ovary/sex-cord-stromal/granulosa-cell-tumor/',
		// 胚細胞腫瘍（4ページ、mature-teromaはリネームあり）
		'/diseases/gynecology/ovary/mature-teratoma/': '/obgyn/gynecology/ovary/germ-cell/mature-cystic-teratoma/',
		'/diseases/gynecology/ovary/immature-teratoma/': '/obgyn/gynecology/ovary/germ-cell/immature-teratoma/',
		'/diseases/gynecology/ovary/dysgerminoma/': '/obgyn/gynecology/ovary/germ-cell/dysgerminoma/',
		'/diseases/gynecology/ovary/yolk-sac-tumor/': '/obgyn/gynecology/ovary/germ-cell/yolk-sac-tumor/',
		// 転移性腫瘍（1ページ）
		'/diseases/gynecology/ovary/krukenberg-tumor/': '/obgyn/gynecology/ovary/metastatic/krukenberg-tumor/',
	},
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
				Search: './src/components/overrides/Search.astro',
			},
			pagefind: {
				ranking: {
					pageLength: 0.1,
				},
			},
			pagination: false,
			sidebar: [
				{
					label: '産婦人科',
					items: [
						{ label: '__group_index__', slug: 'obgyn' },
						{
							label: '婦人科',
							collapsed: true,
							items: [
								{ label: '__group_index__', slug: 'obgyn/gynecology' },
								{
									label: '解剖・基礎',
									collapsed: true,
									items: [
										{ label: '__group_index__', slug: 'obgyn/gynecology/basics' },
										{ label: 'FIGO病期分類まとめ', slug: 'obgyn/gynecology/basics/figo-staging-summary' },
										{ label: 'JZ（junctional zone）の解剖', slug: 'obgyn/gynecology/basics/junctional-zone-anatomy' },
										{ label: '骨盤MRI撮像プロトコル', slug: 'obgyn/gynecology/basics/pelvic-mri-protocol' },
									],
								},
								{
									label: '卵巣',
									collapsed: true,
									items: [
										{ label: '__group_index__', slug: 'obgyn/gynecology/ovary' },
										{
											label: '上皮性腫瘍',
											collapsed: true,
											items: [
												{ label: '__group_index__', slug: 'obgyn/gynecology/ovary/epithelial-tumors' },
												{ label: '漿液性嚢胞腺腫', slug: 'obgyn/gynecology/ovary/epithelial-tumors/serous-cystadenoma' },
												{ label: '漿液性境界悪性腫瘍', slug: 'obgyn/gynecology/ovary/epithelial-tumors/serous-borderline' },
												{ label: '高異型度漿液性癌', slug: 'obgyn/gynecology/ovary/epithelial-tumors/high-grade-serous-carcinoma' },
												{ label: '低異型度漿液性癌', slug: 'obgyn/gynecology/ovary/epithelial-tumors/low-grade-serous-carcinoma' },
												{ label: '粘液性嚢胞腺腫', slug: 'obgyn/gynecology/ovary/epithelial-tumors/mucinous-cystadenoma' },
												{ label: '粘液性癌', slug: 'obgyn/gynecology/ovary/epithelial-tumors/mucinous-carcinoma' },
												{ label: '類内膜腫瘍', slug: 'obgyn/gynecology/ovary/epithelial-tumors/endometrioid-carcinoma' },
												{ label: '明細胞癌', slug: 'obgyn/gynecology/ovary/epithelial-tumors/clear-cell-carcinoma' },
												{ label: 'ブレンナー腫瘍', slug: 'obgyn/gynecology/ovary/epithelial-tumors/brenner-tumor' },
											],
										},
										{
											label: '性索間質性腫瘍',
											collapsed: true,
											items: [
												{ label: '__group_index__', slug: 'obgyn/gynecology/ovary/sex-cord-stromal' },
												{ label: '線維腫・莢膜細胞腫', slug: 'obgyn/gynecology/ovary/sex-cord-stromal/fibroma-thecoma' },
												{ label: '顆粒膜細胞腫', slug: 'obgyn/gynecology/ovary/sex-cord-stromal/granulosa-cell-tumor' },
												{ label: 'Sertoli-Leydig細胞腫', slug: 'obgyn/gynecology/ovary/sex-cord-stromal/sertoli-leydig' },
											],
										},
										{
											label: '胚細胞腫瘍',
											collapsed: true,
											items: [
												{ label: '__group_index__', slug: 'obgyn/gynecology/ovary/germ-cell' },
												{ label: '成熟嚢胞性奇形腫（皮様嚢腫）', slug: 'obgyn/gynecology/ovary/germ-cell/mature-cystic-teratoma' },
												{ label: '未熟奇形腫', slug: 'obgyn/gynecology/ovary/germ-cell/immature-teratoma' },
												{ label: '無性細胞腫', slug: 'obgyn/gynecology/ovary/germ-cell/dysgerminoma' },
												{ label: '卵黄嚢腫瘍', slug: 'obgyn/gynecology/ovary/germ-cell/yolk-sac-tumor' },
												{ label: 'Struma ovarii', slug: 'obgyn/gynecology/ovary/germ-cell/struma-ovarii' },
												{ label: '卵巣カルチノイド', slug: 'obgyn/gynecology/ovary/germ-cell/ovarian-carcinoid' },
											],
										},
										{
											label: '転移性腫瘍',
											collapsed: true,
											items: [
												{ label: '__group_index__', slug: 'obgyn/gynecology/ovary/metastatic' },
												{ label: 'クルーケンベルグ腫瘍', slug: 'obgyn/gynecology/ovary/metastatic/krukenberg-tumor' },
											],
										},
										{
											label: '非腫瘍性病変',
											collapsed: true,
											items: [
												{ label: '__group_index__', slug: 'obgyn/gynecology/ovary/non-neoplastic' },
												{ label: '子宮内膜症性嚢胞', slug: 'obgyn/gynecology/ovary/non-neoplastic/endometrioma' },
												{ label: '機能性嚢胞', slug: 'obgyn/gynecology/ovary/non-neoplastic/functional-cyst' },
												{ label: '卵巣捻転', slug: 'obgyn/gynecology/ovary/non-neoplastic/ovarian-torsion' },
												{ label: '多嚢胞性卵巣症候群', slug: 'obgyn/gynecology/ovary/non-neoplastic/pcos' },
												{ label: '傍卵巣嚢胞', slug: 'obgyn/gynecology/ovary/non-neoplastic/paraovarian-cyst' },
												{ label: '腹膜封入嚢胞', slug: 'obgyn/gynecology/ovary/non-neoplastic/peritoneal-inclusion-cyst' },
												{ label: '卵巣過剰刺激症候群', slug: 'obgyn/gynecology/ovary/non-neoplastic/ohss' },
												{ label: '卵巣過剰浮腫', slug: 'obgyn/gynecology/ovary/non-neoplastic/massive-ovarian-edema' },
												{ label: '卵巣遺残症候群', slug: 'obgyn/gynecology/ovary/non-neoplastic/ovarian-remnant-syndrome' },
											],
										},
									],
								},
								{
									label: '子宮体部',
									collapsed: true,
									items: [
										{ label: '__group_index__', slug: 'obgyn/gynecology/uterine-body' },
										{
											label: '腫瘍',
											collapsed: true,
											items: [
												{ label: '__group_index__', slug: 'obgyn/gynecology/uterine-body/tumors' },
												{ label: '子宮内膜癌', slug: 'obgyn/gynecology/uterine-body/tumors/endometrial-carcinoma' },
												{ label: '子宮内膜間質肉腫', slug: 'obgyn/gynecology/uterine-body/tumors/endometrial-stromal-sarcoma' },
												{ label: '平滑筋肉腫', slug: 'obgyn/gynecology/uterine-body/tumors/leiomyosarcoma' },
												{ label: '子宮癌肉腫', slug: 'obgyn/gynecology/uterine-body/tumors/uterine-carcinosarcoma' },
											],
										},
										{
											label: '良性病変',
											collapsed: true,
											items: [
												{ label: '__group_index__', slug: 'obgyn/gynecology/uterine-body/benign' },
												{ label: '子宮筋腫', slug: 'obgyn/gynecology/uterine-body/benign/leiomyoma' },
												{ label: '子宮腺筋症', slug: 'obgyn/gynecology/uterine-body/benign/adenomyosis' },
												{ label: '子宮内膜ポリープ', slug: 'obgyn/gynecology/uterine-body/benign/endometrial-polyp' },
											],
										},
										{
											label: '非腫瘍性病変',
											collapsed: true,
											items: [
												{ label: '__group_index__', slug: 'obgyn/gynecology/uterine-body/non-neoplastic' },
												{ label: '子宮内膜肥厚', slug: 'obgyn/gynecology/uterine-body/non-neoplastic/endometrial-hyperplasia' },
												{ label: '帝王切開瘢痕症候群', slug: 'obgyn/gynecology/uterine-body/non-neoplastic/cesarean-scar-niche' },
												{ label: 'Asherman症候群', slug: 'obgyn/gynecology/uterine-body/non-neoplastic/asherman-syndrome' },
												{ label: '子宮留血腫・留膿腫', slug: 'obgyn/gynecology/uterine-body/non-neoplastic/hematometra-pyometra' },
												{ label: '子宮脱', slug: 'obgyn/gynecology/uterine-body/non-neoplastic/uterine-prolapse' },
												{ label: 'IUD関連病変', slug: 'obgyn/gynecology/uterine-body/non-neoplastic/iud-related' },
												{ label: 'タモキシフェン関連内膜変化', slug: 'obgyn/gynecology/uterine-body/non-neoplastic/tamoxifen-changes' },
												{ label: '子宮内膜骨化生', slug: 'obgyn/gynecology/uterine-body/non-neoplastic/endometrial-osseous-metaplasia' },
												{ label: 'ACUM（accessory and cavitated uterine mass）', slug: 'obgyn/gynecology/uterine-body/non-neoplastic/acum' },
											],
										},
										{
											label: '先天異常',
											collapsed: true,
											items: [
												{ label: '__group_index__', slug: 'obgyn/gynecology/uterine-body/congenital' },
												{ label: 'Müllerian管異常', slug: 'obgyn/gynecology/uterine-body/congenital/mullerian-anomalies' },
											],
										},
									],
								},
								{
									label: '子宮頸部',
									collapsed: true,
									items: [
										{ label: '__group_index__', slug: 'obgyn/gynecology/cervix' },
										{
											label: '腫瘍',
											collapsed: true,
											items: [
												{ label: '__group_index__', slug: 'obgyn/gynecology/cervix/tumors' },
												{ label: '子宮頸癌', slug: 'obgyn/gynecology/cervix/tumors/cervical-carcinoma' },
												{ label: 'Gastric-type adenocarcinoma', slug: 'obgyn/gynecology/cervix/tumors/gastric-type-adenocarcinoma' },
												{ label: 'LEGH（分葉状頸管腺過形成）', slug: 'obgyn/gynecology/cervix/tumors/legh' },
											],
										},
										{
											label: '非腫瘍性病変',
											collapsed: true,
											items: [
												{ label: '__group_index__', slug: 'obgyn/gynecology/cervix/non-neoplastic' },
												{ label: '頸管ポリープ', slug: 'obgyn/gynecology/cervix/non-neoplastic/cervical-polyp' },
												{ label: 'Nabothian嚢胞', slug: 'obgyn/gynecology/cervix/non-neoplastic/nabothian-cyst' },
											],
										},
									],
								},
								{
									label: '膣・外陰',
									collapsed: true,
									items: [
										{ label: '__group_index__', slug: 'obgyn/gynecology/vagina-vulva' },
										{
											label: '腫瘍',
											collapsed: true,
											items: [
												{ label: '__group_index__', slug: 'obgyn/gynecology/vagina-vulva/tumors' },
												{ label: '膣癌', slug: 'obgyn/gynecology/vagina-vulva/tumors/vaginal-carcinoma' },
												{ label: '外陰癌', slug: 'obgyn/gynecology/vagina-vulva/tumors/vulvar-carcinoma' },
											],
										},
										{
											label: '非腫瘍性病変',
											collapsed: true,
											items: [
												{ label: '__group_index__', slug: 'obgyn/gynecology/vagina-vulva/non-neoplastic' },
												{ label: 'Bartholin腺嚢胞', slug: 'obgyn/gynecology/vagina-vulva/non-neoplastic/bartholin-cyst' },
												{ label: 'Gartner管嚢胞', slug: 'obgyn/gynecology/vagina-vulva/non-neoplastic/gartner-duct-cyst' },
											],
										},
									],
								},
								{
									label: '卵管',
									collapsed: true,
									items: [
										{ label: '__group_index__', slug: 'obgyn/gynecology/fallopian-tube' },
										{
											label: '腫瘍',
											collapsed: true,
											items: [
												{ label: '__group_index__', slug: 'obgyn/gynecology/fallopian-tube/tumors' },
												{ label: '卵管癌', slug: 'obgyn/gynecology/fallopian-tube/tumors/fallopian-tube-carcinoma' },
											],
										},
										{
											label: '非腫瘍性病変',
											collapsed: true,
											items: [
												{ label: '__group_index__', slug: 'obgyn/gynecology/fallopian-tube/non-neoplastic' },
												{ label: '卵管留水症・留膿症', slug: 'obgyn/gynecology/fallopian-tube/non-neoplastic/hydrosalpinx-pyosalpinx' },
												{ label: 'Salpingitis isthmica nodosa', slug: 'obgyn/gynecology/fallopian-tube/non-neoplastic/salpingitis-isthmica-nodosa' },
											],
										},
									],
								},
								{
									label: '感染・炎症',
									collapsed: true,
									items: [
										{ label: '__group_index__', slug: 'obgyn/gynecology/infection-inflammation' },
										{ label: '骨盤内炎症性疾患（PID）', slug: 'obgyn/gynecology/infection-inflammation/pid' },
										{ label: '卵管卵巣膿瘍（TOA）', slug: 'obgyn/gynecology/infection-inflammation/toa' },
									],
								},
								{
									label: '深部浸潤性子宮内膜症',
									collapsed: true,
									items: [
										{ label: '__group_index__', slug: 'obgyn/gynecology/deep-endometriosis' },
										{ label: '深部浸潤性子宮内膜症（DIE）', slug: 'obgyn/gynecology/deep-endometriosis/die' },
										{ label: 'Endosalpingiosis', slug: 'obgyn/gynecology/deep-endometriosis/endosalpingiosis' },
									],
								},
							],
						},
						{
							label: '産科',
							collapsed: true,
							items: [
								{ label: '__group_index__', slug: 'obgyn/obstetrics' },
								{
									label: '解剖・基礎',
									collapsed: true,
									items: [
										{ label: '__group_index__', slug: 'obgyn/obstetrics/basics' },
										{ label: '正常妊娠の画像指標', slug: 'obgyn/obstetrics/basics/normal-pregnancy-indicators' },
										{ label: '胎盤の正常発達', slug: 'obgyn/obstetrics/basics/normal-placenta-development' },
										{ label: '胎児MRI撮像プロトコル', slug: 'obgyn/obstetrics/basics/fetal-mri-protocol' },
									],
								},
								{
									label: '早期妊娠',
									collapsed: true,
									items: [
										{ label: '__group_index__', slug: 'obgyn/obstetrics/early-pregnancy' },
										{ label: '異所性妊娠', slug: 'obgyn/obstetrics/early-pregnancy/ectopic-pregnancy' },
										{ label: '帝王切開瘢痕妊娠', slug: 'obgyn/obstetrics/early-pregnancy/cesarean-scar-pregnancy' },
										{ label: 'Heterotopic pregnancy', slug: 'obgyn/obstetrics/early-pregnancy/heterotopic-pregnancy' },
										{ label: '流産・胎内死亡', slug: 'obgyn/obstetrics/early-pregnancy/miscarriage-fetal-demise' },
									],
								},
								{
									label: '胎盤・臍帯',
									collapsed: true,
									items: [
										{ label: '__group_index__', slug: 'obgyn/obstetrics/placenta-cord' },
										{ label: '前置胎盤', slug: 'obgyn/obstetrics/placenta-cord/placenta-previa' },
										{ label: '低置胎盤', slug: 'obgyn/obstetrics/placenta-cord/low-lying-placenta' },
										{ label: '癒着胎盤スペクトラム（PAS）', slug: 'obgyn/obstetrics/placenta-cord/pas' },
										{ label: '常位胎盤早期剥離', slug: 'obgyn/obstetrics/placenta-cord/placental-abruption' },
										{ label: '胎盤梗塞', slug: 'obgyn/obstetrics/placenta-cord/placental-infarction' },
										{ label: '絨毛膜下血腫', slug: 'obgyn/obstetrics/placenta-cord/subchorionic-hematoma' },
										{ label: 'Vasa previa', slug: 'obgyn/obstetrics/placenta-cord/vasa-previa' },
										{ label: '臍帯脱出・前置', slug: 'obgyn/obstetrics/placenta-cord/cord-prolapse' },
										{ label: '単一臍帯動脈', slug: 'obgyn/obstetrics/placenta-cord/single-umbilical-artery' },
										{ label: 'Chorioangioma', slug: 'obgyn/obstetrics/placenta-cord/chorioangioma' },
									],
								},
								{
									label: '絨毛性疾患',
									collapsed: true,
									items: [
										{ label: '__group_index__', slug: 'obgyn/obstetrics/gtd' },
										{ label: '全胞状奇胎', slug: 'obgyn/obstetrics/gtd/complete-mole' },
										{ label: '部分胞状奇胎', slug: 'obgyn/obstetrics/gtd/partial-mole' },
										{ label: '侵入奇胎', slug: 'obgyn/obstetrics/gtd/invasive-mole' },
										{ label: '絨毛癌', slug: 'obgyn/obstetrics/gtd/choriocarcinoma' },
									],
								},
								{
									label: '妊娠中の子宮・頸部合併症',
									collapsed: true,
									items: [
										{ label: '__group_index__', slug: 'obgyn/obstetrics/uterine-cervical-complications' },
										{ label: '頸管無力症／cerclage', slug: 'obgyn/obstetrics/uterine-cervical-complications/cervical-incompetence-cerclage' },
										{ label: '妊娠中の子宮筋腫', slug: 'obgyn/obstetrics/uterine-cervical-complications/fibroid-in-pregnancy' },
										{ label: '子宮破裂', slug: 'obgyn/obstetrics/uterine-cervical-complications/uterine-rupture' },
									],
								},
								{
									label: '羊水・多胎',
									collapsed: true,
									items: [
										{ label: '__group_index__', slug: 'obgyn/obstetrics/amniotic-multiple' },
										{ label: '羊水過多／過少', slug: 'obgyn/obstetrics/amniotic-multiple/polyhydramnios-oligohydramnios' },
										{ label: '双胎間輸血症候群（TTTS）', slug: 'obgyn/obstetrics/amniotic-multiple/ttts' },
										{ label: 'TRAP sequence', slug: 'obgyn/obstetrics/amniotic-multiple/trap-sequence' },
									],
								},
								{
									label: '胎児異常',
									collapsed: true,
									items: [
										{ label: '__group_index__', slug: 'obgyn/obstetrics/fetal-anomalies' },
										{
											label: '中枢神経',
											collapsed: true,
											items: [
												{ label: '__group_index__', slug: 'obgyn/obstetrics/fetal-anomalies/cns' },
												{ label: '脳室拡大・水頭症', slug: 'obgyn/obstetrics/fetal-anomalies/cns/ventriculomegaly-hydrocephalus' },
												{ label: '二分脊椎・脊髄髄膜瘤', slug: 'obgyn/obstetrics/fetal-anomalies/cns/spina-bifida' },
												{ label: 'Chiari II奇形', slug: 'obgyn/obstetrics/fetal-anomalies/cns/chiari-ii' },
												{ label: 'Dandy-Walker複合', slug: 'obgyn/obstetrics/fetal-anomalies/cns/dandy-walker' },
												{ label: '脳梁欠損', slug: 'obgyn/obstetrics/fetal-anomalies/cns/corpus-callosum-agenesis' },
											],
										},
										{
											label: '胸部',
											collapsed: true,
											items: [
												{ label: '__group_index__', slug: 'obgyn/obstetrics/fetal-anomalies/thoracic' },
												{ label: '先天性横隔膜ヘルニア（CDH）', slug: 'obgyn/obstetrics/fetal-anomalies/thoracic/cdh' },
												{ label: 'CPAM（先天性肺気道奇形）', slug: 'obgyn/obstetrics/fetal-anomalies/thoracic/cpam' },
												{ label: '肺分画症（BPS）', slug: 'obgyn/obstetrics/fetal-anomalies/thoracic/bps' },
												{ label: '先天性高位気道閉塞（CHAOS）', slug: 'obgyn/obstetrics/fetal-anomalies/thoracic/chaos' },
											],
										},
										{
											label: '腹部',
											collapsed: true,
											items: [
												{ label: '__group_index__', slug: 'obgyn/obstetrics/fetal-anomalies/abdominal' },
												{ label: '臍帯ヘルニア', slug: 'obgyn/obstetrics/fetal-anomalies/abdominal/omphalocele' },
												{ label: '腹壁破裂', slug: 'obgyn/obstetrics/fetal-anomalies/abdominal/gastroschisis' },
												{ label: '十二指腸閉鎖', slug: 'obgyn/obstetrics/fetal-anomalies/abdominal/duodenal-atresia' },
												{ label: '胎便性腹膜炎', slug: 'obgyn/obstetrics/fetal-anomalies/abdominal/meconium-peritonitis' },
												{ label: '仙尾部奇形腫', slug: 'obgyn/obstetrics/fetal-anomalies/abdominal/sacrococcygeal-teratoma' },
											],
										},
										{
											label: '泌尿器',
											collapsed: true,
											items: [
												{ label: '__group_index__', slug: 'obgyn/obstetrics/fetal-anomalies/urinary' },
												{ label: '水腎症', slug: 'obgyn/obstetrics/fetal-anomalies/urinary/hydronephrosis' },
												{ label: '多嚢胞性異形成腎（MCDK）', slug: 'obgyn/obstetrics/fetal-anomalies/urinary/mcdk' },
												{ label: '常染色体劣性多発性嚢胞腎（ARPKD）', slug: 'obgyn/obstetrics/fetal-anomalies/urinary/arpkd' },
												{ label: '後部尿道弁（PUV）', slug: 'obgyn/obstetrics/fetal-anomalies/urinary/puv' },
											],
										},
										{
											label: 'その他',
											collapsed: true,
											items: [
												{ label: '__group_index__', slug: 'obgyn/obstetrics/fetal-anomalies/other' },
												{ label: '頸部リンパ管腫', slug: 'obgyn/obstetrics/fetal-anomalies/other/cystic-hygroma' },
												{ label: '胎児水腫', slug: 'obgyn/obstetrics/fetal-anomalies/other/hydrops-fetalis' },
												{ label: '胎児発育不全（FGR）', slug: 'obgyn/obstetrics/fetal-anomalies/other/fgr' },
											],
										},
									],
								},
								{
									label: '産褥期',
									collapsed: true,
									items: [
										{ label: '__group_index__', slug: 'obgyn/obstetrics/postpartum' },
										{ label: 'RPOC（胎盤遺残）', slug: 'obgyn/obstetrics/postpartum/rpoc' },
										{ label: '産褥期子宮AVM／EMV', slug: 'obgyn/obstetrics/postpartum/postpartum-avm-emv' },
										{ label: '子宮内膜炎', slug: 'obgyn/obstetrics/postpartum/endometritis' },
										{ label: '卵巣静脈血栓症', slug: 'obgyn/obstetrics/postpartum/ovarian-vein-thrombosis' },
									],
								},
							],
						},
					],
				},
				{
					label: '骨・関節・軟部',
					collapsed: true,
					items: [
						{ label: '__group_index__', slug: 'diseases/musculoskeletal' },
						{
							label: '骨腫瘍',
							collapsed: true,
							items: [
								{ label: '__group_index__', slug: 'diseases/bone' },
								{
									label: '総論',
									collapsed: true,
									items: [
										{ label: '__group_index__', slug: 'diseases/bone/general' },
										{ label: 'WHO分類（第5版）', slug: 'diseases/bone/general/who-classification' },
										{ label: 'X線読影（辺縁解析・骨膜反応・基質）', slug: 'diseases/bone/general/xray' },
										{ label: 'CT・MRI・PETの役割', slug: 'diseases/bone/general/imaging' },
									],
								},
								{
									label: '骨形成性腫瘍',
									collapsed: true,
									items: [
										{ label: '__group_index__', slug: 'diseases/bone/osteogenic' },
										{ label: '骨肉腫', slug: 'diseases/bone/osteogenic/osteosarcoma' },
									],
								},
								{
									label: '軟骨形成性腫瘍',
									collapsed: true,
									items: [
										{ label: '__group_index__', slug: 'diseases/bone/chondrogenic' },
										{ label: '軟骨肉腫', slug: 'diseases/bone/chondrogenic/chondrosarcoma' },
									],
								},
								{ label: '骨巨細胞腫', slug: 'diseases/bone/gct' },
								{
									label: '小円形細胞・その他',
									collapsed: true,
									items: [
										{ label: '__group_index__', slug: 'diseases/bone/small-round-cell' },
										{ label: 'Ewing肉腫', slug: 'diseases/bone/small-round-cell/ewing' },
										{ label: '悪性リンパ腫', slug: 'diseases/bone/small-round-cell/lymphoma' },
									],
								},
							],
						},
						{
							label: '軟部腫瘍',
							collapsed: true,
							items: [
								{ label: '__group_index__', slug: 'diseases/soft-tissue' },
								{
									label: '脂肪性腫瘍',
									collapsed: true,
									items: [
										{ label: '__group_index__', slug: 'diseases/soft-tissue/adipocytic' },
										{ label: '高分化型脂肪肉腫', slug: 'diseases/soft-tissue/adipocytic/well-differentiated-liposarcoma' },
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
