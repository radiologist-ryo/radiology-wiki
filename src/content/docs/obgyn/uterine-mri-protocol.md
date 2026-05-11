---
title: 子宮MRI 撮像プロトコール(ガイドライン準拠)
description: ガイドラインに沿った子宮体癌・子宮頸癌・癒着胎盤のMRI撮像プロトコールと評価ポイント
---

## 概要

産婦人科領域のMRI撮像プロトコールは、『画像診断ガイドライン2026年版』 [1] に基づき、疾患ごとに適切なシーケンスと撮像断面を選択することが求められる。特に子宮体癌・子宮頸癌・癒着胎盤スペクトラムの3病態については、ガイドラインで推奨される撮像方法が定められており、それぞれに特有の評価ポイントが存在する。

---

## 子宮体癌（endometrial cancer）

子宮体癌のMRIプロトコールの中心は**筋層浸潤（myometrial invasion; MI）**の正確な評価であり、造影MRI（ダイナミック・スタディ）によって subendometrial enhancement（SEE）を同定することが確立されている [2]。SEEとは子宮内膜下の早期強調域であり、この境界の断絶や変形が筋層浸潤の重要な指標となる。筋層浸潤の評価精度はT2強調像単独と比べて造影動態MRIが優る。

ただし、MRIによる筋層浸潤評価には限界もあり、浸潤深度が3mm以下の微小浸潤例では過小評価される傾向がある [3]。特に閉経前症例や薄い筋層を持つ症例では注意が必要で、妊孕性温存療法（MPA療法）の適応評価においても、MRIによるMIの有無確認が前提条件となる。

### FIGO2023 ステージングと筋層浸潤評価

FIGO2023改定 [4] では子宮体癌の病期分類が大幅に見直された。筋層浸潤深度（<50% vs. ≥50%）と組織学的リスクグループを組み合わせた病期区分が採用されており、主な区分は以下の通りである：

- **IA期**: MI < 50%、低リスク組織型
- **IB期**: MI ≥ 50%、低リスク組織型
- **IC期**: MI ≥ 50%、高リスク組織型（高異型度漿液性癌・明細胞癌など）またはLVSIあり
- **IIC期**: 間質浸潤を伴う子宮頸部浸潤

MRI撮像では**子宮体部短軸像**（子宮長軸に垂直な断面）が筋層浸潤の正確な評価に不可欠であり、矢状断と組み合わせた撮像が推奨される。

---

## 子宮頸癌（cervical cancer）

子宮頸癌の術前評価では、**頸部短軸像**（子宮頸部長軸に垂直な断面）が子宮傍組織（parametrium）浸潤の評価に不可欠である。T2強調像では子宮頸部間質が低信号の環状構造として描出され、この低信号リングが保たれているかどうかが傍組織浸潤の重要な指標となる。

ACR Appropriateness Criteria（2023年改訂）では、子宮頸癌の術前評価において造影MRIが "usually appropriate" と位置づけられ [5]、その有用性が明確化された。造影MRIは腫瘍境界の同定・リンパ節転移・膀胱・直腸浸潤の評価に優れる。

放射線化学療法（concurrent chemoradiotherapy; CCRT）後の効果判定においては、拡散強調像が有用であり、CCRT後のDWI高信号の遺残が病勢進行の予測因子となることが報告されている [6]。

---

## T2強調像の選択

産婦人科MRIのT2強調像は、**FSE/TSE（fast spin echo / turbo spin echo）**が標準とされている [1]。HASTE / SSFSEなどのsingle-shotシーケンスは撮像速度に優れるが、子宮結合帯・筋層・粘膜の組織コントラストがFSE/TSEに比べて著しく劣り、産婦人科病変の精密評価には不十分である。

近年はdeep learning再構成技術を活用した高速FSE/TSEの開発が進んでおり、撮像時間を短縮しながら画質を維持することが可能となりつつある。

---

## 拡散強調像の選択

産婦人科MRIの拡散強調像（DWI）は、**single shot EPI（SS-EPI）**が汎用されているが、磁場不均一性によるアーチファクト（幾何学的歪み・ブラリング）が問題となる。

アーチファクト低減技術として以下が注目されている：

- **MUSE（multiplexed sensitivity encoding）**: マルチバンド励起と並列撮像を組み合わせた高解像度DWI技術
- **PROPELLER（periodically rotated overlapping parallel lines with enhanced reconstruction）**: 放射状サンプリングによりモーションアーチファクトに強く、歪みが少ない

