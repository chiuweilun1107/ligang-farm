# 里港共享農園 形象官網 — 開發紀錄

## 專案資訊
- **專案名稱**：里港共享農園形象官網
- **GitHub**：https://github.com/chiuweilun1107/ligang-farm
- **線上展示**：https://chiuweilun1107.github.io/ligang-farm/
- **技術堆疊**：Vite + Vanilla JS + Tailwind CSS
- **NotebookLM 專題**：R農場規劃（含原始文件 + 網站架構設計）

---

## 2026-04-02 初版開發

### 來源文件
- `R農場規劃.docx`（7.9MB）— 屏東里港 2000 坪共享農園完整營運計畫
- 已上傳至 NotebookLM 專題作為來源文件，透過 NLM 查詢擷取所有網站所需內容

### 網站架構規劃
依據原始文件內容，規劃 10 大區段，每個元素對應回文件：

| 區段 | 文件對應 |
|------|---------|
| Hero | 品牌定位「高雄人的後花園」、距高雄 30 分鐘 |
| 關於農園 | 經營理念（食農教育×親子體驗×友善農業）、地利優勢 |
| 園區導覽 | 五大功能區（停車、假日農夫、果樹認養、活動體驗、農舍太陽能） |
| 服務方案 | 租田三方案（5/10/20 坪）+ 果樹認養兩方案 |
| 體驗活動 | 六大活動（農夫體驗日、採果節、親子營、烤肉、食農課程、企業團建） |
| 農園風光 | 照片牆（對應文件強調的拍攝重點） |
| 交通位置 | Google Maps 嵌入 + 各地車程 |
| 聯絡表單 | 預約參觀 + 方案選單 + 社群連結 |
| Footer | 農園資訊 + 快速連結 |

### 設計與優化
1. **初版建站** — Vite + Tailwind CSS 單頁形象官網
2. **UI 優化（/refactoring-ui）** — 完整視覺重構：
   - Hero 漸層深度 + 裝飾光暈
   - 卡片動畫升級（cubic-bezier 緩動）
   - Gallery 獨立主題色漸層 + hover 標籤
   - Section 間距增加 + 裝飾分隔線
   - CTA 深綠漸層 + 表單毛玻璃效果
   - Footer hover 動畫
3. **移除全站 emoji** — 全部替換為 SVG 線條圖標
4. **地圖區改版** — 醜 emoji 地圖 → Google Maps 嵌入
5. **Nav/Hero 重疊修正** — 加 pt-24 避免文字碰撞

### AI 生成圖片（Gemini Web API）
共 6 張，存於 `public/images/`：

| 檔案 | 用途 | 內容 |
|------|------|------|
| hero-bg.png | Hero 背景 | 農場鳥瞰全景，田地+果樹+藍天+農舍 |
| about-farm.png | 關於農園 + 親子營 | 亞洲親子家庭田間種菜 |
| fruit-trees.png | 果樹認養 + 採果節 | 檸檬芒果果樹園，陽光透葉 |
| activity-farming.png | 農夫體驗 | 雙手採收生菜特寫 |
| activity-bbq.png | 假日烤肉 | 戶外烤肉聚會，滿桌蔬果 |
| activity-education.png | 食農教育 | 導覽員看板前講解 |

### 部署
- GitHub Pages（gh-pages 分支）
- `vite.config.js` 設定 `base: '/ligang-farm/'`
- 圖片路徑使用 `import.meta.env.BASE_URL` 確保子路徑正確載入

---

## 待辦 / 後續
- [ ] 替換 AI 生成圖為實際農場照片
- [ ] 確認正式地址後更新 Google Maps 嵌入座標
- [ ] 填入電話、Email 等聯絡資訊
- [ ] 社群連結（FB/IG/Line）填入正式 URL
- [ ] 聯絡表單接後端（Google Forms / Formspree 等）
- [ ] 考慮自訂網域
- [ ] 會員/預約功能（Phase 2）
