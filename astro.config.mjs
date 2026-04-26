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
					"label": "中枢神経",
					"collapsed": true,
					"items": [
						{
							"label": "__group_index__",
							"slug": "diseases/brain"
						},
						{
							"label": "脳腫瘍",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/brain/brain-tumor"
								},
								{
									"label": "神経膠腫総論",
									"slug": "diseases/brain/brain-tumor/glioma-general"
								},
								{
									"label": "びまん性星細胞腫/乏突起膠腫（IDH変異型）",
									"slug": "diseases/brain/brain-tumor/diffuse-glioma-idh-mutant"
								},
								{
									"label": "膠芽腫（IDH野生型）",
									"slug": "diseases/brain/brain-tumor/glioblastoma"
								},
								{
									"label": "上衣腫",
									"slug": "diseases/brain/brain-tumor/ependymoma"
								},
								{
									"label": "脈絡叢腫瘍",
									"slug": "diseases/brain/brain-tumor/choroid-plexus-tumor"
								},
								{
									"label": "髄芽腫",
									"slug": "diseases/brain/brain-tumor/medulloblastoma"
								},
								{
									"label": "胚細胞性腫瘍（胚腫・奇形腫）",
									"slug": "diseases/brain/brain-tumor/cns-germ-cell-tumor"
								},
								{
									"label": "中枢神経系原発悪性リンパ腫（PCNSL）",
									"slug": "diseases/brain/brain-tumor/pcnsl"
								},
								{
									"label": "髄膜腫",
									"slug": "diseases/brain/brain-tumor/meningioma"
								},
								{
									"label": "神経鞘腫(前庭神経鞘腫など)",
									"slug": "diseases/brain/brain-tumor/schwannoma"
								},
								{
									"label": "下垂体腺腫",
									"slug": "diseases/brain/brain-tumor/pituitary-adenoma"
								},
								{
									"label": "頭蓋咽頭腫",
									"slug": "diseases/brain/brain-tumor/craniopharyngioma"
								},
								{
									"label": "血管芽腫",
									"slug": "diseases/brain/brain-tumor/hemangioblastoma"
								},
								{
									"label": "転移性脳腫瘍",
									"slug": "diseases/brain/brain-tumor/brain-metastasis"
								},
								{
									"label": "類上皮腫・皮様嚢腫",
									"slug": "diseases/brain/brain-tumor/epidermoid-dermoid"
								},
								{
									"label": "コロイド嚢胞",
									"slug": "diseases/brain/brain-tumor/colloid-cyst"
								}
							]
						},
						{
							"label": "脳血管障害",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/brain/cerebrovascular"
								},
								{
									"label": "脳梗塞総論",
									"slug": "diseases/brain/cerebrovascular/cerebral-infarction-general"
								},
								{
									"label": "アテローム血栓性脳梗塞",
									"slug": "diseases/brain/cerebrovascular/atherothrombotic-infarction"
								},
								{
									"label": "心原性脳塞栓症",
									"slug": "diseases/brain/cerebrovascular/cardioembolic-infarction"
								},
								{
									"label": "ラクナ梗塞",
									"slug": "diseases/brain/cerebrovascular/lacunar-infarction"
								},
								{
									"label": "分水嶺梗塞",
									"slug": "diseases/brain/cerebrovascular/watershed-infarction"
								},
								{
									"label": "脳静脈洞血栓症",
									"slug": "diseases/brain/cerebrovascular/cerebral-venous-thrombosis"
								},
								{
									"label": "脳出血（高血圧性）",
									"slug": "diseases/brain/cerebrovascular/hypertensive-hemorrhage"
								},
								{
									"label": "くも膜下出血",
									"slug": "diseases/brain/cerebrovascular/subarachnoid-hemorrhage"
								},
								{
									"label": "脳動脈瘤",
									"slug": "diseases/brain/cerebrovascular/cerebral-aneurysm"
								},
								{
									"label": "脳動静脈奇形（AVM）",
									"slug": "diseases/brain/cerebrovascular/brain-avm"
								},
								{
									"label": "硬膜動静脈瘻（dAVF）",
									"slug": "diseases/brain/cerebrovascular/dural-avf"
								},
								{
									"label": "海綿状血管腫",
									"slug": "diseases/brain/cerebrovascular/cavernous-malformation"
								},
								{
									"label": "発達性静脈奇形（DVA）",
									"slug": "diseases/brain/cerebrovascular/dva"
								},
								{
									"label": "もやもや病",
									"slug": "diseases/brain/cerebrovascular/moyamoya"
								},
								{
									"label": "可逆性脳血管攣縮症候群（RCVS）",
									"slug": "diseases/brain/cerebrovascular/rcvs"
								},
								{
									"label": "PRES（可逆性後頭葉白質脳症）",
									"slug": "diseases/brain/cerebrovascular/pres"
								}
							]
						},
						{
							"label": "脱髄・炎症性疾患",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/brain/demyelinating"
								},
								{
									"label": "多発性硬化症（MS）",
									"slug": "diseases/brain/demyelinating/multiple-sclerosis"
								},
								{
									"label": "視神経脊髄炎スペクトラム障害（NMOSD）",
									"slug": "diseases/brain/demyelinating/nmosd"
								},
								{
									"label": "MOG抗体関連疾患",
									"slug": "diseases/brain/demyelinating/mogad"
								},
								{
									"label": "急性散在性脳脊髄炎（ADEM）",
									"slug": "diseases/brain/demyelinating/adem"
								},
								{
									"label": "進行性多巣性白質脳症（PML）",
									"slug": "diseases/brain/demyelinating/pml"
								},
								{
									"label": "神経Behçet病",
									"slug": "diseases/brain/demyelinating/neuro-behcet"
								},
								{
									"label": "神経サルコイドーシス",
									"slug": "diseases/brain/demyelinating/neurosarcoidosis"
								}
							]
						},
						{
							"label": "変性・認知症",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/brain/degenerative"
								},
								{
									"label": "Alzheimer病",
									"slug": "diseases/brain/degenerative/alzheimer"
								},
								{
									"label": "レビー小体型認知症",
									"slug": "diseases/brain/degenerative/dementia-with-lewy-bodies"
								},
								{
									"label": "前頭側頭葉変性症",
									"slug": "diseases/brain/degenerative/ftld"
								},
								{
									"label": "血管性認知症",
									"slug": "diseases/brain/degenerative/vascular-dementia"
								},
								{
									"label": "正常圧水頭症",
									"slug": "diseases/brain/degenerative/nph"
								},
								{
									"label": "Parkinson病",
									"slug": "diseases/brain/degenerative/parkinson-disease"
								},
								{
									"label": "多系統萎縮症（MSA）",
									"slug": "diseases/brain/degenerative/msa"
								},
								{
									"label": "進行性核上性麻痺（PSP）",
									"slug": "diseases/brain/degenerative/psp"
								},
								{
									"label": "Huntington病",
									"slug": "diseases/brain/degenerative/huntington-disease"
								},
								{
									"label": "筋萎縮性側索硬化症（ALS）",
									"slug": "diseases/brain/degenerative/als"
								}
							]
						},
						{
							"label": "感染症",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/brain/infection"
								},
								{
									"label": "細菌性髄膜炎",
									"slug": "diseases/brain/infection/bacterial-meningitis"
								},
								{
									"label": "ウイルス性脳炎（単純ヘルペス脳炎など）",
									"slug": "diseases/brain/infection/viral-encephalitis"
								},
								{
									"label": "結核性髄膜炎",
									"slug": "diseases/brain/infection/tb-meningitis"
								},
								{
									"label": "真菌感染",
									"slug": "diseases/brain/infection/fungal-infection"
								},
								{
									"label": "脳膿瘍",
									"slug": "diseases/brain/infection/brain-abscess"
								},
								{
									"label": "神経梅毒",
									"slug": "diseases/brain/infection/neurosyphilis"
								},
								{
									"label": "HIV関連脳症",
									"slug": "diseases/brain/infection/hiv-encephalopathy"
								},
								{
									"label": "Creutzfeldt-Jakob病",
									"slug": "diseases/brain/infection/cjd"
								}
							]
						},
						{
							"label": "外傷・その他",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/brain/trauma-other"
								},
								{
									"label": "急性硬膜外血腫",
									"slug": "diseases/brain/trauma-other/acute-epidural-hematoma"
								},
								{
									"label": "急性硬膜下血腫",
									"slug": "diseases/brain/trauma-other/acute-subdural-hematoma"
								},
								{
									"label": "慢性硬膜下血腫",
									"slug": "diseases/brain/trauma-other/chronic-subdural-hematoma"
								},
								{
									"label": "外傷性くも膜下出血",
									"slug": "diseases/brain/trauma-other/traumatic-sah"
								},
								{
									"label": "びまん性軸索損傷",
									"slug": "diseases/brain/trauma-other/dai"
								},
								{
									"label": "脳挫傷",
									"slug": "diseases/brain/trauma-other/cerebral-contusion"
								}
							]
						},
						{
							"label": "先天奇形",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/brain/congenital"
								},
								{
									"label": "Chiari奇形",
									"slug": "diseases/brain/congenital/chiari-malformation"
								},
								{
									"label": "Dandy-Walker奇形",
									"slug": "diseases/brain/congenital/dandy-walker"
								},
								{
									"label": "脳梁欠損",
									"slug": "diseases/brain/congenital/corpus-callosum-agenesis"
								},
								{
									"label": "全前脳胞症",
									"slug": "diseases/brain/congenital/holoprosencephaly"
								},
								{
									"label": "皮質形成異常",
									"slug": "diseases/brain/congenital/cortical-malformation"
								},
								{
									"label": "結節性硬化症",
									"slug": "diseases/brain/congenital/tuberous-sclerosis"
								},
								{
									"label": "神経線維腫症1型・2型",
									"slug": "diseases/brain/congenital/nf1-nf2"
								},
								{
									"label": "Sturge-Weber症候群",
									"slug": "diseases/brain/congenital/sturge-weber"
								},
								{
									"label": "von Hippel-Lindau病",
									"slug": "diseases/brain/congenital/vhl"
								}
							]
						}
					]
				},
				{
					"label": "頭頸部",
					"collapsed": true,
					"items": [
						{
							"label": "__group_index__",
							"slug": "diseases/head-neck"
						},
						{
							"label": "眼窩",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/head-neck/orbit"
								},
								{
									"label": "眼窩蜂窩織炎",
									"slug": "diseases/head-neck/orbit/orbital-cellulitis"
								},
								{
									"label": "甲状腺眼症",
									"slug": "diseases/head-neck/orbit/thyroid-eye-disease"
								},
								{
									"label": "IgG4関連眼窩疾患",
									"slug": "diseases/head-neck/orbit/igg4-orbital-disease"
								},
								{
									"label": "眼窩内海綿状血管奇形",
									"slug": "diseases/head-neck/orbit/orbital-cavernous-malformation"
								},
								{
									"label": "視神経膠腫",
									"slug": "diseases/head-neck/orbit/optic-nerve-glioma"
								},
								{
									"label": "視神経鞘髄膜腫",
									"slug": "diseases/head-neck/orbit/optic-nerve-sheath-meningioma"
								},
								{
									"label": "眼窩リンパ腫",
									"slug": "diseases/head-neck/orbit/orbital-lymphoma"
								},
								{
									"label": "眼窩転移",
									"slug": "diseases/head-neck/orbit/orbital-metastasis"
								}
							]
						},
						{
							"label": "副鼻腔・鼻腔",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/head-neck/sinonasal"
								},
								{
									"label": "急性/慢性副鼻腔炎",
									"slug": "diseases/head-neck/sinonasal/sinusitis"
								},
								{
									"label": "真菌性副鼻腔炎",
									"slug": "diseases/head-neck/sinonasal/fungal-sinusitis"
								},
								{
									"label": "副鼻腔粘液嚢胞",
									"slug": "diseases/head-neck/sinonasal/mucocele"
								},
								{
									"label": "反転性乳頭腫",
									"slug": "diseases/head-neck/sinonasal/inverted-papilloma"
								},
								{
									"label": "嗅神経芽細胞腫",
									"slug": "diseases/head-neck/sinonasal/esthesioneuroblastoma"
								},
								{
									"label": "上咽頭癌",
									"slug": "diseases/head-neck/sinonasal/nasopharyngeal-carcinoma"
								},
								{
									"label": "鼻副鼻腔扁平上皮癌",
									"slug": "diseases/head-neck/sinonasal/sinonasal-scc"
								},
								{
									"label": "鼻NK/T細胞リンパ腫",
									"slug": "diseases/head-neck/sinonasal/nk-t-lymphoma"
								}
							]
						},
						{
							"label": "耳・側頭骨",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/head-neck/temporal-bone"
								},
								{
									"label": "中耳炎・乳突蜂巣炎",
									"slug": "diseases/head-neck/temporal-bone/otitis-mastoiditis"
								},
								{
									"label": "真珠腫",
									"slug": "diseases/head-neck/temporal-bone/cholesteatoma"
								},
								{
									"label": "顔面神経鞘腫",
									"slug": "diseases/head-neck/temporal-bone/facial-nerve-schwannoma"
								},
								{
									"label": "傍神経節腫（glomus tumor）",
									"slug": "diseases/head-neck/temporal-bone/glomus-tumor"
								},
								{
									"label": "側頭骨骨折",
									"slug": "diseases/head-neck/temporal-bone/temporal-bone-fracture"
								}
							]
						},
						{
							"label": "咽頭・喉頭",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/head-neck/pharynx-larynx"
								},
								{
									"label": "中咽頭癌",
									"slug": "diseases/head-neck/pharynx-larynx/oropharyngeal-carcinoma"
								},
								{
									"label": "下咽頭癌",
									"slug": "diseases/head-neck/pharynx-larynx/hypopharyngeal-carcinoma"
								},
								{
									"label": "喉頭癌",
									"slug": "diseases/head-neck/pharynx-larynx/laryngeal-carcinoma"
								},
								{
									"label": "扁桃周囲膿瘍",
									"slug": "diseases/head-neck/pharynx-larynx/peritonsillar-abscess"
								},
								{
									"label": "咽後膿瘍",
									"slug": "diseases/head-neck/pharynx-larynx/retropharyngeal-abscess"
								}
							]
						},
						{
							"label": "口腔・顎",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/head-neck/oral-mandible"
								},
								{
									"label": "舌癌",
									"slug": "diseases/head-neck/oral-mandible/tongue-cancer"
								},
								{
									"label": "口腔底癌",
									"slug": "diseases/head-neck/oral-mandible/floor-of-mouth-cancer"
								},
								{
									"label": "顎骨骨髄炎",
									"slug": "diseases/head-neck/oral-mandible/osteomyelitis-of-jaw"
								},
								{
									"label": "歯原性嚢胞（含歯性嚢胞など）",
									"slug": "diseases/head-neck/oral-mandible/odontogenic-cyst"
								},
								{
									"label": "エナメル上皮腫",
									"slug": "diseases/head-neck/oral-mandible/ameloblastoma"
								}
							]
						},
						{
							"label": "唾液腺",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/head-neck/salivary"
								},
								{
									"label": "多形腺腫",
									"slug": "diseases/head-neck/salivary/pleomorphic-adenoma"
								},
								{
									"label": "Warthin腫瘍",
									"slug": "diseases/head-neck/salivary/warthin-tumor"
								},
								{
									"label": "粘表皮癌",
									"slug": "diseases/head-neck/salivary/mucoepidermoid-carcinoma"
								},
								{
									"label": "腺様嚢胞癌",
									"slug": "diseases/head-neck/salivary/adenoid-cystic-carcinoma"
								},
								{
									"label": "IgG4関連唾液腺炎",
									"slug": "diseases/head-neck/salivary/igg4-sialadenitis"
								},
								{
									"label": "Sjögren症候群",
									"slug": "diseases/head-neck/salivary/sjogren-syndrome"
								},
								{
									"label": "唾石症",
									"slug": "diseases/head-neck/salivary/sialolithiasis"
								}
							]
						},
						{
							"label": "甲状腺・副甲状腺",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/head-neck/thyroid-parathyroid"
								},
								{
									"label": "乳頭癌",
									"slug": "diseases/head-neck/thyroid-parathyroid/papillary-thyroid-carcinoma"
								},
								{
									"label": "濾胞癌",
									"slug": "diseases/head-neck/thyroid-parathyroid/follicular-thyroid-carcinoma"
								},
								{
									"label": "髄様癌",
									"slug": "diseases/head-neck/thyroid-parathyroid/medullary-thyroid-carcinoma"
								},
								{
									"label": "未分化癌",
									"slug": "diseases/head-neck/thyroid-parathyroid/anaplastic-thyroid-carcinoma"
								},
								{
									"label": "甲状腺リンパ腫",
									"slug": "diseases/head-neck/thyroid-parathyroid/thyroid-lymphoma"
								},
								{
									"label": "橋本病・Basedow病",
									"slug": "diseases/head-neck/thyroid-parathyroid/hashimoto-graves"
								},
								{
									"label": "副甲状腺腺腫",
									"slug": "diseases/head-neck/thyroid-parathyroid/parathyroid-adenoma"
								}
							]
						},
						{
							"label": "頸部リンパ節・その他",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/head-neck/neck-other"
								},
								{
									"label": "頸部リンパ節転移",
									"slug": "diseases/head-neck/neck-other/cervical-lymph-node-metastasis"
								},
								{
									"label": "悪性リンパ腫（頸部）",
									"slug": "diseases/head-neck/neck-other/cervical-lymphoma"
								},
								{
									"label": "鰓裂嚢胞",
									"slug": "diseases/head-neck/neck-other/branchial-cleft-cyst"
								},
								{
									"label": "甲状舌管嚢胞",
									"slug": "diseases/head-neck/neck-other/thyroglossal-duct-cyst"
								},
								{
									"label": "リンパ管奇形",
									"slug": "diseases/head-neck/neck-other/lymphatic-malformation"
								},
								{
									"label": "頸動脈小体腫瘍",
									"slug": "diseases/head-neck/neck-other/carotid-body-tumor"
								}
							]
						}
					]
				},
				{
					"label": "脊椎・脊髄",
					"collapsed": true,
					"items": [
						{
							"label": "__group_index__",
							"slug": "diseases/spine"
						},
						{
							"label": "変性疾患",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/spine/degenerative"
								},
								{
									"label": "椎間板変性",
									"slug": "diseases/spine/degenerative/disc-degeneration"
								},
								{
									"label": "椎間板ヘルニア",
									"slug": "diseases/spine/degenerative/disc-herniation"
								},
								{
									"label": "脊柱管狭窄症",
									"slug": "diseases/spine/degenerative/spinal-canal-stenosis"
								},
								{
									"label": "変形性脊椎症",
									"slug": "diseases/spine/degenerative/spondylosis"
								},
								{
									"label": "椎間関節症",
									"slug": "diseases/spine/degenerative/facet-arthropathy"
								},
								{
									"label": "終板変化（Modic分類）",
									"slug": "diseases/spine/degenerative/modic-changes"
								}
							]
						},
						{
							"label": "外傷",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/spine/trauma"
								},
								{
									"label": "椎体圧迫骨折（骨粗鬆症性）",
									"slug": "diseases/spine/trauma/osteoporotic-vertebral-fracture"
								},
								{
									"label": "外傷性椎体骨折",
									"slug": "diseases/spine/trauma/traumatic-vertebral-fracture"
								},
								{
									"label": "椎間板損傷",
									"slug": "diseases/spine/trauma/disc-injury"
								},
								{
									"label": "脊髄損傷",
									"slug": "diseases/spine/trauma/spinal-cord-injury"
								}
							]
						},
						{
							"label": "腫瘍",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/spine/tumor"
								},
								{
									"label": "脊髄内腫瘍総論",
									"slug": "diseases/spine/tumor/intramedullary-tumor-general"
								},
								{
									"label": "上衣腫（脊髄）",
									"slug": "diseases/spine/tumor/spinal-ependymoma"
								},
								{
									"label": "星細胞腫（脊髄）",
									"slug": "diseases/spine/tumor/spinal-astrocytoma"
								},
								{
									"label": "血管芽腫（脊髄）",
									"slug": "diseases/spine/tumor/spinal-hemangioblastoma"
								},
								{
									"label": "髄外硬膜内腫瘍（髄膜腫・神経鞘腫）",
									"slug": "diseases/spine/tumor/intradural-extramedullary-tumor"
								},
								{
									"label": "硬膜外腫瘍",
									"slug": "diseases/spine/tumor/epidural-tumor"
								},
								{
									"label": "椎体転移",
									"slug": "diseases/spine/tumor/vertebral-metastasis"
								},
								{
									"label": "多発性骨髄腫（脊椎）",
									"slug": "diseases/spine/tumor/spinal-myeloma"
								},
								{
									"label": "脊索腫",
									"slug": "diseases/spine/tumor/chordoma"
								},
								{
									"label": "骨巨細胞腫（脊椎）",
									"slug": "diseases/spine/tumor/spinal-gct"
								},
								{
									"label": "血管腫（椎体）",
									"slug": "diseases/spine/tumor/vertebral-hemangioma"
								},
								{
									"label": "類骨骨腫（脊椎）",
									"slug": "diseases/spine/tumor/spinal-osteoid-osteoma"
								}
							]
						},
						{
							"label": "炎症・感染",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/spine/inflammation-infection"
								},
								{
									"label": "化膿性脊椎炎",
									"slug": "diseases/spine/inflammation-infection/pyogenic-spondylitis"
								},
								{
									"label": "結核性脊椎炎（Pott病）",
									"slug": "diseases/spine/inflammation-infection/tb-spondylitis"
								},
								{
									"label": "強直性脊椎炎",
									"slug": "diseases/spine/inflammation-infection/ankylosing-spondylitis"
								},
								{
									"label": "リウマチ性頸椎病変",
									"slug": "diseases/spine/inflammation-infection/rheumatoid-cervical"
								},
								{
									"label": "透析関連脊椎症",
									"slug": "diseases/spine/inflammation-infection/dialysis-spondyloarthropathy"
								}
							]
						},
						{
							"label": "血管障害",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/spine/vascular"
								},
								{
									"label": "脊髄梗塞",
									"slug": "diseases/spine/vascular/spinal-cord-infarction"
								},
								{
									"label": "脊髄動静脈奇形",
									"slug": "diseases/spine/vascular/spinal-avm"
								},
								{
									"label": "硬膜動静脈瘻（脊髄）",
									"slug": "diseases/spine/vascular/spinal-davf"
								},
								{
									"label": "脊髄出血",
									"slug": "diseases/spine/vascular/spinal-hemorrhage"
								}
							]
						},
						{
							"label": "脱髄・その他",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/spine/demyelinating-other"
								},
								{
									"label": "多発性硬化症（脊髄）",
									"slug": "diseases/spine/demyelinating-other/spinal-ms"
								},
								{
									"label": "視神経脊髄炎（脊髄）",
									"slug": "diseases/spine/demyelinating-other/spinal-nmo"
								},
								{
									"label": "急性横断性脊髄炎",
									"slug": "diseases/spine/demyelinating-other/acute-transverse-myelitis"
								},
								{
									"label": "亜急性連合性脊髄変性症",
									"slug": "diseases/spine/demyelinating-other/subacute-combined-degeneration"
								},
								{
									"label": "脊髄空洞症",
									"slug": "diseases/spine/demyelinating-other/syringomyelia"
								},
								{
									"label": "繋留脊髄",
									"slug": "diseases/spine/demyelinating-other/tethered-cord"
								},
								{
									"label": "脊髄髄膜瘤",
									"slug": "diseases/spine/demyelinating-other/myelomeningocele"
								}
							]
						}
					]
				},
				{
					"label": "骨・関節・軟部",
					"collapsed": true,
					"items": [
						{
							"label": "__group_index__",
							"slug": "diseases/musculoskeletal"
						},
						{
							"label": "骨腫瘍",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/musculoskeletal/bone"
								},
								{
									"label": "総論",
									"collapsed": true,
									"items": [
										{
											"label": "__group_index__",
											"slug": "diseases/musculoskeletal/bone/general"
										},
										{
											"label": "WHO分類（第5版）",
											"slug": "diseases/musculoskeletal/bone/general/who-classification"
										},
										{
											"label": "X線読影（辺縁解析・骨膜反応・基質）",
											"slug": "diseases/musculoskeletal/bone/general/xray"
										},
										{
											"label": "CT・MRI・PETの役割",
											"slug": "diseases/musculoskeletal/bone/general/imaging"
										},
										{
											"label": "良性骨腫瘍総論（Don't touch lesion）",
											"slug": "diseases/musculoskeletal/bone/general/benign-bone-overview"
										}
									]
								},
								{
									"label": "軟骨形成性腫瘍",
									"collapsed": true,
									"items": [
										{
											"label": "__group_index__",
											"slug": "diseases/musculoskeletal/bone/chondrogenic"
										},
										{
											"label": "内軟骨腫",
											"slug": "diseases/musculoskeletal/bone/chondrogenic/enchondroma"
										},
										{
											"label": "骨軟骨腫",
											"slug": "diseases/musculoskeletal/bone/chondrogenic/osteochondroma"
										},
										{
											"label": "軟骨芽細胞腫",
											"slug": "diseases/musculoskeletal/bone/chondrogenic/chondroblastoma"
										},
										{
											"label": "軟骨粘液線維腫",
											"slug": "diseases/musculoskeletal/bone/chondrogenic/chondromyxoid-fibroma"
										},
										{
											"label": "爪下外骨腫",
											"slug": "diseases/musculoskeletal/bone/chondrogenic/subungual-exostosis"
										},
										{
											"label": "傍骨性骨軟骨異形増生（BPOP）",
											"slug": "diseases/musculoskeletal/bone/chondrogenic/bpop"
										},
										{
											"label": "骨膜性軟骨腫",
											"slug": "diseases/musculoskeletal/bone/chondrogenic/periosteal-chondroma"
										},
										{
											"label": "滑膜軟骨腫症",
											"slug": "diseases/musculoskeletal/bone/chondrogenic/synovial-chondromatosis"
										},
										{
											"label": "軟骨肉腫",
											"slug": "diseases/musculoskeletal/bone/chondrogenic/chondrosarcoma"
										},
										{
											"label": "淡明細胞性軟骨肉腫",
											"slug": "diseases/musculoskeletal/bone/chondrogenic/clear-cell-chondrosarcoma"
										}
									]
								},
								{
									"label": "骨形成性腫瘍",
									"collapsed": true,
									"items": [
										{
											"label": "__group_index__",
											"slug": "diseases/musculoskeletal/bone/osteogenic"
										},
										{
											"label": "類骨骨腫",
											"slug": "diseases/musculoskeletal/bone/osteogenic/osteoid-osteoma"
										},
										{
											"label": "骨芽細胞腫",
											"slug": "diseases/musculoskeletal/bone/osteogenic/osteoblastoma"
										},
										{
											"label": "骨肉腫",
											"slug": "diseases/musculoskeletal/bone/osteogenic/osteosarcoma"
										},
										{
											"label": "傍骨性骨肉腫",
											"slug": "diseases/musculoskeletal/bone/osteogenic/parosteal-osteosarcoma"
										},
										{
											"label": "骨膜性骨肉腫",
											"slug": "diseases/musculoskeletal/bone/osteogenic/periosteal-osteosarcoma"
										}
									]
								},
								{
									"label": "線維形成性腫瘍",
									"collapsed": true,
									"items": [
										{
											"label": "__group_index__",
											"slug": "diseases/musculoskeletal/bone/fibrogenic"
										},
										{
											"label": "線維性骨異形成",
											"slug": "diseases/musculoskeletal/bone/fibrogenic/fibrous-dysplasia"
										},
										{
											"label": "骨線維性異形成",
											"slug": "diseases/musculoskeletal/bone/fibrogenic/osteofibrous-dysplasia"
										},
										{
											"label": "非骨化性線維腫",
											"slug": "diseases/musculoskeletal/bone/fibrogenic/non-ossifying-fibroma"
										}
									]
								},
								{
									"label": "血管性腫瘍",
									"collapsed": true,
									"items": [
										{
											"label": "__group_index__",
											"slug": "diseases/musculoskeletal/bone/vascular"
										},
										{
											"label": "血管腫（骨）",
											"slug": "diseases/musculoskeletal/bone/vascular/bone-hemangioma"
										},
										{
											"label": "類上皮血管腫（骨）",
											"slug": "diseases/musculoskeletal/bone/vascular/bone-epithelioid-hemangioma"
										}
									]
								},
								{
									"label": "破骨細胞性巨細胞豊富性腫瘍",
									"collapsed": true,
									"items": [
										{
											"label": "__group_index__",
											"slug": "diseases/musculoskeletal/bone/osteoclastic-giant-cell-rich"
										},
										{
											"label": "骨巨細胞腫",
											"slug": "diseases/musculoskeletal/bone/osteoclastic-giant-cell-rich/gct"
										},
										{
											"label": "動脈瘤様骨嚢腫",
											"slug": "diseases/musculoskeletal/bone/osteoclastic-giant-cell-rich/abc"
										}
									]
								},
								{
									"label": "脊索性腫瘍",
									"collapsed": true,
									"items": [
										{
											"label": "__group_index__",
											"slug": "diseases/musculoskeletal/bone/notochordal"
										},
										{
											"label": "良性脊索細胞腫",
											"slug": "diseases/musculoskeletal/bone/notochordal/bnct"
										},
										{
											"label": "脊索腫",
											"slug": "diseases/musculoskeletal/bone/notochordal/chordoma"
										},
										{
											"label": "低分化脊索腫",
											"slug": "diseases/musculoskeletal/bone/notochordal/poorly-differentiated-chordoma"
										},
										{
											"label": "脱分化脊索腫",
											"slug": "diseases/musculoskeletal/bone/notochordal/dedifferentiated-chordoma"
										}
									]
								},
								{
									"label": "その他の間葉系腫瘍",
									"collapsed": true,
									"items": [
										{
											"label": "__group_index__",
											"slug": "diseases/musculoskeletal/bone/other-mesenchymal"
										},
										{
											"label": "単純性骨嚢腫",
											"slug": "diseases/musculoskeletal/bone/other-mesenchymal/simple-bone-cyst"
										},
										{
											"label": "骨内脂肪腫",
											"slug": "diseases/musculoskeletal/bone/other-mesenchymal/bone-lipoma"
										}
									]
								},
								{
									"label": "造血器腫瘍",
									"collapsed": true,
									"items": [
										{
											"label": "__group_index__",
											"slug": "diseases/musculoskeletal/bone/hematopoietic"
										},
										{
											"label": "多発性骨髄腫（骨）",
											"slug": "diseases/musculoskeletal/bone/hematopoietic/multiple-myeloma"
										},
										{
											"label": "骨原発悪性リンパ腫",
											"slug": "diseases/musculoskeletal/bone/hematopoietic/bone-lymphoma"
										}
									]
								},
								{
									"label": "未分化小円形細胞肉腫",
									"collapsed": true,
									"items": [
										{
											"label": "__group_index__",
											"slug": "diseases/musculoskeletal/bone/small-round-cell"
										},
										{
											"label": "Ewing肉腫",
											"slug": "diseases/musculoskeletal/bone/small-round-cell/ewing"
										}
									]
								},
								{
									"label": "その他の腫瘍性病変",
									"collapsed": true,
									"items": [
										{
											"label": "__group_index__",
											"slug": "diseases/musculoskeletal/bone/other-bone"
										},
										{
											"label": "骨転移",
											"slug": "diseases/musculoskeletal/bone/other-bone/bone-metastasis"
										},
										{
											"label": "Langerhans細胞組織球症",
											"slug": "diseases/musculoskeletal/bone/other-bone/lch"
										},
										{
											"label": "骨Paget病",
											"slug": "diseases/musculoskeletal/bone/other-bone/paget-disease-bone"
										}
									]
								}
							]
						},
						{
							"label": "軟部腫瘍",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/musculoskeletal/soft-tissue"
								},
								{
									"label": "分類総論",
									"collapsed": true,
									"items": [
										{
											"label": "__group_index__",
											"slug": "diseases/musculoskeletal/soft-tissue/general-classification"
										},
										{
											"label": "軟部腫瘍分類総論",
											"slug": "diseases/musculoskeletal/soft-tissue/general-classification/soft-tissue-classification"
										},
										{
											"label": "悪性軟部腫瘍の画像診断総論",
											"slug": "diseases/musculoskeletal/soft-tissue/general-classification/malignant-soft-tissue-imaging"
										},
										{
											"label": "良性軟部腫瘍総論",
											"slug": "diseases/musculoskeletal/soft-tissue/general-classification/benign-soft-tissue-overview"
										}
									]
								},
								{
									"label": "脂肪性腫瘍",
									"collapsed": true,
									"items": [
										{
											"label": "__group_index__",
											"slug": "diseases/musculoskeletal/soft-tissue/adipocytic"
										},
										{
											"label": "脂肪腫・血管脂肪腫",
											"slug": "diseases/musculoskeletal/soft-tissue/adipocytic/lipoma-angiolipoma"
										},
										{
											"label": "紡錘形細胞脂肪腫",
											"slug": "diseases/musculoskeletal/soft-tissue/adipocytic/spindle-cell-lipoma"
										},
										{
											"label": "良性対称性脂肪腫症",
											"slug": "diseases/musculoskeletal/soft-tissue/adipocytic/benign-symmetric-lipomatosis"
										},
										{
											"label": "高分化型脂肪肉腫",
											"slug": "diseases/musculoskeletal/soft-tissue/adipocytic/well-differentiated-liposarcoma"
										},
										{
											"label": "脱分化型脂肪肉腫",
											"slug": "diseases/musculoskeletal/soft-tissue/adipocytic/dedifferentiated-liposarcoma"
										},
										{
											"label": "粘液型脂肪肉腫",
											"slug": "diseases/musculoskeletal/soft-tissue/adipocytic/myxoid-liposarcoma"
										},
										{
											"label": "多形型脂肪肉腫",
											"slug": "diseases/musculoskeletal/soft-tissue/adipocytic/pleomorphic-liposarcoma"
										},
										{
											"label": "異型紡錘形細胞/多形脂肪腫様腫瘍（ASPLT）",
											"slug": "diseases/musculoskeletal/soft-tissue/adipocytic/atypical-spindle-cell-lipomatous-tumour"
										},
										{
											"label": "粘液多形型脂肪肉腫",
											"slug": "diseases/musculoskeletal/soft-tissue/adipocytic/myxoid-pleomorphic-liposarcoma"
										}
									]
								},
								{
									"label": "線維芽細胞性・筋線維芽細胞性",
									"collapsed": true,
									"items": [
										{
											"label": "__group_index__",
											"slug": "diseases/musculoskeletal/soft-tissue/fibroblastic"
										},
										{
											"label": "結節性筋膜炎",
											"slug": "diseases/musculoskeletal/soft-tissue/fibroblastic/nodular-fasciitis"
										},
										{
											"label": "デスモイド型線維腫症",
											"slug": "diseases/musculoskeletal/soft-tissue/fibroblastic/desmoid"
										},
										{
											"label": "手掌・足底線維腫症",
											"slug": "diseases/musculoskeletal/soft-tissue/fibroblastic/palmar-plantar-fibromatosis"
										},
										{
											"label": "孤立性線維性腫瘍（SFT）",
											"slug": "diseases/musculoskeletal/soft-tissue/fibroblastic/sft"
										},
										{
											"label": "粘液線維肉腫",
											"slug": "diseases/musculoskeletal/soft-tissue/fibroblastic/myxofibrosarcoma"
										},
										{
											"label": "未分化多形肉腫",
											"slug": "diseases/musculoskeletal/soft-tissue/fibroblastic/ups"
										},
										{
											"label": "軟部血管線維腫",
											"slug": "diseases/musculoskeletal/soft-tissue/fibroblastic/angiofibroma-soft-tissue"
										},
										{
											"label": "表在性CD34陽性線維芽細胞性腫瘍",
											"slug": "diseases/musculoskeletal/soft-tissue/fibroblastic/superficial-cd34-fibroblastic-tumour"
										}
									]
								},
								{
									"label": "平滑筋性",
									"collapsed": true,
									"items": [
										{
											"label": "__group_index__",
											"slug": "diseases/musculoskeletal/soft-tissue/smooth-muscle"
										},
										{
											"label": "平滑筋肉腫",
											"slug": "diseases/musculoskeletal/soft-tissue/smooth-muscle/leiomyosarcoma"
										}
									]
								},
								{
									"label": "骨格筋性",
									"collapsed": true,
									"items": [
										{
											"label": "__group_index__",
											"slug": "diseases/musculoskeletal/soft-tissue/skeletal-muscle"
										},
										{
											"label": "横紋筋肉腫",
											"slug": "diseases/musculoskeletal/soft-tissue/skeletal-muscle/rhabdomyosarcoma"
										}
									]
								},
								{
									"label": "脈管性",
									"collapsed": true,
									"items": [
										{
											"label": "__group_index__",
											"slug": "diseases/musculoskeletal/soft-tissue/vascular-soft"
										},
										{
											"label": "血管腫・リンパ管腫",
											"slug": "diseases/musculoskeletal/soft-tissue/vascular-soft/hemangioma-lymphangioma"
										},
										{
											"label": "Kaposi肉腫",
											"slug": "diseases/musculoskeletal/soft-tissue/vascular-soft/kaposi"
										}
									]
								},
								{
									"label": "末梢神経鞘腫瘍",
									"collapsed": true,
									"items": [
										{
											"label": "__group_index__",
											"slug": "diseases/musculoskeletal/soft-tissue/peripheral-nerve"
										},
										{
											"label": "神経鞘腫・神経線維腫",
											"slug": "diseases/musculoskeletal/soft-tissue/peripheral-nerve/schwannoma-neurofibroma"
										},
										{
											"label": "神経内脂肪腫症",
											"slug": "diseases/musculoskeletal/soft-tissue/peripheral-nerve/lipomatosis-of-nerve"
										},
										{
											"label": "悪性末梢神経鞘腫瘍（MPNST）",
											"slug": "diseases/musculoskeletal/soft-tissue/peripheral-nerve/mpnst"
										}
									]
								},
								{
									"label": "分化不明腫瘍",
									"collapsed": true,
									"items": [
										{
											"label": "__group_index__",
											"slug": "diseases/musculoskeletal/soft-tissue/uncertain"
										},
										{
											"label": "滑膜肉腫",
											"slug": "diseases/musculoskeletal/soft-tissue/uncertain/synovial-sarcoma"
										},
										{
											"label": "胞巣状軟部肉腫",
											"slug": "diseases/musculoskeletal/soft-tissue/uncertain/alveolar-soft-part-sarcoma"
										},
										{
											"label": "類上皮肉腫",
											"slug": "diseases/musculoskeletal/soft-tissue/uncertain/epithelioid-sarcoma"
										},
										{
											"label": "NTRK再構成紡錘形細胞腫瘍",
											"slug": "diseases/musculoskeletal/soft-tissue/uncertain/ntrk-rearranged-spindle-cell-neoplasm"
										},
										{
											"label": "CIC再構成肉腫",
											"slug": "diseases/musculoskeletal/soft-tissue/uncertain/cic-rearranged-sarcoma"
										},
										{
											"label": "BCOR遺伝子異常肉腫",
											"slug": "diseases/musculoskeletal/soft-tissue/uncertain/bcor-sarcoma"
										}
									]
								},
								{
									"label": "腫瘍類似病変",
									"collapsed": true,
									"items": [
										{
											"label": "__group_index__",
											"slug": "diseases/musculoskeletal/soft-tissue/tumor-like"
										},
										{
											"label": "ガングリオン・滑液嚢腫",
											"slug": "diseases/musculoskeletal/soft-tissue/tumor-like/ganglion"
										},
										{
											"label": "色素性絨毛結節性滑膜炎（PVNS）",
											"slug": "diseases/musculoskeletal/soft-tissue/tumor-like/pvns"
										},
										{
											"label": "表皮嚢腫",
											"slug": "diseases/musculoskeletal/soft-tissue/tumor-like/epidermal-cyst"
										},
										{
											"label": "筋肉内粘液腫",
											"slug": "diseases/musculoskeletal/soft-tissue/tumor-like/myxoma"
										}
									]
								}
							]
						},
						{
							"label": "関節疾患",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/musculoskeletal/joints"
								},
								{
									"label": "変性・炎症性関節疾患",
									"collapsed": true,
									"items": [
										{
											"label": "__group_index__",
											"slug": "diseases/musculoskeletal/joints/arthritis"
										},
										{
											"label": "変形性関節症",
											"slug": "diseases/musculoskeletal/joints/arthritis/osteoarthritis"
										},
										{
											"label": "関節リウマチ",
											"slug": "diseases/musculoskeletal/joints/arthritis/rheumatoid-arthritis"
										},
										{
											"label": "強直性脊椎炎・体軸性脊椎関節炎",
											"slug": "diseases/musculoskeletal/joints/arthritis/ankylosing-spondylitis-joint"
										},
										{
											"label": "乾癬性関節炎",
											"slug": "diseases/musculoskeletal/joints/arthritis/psoriatic-arthritis"
										},
										{
											"label": "痛風性関節炎",
											"slug": "diseases/musculoskeletal/joints/arthritis/gout"
										},
										{
											"label": "ピロリン酸カルシウム沈着症（CPPD）",
											"slug": "diseases/musculoskeletal/joints/arthritis/cppd"
										},
										{
											"label": "血友病性関節症",
											"slug": "diseases/musculoskeletal/joints/arthritis/hemophilic-arthropathy"
										}
									]
								},
								{
									"label": "感染性関節炎",
									"collapsed": true,
									"items": [
										{
											"label": "__group_index__",
											"slug": "diseases/musculoskeletal/joints/joint-infection"
										},
										{
											"label": "化膿性関節炎",
											"slug": "diseases/musculoskeletal/joints/joint-infection/septic-arthritis"
										},
										{
											"label": "結核性関節炎",
											"slug": "diseases/musculoskeletal/joints/joint-infection/tuberculous-arthritis"
										}
									]
								},
								{
									"label": "離断性骨軟骨炎",
									"slug": "diseases/musculoskeletal/joints/ocd"
								}
							]
						},
						{
							"label": "代謝・骨系統疾患",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/musculoskeletal/metabolic"
								},
								{
									"label": "骨粗鬆症",
									"slug": "diseases/musculoskeletal/metabolic/osteoporosis"
								},
								{
									"label": "骨軟化症・くる病",
									"slug": "diseases/musculoskeletal/metabolic/osteomalacia-rickets"
								},
								{
									"label": "副甲状腺機能亢進症による骨変化",
									"slug": "diseases/musculoskeletal/metabolic/hyperparathyroidism-bone"
								},
								{
									"label": "腎性骨異栄養症",
									"slug": "diseases/musculoskeletal/metabolic/renal-osteodystrophy"
								},
								{
									"label": "大理石骨病",
									"slug": "diseases/musculoskeletal/metabolic/osteopetrosis"
								},
								{
									"label": "骨形成不全症",
									"slug": "diseases/musculoskeletal/metabolic/osteogenesis-imperfecta"
								},
								{
									"label": "軟骨無形成症",
									"slug": "diseases/musculoskeletal/metabolic/achondroplasia"
								}
							]
						},
						{
							"label": "感染・炎症",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/musculoskeletal/infection-inflammation"
								},
								{
									"label": "急性骨髄炎",
									"slug": "diseases/musculoskeletal/infection-inflammation/acute-osteomyelitis"
								},
								{
									"label": "慢性骨髄炎",
									"slug": "diseases/musculoskeletal/infection-inflammation/chronic-osteomyelitis"
								},
								{
									"label": "Brodie膿瘍",
									"slug": "diseases/musculoskeletal/infection-inflammation/brodie-abscess"
								},
								{
									"label": "CRMO/SAPHO症候群",
									"slug": "diseases/musculoskeletal/infection-inflammation/crmo-sapho"
								},
								{
									"label": "壊死性筋膜炎",
									"slug": "diseases/musculoskeletal/infection-inflammation/necrotizing-fasciitis"
								},
								{
									"label": "筋炎・筋膿瘍",
									"slug": "diseases/musculoskeletal/infection-inflammation/myositis"
								}
							]
						},
						{
							"label": "外傷・その他",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/musculoskeletal/trauma-other"
								},
								{
									"label": "疲労骨折",
									"slug": "diseases/musculoskeletal/trauma-other/stress-fracture"
								},
								{
									"label": "骨挫傷",
									"slug": "diseases/musculoskeletal/trauma-other/bone-contusion"
								},
								{
									"label": "骨壊死（大腿骨頭壊死など）",
									"slug": "diseases/musculoskeletal/trauma-other/osteonecrosis"
								},
								{
									"label": "一過性骨髄浮腫症候群",
									"slug": "diseases/musculoskeletal/trauma-other/transient-bone-marrow-edema"
								},
								{
									"label": "筋断裂・筋損傷",
									"slug": "diseases/musculoskeletal/trauma-other/muscle-tear"
								},
								{
									"label": "腱損傷（アキレス腱断裂など）",
									"slug": "diseases/musculoskeletal/trauma-other/tendon-injury"
								},
								{
									"label": "靭帯損傷（膝ACL・半月板損傷）",
									"slug": "diseases/musculoskeletal/trauma-other/knee-ligament-meniscus"
								},
								{
									"label": "肩腱板断裂",
									"slug": "diseases/musculoskeletal/trauma-other/rotator-cuff-tear"
								},
								{
									"label": "胸郭出口症候群",
									"slug": "diseases/musculoskeletal/trauma-other/thoracic-outlet-syndrome"
								}
							]
						}
					]
				},
				{
					"label": "呼吸器・縦隔",
					"collapsed": true,
					"items": [
						{
							"label": "__group_index__",
							"slug": "diseases/chest"
						},
						{
							"label": "肺腫瘍",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/chest/lung-tumor"
								},
								{
									"label": "肺癌総論・分類",
									"slug": "diseases/chest/lung-tumor/lung-cancer-general"
								},
								{
									"label": "腺癌",
									"slug": "diseases/chest/lung-tumor/adenocarcinoma"
								},
								{
									"label": "扁平上皮癌",
									"slug": "diseases/chest/lung-tumor/squamous-cell-carcinoma"
								},
								{
									"label": "小細胞肺癌",
									"slug": "diseases/chest/lung-tumor/small-cell-lung-cancer"
								},
								{
									"label": "大細胞癌",
									"slug": "diseases/chest/lung-tumor/large-cell-carcinoma"
								},
								{
									"label": "カルチノイド",
									"slug": "diseases/chest/lung-tumor/pulmonary-carcinoid"
								},
								{
									"label": "肺多形癌・肉腫様癌",
									"slug": "diseases/chest/lung-tumor/pleomorphic-carcinoma"
								},
								{
									"label": "過誤腫",
									"slug": "diseases/chest/lung-tumor/pulmonary-hamartoma"
								},
								{
									"label": "孤立性肺結節の鑑別",
									"slug": "diseases/chest/lung-tumor/solitary-pulmonary-nodule"
								},
								{
									"label": "肺転移",
									"slug": "diseases/chest/lung-tumor/lung-metastasis"
								},
								{
									"label": "肺リンパ腫・MALTリンパ腫",
									"slug": "diseases/chest/lung-tumor/pulmonary-lymphoma"
								},
								{
									"label": "リンパ増殖性疾患（LIP）",
									"slug": "diseases/chest/lung-tumor/lip"
								}
							]
						},
						{
							"label": "間質性肺疾患",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/chest/interstitial"
								},
								{
									"label": "間質性肺炎分類総論",
									"slug": "diseases/chest/interstitial/interstitial-pneumonia-classification"
								},
								{
									"label": "特発性肺線維症（IPF/UIP）",
									"slug": "diseases/chest/interstitial/ipf-uip"
								},
								{
									"label": "非特異性間質性肺炎（NSIP）",
									"slug": "diseases/chest/interstitial/nsip"
								},
								{
									"label": "器質化肺炎（OP/COP）",
									"slug": "diseases/chest/interstitial/op-cop"
								},
								{
									"label": "急性間質性肺炎（AIP）",
									"slug": "diseases/chest/interstitial/aip"
								},
								{
									"label": "剥離性間質性肺炎（DIP）",
									"slug": "diseases/chest/interstitial/dip"
								},
								{
									"label": "呼吸細気管支炎関連間質性肺疾患（RB-ILD）",
									"slug": "diseases/chest/interstitial/rb-ild"
								},
								{
									"label": "過敏性肺炎",
									"slug": "diseases/chest/interstitial/hypersensitivity-pneumonitis"
								},
								{
									"label": "膠原病関連間質性肺炎",
									"slug": "diseases/chest/interstitial/ctd-ild"
								},
								{
									"label": "薬剤性肺障害",
									"slug": "diseases/chest/interstitial/drug-induced-lung-injury"
								},
								{
									"label": "放射線肺炎",
									"slug": "diseases/chest/interstitial/radiation-pneumonitis"
								}
							]
						},
						{
							"label": "感染症",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/chest/infection"
								},
								{
									"label": "細菌性肺炎",
									"slug": "diseases/chest/infection/bacterial-pneumonia"
								},
								{
									"label": "マイコプラズマ肺炎",
									"slug": "diseases/chest/infection/mycoplasma-pneumonia"
								},
								{
									"label": "ウイルス性肺炎（COVID-19含む）",
									"slug": "diseases/chest/infection/viral-pneumonia"
								},
								{
									"label": "肺結核",
									"slug": "diseases/chest/infection/pulmonary-tb"
								},
								{
									"label": "非結核性抗酸菌症",
									"slug": "diseases/chest/infection/ntm"
								},
								{
									"label": "肺真菌症（アスペルギルス・クリプトコッカス）",
									"slug": "diseases/chest/infection/pulmonary-fungal"
								},
								{
									"label": "ニューモシスチス肺炎",
									"slug": "diseases/chest/infection/pcp"
								},
								{
									"label": "肺化膿症・肺膿瘍",
									"slug": "diseases/chest/infection/lung-abscess"
								},
								{
									"label": "膿胸",
									"slug": "diseases/chest/infection/empyema"
								}
							]
						},
						{
							"label": "気道疾患",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/chest/airway"
								},
								{
									"label": "COPD・肺気腫",
									"slug": "diseases/chest/airway/copd-emphysema"
								},
								{
									"label": "慢性気管支炎",
									"slug": "diseases/chest/airway/chronic-bronchitis"
								},
								{
									"label": "気管支拡張症",
									"slug": "diseases/chest/airway/bronchiectasis"
								},
								{
									"label": "気管支喘息",
									"slug": "diseases/chest/airway/asthma"
								},
								{
									"label": "びまん性汎細気管支炎",
									"slug": "diseases/chest/airway/dpb"
								},
								{
									"label": "閉塞性細気管支炎",
									"slug": "diseases/chest/airway/obliterative-bronchiolitis"
								},
								{
									"label": "気道異物",
									"slug": "diseases/chest/airway/airway-foreign-body"
								}
							]
						},
						{
							"label": "肺循環・血管",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/chest/pulmonary-vascular"
								},
								{
									"label": "肺血栓塞栓症",
									"slug": "diseases/chest/pulmonary-vascular/pulmonary-embolism"
								},
								{
									"label": "慢性血栓塞栓性肺高血圧症（CTEPH）",
									"slug": "diseases/chest/pulmonary-vascular/cteph"
								},
								{
									"label": "肺高血圧症",
									"slug": "diseases/chest/pulmonary-vascular/pulmonary-hypertension"
								},
								{
									"label": "肺動静脈奇形",
									"slug": "diseases/chest/pulmonary-vascular/pulmonary-avm"
								},
								{
									"label": "肺胞出血症候群",
									"slug": "diseases/chest/pulmonary-vascular/alveolar-hemorrhage"
								},
								{
									"label": "Goodpasture症候群",
									"slug": "diseases/chest/pulmonary-vascular/goodpasture"
								}
							]
						},
						{
							"label": "肉芽腫性・その他びまん性疾患",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/chest/granulomatous-diffuse"
								},
								{
									"label": "サルコイドーシス",
									"slug": "diseases/chest/granulomatous-diffuse/sarcoidosis"
								},
								{
									"label": "多発血管炎性肉芽腫症（GPA/旧Wegener）",
									"slug": "diseases/chest/granulomatous-diffuse/gpa"
								},
								{
									"label": "好酸球性多発血管炎性肉芽腫症（EGPA）",
									"slug": "diseases/chest/granulomatous-diffuse/egpa"
								},
								{
									"label": "好酸球性肺炎",
									"slug": "diseases/chest/granulomatous-diffuse/eosinophilic-pneumonia"
								},
								{
									"label": "肺胞蛋白症",
									"slug": "diseases/chest/granulomatous-diffuse/pap"
								},
								{
									"label": "肺リンパ脈管筋腫症（LAM）",
									"slug": "diseases/chest/granulomatous-diffuse/lam"
								},
								{
									"label": "Langerhans細胞組織球症（肺）",
									"slug": "diseases/chest/granulomatous-diffuse/pulmonary-lch"
								},
								{
									"label": "アミロイドーシス（肺）",
									"slug": "diseases/chest/granulomatous-diffuse/pulmonary-amyloidosis"
								}
							]
						},
						{
							"label": "胸膜",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/chest/pleura"
								},
								{
									"label": "胸水・胸膜炎",
									"slug": "diseases/chest/pleura/pleural-effusion"
								},
								{
									"label": "悪性胸膜中皮腫",
									"slug": "diseases/chest/pleura/mesothelioma"
								},
								{
									"label": "胸膜プラーク（石綿関連）",
									"slug": "diseases/chest/pleura/pleural-plaque"
								},
								{
									"label": "気胸",
									"slug": "diseases/chest/pleura/pneumothorax"
								},
								{
									"label": "血胸",
									"slug": "diseases/chest/pleura/hemothorax"
								},
								{
									"label": "胸膜孤立性線維性腫瘍",
									"slug": "diseases/chest/pleura/pleural-sft"
								}
							]
						},
						{
							"label": "縦隔",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/chest/mediastinum"
								},
								{
									"label": "縦隔腫瘍総論・区画",
									"slug": "diseases/chest/mediastinum/mediastinum-general"
								},
								{
									"label": "胸腺腫",
									"slug": "diseases/chest/mediastinum/thymoma"
								},
								{
									"label": "胸腺癌",
									"slug": "diseases/chest/mediastinum/thymic-carcinoma"
								},
								{
									"label": "胸腺嚢胞",
									"slug": "diseases/chest/mediastinum/thymic-cyst"
								},
								{
									"label": "奇形腫・胚細胞腫瘍",
									"slug": "diseases/chest/mediastinum/mediastinal-germ-cell"
								},
								{
									"label": "縦隔リンパ腫",
									"slug": "diseases/chest/mediastinum/mediastinal-lymphoma"
								},
								{
									"label": "神経原性腫瘍（神経鞘腫・神経節腫など）",
									"slug": "diseases/chest/mediastinum/neurogenic-tumor"
								},
								{
									"label": "気管支嚢胞",
									"slug": "diseases/chest/mediastinum/bronchogenic-cyst"
								},
								{
									"label": "食道嚢胞",
									"slug": "diseases/chest/mediastinum/esophageal-cyst"
								},
								{
									"label": "心膜嚢胞",
									"slug": "diseases/chest/mediastinum/pericardial-cyst"
								},
								{
									"label": "縦隔炎・縦隔膿瘍",
									"slug": "diseases/chest/mediastinum/mediastinitis"
								},
								{
									"label": "線維性縦隔炎",
									"slug": "diseases/chest/mediastinum/fibrosing-mediastinitis"
								}
							]
						},
						{
							"label": "横隔膜・胸壁",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/chest/diaphragm-chest-wall"
								},
								{
									"label": "横隔膜ヘルニア（Bochdalek・Morgagni）",
									"slug": "diseases/chest/diaphragm-chest-wall/diaphragmatic-hernia"
								},
								{
									"label": "横隔膜麻痺",
									"slug": "diseases/chest/diaphragm-chest-wall/diaphragmatic-paralysis"
								},
								{
									"label": "胸壁腫瘍",
									"slug": "diseases/chest/diaphragm-chest-wall/chest-wall-tumor"
								}
							]
						},
						{
							"label": "先天性",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/chest/congenital"
								},
								{
									"label": "肺分画症",
									"slug": "diseases/chest/congenital/pulmonary-sequestration"
								},
								{
									"label": "先天性嚢胞性腺腫様奇形（CPAM/CCAM）",
									"slug": "diseases/chest/congenital/cpam"
								},
								{
									"label": "気管支閉鎖症",
									"slug": "diseases/chest/congenital/bronchial-atresia"
								},
								{
									"label": "Scimitar症候群",
									"slug": "diseases/chest/congenital/scimitar-syndrome"
								}
							]
						}
					]
				},
				{
					"label": "心・血管",
					"collapsed": true,
					"items": [
						{
							"label": "__group_index__",
							"slug": "diseases/cardiovascular"
						},
						{
							"label": "虚血性心疾患",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/cardiovascular/ischemic"
								},
								{
									"label": "冠動脈CT総論",
									"slug": "diseases/cardiovascular/ischemic/coronary-cta-general"
								},
								{
									"label": "冠動脈狭窄・プラーク評価",
									"slug": "diseases/cardiovascular/ischemic/coronary-stenosis-plaque"
								},
								{
									"label": "急性心筋梗塞",
									"slug": "diseases/cardiovascular/ischemic/acute-mi"
								},
								{
									"label": "陳旧性心筋梗塞",
									"slug": "diseases/cardiovascular/ischemic/old-mi"
								},
								{
									"label": "心筋バイアビリティ評価",
									"slug": "diseases/cardiovascular/ischemic/myocardial-viability"
								},
								{
									"label": "心筋梗塞合併症（心破裂・心室瘤・左室血栓）",
									"slug": "diseases/cardiovascular/ischemic/mi-complications"
								}
							]
						},
						{
							"label": "心筋症",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/cardiovascular/cardiomyopathy"
								},
								{
									"label": "拡張型心筋症",
									"slug": "diseases/cardiovascular/cardiomyopathy/dcm"
								},
								{
									"label": "肥大型心筋症",
									"slug": "diseases/cardiovascular/cardiomyopathy/hcm"
								},
								{
									"label": "拘束型心筋症",
									"slug": "diseases/cardiovascular/cardiomyopathy/rcm"
								},
								{
									"label": "不整脈原性右室心筋症（ARVC）",
									"slug": "diseases/cardiovascular/cardiomyopathy/arvc"
								},
								{
									"label": "たこつぼ心筋症",
									"slug": "diseases/cardiovascular/cardiomyopathy/takotsubo"
								},
								{
									"label": "心アミロイドーシス",
									"slug": "diseases/cardiovascular/cardiomyopathy/cardiac-amyloidosis"
								},
								{
									"label": "心サルコイドーシス",
									"slug": "diseases/cardiovascular/cardiomyopathy/cardiac-sarcoidosis"
								},
								{
									"label": "Fabry病",
									"slug": "diseases/cardiovascular/cardiomyopathy/fabry-disease"
								},
								{
									"label": "左室緻密化障害",
									"slug": "diseases/cardiovascular/cardiomyopathy/lv-noncompaction"
								}
							]
						},
						{
							"label": "炎症性心疾患",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/cardiovascular/inflammatory"
								},
								{
									"label": "心筋炎",
									"slug": "diseases/cardiovascular/inflammatory/myocarditis"
								},
								{
									"label": "急性心膜炎",
									"slug": "diseases/cardiovascular/inflammatory/acute-pericarditis"
								},
								{
									"label": "収縮性心膜炎",
									"slug": "diseases/cardiovascular/inflammatory/constrictive-pericarditis"
								},
								{
									"label": "心膜液貯留・心タンポナーデ",
									"slug": "diseases/cardiovascular/inflammatory/pericardial-effusion-tamponade"
								}
							]
						},
						{
							"label": "弁膜症",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/cardiovascular/valvular"
								},
								{
									"label": "大動脈弁狭窄症",
									"slug": "diseases/cardiovascular/valvular/as"
								},
								{
									"label": "大動脈弁閉鎖不全症",
									"slug": "diseases/cardiovascular/valvular/ar"
								},
								{
									"label": "僧帽弁狭窄症",
									"slug": "diseases/cardiovascular/valvular/ms"
								},
								{
									"label": "僧帽弁閉鎖不全症",
									"slug": "diseases/cardiovascular/valvular/mr"
								},
								{
									"label": "感染性心内膜炎",
									"slug": "diseases/cardiovascular/valvular/infective-endocarditis"
								},
								{
									"label": "リウマチ性弁膜症",
									"slug": "diseases/cardiovascular/valvular/rheumatic-valve"
								}
							]
						},
						{
							"label": "先天性心疾患",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/cardiovascular/congenital"
								},
								{
									"label": "心房中隔欠損（ASD）",
									"slug": "diseases/cardiovascular/congenital/asd"
								},
								{
									"label": "心室中隔欠損（VSD）",
									"slug": "diseases/cardiovascular/congenital/vsd"
								},
								{
									"label": "動脈管開存（PDA）",
									"slug": "diseases/cardiovascular/congenital/pda"
								},
								{
									"label": "Fallot四徴症",
									"slug": "diseases/cardiovascular/congenital/tof"
								},
								{
									"label": "大血管転位症",
									"slug": "diseases/cardiovascular/congenital/tga"
								},
								{
									"label": "大動脈縮窄症",
									"slug": "diseases/cardiovascular/congenital/aortic-coarctation"
								},
								{
									"label": "Ebstein奇形",
									"slug": "diseases/cardiovascular/congenital/ebstein"
								},
								{
									"label": "単心室",
									"slug": "diseases/cardiovascular/congenital/single-ventricle"
								}
							]
						},
						{
							"label": "心臓腫瘍",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/cardiovascular/cardiac-tumor"
								},
								{
									"label": "心臓粘液腫",
									"slug": "diseases/cardiovascular/cardiac-tumor/cardiac-myxoma"
								},
								{
									"label": "乳頭状線維弾性腫",
									"slug": "diseases/cardiovascular/cardiac-tumor/papillary-fibroelastoma"
								},
								{
									"label": "心臓転移",
									"slug": "diseases/cardiovascular/cardiac-tumor/cardiac-metastasis"
								},
								{
									"label": "心臓リンパ腫",
									"slug": "diseases/cardiovascular/cardiac-tumor/cardiac-lymphoma"
								},
								{
									"label": "血管肉腫（心臓）",
									"slug": "diseases/cardiovascular/cardiac-tumor/cardiac-angiosarcoma"
								}
							]
						},
						{
							"label": "大動脈",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/cardiovascular/aorta"
								},
								{
									"label": "大動脈瘤（胸部・腹部）",
									"slug": "diseases/cardiovascular/aorta/aortic-aneurysm"
								},
								{
									"label": "大動脈解離",
									"slug": "diseases/cardiovascular/aorta/aortic-dissection"
								},
								{
									"label": "壁在血腫（IMH）",
									"slug": "diseases/cardiovascular/aorta/imh"
								},
								{
									"label": "穿通性粥状潰瘍（PAU）",
									"slug": "diseases/cardiovascular/aorta/pau"
								},
								{
									"label": "大動脈炎（高安動脈炎・巨細胞性動脈炎）",
									"slug": "diseases/cardiovascular/aorta/aortitis"
								},
								{
									"label": "Marfan症候群関連大動脈病変",
									"slug": "diseases/cardiovascular/aorta/marfan-aortopathy"
								}
							]
						},
						{
							"label": "末梢動脈",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/cardiovascular/peripheral-artery"
								},
								{
									"label": "閉塞性動脈硬化症（ASO）",
									"slug": "diseases/cardiovascular/peripheral-artery/aso"
								},
								{
									"label": "急性動脈閉塞",
									"slug": "diseases/cardiovascular/peripheral-artery/acute-arterial-occlusion"
								},
								{
									"label": "末梢動脈瘤",
									"slug": "diseases/cardiovascular/peripheral-artery/peripheral-aneurysm"
								},
								{
									"label": "線維筋性異形成",
									"slug": "diseases/cardiovascular/peripheral-artery/fmd"
								},
								{
									"label": "Buerger病",
									"slug": "diseases/cardiovascular/peripheral-artery/buerger-disease"
								},
								{
									"label": "結節性多発動脈炎",
									"slug": "diseases/cardiovascular/peripheral-artery/pan"
								},
								{
									"label": "動静脈奇形（AVM）",
									"slug": "diseases/cardiovascular/peripheral-artery/peripheral-avm"
								}
							]
						},
						{
							"label": "静脈系",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/cardiovascular/venous"
								},
								{
									"label": "深部静脈血栓症",
									"slug": "diseases/cardiovascular/venous/dvt"
								},
								{
									"label": "下大静脈フィルター適応・評価",
									"slug": "diseases/cardiovascular/venous/ivc-filter"
								},
								{
									"label": "May-Thurner症候群",
									"slug": "diseases/cardiovascular/venous/may-thurner"
								},
								{
									"label": "Budd-Chiari症候群",
									"slug": "diseases/cardiovascular/venous/budd-chiari"
								},
								{
									"label": "門脈血栓症",
									"slug": "diseases/cardiovascular/venous/portal-vein-thrombosis"
								},
								{
									"label": "骨盤うっ血症候群",
									"slug": "diseases/cardiovascular/venous/pelvic-congestion"
								}
							]
						}
					]
				},
				{
					"label": "乳腺",
					"collapsed": true,
					"items": [
						{
							"label": "__group_index__",
							"slug": "diseases/breast"
						},
						{
							"label": "悪性腫瘍",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/breast/malignant"
								},
								{
									"label": "乳癌総論・BI-RADS",
									"slug": "diseases/breast/malignant/breast-cancer-general"
								},
								{
									"label": "浸潤性乳管癌",
									"slug": "diseases/breast/malignant/idc"
								},
								{
									"label": "浸潤性小葉癌",
									"slug": "diseases/breast/malignant/ilc"
								},
								{
									"label": "非浸潤性乳管癌（DCIS）",
									"slug": "diseases/breast/malignant/dcis"
								},
								{
									"label": "非浸潤性小葉癌（LCIS）",
									"slug": "diseases/breast/malignant/lcis"
								},
								{
									"label": "粘液癌",
									"slug": "diseases/breast/malignant/mucinous-carcinoma"
								},
								{
									"label": "髄様癌",
									"slug": "diseases/breast/malignant/medullary-carcinoma"
								},
								{
									"label": "管状癌",
									"slug": "diseases/breast/malignant/tubular-carcinoma"
								},
								{
									"label": "化生癌",
									"slug": "diseases/breast/malignant/metaplastic-carcinoma"
								},
								{
									"label": "炎症性乳癌",
									"slug": "diseases/breast/malignant/inflammatory-breast-cancer"
								},
								{
									"label": "Paget病",
									"slug": "diseases/breast/malignant/paget-disease"
								},
								{
									"label": "男性乳癌",
									"slug": "diseases/breast/malignant/male-breast-cancer"
								},
								{
									"label": "乳房外病変からの転移",
									"slug": "diseases/breast/malignant/breast-metastasis"
								},
								{
									"label": "乳腺悪性リンパ腫",
									"slug": "diseases/breast/malignant/breast-lymphoma"
								}
							]
						},
						{
							"label": "良性腫瘍・腫瘤性病変",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/breast/benign"
								},
								{
									"label": "線維腺腫",
									"slug": "diseases/breast/benign/fibroadenoma"
								},
								{
									"label": "葉状腫瘍",
									"slug": "diseases/breast/benign/phyllodes-tumor"
								},
								{
									"label": "乳管内乳頭腫",
									"slug": "diseases/breast/benign/intraductal-papilloma"
								},
								{
									"label": "過誤腫",
									"slug": "diseases/breast/benign/breast-hamartoma"
								},
								{
									"label": "脂肪腫",
									"slug": "diseases/breast/benign/breast-lipoma"
								},
								{
									"label": "乳腺症",
									"slug": "diseases/breast/benign/fibrocystic-change"
								},
								{
									"label": "嚢胞",
									"slug": "diseases/breast/benign/breast-cyst"
								},
								{
									"label": "脂肪壊死",
									"slug": "diseases/breast/benign/fat-necrosis"
								},
								{
									"label": "放射状瘢痕",
									"slug": "diseases/breast/benign/radial-scar"
								}
							]
						},
						{
							"label": "炎症・その他",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/breast/inflammation-other"
								},
								{
									"label": "急性乳腺炎",
									"slug": "diseases/breast/inflammation-other/acute-mastitis"
								},
								{
									"label": "肉芽腫性乳腺炎",
									"slug": "diseases/breast/inflammation-other/granulomatous-mastitis"
								},
								{
									"label": "女性化乳房",
									"slug": "diseases/breast/inflammation-other/gynecomastia"
								},
								{
									"label": "シリコン漏出・インプラント評価",
									"slug": "diseases/breast/inflammation-other/silicone-implant"
								},
								{
									"label": "乳癌術後評価・再発",
									"slug": "diseases/breast/inflammation-other/post-treatment-breast"
								}
							]
						}
					]
				},
				{
					"label": "消化器（肝・胆・膵）",
					"collapsed": true,
					"items": [
						{
							"label": "__group_index__",
							"slug": "diseases/hepatobiliary"
						},
						{
							"label": "肝腫瘍",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/hepatobiliary/liver-tumor"
								},
								{
									"label": "肝細胞癌（HCC）",
									"slug": "diseases/hepatobiliary/liver-tumor/hcc"
								},
								{
									"label": "肝内胆管癌",
									"slug": "diseases/hepatobiliary/liver-tumor/intrahepatic-cholangiocarcinoma"
								},
								{
									"label": "混合型肝癌",
									"slug": "diseases/hepatobiliary/liver-tumor/combined-hcc-cc"
								},
								{
									"label": "肝転移",
									"slug": "diseases/hepatobiliary/liver-tumor/liver-metastasis"
								},
								{
									"label": "肝芽腫",
									"slug": "diseases/hepatobiliary/liver-tumor/hepatoblastoma"
								},
								{
									"label": "肝血管肉腫",
									"slug": "diseases/hepatobiliary/liver-tumor/hepatic-angiosarcoma"
								},
								{
									"label": "類上皮血管内皮腫",
									"slug": "diseases/hepatobiliary/liver-tumor/epithelioid-hemangioendothelioma"
								},
								{
									"label": "肝悪性リンパ腫",
									"slug": "diseases/hepatobiliary/liver-tumor/hepatic-lymphoma"
								},
								{
									"label": "肝海綿状血管腫",
									"slug": "diseases/hepatobiliary/liver-tumor/hepatic-hemangioma"
								},
								{
									"label": "限局性結節性過形成（FNH）",
									"slug": "diseases/hepatobiliary/liver-tumor/fnh"
								},
								{
									"label": "肝細胞腺腫",
									"slug": "diseases/hepatobiliary/liver-tumor/hepatocellular-adenoma"
								},
								{
									"label": "胆管嚢胞腺腫・腺癌",
									"slug": "diseases/hepatobiliary/liver-tumor/biliary-cystadenoma"
								},
								{
									"label": "肝嚢胞",
									"slug": "diseases/hepatobiliary/liver-tumor/hepatic-cyst"
								},
								{
									"label": "肝膿瘍（細菌性・アメーバ性）",
									"slug": "diseases/hepatobiliary/liver-tumor/liver-abscess"
								},
								{
									"label": "肝エキノコックス症",
									"slug": "diseases/hepatobiliary/liver-tumor/hepatic-echinococcosis"
								},
								{
									"label": "肝異型結節・再生結節",
									"slug": "diseases/hepatobiliary/liver-tumor/dysplastic-regenerative-nodule"
								},
								{
									"label": "肝脂肪変性（びまん性・限局性）",
									"slug": "diseases/hepatobiliary/liver-tumor/hepatic-steatosis"
								}
							]
						},
						{
							"label": "びまん性肝疾患",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/hepatobiliary/diffuse-liver"
								},
								{
									"label": "肝硬変",
									"slug": "diseases/hepatobiliary/diffuse-liver/cirrhosis"
								},
								{
									"label": "脂肪肝・NASH",
									"slug": "diseases/hepatobiliary/diffuse-liver/fatty-liver-nash"
								},
								{
									"label": "自己免疫性肝炎",
									"slug": "diseases/hepatobiliary/diffuse-liver/autoimmune-hepatitis"
								},
								{
									"label": "原発性胆汁性胆管炎（PBC）",
									"slug": "diseases/hepatobiliary/diffuse-liver/pbc"
								},
								{
									"label": "原発性硬化性胆管炎（PSC）",
									"slug": "diseases/hepatobiliary/diffuse-liver/psc"
								},
								{
									"label": "ヘモクロマトーシス",
									"slug": "diseases/hepatobiliary/diffuse-liver/hemochromatosis"
								},
								{
									"label": "Wilson病",
									"slug": "diseases/hepatobiliary/diffuse-liver/wilson-disease"
								},
								{
									"label": "Budd-Chiari症候群",
									"slug": "diseases/hepatobiliary/diffuse-liver/budd-chiari-liver"
								},
								{
									"label": "肝うっ血",
									"slug": "diseases/hepatobiliary/diffuse-liver/hepatic-congestion"
								},
								{
									"label": "肝サルコイドーシス",
									"slug": "diseases/hepatobiliary/diffuse-liver/hepatic-sarcoidosis"
								},
								{
									"label": "IgG4関連肝疾患",
									"slug": "diseases/hepatobiliary/diffuse-liver/igg4-hepatic"
								}
							]
						},
						{
							"label": "門脈・肝血管",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/hepatobiliary/portal-hepatic-vascular"
								},
								{
									"label": "門脈血栓症",
									"slug": "diseases/hepatobiliary/portal-hepatic-vascular/portal-vein-thrombosis-liver"
								},
								{
									"label": "門脈圧亢進症",
									"slug": "diseases/hepatobiliary/portal-hepatic-vascular/portal-hypertension"
								},
								{
									"label": "特発性門脈圧亢進症",
									"slug": "diseases/hepatobiliary/portal-hepatic-vascular/ipph"
								},
								{
									"label": "肝動脈瘤",
									"slug": "diseases/hepatobiliary/portal-hepatic-vascular/hepatic-artery-aneurysm"
								},
								{
									"label": "肝動静脈瘻",
									"slug": "diseases/hepatobiliary/portal-hepatic-vascular/hepatic-avf"
								},
								{
									"label": "遺伝性出血性毛細血管拡張症（HHT）の肝病変",
									"slug": "diseases/hepatobiliary/portal-hepatic-vascular/hht-liver"
								},
								{
									"label": "肝類洞閉塞症候群",
									"slug": "diseases/hepatobiliary/portal-hepatic-vascular/sinusoidal-obstruction-syndrome"
								}
							]
						},
						{
							"label": "胆嚢・胆管",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/hepatobiliary/biliary"
								},
								{
									"label": "胆嚢結石・胆嚢炎（急性・慢性）",
									"slug": "diseases/hepatobiliary/biliary/cholelithiasis-cholecystitis"
								},
								{
									"label": "気腫性胆嚢炎",
									"slug": "diseases/hepatobiliary/biliary/emphysematous-cholecystitis"
								},
								{
									"label": "胆嚢腺筋腫症",
									"slug": "diseases/hepatobiliary/biliary/adenomyomatosis"
								},
								{
									"label": "胆嚢ポリープ",
									"slug": "diseases/hepatobiliary/biliary/gallbladder-polyp"
								},
								{
									"label": "胆嚢癌",
									"slug": "diseases/hepatobiliary/biliary/gallbladder-carcinoma"
								},
								{
									"label": "磁器様胆嚢",
									"slug": "diseases/hepatobiliary/biliary/porcelain-gallbladder"
								},
								{
									"label": "胆管結石",
									"slug": "diseases/hepatobiliary/biliary/choledocholithiasis"
								},
								{
									"label": "胆管炎（急性化膿性・再発性）",
									"slug": "diseases/hepatobiliary/biliary/cholangitis"
								},
								{
									"label": "Mirizzi症候群",
									"slug": "diseases/hepatobiliary/biliary/mirizzi-syndrome"
								},
								{
									"label": "肝外胆管癌",
									"slug": "diseases/hepatobiliary/biliary/extrahepatic-cholangiocarcinoma"
								},
								{
									"label": "肝門部胆管癌（Klatskin腫瘍）",
									"slug": "diseases/hepatobiliary/biliary/klatskin-tumor"
								},
								{
									"label": "乳頭部癌",
									"slug": "diseases/hepatobiliary/biliary/ampullary-carcinoma"
								},
								{
									"label": "先天性胆道拡張症",
									"slug": "diseases/hepatobiliary/biliary/choledochal-cyst"
								},
								{
									"label": "Caroli病",
									"slug": "diseases/hepatobiliary/biliary/caroli-disease"
								},
								{
									"label": "胆道閉鎖症",
									"slug": "diseases/hepatobiliary/biliary/biliary-atresia"
								},
								{
									"label": "胆道出血",
									"slug": "diseases/hepatobiliary/biliary/hemobilia"
								}
							]
						},
						{
							"label": "膵腫瘍",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/hepatobiliary/pancreas-tumor"
								},
								{
									"label": "膵癌（浸潤性膵管癌）",
									"slug": "diseases/hepatobiliary/pancreas-tumor/pancreatic-ductal-adenocarcinoma"
								},
								{
									"label": "膵神経内分泌腫瘍（PNET）",
									"slug": "diseases/hepatobiliary/pancreas-tumor/pnet"
								},
								{
									"label": "インスリノーマ・ガストリノーマ",
									"slug": "diseases/hepatobiliary/pancreas-tumor/insulinoma-gastrinoma"
								},
								{
									"label": "Solid pseudopapillary neoplasm（SPN）",
									"slug": "diseases/hepatobiliary/pancreas-tumor/spn"
								},
								{
									"label": "膵腺房細胞癌",
									"slug": "diseases/hepatobiliary/pancreas-tumor/acinar-cell-carcinoma"
								},
								{
									"label": "膵芽腫",
									"slug": "diseases/hepatobiliary/pancreas-tumor/pancreatoblastoma"
								},
								{
									"label": "膵転移",
									"slug": "diseases/hepatobiliary/pancreas-tumor/pancreatic-metastasis"
								},
								{
									"label": "膵管内乳頭粘液性腫瘍（IPMN）",
									"slug": "diseases/hepatobiliary/pancreas-tumor/ipmn"
								},
								{
									"label": "粘液性嚢胞腫瘍（MCN）",
									"slug": "diseases/hepatobiliary/pancreas-tumor/mcn"
								},
								{
									"label": "漿液性嚢胞腫瘍（SCN）",
									"slug": "diseases/hepatobiliary/pancreas-tumor/scn"
								},
								{
									"label": "膵嚢胞性病変の鑑別",
									"slug": "diseases/hepatobiliary/pancreas-tumor/pancreatic-cystic-lesion-dx"
								}
							]
						},
						{
							"label": "膵炎",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/hepatobiliary/pancreatitis"
								},
								{
									"label": "急性膵炎",
									"slug": "diseases/hepatobiliary/pancreatitis/acute-pancreatitis"
								},
								{
									"label": "慢性膵炎",
									"slug": "diseases/hepatobiliary/pancreatitis/chronic-pancreatitis"
								},
								{
									"label": "自己免疫性膵炎（IgG4関連）",
									"slug": "diseases/hepatobiliary/pancreatitis/autoimmune-pancreatitis"
								},
								{
									"label": "溝部膵炎（groove pancreatitis）",
									"slug": "diseases/hepatobiliary/pancreatitis/groove-pancreatitis"
								},
								{
									"label": "膵仮性嚢胞・walled-off necrosis",
									"slug": "diseases/hepatobiliary/pancreatitis/pseudocyst-won"
								}
							]
						},
						{
							"label": "先天・解剖異常",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/hepatobiliary/pancreas-congenital"
								},
								{
									"label": "膵分割症（pancreas divisum）",
									"slug": "diseases/hepatobiliary/pancreas-congenital/pancreas-divisum"
								},
								{
									"label": "輪状膵",
									"slug": "diseases/hepatobiliary/pancreas-congenital/annular-pancreas"
								},
								{
									"label": "異所性膵",
									"slug": "diseases/hepatobiliary/pancreas-congenital/ectopic-pancreas"
								}
							]
						}
					]
				},
				{
					"label": "消化管・腹膜",
					"collapsed": true,
					"items": [
						{
							"label": "__group_index__",
							"slug": "diseases/gi"
						},
						{
							"label": "食道",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/gi/esophagus"
								},
								{
									"label": "食道癌",
									"slug": "diseases/gi/esophagus/esophageal-cancer"
								},
								{
									"label": "食道GIST・平滑筋腫",
									"slug": "diseases/gi/esophagus/esophageal-gist"
								},
								{
									"label": "食道裂孔ヘルニア",
									"slug": "diseases/gi/esophagus/hiatal-hernia"
								},
								{
									"label": "食道アカラシア",
									"slug": "diseases/gi/esophagus/achalasia"
								},
								{
									"label": "Barrett食道",
									"slug": "diseases/gi/esophagus/barrett-esophagus"
								},
								{
									"label": "食道静脈瘤",
									"slug": "diseases/gi/esophagus/esophageal-varices"
								},
								{
									"label": "食道憩室",
									"slug": "diseases/gi/esophagus/esophageal-diverticulum"
								},
								{
									"label": "Boerhaave症候群（食道破裂）",
									"slug": "diseases/gi/esophagus/boerhaave"
								}
							]
						},
						{
							"label": "胃・十二指腸",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/gi/stomach-duodenum"
								},
								{
									"label": "胃癌",
									"slug": "diseases/gi/stomach-duodenum/gastric-cancer"
								},
								{
									"label": "胃MALTリンパ腫・悪性リンパ腫",
									"slug": "diseases/gi/stomach-duodenum/gastric-lymphoma"
								},
								{
									"label": "胃GIST",
									"slug": "diseases/gi/stomach-duodenum/gastric-gist"
								},
								{
									"label": "胃カルチノイド",
									"slug": "diseases/gi/stomach-duodenum/gastric-carcinoid"
								},
								{
									"label": "胃転移",
									"slug": "diseases/gi/stomach-duodenum/gastric-metastasis"
								},
								{
									"label": "消化性潰瘍",
									"slug": "diseases/gi/stomach-duodenum/peptic-ulcer"
								},
								{
									"label": "肥厚性胃炎・Ménétrier病",
									"slug": "diseases/gi/stomach-duodenum/menetrier"
								},
								{
									"label": "胃アニサキス症",
									"slug": "diseases/gi/stomach-duodenum/gastric-anisakiasis"
								},
								{
									"label": "十二指腸癌",
									"slug": "diseases/gi/stomach-duodenum/duodenal-cancer"
								},
								{
									"label": "十二指腸GIST",
									"slug": "diseases/gi/stomach-duodenum/duodenal-gist"
								},
								{
									"label": "十二指腸憩室",
									"slug": "diseases/gi/stomach-duodenum/duodenal-diverticulum"
								},
								{
									"label": "上腸間膜動脈症候群（SMA症候群）",
									"slug": "diseases/gi/stomach-duodenum/sma-syndrome"
								}
							]
						},
						{
							"label": "小腸",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/gi/small-bowel"
								},
								{
									"label": "小腸腺癌",
									"slug": "diseases/gi/small-bowel/small-bowel-adenocarcinoma"
								},
								{
									"label": "小腸GIST",
									"slug": "diseases/gi/small-bowel/small-bowel-gist"
								},
								{
									"label": "小腸カルチノイド",
									"slug": "diseases/gi/small-bowel/small-bowel-carcinoid"
								},
								{
									"label": "小腸悪性リンパ腫",
									"slug": "diseases/gi/small-bowel/small-bowel-lymphoma"
								},
								{
									"label": "小腸転移",
									"slug": "diseases/gi/small-bowel/small-bowel-metastasis"
								},
								{
									"label": "Crohn病",
									"slug": "diseases/gi/small-bowel/crohn-disease"
								},
								{
									"label": "腸結核",
									"slug": "diseases/gi/small-bowel/intestinal-tb"
								},
								{
									"label": "虚血性腸炎・腸間膜虚血",
									"slug": "diseases/gi/small-bowel/mesenteric-ischemia"
								},
								{
									"label": "放射線腸炎",
									"slug": "diseases/gi/small-bowel/radiation-enteritis"
								},
								{
									"label": "腸重積",
									"slug": "diseases/gi/small-bowel/intussusception"
								},
								{
									"label": "Meckel憩室",
									"slug": "diseases/gi/small-bowel/meckel-diverticulum"
								},
								{
									"label": "腸回転異常",
									"slug": "diseases/gi/small-bowel/malrotation"
								}
							]
						},
						{
							"label": "大腸",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/gi/colon"
								},
								{
									"label": "大腸癌",
									"slug": "diseases/gi/colon/colon-cancer"
								},
								{
									"label": "大腸ポリープ・腺腫",
									"slug": "diseases/gi/colon/colon-polyp"
								},
								{
									"label": "家族性大腸腺腫症（FAP）",
									"slug": "diseases/gi/colon/fap"
								},
								{
									"label": "潰瘍性大腸炎",
									"slug": "diseases/gi/colon/ulcerative-colitis"
								},
								{
									"label": "Crohn病（大腸病変）",
									"slug": "diseases/gi/colon/crohn-colon"
								},
								{
									"label": "虚血性大腸炎",
									"slug": "diseases/gi/colon/ischemic-colitis"
								},
								{
									"label": "偽膜性大腸炎",
									"slug": "diseases/gi/colon/pseudomembranous-colitis"
								},
								{
									"label": "憩室症・憩室炎",
									"slug": "diseases/gi/colon/diverticulitis"
								},
								{
									"label": "虫垂炎",
									"slug": "diseases/gi/colon/appendicitis"
								},
								{
									"label": "虫垂粘液嚢腫・粘液性腫瘍",
									"slug": "diseases/gi/colon/appendiceal-mucocele"
								},
								{
									"label": "虫垂カルチノイド",
									"slug": "diseases/gi/colon/appendiceal-carcinoid"
								},
								{
									"label": "S状結腸軸捻転",
									"slug": "diseases/gi/colon/sigmoid-volvulus"
								},
								{
									"label": "大腸イレウス",
									"slug": "diseases/gi/colon/colonic-obstruction"
								}
							]
						},
						{
							"label": "肛門",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/gi/anus"
								},
								{
									"label": "肛門癌",
									"slug": "diseases/gi/anus/anal-cancer"
								},
								{
									"label": "痔瘻・肛門周囲膿瘍",
									"slug": "diseases/gi/anus/perianal-fistula-abscess"
								},
								{
									"label": "直腸瘤・直腸脱",
									"slug": "diseases/gi/anus/rectocele-prolapse"
								}
							]
						},
						{
							"label": "腸閉塞・イレウス",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/gi/obstruction"
								},
								{
									"label": "機械的腸閉塞",
									"slug": "diseases/gi/obstruction/mechanical-obstruction"
								},
								{
									"label": "麻痺性イレウス",
									"slug": "diseases/gi/obstruction/paralytic-ileus"
								},
								{
									"label": "絞扼性イレウス",
									"slug": "diseases/gi/obstruction/strangulation"
								},
								{
									"label": "術後癒着性イレウス",
									"slug": "diseases/gi/obstruction/adhesive-ileus"
								},
								{
									"label": "閉鎖孔ヘルニア",
									"slug": "diseases/gi/obstruction/obturator-hernia"
								},
								{
									"label": "鼠径ヘルニア・大腿ヘルニア",
									"slug": "diseases/gi/obstruction/inguinal-femoral-hernia"
								},
								{
									"label": "内ヘルニア",
									"slug": "diseases/gi/obstruction/internal-hernia"
								}
							]
						},
						{
							"label": "腹膜・腸間膜",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/gi/peritoneum-mesentery"
								},
								{
									"label": "腹膜播種",
									"slug": "diseases/gi/peritoneum-mesentery/peritoneal-carcinomatosis"
								},
								{
									"label": "腹膜偽粘液腫",
									"slug": "diseases/gi/peritoneum-mesentery/pseudomyxoma-peritonei"
								},
								{
									"label": "悪性腹膜中皮腫",
									"slug": "diseases/gi/peritoneum-mesentery/peritoneal-mesothelioma"
								},
								{
									"label": "原発性腹膜癌",
									"slug": "diseases/gi/peritoneum-mesentery/primary-peritoneal-carcinoma"
								},
								{
									"label": "腸間膜脂肪織炎",
									"slug": "diseases/gi/peritoneum-mesentery/mesenteric-panniculitis"
								},
								{
									"label": "デスモイド（腹腔内）",
									"slug": "diseases/gi/peritoneum-mesentery/intraabdominal-desmoid"
								},
								{
									"label": "硬化性被嚢性腹膜炎",
									"slug": "diseases/gi/peritoneum-mesentery/sclerosing-encapsulating-peritonitis"
								},
								{
									"label": "腹腔内遊離ガス・消化管穿孔",
									"slug": "diseases/gi/peritoneum-mesentery/free-gas-perforation"
								},
								{
									"label": "腹水",
									"slug": "diseases/gi/peritoneum-mesentery/ascites"
								},
								{
									"label": "腹膜結核",
									"slug": "diseases/gi/peritoneum-mesentery/peritoneal-tb"
								},
								{
									"label": "腸間膜リンパ節腫大",
									"slug": "diseases/gi/peritoneum-mesentery/mesenteric-lymphadenopathy"
								}
							]
						},
						{
							"label": "腹壁",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/gi/abdominal-wall"
								},
								{
									"label": "腹壁ヘルニア",
									"slug": "diseases/gi/abdominal-wall/abdominal-wall-hernia"
								},
								{
									"label": "腹直筋鞘血腫",
									"slug": "diseases/gi/abdominal-wall/rectus-sheath-hematoma"
								},
								{
									"label": "腹壁デスモイド",
									"slug": "diseases/gi/abdominal-wall/abdominal-wall-desmoid"
								},
								{
									"label": "臍尿管遺残",
									"slug": "diseases/gi/abdominal-wall/urachal-remnant"
								}
							]
						}
					]
				},
				{
					"label": "泌尿器",
					"collapsed": true,
					"items": [
						{
							"label": "__group_index__",
							"slug": "diseases/urinary"
						},
						{
							"label": "腎腫瘍",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/urinary/kidney-tumor"
								},
								{
									"label": "腎細胞癌総論(Bosniak分類含む)",
									"slug": "diseases/urinary/kidney-tumor/rcc-general"
								},
								{
									"label": "淡明細胞型腎細胞癌",
									"slug": "diseases/urinary/kidney-tumor/clear-cell-rcc"
								},
								{
									"label": "乳頭状腎細胞癌",
									"slug": "diseases/urinary/kidney-tumor/papillary-rcc"
								},
								{
									"label": "嫌色素性腎細胞癌",
									"slug": "diseases/urinary/kidney-tumor/chromophobe-rcc"
								},
								{
									"label": "集合管癌",
									"slug": "diseases/urinary/kidney-tumor/collecting-duct-carcinoma"
								},
								{
									"label": "腎盂尿管癌(尿路上皮癌)",
									"slug": "diseases/urinary/kidney-tumor/upper-urinary-tract-uc"
								},
								{
									"label": "腎血管筋脂肪腫(AML)",
									"slug": "diseases/urinary/kidney-tumor/aml"
								},
								{
									"label": "腎オンコサイトーマ",
									"slug": "diseases/urinary/kidney-tumor/oncocytoma"
								},
								{
									"label": "腎転移",
									"slug": "diseases/urinary/kidney-tumor/renal-metastasis"
								},
								{
									"label": "腎悪性リンパ腫",
									"slug": "diseases/urinary/kidney-tumor/renal-lymphoma"
								},
								{
									"label": "Wilms腫瘍",
									"slug": "diseases/urinary/kidney-tumor/wilms-tumor"
								},
								{
									"label": "多房性嚢胞性腎腫瘍",
									"slug": "diseases/urinary/kidney-tumor/multilocular-cystic-neoplasm"
								},
								{
									"label": "腎嚢胞(単純性・複雑性)",
									"slug": "diseases/urinary/kidney-tumor/renal-cyst"
								}
							]
						},
						{
							"label": "腎・尿管の非腫瘍性疾患",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/urinary/kidney-nontumor"
								},
								{
									"label": "腎盂腎炎(急性・慢性)",
									"slug": "diseases/urinary/kidney-nontumor/pyelonephritis"
								},
								{
									"label": "気腫性腎盂腎炎",
									"slug": "diseases/urinary/kidney-nontumor/emphysematous-pyelonephritis"
								},
								{
									"label": "腎膿瘍・腎周囲膿瘍",
									"slug": "diseases/urinary/kidney-nontumor/renal-abscess"
								},
								{
									"label": "黄色肉芽腫性腎盂腎炎(XGP)",
									"slug": "diseases/urinary/kidney-nontumor/xgp"
								},
								{
									"label": "腎結核",
									"slug": "diseases/urinary/kidney-nontumor/renal-tb"
								},
								{
									"label": "腎結石・尿管結石",
									"slug": "diseases/urinary/kidney-nontumor/urolithiasis"
								},
								{
									"label": "水腎症・閉塞性尿路疾患",
									"slug": "diseases/urinary/kidney-nontumor/hydronephrosis"
								},
								{
									"label": "腎梗塞",
									"slug": "diseases/urinary/kidney-nontumor/renal-infarction"
								},
								{
									"label": "腎静脈血栓症",
									"slug": "diseases/urinary/kidney-nontumor/renal-vein-thrombosis"
								},
								{
									"label": "腎動脈狭窄・線維筋性異形成",
									"slug": "diseases/urinary/kidney-nontumor/renal-artery-stenosis"
								},
								{
									"label": "腎動脈瘤",
									"slug": "diseases/urinary/kidney-nontumor/renal-artery-aneurysm"
								},
								{
									"label": "腎外傷",
									"slug": "diseases/urinary/kidney-nontumor/renal-trauma"
								},
								{
									"label": "腎血管炎(多発血管炎性肉芽腫症など)",
									"slug": "diseases/urinary/kidney-nontumor/renal-vasculitis"
								},
								{
									"label": "糖尿病性腎症",
									"slug": "diseases/urinary/kidney-nontumor/diabetic-nephropathy"
								},
								{
									"label": "IgA腎症(画像所見として)",
									"slug": "diseases/urinary/kidney-nontumor/iga-nephropathy"
								},
								{
									"label": "多発性嚢胞腎(ADPKD)",
									"slug": "diseases/urinary/kidney-nontumor/adpkd"
								},
								{
									"label": "海綿腎(髄質海綿腎)",
									"slug": "diseases/urinary/kidney-nontumor/medullary-sponge-kidney"
								},
								{
									"label": "馬蹄腎・腎形態異常",
									"slug": "diseases/urinary/kidney-nontumor/horseshoe-kidney"
								},
								{
									"label": "後腹膜線維症",
									"slug": "diseases/urinary/kidney-nontumor/retroperitoneal-fibrosis-kidney"
								}
							]
						},
						{
							"label": "膀胱",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/urinary/bladder"
								},
								{
									"label": "膀胱癌(尿路上皮癌)",
									"slug": "diseases/urinary/bladder/bladder-uc"
								},
								{
									"label": "膀胱扁平上皮癌",
									"slug": "diseases/urinary/bladder/bladder-scc"
								},
								{
									"label": "膀胱腺癌",
									"slug": "diseases/urinary/bladder/bladder-adenocarcinoma"
								},
								{
									"label": "臍尿管癌",
									"slug": "diseases/urinary/bladder/urachal-carcinoma"
								},
								{
									"label": "膀胱憩室",
									"slug": "diseases/urinary/bladder/bladder-diverticulum"
								},
								{
									"label": "神経因性膀胱",
									"slug": "diseases/urinary/bladder/neurogenic-bladder"
								},
								{
									"label": "膀胱炎(出血性・気腫性)",
									"slug": "diseases/urinary/bladder/cystitis"
								},
								{
									"label": "膀胱外傷",
									"slug": "diseases/urinary/bladder/bladder-trauma"
								},
								{
									"label": "膀胱瘻(膀胱腸瘻・膀胱腟瘻)",
									"slug": "diseases/urinary/bladder/vesical-fistula"
								}
							]
						},
						{
							"label": "前立腺",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/urinary/prostate"
								},
								{
									"label": "前立腺癌(PI-RADS)",
									"slug": "diseases/urinary/prostate/prostate-cancer"
								},
								{
									"label": "前立腺肥大症",
									"slug": "diseases/urinary/prostate/bph"
								},
								{
									"label": "前立腺炎(急性・慢性)",
									"slug": "diseases/urinary/prostate/prostatitis"
								},
								{
									"label": "前立腺膿瘍",
									"slug": "diseases/urinary/prostate/prostatic-abscess"
								}
							]
						},
						{
							"label": "精巣・陰嚢",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/urinary/testis-scrotum"
								},
								{
									"label": "精巣腫瘍総論",
									"slug": "diseases/urinary/testis-scrotum/testicular-tumor-general"
								},
								{
									"label": "セミノーマ",
									"slug": "diseases/urinary/testis-scrotum/seminoma"
								},
								{
									"label": "非セミノーマ胚細胞腫瘍",
									"slug": "diseases/urinary/testis-scrotum/non-seminoma-gct"
								},
								{
									"label": "精巣間質腫瘍",
									"slug": "diseases/urinary/testis-scrotum/testicular-stromal-tumor"
								},
								{
									"label": "停留精巣",
									"slug": "diseases/urinary/testis-scrotum/cryptorchidism"
								},
								{
									"label": "精巣捻転",
									"slug": "diseases/urinary/testis-scrotum/testicular-torsion"
								},
								{
									"label": "精巣上体炎",
									"slug": "diseases/urinary/testis-scrotum/epididymitis"
								},
								{
									"label": "陰嚢水腫・精索静脈瘤",
									"slug": "diseases/urinary/testis-scrotum/hydrocele-varicocele"
								},
								{
									"label": "鼠径ヘルニア(陰嚢内)",
									"slug": "diseases/urinary/testis-scrotum/inguinoscrotal-hernia"
								}
							]
						},
						{
							"label": "副腎",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/urinary/adrenal"
								},
								{
									"label": "副腎腺腫",
									"slug": "diseases/urinary/adrenal/adrenal-adenoma"
								},
								{
									"label": "副腎褐色細胞腫",
									"slug": "diseases/urinary/adrenal/pheochromocytoma"
								},
								{
									"label": "副腎皮質癌",
									"slug": "diseases/urinary/adrenal/adrenocortical-carcinoma"
								},
								{
									"label": "副腎転移",
									"slug": "diseases/urinary/adrenal/adrenal-metastasis"
								},
								{
									"label": "副腎骨髄脂肪腫",
									"slug": "diseases/urinary/adrenal/myelolipoma"
								},
								{
									"label": "副腎嚢胞",
									"slug": "diseases/urinary/adrenal/adrenal-cyst"
								},
								{
									"label": "副腎出血",
									"slug": "diseases/urinary/adrenal/adrenal-hemorrhage"
								},
								{
									"label": "原発性アルドステロン症",
									"slug": "diseases/urinary/adrenal/primary-aldosteronism"
								},
								{
									"label": "Cushing症候群",
									"slug": "diseases/urinary/adrenal/cushing-syndrome"
								},
								{
									"label": "先天性副腎過形成",
									"slug": "diseases/urinary/adrenal/cah"
								}
							]
						},
						{
							"label": "後腹膜",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/urinary/retroperitoneum"
								},
								{
									"label": "後腹膜肉腫(脂肪肉腫・平滑筋肉腫)",
									"slug": "diseases/urinary/retroperitoneum/retroperitoneal-sarcoma"
								},
								{
									"label": "後腹膜悪性リンパ腫",
									"slug": "diseases/urinary/retroperitoneum/retroperitoneal-lymphoma"
								},
								{
									"label": "後腹膜線維症",
									"slug": "diseases/urinary/retroperitoneum/retroperitoneal-fibrosis"
								},
								{
									"label": "後腹膜血腫",
									"slug": "diseases/urinary/retroperitoneum/retroperitoneal-hematoma"
								},
								{
									"label": "Castleman病",
									"slug": "diseases/urinary/retroperitoneum/castleman-disease"
								}
							]
						}
					]
				},
				{
					"label": "小児",
					"collapsed": true,
					"items": [
						{
							"label": "__group_index__",
							"slug": "diseases/pediatrics"
						},
						{
							"label": "新生児・乳児",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/pediatrics/neonatal-infant"
								},
								{
									"label": "新生児呼吸窮迫症候群(RDS)",
									"slug": "diseases/pediatrics/neonatal-infant/rds"
								},
								{
									"label": "新生児一過性多呼吸(TTN)",
									"slug": "diseases/pediatrics/neonatal-infant/ttn"
								},
								{
									"label": "胎便吸引症候群(MAS)",
									"slug": "diseases/pediatrics/neonatal-infant/mas"
								},
								{
									"label": "気管支肺異形成症(BPD)",
									"slug": "diseases/pediatrics/neonatal-infant/bpd"
								},
								{
									"label": "新生児肺炎",
									"slug": "diseases/pediatrics/neonatal-infant/neonatal-pneumonia"
								},
								{
									"label": "壊死性腸炎(NEC)",
									"slug": "diseases/pediatrics/neonatal-infant/nec"
								},
								{
									"label": "胎便性腹膜炎",
									"slug": "diseases/pediatrics/neonatal-infant/meconium-peritonitis"
								},
								{
									"label": "先天性横隔膜ヘルニア",
									"slug": "diseases/pediatrics/neonatal-infant/cdh"
								},
								{
									"label": "肥厚性幽門狭窄症",
									"slug": "diseases/pediatrics/neonatal-infant/hypertrophic-pyloric-stenosis"
								},
								{
									"label": "腸回転異常・中腸軸捻転",
									"slug": "diseases/pediatrics/neonatal-infant/malrotation-midgut-volvulus"
								},
								{
									"label": "鎖肛・直腸肛門奇形",
									"slug": "diseases/pediatrics/neonatal-infant/anorectal-malformation"
								},
								{
									"label": "Hirschsprung病",
									"slug": "diseases/pediatrics/neonatal-infant/hirschsprung"
								},
								{
									"label": "胆道閉鎖症",
									"slug": "diseases/pediatrics/neonatal-infant/biliary-atresia-peds"
								},
								{
									"label": "先天性胆道拡張症(小児)",
									"slug": "diseases/pediatrics/neonatal-infant/choledochal-cyst-peds"
								}
							]
						},
						{
							"label": "小児脳神経",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/pediatrics/pediatric-neuro"
								},
								{
									"label": "胚芽異形成性神経上皮腫瘍(DNET)",
									"slug": "diseases/pediatrics/pediatric-neuro/dnet"
								},
								{
									"label": "毛様細胞性星細胞腫",
									"slug": "diseases/pediatrics/pediatric-neuro/pilocytic-astrocytoma"
								},
								{
									"label": "髄芽腫(小児)",
									"slug": "diseases/pediatrics/pediatric-neuro/medulloblastoma-peds"
								},
								{
									"label": "上衣腫(小児)",
									"slug": "diseases/pediatrics/pediatric-neuro/ependymoma-peds"
								},
								{
									"label": "非典型的奇形腫様/ラブドイド腫瘍(AT/RT)",
									"slug": "diseases/pediatrics/pediatric-neuro/atrt"
								},
								{
									"label": "胚細胞腫瘍(松果体・鞍上部)",
									"slug": "diseases/pediatrics/pediatric-neuro/germ-cell-tumor-peds"
								},
								{
									"label": "視床下部過誤腫",
									"slug": "diseases/pediatrics/pediatric-neuro/hypothalamic-hamartoma"
								},
								{
									"label": "頭蓋内脂肪腫",
									"slug": "diseases/pediatrics/pediatric-neuro/intracranial-lipoma"
								},
								{
									"label": "低酸素性虚血性脳症(HIE)",
									"slug": "diseases/pediatrics/pediatric-neuro/hie"
								},
								{
									"label": "新生児脳室内出血",
									"slug": "diseases/pediatrics/pediatric-neuro/neonatal-ivh"
								},
								{
									"label": "脳室周囲白質軟化症(PVL)",
									"slug": "diseases/pediatrics/pediatric-neuro/pvl"
								},
								{
									"label": "TORCH感染",
									"slug": "diseases/pediatrics/pediatric-neuro/torch"
								},
								{
									"label": "神経管閉鎖不全(髄膜瘤・脊髄髄膜瘤)",
									"slug": "diseases/pediatrics/pediatric-neuro/neural-tube-defect"
								},
								{
									"label": "水頭症(小児)",
									"slug": "diseases/pediatrics/pediatric-neuro/hydrocephalus-peds"
								},
								{
									"label": "頭蓋縫合早期癒合症",
									"slug": "diseases/pediatrics/pediatric-neuro/craniosynostosis"
								}
							]
						},
						{
							"label": "小児固形腫瘍",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/pediatrics/pediatric-tumor"
								},
								{
									"label": "神経芽腫",
									"slug": "diseases/pediatrics/pediatric-tumor/neuroblastoma"
								},
								{
									"label": "節細胞神経腫・節細胞神経芽腫",
									"slug": "diseases/pediatrics/pediatric-tumor/ganglioneuroma-ganglioneuroblastoma"
								},
								{
									"label": "Wilms腫瘍",
									"slug": "diseases/pediatrics/pediatric-tumor/wilms-tumor-peds"
								},
								{
									"label": "腎明細胞肉腫",
									"slug": "diseases/pediatrics/pediatric-tumor/clear-cell-sarcoma-kidney"
								},
								{
									"label": "腎ラブドイド腫瘍",
									"slug": "diseases/pediatrics/pediatric-tumor/rhabdoid-tumor-kidney"
								},
								{
									"label": "中胚葉性腎腫",
									"slug": "diseases/pediatrics/pediatric-tumor/mesoblastic-nephroma"
								},
								{
									"label": "肝芽腫",
									"slug": "diseases/pediatrics/pediatric-tumor/hepatoblastoma-peds"
								},
								{
									"label": "小児肝細胞癌",
									"slug": "diseases/pediatrics/pediatric-tumor/pediatric-hcc"
								},
								{
									"label": "横紋筋肉腫(小児)",
									"slug": "diseases/pediatrics/pediatric-tumor/rhabdomyosarcoma-peds"
								},
								{
									"label": "Ewing肉腫(小児)",
									"slug": "diseases/pediatrics/pediatric-tumor/ewing-peds"
								},
								{
									"label": "骨肉腫(小児)",
									"slug": "diseases/pediatrics/pediatric-tumor/osteosarcoma-peds"
								},
								{
									"label": "卵黄嚢腫瘍",
									"slug": "diseases/pediatrics/pediatric-tumor/yolk-sac-tumor-peds"
								},
								{
									"label": "奇形腫(仙尾部など)",
									"slug": "diseases/pediatrics/pediatric-tumor/sacrococcygeal-teratoma"
								},
								{
									"label": "網膜芽細胞腫",
									"slug": "diseases/pediatrics/pediatric-tumor/retinoblastoma"
								}
							]
						},
						{
							"label": "小児呼吸器・縦隔",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/pediatrics/pediatric-chest"
								},
								{
									"label": "先天性嚢胞性腺腫様奇形(CPAM)",
									"slug": "diseases/pediatrics/pediatric-chest/cpam-peds"
								},
								{
									"label": "肺分画症",
									"slug": "diseases/pediatrics/pediatric-chest/pulmonary-sequestration-peds"
								},
								{
									"label": "気管支閉鎖症",
									"slug": "diseases/pediatrics/pediatric-chest/bronchial-atresia-peds"
								},
								{
									"label": "先天性肺気腫",
									"slug": "diseases/pediatrics/pediatric-chest/congenital-lobar-emphysema"
								},
								{
									"label": "胸腺腫大(正常変異含む)",
									"slug": "diseases/pediatrics/pediatric-chest/thymic-enlargement"
								},
								{
									"label": "小児胸腺リンパ腫",
									"slug": "diseases/pediatrics/pediatric-chest/pediatric-thymic-lymphoma"
								}
							]
						},
						{
							"label": "小児腹部",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/pediatrics/pediatric-abdomen"
								},
								{
									"label": "腸重積",
									"slug": "diseases/pediatrics/pediatric-abdomen/intussusception-peds"
								},
								{
									"label": "急性虫垂炎(小児)",
									"slug": "diseases/pediatrics/pediatric-abdomen/appendicitis-peds"
								},
								{
									"label": "腸間膜リンパ節炎",
									"slug": "diseases/pediatrics/pediatric-abdomen/mesenteric-lymphadenitis"
								},
								{
									"label": "Meckel憩室",
									"slug": "diseases/pediatrics/pediatric-abdomen/meckel-diverticulum-peds"
								},
								{
									"label": "小児肝血管腫・血管内皮腫",
									"slug": "diseases/pediatrics/pediatric-abdomen/pediatric-hepatic-hemangioma"
								},
								{
									"label": "腹部外傷(小児)",
									"slug": "diseases/pediatrics/pediatric-abdomen/pediatric-abdominal-trauma"
								}
							]
						},
						{
							"label": "小児骨・関節",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/pediatrics/pediatric-musculoskeletal"
								},
								{
									"label": "Perthes病",
									"slug": "diseases/pediatrics/pediatric-musculoskeletal/perthes"
								},
								{
									"label": "大腿骨頭すべり症",
									"slug": "diseases/pediatrics/pediatric-musculoskeletal/scfe"
								},
								{
									"label": "発育性股関節形成不全",
									"slug": "diseases/pediatrics/pediatric-musculoskeletal/ddh"
								},
								{
									"label": "若年性特発性関節炎",
									"slug": "diseases/pediatrics/pediatric-musculoskeletal/jia"
								},
								{
									"label": "小児骨髄炎・化膿性関節炎",
									"slug": "diseases/pediatrics/pediatric-musculoskeletal/pediatric-osteomyelitis"
								},
								{
									"label": "Langerhans細胞組織球症(小児)",
									"slug": "diseases/pediatrics/pediatric-musculoskeletal/lch-peds"
								}
							]
						},
						{
							"label": "症候群・遺伝性疾患",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/pediatrics/syndrome"
								},
								{
									"label": "結節性硬化症(小児)",
									"slug": "diseases/pediatrics/syndrome/tuberous-sclerosis-peds"
								},
								{
									"label": "神経線維腫症1型(小児)",
									"slug": "diseases/pediatrics/syndrome/nf1-peds"
								},
								{
									"label": "von Hippel-Lindau病(小児)",
									"slug": "diseases/pediatrics/syndrome/vhl-peds"
								},
								{
									"label": "Beckwith-Wiedemann症候群",
									"slug": "diseases/pediatrics/syndrome/beckwith-wiedemann"
								},
								{
									"label": "Down症候群の画像所見",
									"slug": "diseases/pediatrics/syndrome/down-syndrome"
								}
							]
						}
					]
				},
				{
					"label": "IVR",
					"collapsed": true,
					"items": [
						{
							"label": "__group_index__",
							"slug": "diseases/ivr"
						},
						{
							"label": "血管系IVR総論",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/ivr/vascular-general"
								},
								{
									"label": "血管造影総論・アプローチ",
									"slug": "diseases/ivr/vascular-general/angiography-general"
								},
								{
									"label": "血管塞栓術総論",
									"slug": "diseases/ivr/vascular-general/embolization-general"
								},
								{
									"label": "塞栓物質の種類と選択",
									"slug": "diseases/ivr/vascular-general/embolic-materials"
								}
							]
						},
						{
							"label": "腫瘍に対するIVR",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/ivr/tumor-ivr"
								},
								{
									"label": "肝動脈化学塞栓療法(TACE)",
									"slug": "diseases/ivr/tumor-ivr/tace"
								},
								{
									"label": "肝動脈塞栓療法(TAE)",
									"slug": "diseases/ivr/tumor-ivr/tae-liver"
								},
								{
									"label": "薬剤溶出性ビーズTACE(DEB-TACE)",
									"slug": "diseases/ivr/tumor-ivr/deb-tace"
								},
								{
									"label": "経カテーテル動注療法(HAIC)",
									"slug": "diseases/ivr/tumor-ivr/haic"
								},
								{
									"label": "放射線塞栓療法(TARE/Y-90)",
									"slug": "diseases/ivr/tumor-ivr/tare-y90"
								},
								{
									"label": "肝腫瘍ラジオ波焼灼療法(RFA)",
									"slug": "diseases/ivr/tumor-ivr/rfa-liver"
								},
								{
									"label": "マイクロ波焼灼療法(MWA)",
									"slug": "diseases/ivr/tumor-ivr/mwa"
								},
								{
									"label": "凍結療法(cryoablation)",
									"slug": "diseases/ivr/tumor-ivr/cryoablation"
								},
								{
									"label": "腎腫瘍凍結療法・RFA",
									"slug": "diseases/ivr/tumor-ivr/renal-cryo-rfa"
								},
								{
									"label": "肺腫瘍RFA",
									"slug": "diseases/ivr/tumor-ivr/lung-rfa"
								},
								{
									"label": "骨腫瘍RFA・セメント注入",
									"slug": "diseases/ivr/tumor-ivr/bone-rfa-cement"
								}
							]
						},
						{
							"label": "出血に対するIVR",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/ivr/bleeding"
								},
								{
									"label": "外傷性出血に対する緊急塞栓術",
									"slug": "diseases/ivr/bleeding/trauma-embolization"
								},
								{
									"label": "消化管出血に対する塞栓術",
									"slug": "diseases/ivr/bleeding/gi-bleeding-embolization"
								},
								{
									"label": "気管支動脈塞栓術(喀血)",
									"slug": "diseases/ivr/bleeding/bae"
								},
								{
									"label": "産科出血に対する塞栓術",
									"slug": "diseases/ivr/bleeding/obstetric-embolization"
								},
								{
									"label": "術後出血・仮性動脈瘤塞栓術",
									"slug": "diseases/ivr/bleeding/postop-pseudoaneurysm-embolization"
								},
								{
									"label": "鼻出血塞栓術",
									"slug": "diseases/ivr/bleeding/epistaxis-embolization"
								}
							]
						},
						{
							"label": "動脈瘤・血管奇形",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/ivr/aneurysm-avm"
								},
								{
									"label": "内臓動脈瘤塞栓術",
									"slug": "diseases/ivr/aneurysm-avm/visceral-aneurysm-embolization"
								},
								{
									"label": "脳動脈瘤コイル塞栓術",
									"slug": "diseases/ivr/aneurysm-avm/cerebral-aneurysm-coiling"
								},
								{
									"label": "脳AVM塞栓術",
									"slug": "diseases/ivr/aneurysm-avm/brain-avm-embolization"
								},
								{
									"label": "硬膜動静脈瘻塞栓術",
									"slug": "diseases/ivr/aneurysm-avm/davf-embolization"
								},
								{
									"label": "末梢AVM塞栓術・硬化療法",
									"slug": "diseases/ivr/aneurysm-avm/peripheral-avm-sclerotherapy"
								},
								{
									"label": "静脈奇形硬化療法",
									"slug": "diseases/ivr/aneurysm-avm/venous-malformation-sclerotherapy"
								},
								{
									"label": "リンパ管奇形硬化療法",
									"slug": "diseases/ivr/aneurysm-avm/lymphatic-malformation-sclerotherapy"
								}
							]
						},
						{
							"label": "狭窄・閉塞に対するIVR",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/ivr/stenosis"
								},
								{
									"label": "末梢動脈インターベンション(PTA・ステント)",
									"slug": "diseases/ivr/stenosis/peripheral-pta-stent"
								},
								{
									"label": "腎動脈ステント",
									"slug": "diseases/ivr/stenosis/renal-artery-stent"
								},
								{
									"label": "頸動脈ステント(CAS)",
									"slug": "diseases/ivr/stenosis/cas"
								},
								{
									"label": "大動脈ステントグラフト(TEVAR/EVAR)",
									"slug": "diseases/ivr/stenosis/tevar-evar"
								},
								{
									"label": "静脈ステント(May-Thurner症候群など)",
									"slug": "diseases/ivr/stenosis/venous-stent"
								},
								{
									"label": "透析シャントPTA",
									"slug": "diseases/ivr/stenosis/av-fistula-pta"
								}
							]
						},
						{
							"label": "非血管系IVR",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/ivr/non-vascular"
								},
								{
									"label": "経皮的ドレナージ(膿瘍)",
									"slug": "diseases/ivr/non-vascular/percutaneous-drainage"
								},
								{
									"label": "胆道ドレナージ(PTCD・PTGBD)",
									"slug": "diseases/ivr/non-vascular/ptcd-ptgbd"
								},
								{
									"label": "経皮経肝胆道ステント",
									"slug": "diseases/ivr/non-vascular/biliary-stent"
								},
								{
									"label": "腎瘻造設術(PCN)",
									"slug": "diseases/ivr/non-vascular/pcn"
								},
								{
									"label": "尿管ステント",
									"slug": "diseases/ivr/non-vascular/ureteral-stent"
								},
								{
									"label": "経皮的生検(CTガイド・超音波ガイド)",
									"slug": "diseases/ivr/non-vascular/percutaneous-biopsy"
								},
								{
									"label": "中心静脈ポート造設",
									"slug": "diseases/ivr/non-vascular/cv-port"
								},
								{
									"label": "CVカテーテル挿入",
									"slug": "diseases/ivr/non-vascular/cv-catheter"
								},
								{
									"label": "胃瘻造設(PEG・PTEG)",
									"slug": "diseases/ivr/non-vascular/peg-ptg"
								}
							]
						},
						{
							"label": "静脈系IVR",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/ivr/venous-ivr"
								},
								{
									"label": "下大静脈フィルター留置・回収",
									"slug": "diseases/ivr/venous-ivr/ivc-filter"
								},
								{
									"label": "深部静脈血栓症に対する血栓溶解・吸引",
									"slug": "diseases/ivr/venous-ivr/dvt-thrombolysis"
								},
								{
									"label": "経頸静脈的肝内門脈大循環短絡術(TIPS)",
									"slug": "diseases/ivr/venous-ivr/tips"
								},
								{
									"label": "部分的脾動脈塞栓術(PSE)",
									"slug": "diseases/ivr/venous-ivr/pse"
								},
								{
									"label": "BRTO(バルーン閉塞下逆行性経静脈的塞栓術)",
									"slug": "diseases/ivr/venous-ivr/brto"
								},
								{
									"label": "下肢静脈瘤治療",
									"slug": "diseases/ivr/venous-ivr/varicose-vein"
								}
							]
						},
						{
							"label": "その他",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/ivr/other-ivr"
								},
								{
									"label": "子宮筋腫に対する子宮動脈塞栓術(UAE)",
									"slug": "diseases/ivr/other-ivr/uae"
								},
								{
									"label": "精索静脈瘤塞栓術",
									"slug": "diseases/ivr/other-ivr/varicocele-embolization"
								},
								{
									"label": "前立腺動脈塞栓術(PAE)",
									"slug": "diseases/ivr/other-ivr/pae"
								},
								{
									"label": "椎体形成術(vertebroplasty・kyphoplasty)",
									"slug": "diseases/ivr/other-ivr/vertebroplasty"
								},
								{
									"label": "神経ブロック・神経根ブロック",
									"slug": "diseases/ivr/other-ivr/nerve-block"
								}
							]
						}
					]
				},
				{
					"label": "核医学",
					"collapsed": true,
					"items": [
						{
							"label": "__group_index__",
							"slug": "diseases/nuclear"
						},
						{
							"label": "総論",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/nuclear/general"
								},
								{
									"label": "核医学検査総論",
									"slug": "diseases/nuclear/general/nuclear-medicine-general"
								},
								{
									"label": "放射性医薬品の種類と特性",
									"slug": "diseases/nuclear/general/radiopharmaceuticals"
								},
								{
									"label": "PET/CT・PET/MRIの基礎",
									"slug": "diseases/nuclear/general/pet-ct-mri-basics"
								},
								{
									"label": "SPECT/CTの基礎",
									"slug": "diseases/nuclear/general/spect-ct-basics"
								}
							]
						},
						{
							"label": "FDG-PET",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/nuclear/fdg-pet"
								},
								{
									"label": "FDG-PET総論・生理的集積",
									"slug": "diseases/nuclear/fdg-pet/fdg-pet-general"
								},
								{
									"label": "肺癌のFDG-PET",
									"slug": "diseases/nuclear/fdg-pet/fdg-pet-lung"
								},
								{
									"label": "頭頸部癌のFDG-PET",
									"slug": "diseases/nuclear/fdg-pet/fdg-pet-head-neck"
								},
								{
									"label": "悪性リンパ腫(Deauville criteria)",
									"slug": "diseases/nuclear/fdg-pet/fdg-pet-lymphoma"
								},
								{
									"label": "食道癌・胃癌のFDG-PET",
									"slug": "diseases/nuclear/fdg-pet/fdg-pet-esophagus-stomach"
								},
								{
									"label": "大腸癌のFDG-PET",
									"slug": "diseases/nuclear/fdg-pet/fdg-pet-colon"
								},
								{
									"label": "婦人科癌のFDG-PET",
									"slug": "diseases/nuclear/fdg-pet/fdg-pet-gynecologic"
								},
								{
									"label": "悪性黒色腫のFDG-PET",
									"slug": "diseases/nuclear/fdg-pet/fdg-pet-melanoma"
								},
								{
									"label": "原発不明癌の検索",
									"slug": "diseases/nuclear/fdg-pet/fdg-pet-cup"
								},
								{
									"label": "不明熱・感染症のFDG-PET",
									"slug": "diseases/nuclear/fdg-pet/fdg-pet-fuo"
								},
								{
									"label": "大型血管炎のFDG-PET",
									"slug": "diseases/nuclear/fdg-pet/fdg-pet-vasculitis"
								},
								{
									"label": "心サルコイドーシスのFDG-PET",
									"slug": "diseases/nuclear/fdg-pet/fdg-pet-cardiac-sarcoid"
								}
							]
						},
						{
							"label": "腫瘍核医学(非FDG)",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/nuclear/non-fdg-oncology"
								},
								{
									"label": "ソマトスタチン受容体シンチ・PET(神経内分泌腫瘍)",
									"slug": "diseases/nuclear/non-fdg-oncology/dotatate-pet"
								},
								{
									"label": "PSMA-PET(前立腺癌)",
									"slug": "diseases/nuclear/non-fdg-oncology/psma-pet"
								},
								{
									"label": "アミノ酸PET(脳腫瘍)",
									"slug": "diseases/nuclear/non-fdg-oncology/amino-acid-pet"
								},
								{
									"label": "コリンPET",
									"slug": "diseases/nuclear/non-fdg-oncology/choline-pet"
								},
								{
									"label": "MIBGシンチ(褐色細胞腫・神経芽腫)",
									"slug": "diseases/nuclear/non-fdg-oncology/mibg-scintigraphy"
								},
								{
									"label": "ガリウムシンチ",
									"slug": "diseases/nuclear/non-fdg-oncology/gallium-scintigraphy"
								}
							]
						},
						{
							"label": "骨シンチ",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/nuclear/bone-scintigraphy"
								},
								{
									"label": "骨シンチ総論",
									"slug": "diseases/nuclear/bone-scintigraphy/bone-scintigraphy-general"
								},
								{
									"label": "骨転移の評価",
									"slug": "diseases/nuclear/bone-scintigraphy/bone-scintigraphy-metastasis"
								},
								{
									"label": "骨折・疲労骨折",
									"slug": "diseases/nuclear/bone-scintigraphy/bone-scintigraphy-fracture"
								},
								{
									"label": "代謝性骨疾患",
									"slug": "diseases/nuclear/bone-scintigraphy/bone-scintigraphy-metabolic"
								},
								{
									"label": "骨髄炎・感染症",
									"slug": "diseases/nuclear/bone-scintigraphy/bone-scintigraphy-infection"
								},
								{
									"label": "SPECT/CT骨シンチ",
									"slug": "diseases/nuclear/bone-scintigraphy/bone-spect-ct"
								}
							]
						},
						{
							"label": "脳核医学",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/nuclear/brain-nuclear"
								},
								{
									"label": "脳血流シンチ(SPECT)",
									"slug": "diseases/nuclear/brain-nuclear/brain-spect"
								},
								{
									"label": "アセタゾラミド負荷試験",
									"slug": "diseases/nuclear/brain-nuclear/acetazolamide-challenge"
								},
								{
									"label": "認知症の脳血流パターン",
									"slug": "diseases/nuclear/brain-nuclear/dementia-spect"
								},
								{
									"label": "アミロイドPET",
									"slug": "diseases/nuclear/brain-nuclear/amyloid-pet"
								},
								{
									"label": "タウPET",
									"slug": "diseases/nuclear/brain-nuclear/tau-pet"
								},
								{
									"label": "ドパミントランスポーターシンチ(DaTscan)",
									"slug": "diseases/nuclear/brain-nuclear/datscan"
								},
								{
									"label": "MIBG心筋シンチ(Parkinson病)",
									"slug": "diseases/nuclear/brain-nuclear/mibg-parkinson"
								},
								{
									"label": "脳腫瘍のメチオニンPET・FDG-PET",
									"slug": "diseases/nuclear/brain-nuclear/brain-tumor-pet"
								}
							]
						},
						{
							"label": "心臓核医学",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/nuclear/cardiac-nuclear"
								},
								{
									"label": "心筋血流シンチ(負荷・安静)",
									"slug": "diseases/nuclear/cardiac-nuclear/myocardial-perfusion"
								},
								{
									"label": "心筋バイアビリティ評価",
									"slug": "diseases/nuclear/cardiac-nuclear/myocardial-viability-nuclear"
								},
								{
									"label": "MIBG心筋シンチ(心不全・Parkinson病)",
									"slug": "diseases/nuclear/cardiac-nuclear/mibg-cardiac"
								},
								{
									"label": "ピロリン酸シンチ(心アミロイドーシス)",
									"slug": "diseases/nuclear/cardiac-nuclear/pyrophosphate-amyloid"
								},
								{
									"label": "FDG-PET(心サルコイドーシス・心筋バイアビリティ)",
									"slug": "diseases/nuclear/cardiac-nuclear/cardiac-fdg-pet"
								}
							]
						},
						{
							"label": "呼吸器核医学",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/nuclear/respiratory-nuclear"
								},
								{
									"label": "肺換気血流シンチ",
									"slug": "diseases/nuclear/respiratory-nuclear/vq-scintigraphy"
								},
								{
									"label": "肺血栓塞栓症の評価",
									"slug": "diseases/nuclear/respiratory-nuclear/pe-vq"
								},
								{
									"label": "術前肺機能予測",
									"slug": "diseases/nuclear/respiratory-nuclear/preop-lung-function"
								}
							]
						},
						{
							"label": "腎・泌尿器核医学",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/nuclear/renal-nuclear"
								},
								{
									"label": "レノグラム(腎動態シンチ)",
									"slug": "diseases/nuclear/renal-nuclear/renogram"
								},
								{
									"label": "DMSA腎シンチ",
									"slug": "diseases/nuclear/renal-nuclear/dmsa"
								},
								{
									"label": "利尿レノグラフィ(閉塞評価)",
									"slug": "diseases/nuclear/renal-nuclear/diuretic-renography"
								},
								{
									"label": "腎移植後評価",
									"slug": "diseases/nuclear/renal-nuclear/renal-transplant-nuclear"
								}
							]
						},
						{
							"label": "甲状腺・副甲状腺",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/nuclear/thyroid-parathyroid-nuclear"
								},
								{
									"label": "甲状腺シンチ",
									"slug": "diseases/nuclear/thyroid-parathyroid-nuclear/thyroid-scintigraphy"
								},
								{
									"label": "放射性ヨード内用療法(バセドウ病・甲状腺癌)",
									"slug": "diseases/nuclear/thyroid-parathyroid-nuclear/radioactive-iodine-therapy"
								},
								{
									"label": "副甲状腺シンチ(MIBI)",
									"slug": "diseases/nuclear/thyroid-parathyroid-nuclear/parathyroid-mibi"
								}
							]
						},
						{
							"label": "その他",
							"collapsed": true,
							"items": [
								{
									"label": "__group_index__",
									"slug": "diseases/nuclear/other-nuclear"
								},
								{
									"label": "唾液腺シンチ(Sjögren症候群)",
									"slug": "diseases/nuclear/other-nuclear/salivary-scintigraphy"
								},
								{
									"label": "Meckel憩室シンチ",
									"slug": "diseases/nuclear/other-nuclear/meckel-scintigraphy"
								},
								{
									"label": "消化管出血シンチ",
									"slug": "diseases/nuclear/other-nuclear/gi-bleeding-scintigraphy"
								},
								{
									"label": "センチネルリンパ節シンチ",
									"slug": "diseases/nuclear/other-nuclear/sentinel-lymph-node"
								},
								{
									"label": "放射性ヨード内用療法(分化型甲状腺癌)",
									"slug": "diseases/nuclear/other-nuclear/i131-dtc"
								},
								{
									"label": "ルテチウム(Lu-177)内用療法(PSMA・DOTATATE)",
									"slug": "diseases/nuclear/other-nuclear/lu177-therapy"
								},
								{
									"label": "ラジウム223内用療法(去勢抵抗性前立腺癌骨転移)",
									"slug": "diseases/nuclear/other-nuclear/ra223-therapy"
								}
							]
						}
					]
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