子宮頸癌のCCRT後評価において、DWIは治療効果判定・残存腫瘍の検出に有用性が高いことが報告されている [6]。

---

## 胎盤（癒着胎盤スペクトラム）

癒着胎盤スペクトラム（placenta accreta spectrum; PAS）のMRI評価は、ESUR/SAR合同コンセンサスステイトメント [7] に準拠したプロトコールが推奨される。

### 推奨シーケンス

**HASTE（T2強調 single-shot fast spin echo）**と**SSFP（balanced steady-state free precession：TrueFISP / FIESTA / bFFEなど）**の両者を組み合わせることが基本である：

- **HASTE**: 胎盤内T2 dark bands（胎盤実質内の線状低信号）の描出に優れる
- **SSFP**: 胎盤内flow void（異常拡張血管腔）の評価に有用
- 両シーケンスを比較することでT2 dark bandsとflow voidの鑑別が可能となる

### 拡散強調像の役割

DWIのb値は**600〜1000 s/mm²**の使用が推奨されており [7]、ESURステイトメントに準拠している。

**Diffusion lacunae**（Iraha ら 2025 [8]）は、PASにおけるDWIの新概念的所見であり、胎盤内に散在する点状〜結節状のDWI高信号として描出される。通常の胎盤実質とは異なる分布を示し、PAS診断の補助所見として注目されている。

### 病態生理

正常妊娠では、絨毛外栄養膜（extravillous trophoblast; EVT）がらせん動脈壁をリモデリングし、高抵抗・低流量血管から低抵抗・高流量血管へと変換される [9]。PASでは、EVTの深部浸潤により底脱落膜（Nitabuch層）が欠損・菲薄化し、絨毛が子宮筋層へ直接浸潤する。これに伴い異常血管拡張・新生が生じ、MRIでのflow voidおよびT2 dark bandsの原因となる。

### 評価のピットフォール

MRIによるPAS診断において、観察者間一致率が低いとされる所見がある [10]：

- **子宮筋層の菲薄化**: 胎盤直下の筋層が菲薄化して見えても必ずしも癒着を意味しない
- **胎盤床の血管増生**: 生理的妊娠関連血管増生との鑑別が困難な場合がある

これらの所見は単独では特異度が低く、複数所見の総合評価が重要である。

---

## 参考文献

1. 日本医学放射線学会(編); 画像診断ガイドライン2026(仮題), 金原出版(in press).
2. Yamashita Y, et al: Normal uterus and FIGO stage I endometrial carcinoma: dynamic gadolinium-enhanced MR imaging. *Radiology* 186: 495-501, 1993. PMID: 8421757
3. Sakane M, et al: Assessment of myometrial invasion in premenopausal grade 1 endometrial carcinoma: Is magnetic resonance imaging a reliable tool in selecting patients for fertility-preserving therapy? *J Comput Assist Tomogr* 42: 412-417, 2018. PMID: 29189400
4. Berek JS, et al: FIGO staging of endometrial cancer: 2023. *Int J Gynaecol Obstet* 162: 383-394, 2023. PMID: 37337978
5. Shinagare AB, et al: ACR Appropriateness Criteria pretreatment evaluation and follow-up of invasive cancer of the cervix: 2023 update. *J Am Coll Radiol* 21: S249-S267, 2024. PMID: 38823948
6. Park JJ, et al: Prediction of disease progression following concurrent chemoradiotherapy for uterine cervical cancer: value of post-treatment diffusion-weighted imaging. *Eur Radiol* 26: 3272-3279, 2016. PMID: 26685853
7. Jha P, et al: Society of Abdominal Radiology and European Society of Urogenital Radiology joint consensus statement for MR imaging of placenta accreta spectrum disorders. *Eur Radiol* 30: 2604-2615, 2020. PMID: 32040730
8. Iraha Y, et al: Diffusion lacunae: a novel MR imaging finding on diffusion-weighted imaging for diagnosing placenta accreta spectrum. *Jpn J Radiol* 43: 255-265, 2025. PMID: 39259419
9. Jauniaux E, et al: Placenta accreta spectrum: pathophysiology and evidence-based anatomy for prenatal ultrasound imaging. *Am J Obstet Gynecol* 218: 75-87, 2018. PMID: 28599899
10. Parnes B, et al: Reproducibility of MRI features for the diagnosis of placenta accreta spectrum disorders. *Radiology* 312: e240386, 2024. PMID: 39315895
