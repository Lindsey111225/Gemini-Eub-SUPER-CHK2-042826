
import { Scenario, Rule, PainterStyle } from './types';

export const PAINTER_STYLES: PainterStyle[] = [
  {
    id: 'editorial',
    name: 'Professional Polish',
    colors: { bg: 'bg-[#F9F9F7]', text: 'text-ink', accent: 'bg-accent-red', surface: 'bg-white', border: 'border-ink' },
    fontFamily: 'font-sans'
  },
  {
    id: 'van-gogh',
    name: 'Van Gogh',
    colors: { bg: 'bg-blue-900', text: 'text-yellow-100', accent: 'bg-yellow-500', surface: 'bg-blue-800', border: 'border-blue-400' },
    fontFamily: 'font-serif'
  },
  {
    id: 'mondrian',
    name: 'Mondrian',
    colors: { bg: 'bg-white', text: 'text-black', accent: 'bg-red-600', surface: 'bg-stone-100', border: 'border-black' },
    fontFamily: 'font-mono'
  },
  {
    id: 'kusama',
    name: 'Yayoi Kusama',
    colors: { bg: 'bg-yellow-400', text: 'text-black', accent: 'bg-black', surface: 'bg-yellow-300', border: 'border-black' },
    fontFamily: 'font-sans'
  },
  {
    id: 'monet',
    name: 'Monet',
    colors: { bg: 'bg-slate-100', text: 'text-purple-900', accent: 'bg-emerald-400', surface: 'bg-purple-50', border: 'border-emerald-200' },
    fontFamily: 'font-serif'
  },
  {
    id: 'picasso',
    name: 'Picasso',
    colors: { bg: 'bg-zinc-800', text: 'text-pink-100', accent: 'bg-blue-600', surface: 'bg-zinc-700', border: 'border-pink-400' },
    fontFamily: 'font-sans'
  },
  {
    id: 'dali',
    name: 'Salvador Dalí',
    colors: { bg: 'bg-amber-50', text: 'text-amber-950', accent: 'bg-amber-400', surface: 'bg-white', border: 'border-amber-200' },
    fontFamily: 'font-serif'
  },
  {
    id: 'klimt',
    name: 'Gustav Klimt',
    colors: { bg: 'bg-stone-900', text: 'text-amber-200', accent: 'bg-amber-500', surface: 'bg-stone-800', border: 'border-amber-600' },
    fontFamily: 'font-serif'
  },
  {
    id: 'warhol',
    name: 'Andy Warhol',
    colors: { bg: 'bg-fuchsia-500', text: 'text-cyan-100', accent: 'bg-yellow-300', surface: 'bg-fuchsia-400', border: 'border-cyan-400' },
    fontFamily: 'font-sans'
  },
  {
    id: 'basquiat',
    name: 'Basquiat',
    colors: { bg: 'bg-neutral-900', text: 'text-white', accent: 'bg-blue-500', surface: 'bg-neutral-800', border: 'border-white' },
    fontFamily: 'font-mono'
  },
  {
    id: 'magritte',
    name: 'Magritte',
    colors: { bg: 'bg-sky-100', text: 'text-slate-900', accent: 'bg-slate-800', surface: 'bg-white', border: 'border-sky-300' },
    fontFamily: 'font-serif'
  },
  {
    id: 'okeeffe',
    name: 'Georgia O\'Keeffe',
    colors: { bg: 'bg-orange-50', text: 'text-red-900', accent: 'bg-rose-400', surface: 'bg-white', border: 'border-rose-200' },
    fontFamily: 'font-serif'
  },
  {
    id: 'rothko',
    name: 'Mark Rothko',
    colors: { bg: 'bg-red-800', text: 'text-red-100', accent: 'bg-orange-600', surface: 'bg-red-900', border: 'border-transparent' },
    fontFamily: 'font-sans'
  },
  {
    id: 'hopper',
    name: 'Edward Hopper',
    colors: { bg: 'bg-teal-900', text: 'text-yellow-50', accent: 'bg-yellow-600', surface: 'bg-teal-800', border: 'border-yellow-200' },
    fontFamily: 'font-serif'
  },
  {
    id: 'haring',
    name: 'Keith Haring',
    colors: { bg: 'bg-white', text: 'text-black', accent: 'bg-red-500', surface: 'bg-white', border: 'border-black' },
    fontFamily: 'font-sans'
  },
  {
    id: 'matisse',
    name: 'Matisse',
    colors: { bg: 'bg-blue-600', text: 'text-white', accent: 'bg-orange-500', surface: 'bg-blue-500', border: 'border-white' },
    fontFamily: 'font-sans'
  },
  {
    id: 'rembrandt',
    name: 'Rembrandt',
    colors: { bg: 'bg-stone-950', text: 'text-amber-100', accent: 'bg-amber-800', surface: 'bg-stone-900', border: 'border-amber-900' },
    fontFamily: 'font-serif'
  },
  {
    id: 'vermeer',
    name: 'Vermeer',
    colors: { bg: 'bg-indigo-900', text: 'text-stone-100', accent: 'bg-amber-400', surface: 'bg-indigo-800', border: 'border-stone-400' },
    fontFamily: 'font-serif'
  },
  {
    id: 'davinci',
    name: 'Da Vinci',
    colors: { bg: 'bg-stone-200', text: 'text-stone-800', accent: 'bg-stone-600', surface: 'bg-stone-100', border: 'border-stone-400' },
    fontFamily: 'font-serif'
  },
  {
    id: 'banksy',
    name: 'Banksy',
    colors: { bg: 'bg-zinc-200', text: 'text-zinc-900', accent: 'bg-red-600', surface: 'bg-zinc-100', border: 'border-zinc-800' },
    fontFamily: 'font-mono'
  }
];

export const BASE_DOCS: Record<string, string> = {
  "D1": "醫療器材查驗登記申請書",
  "D2": "標籤、說明書或包裝擬稿",
  "D3": "醫療器材商許可執照影本",
  "D4": "出產國許可製售證明正本 (FSC)",
  "D5": "國外原廠授權登記書正本 (LOA)",
  "D6": "品質管理系統證明文件 (QMS/GMP)",
  "D7": "臨床前測試、規格檢驗方法、原始紀錄及成績書",
  "D8": "產品結構、材料、規格、性能、用途、圖樣資料",
  "D9": "臨床證據資料 (Clinical Evidence)",
  "D10": "發生游離輻射器材之輻射防護安全資料",
  "D11": "醫療器材安全性與功效性基本規範及技術文件摘要 (STED)",
  "D12": "原廠同一產品不同品名之說明函正本",
  "D13": "原核准之標籤、說明書或包裝影本 (蓋核定章)",
  "D14": "原核准之醫療器材許可證影本",
  "D15": "其他經中央主管機關指定之文件",
  "D16": "樣品送驗 (依公告品項)",
  "D17": "中文說明書詳細譯稿及產品外觀彩色照片",
  "D18": "委託製造契約書 (受託/委託方關係證明)",
  "D19": "產地為中國之經濟部准許輸入證明文件",
  "D20": "動物來源(牛羊)原料來源管制說明及證明",
  "D21": "商標註冊相關資料 (若品名冠有商標)",
  "D22": "軟體確效報告 (Software Validation)",
  "D23": "生物相容性報告 (Biocompatibility)",
  "D24": "電氣安全及電磁相容性報告 (Safety/EMC)",
  "D25": "滅菌確效報告 (Sterilization Validation)",
  "D26": "安定性試驗報告 (Stability Data)",
  "D27": "類似品比較暨臨床前測試資料符合性聲明書",
  "D28": "基本規範符合性聲明書 (EP Check List)",
  "D29": "臨床前測試資料切結書 (特定公告品項)",
  "D30": "藥品優良製造規範 (GMP) 證明文件 (藥轉醫專用)"
};

export const SCENARIOS: Scenario[] = [
  { "id": "S01", "name": "Domestic Class 2 Standard", "nameZh": "國產二級標準案", "conditions": { "origin": "DOMESTIC", "risk": "CLASS_2", "path": "STANDARD" }, "req": ["D1","D2","D3","D6","D8","D15"], "cond": ["D7","D9","D10","D16"] },
  { "id": "S02", "name": "Import Class 2 Standard", "nameZh": "輸入二級標準案", "conditions": { "origin": "IMPORT", "risk": "CLASS_2", "path": "STANDARD" }, "req": ["D1","D2","D3","D4","D5","D6","D8"], "cond": ["D7","D9","D10","D11","D15","D16"] },
  { "id": "S03", "name": "Domestic Class 3 Standard", "nameZh": "國產三級標準案", "conditions": { "origin": "DOMESTIC", "risk": "CLASS_3", "path": "STANDARD" }, "req": ["D1","D2","D3","D6","D7","D8","D11"], "cond": ["D9","D10","D15","D16"] },
  { "id": "S04", "name": "Import Class 3 Standard", "nameZh": "輸入三級標準案", "conditions": { "origin": "IMPORT", "risk": "CLASS_3", "path": "STANDARD" }, "req": ["D1","D2","D3","D4","D5","D6","D7","D8","D11"], "cond": ["D9","D10","D15","D16"] },
  { "id": "S05", "name": "Domestic Class 2 Diff Name", "nameZh": "國產二級同一產品不同品名", "conditions": { "origin": "DOMESTIC", "risk": "CLASS_2", "path": "DIFF_NAME" }, "req": ["D1","D2","D3","D12","D13","D14"], "cond": ["D15"] },
  { "id": "S06", "name": "Import Class 2 Diff Name", "nameZh": "輸入二級同一產品不同品名", "conditions": { "origin": "IMPORT", "risk": "CLASS_2", "path": "DIFF_NAME" }, "req": ["D1","D2","D3","D4","D5","D12","D13","D14"], "cond": ["D15"] },
  { "id": "S07", "name": "Domestic Class 3 Diff Name", "nameZh": "國產三級同一產品不同品名", "conditions": { "origin": "DOMESTIC", "risk": "CLASS_3", "path": "DIFF_NAME" }, "req": ["D1","D2","D3","D12","D13","D14"], "cond": ["D15"] },
  { "id": "S08", "name": "Import Class 3 Diff Name", "nameZh": "輸入三級同一產品不同品名", "conditions": { "origin": "IMPORT", "risk": "CLASS_3", "path": "DIFF_NAME" }, "req": ["D1","D2","D3","D4","D5","D12","D13","D14"], "cond": ["D15"] },
  { "id": "S09", "name": "Domestic Export Only", "nameZh": "專供外銷(國產)", "conditions": { "origin": "DOMESTIC", "path": "EXPORT_ONLY" }, "req": ["D1","D3","D6","D15"], "cond": [] },
  { "id": "S10", "name": "Import Export Only", "nameZh": "專供外銷(輸入)", "conditions": { "origin": "IMPORT", "path": "EXPORT_ONLY" }, "req": ["D1","D3","D6","D15"], "cond": [] },
  { "id": "S11", "name": "Domestic Class 2 + China", "nameZh": "國產二級+中國產地", "conditions": { "origin": "DOMESTIC", "risk": "CLASS_2", "is_china": true }, "req": ["D1","D2","D3","D6","D8","D19"], "cond": ["D7"] },
  { "id": "S12", "name": "Import Class 2 + China", "nameZh": "輸入二級+中國產地", "conditions": { "origin": "IMPORT", "risk": "CLASS_2", "is_china": true }, "req": ["D1","D2","D3","D4","D5","D6","D8","D19"], "cond": ["D7"] },
  { "id": "S13", "name": "Domestic Class 3 + China", "nameZh": "國產三級+中國產地", "conditions": { "origin": "DOMESTIC", "risk": "CLASS_3", "is_china": true }, "req": ["D1","D2","D3","D6","D7","D8","D11","D19"], "cond": ["D9"] },
  { "id": "S14", "name": "Import Class 3 + China", "nameZh": "輸入三級+中國產地", "conditions": { "origin": "IMPORT", "risk": "CLASS_3", "is_china": true }, "req": ["D1","D2","D3","D4","D5","D6","D7","D8","D11","D19"], "cond": ["D9"] },
  { "id": "S15", "name": "Domestic Class 2 + Radiation", "nameZh": "國產二級+輻射醫材", "conditions": { "origin": "DOMESTIC", "risk": "CLASS_2", "is_rad": true }, "req": ["D1","D2","D3","D6","D8","D10"], "cond": ["D7"] },
  { "id": "S16", "name": "Import Class 2 + Radiation", "nameZh": "輸入二級+輻射醫材", "conditions": { "origin": "IMPORT", "risk": "CLASS_2", "is_rad": true }, "req": ["D1","D2","D3","D4","D5","D6","D8","D10"], "cond": ["D7"] },
  { "id": "S17", "name": "Domestic Class 3 + Radiation", "nameZh": "國產三級+輻射醫材", "conditions": { "origin": "DOMESTIC", "risk": "CLASS_3", "is_rad": true }, "req": ["D1","D2","D3","D6","D7","D8","D10","D11"], "cond": ["D9"] },
  { "id": "S18", "name": "Import Class 3 + Radiation", "nameZh": "輸入三級+輻射醫材", "conditions": { "origin": "IMPORT", "risk": "CLASS_3", "is_rad": true }, "req": ["D1","D2","D3","D4","D5","D6","D7","D8","D10","D11"], "cond": ["D9"] },
  { "id": "S19", "name": "Import Class 2 + Animal", "nameZh": "輸入二級+動物組織", "conditions": { "origin": "IMPORT", "risk": "CLASS_2", "is_animal": true }, "req": ["D1","D2","D3","D4","D5","D6","D8","D20"], "cond": ["D7"] },
  { "id": "S20", "name": "Import Class 3 + Animal", "nameZh": "輸入三級+動物組織", "conditions": { "origin": "IMPORT", "risk": "CLASS_3", "is_animal": true }, "req": ["D1","D2","D3","D4","D5","D6","D7","D8","D11","D20"], "cond": ["D9"] },
  { "id": "S21", "name": "Simplified Class 2 (7-2-1)", "nameZh": "二級簡化(7-2-1)標準", "conditions": { "risk": "CLASS_2", "method": "SIMPLIFIED_721" }, "req": ["D1","D2","D3","D6","D8","D11","D28"], "cond": ["D7"] },
  { "id": "S22", "name": "Simplified Class 2 (7-2-2)", "nameZh": "二級簡化(7-2-2)切結", "conditions": { "risk": "CLASS_2", "method": "SIMPLIFIED_722" }, "req": ["D1","D2","D3","D6","D8","D29"], "cond": ["D7"] },
  { "id": "S23", "name": "Simplified Class 2 (7-3)", "nameZh": "二級簡化(7-3)類似品聲明", "conditions": { "risk": "CLASS_2", "method": "SIMPLIFIED_73" }, "req": ["D1","D2","D3","D6","D8","D27"], "cond": ["D7"] },
  { "id": "S24", "name": "Class 3 Global Innovation", "nameZh": "三級全球首創(無類似品)", "conditions": { "risk": "CLASS_3", "has_similar": false }, "req": ["D1","D2","D3","D6","D7","D8","D9","D11"], "cond": ["D4"] },
  { "id": "S25", "name": "Domestic Instrument", "nameZh": "國產儀器類醫材", "conditions": { "origin": "DOMESTIC", "category": "INSTRUMENT" }, "req": ["D1","D2","D3","D6","D8","D24"], "cond": ["D7"] },
  { "id": "S26", "name": "Import Instrument", "nameZh": "輸入儀器類醫材", "conditions": { "origin": "IMPORT", "category": "INSTRUMENT" }, "req": ["D1","D2","D3","D4","D5","D6","D8","D24"], "cond": ["D7"] },
  { "id": "S27", "name": "Domestic Class 2 + SaMD", "nameZh": "國產二級+軟體(SaMD)", "conditions": { "origin": "DOMESTIC", "risk": "CLASS_2", "is_software": true }, "req": ["D1","D2","D3","D6","D8","D22"], "cond": ["D7"] },
  { "id": "S28", "name": "Import Class 2 + SaMD", "nameZh": "輸入二級+軟體(SaMD)", "conditions": { "origin": "IMPORT", "risk": "CLASS_2", "is_software": true }, "req": ["D1","D2","D3","D4","D5","D6","D8","D22"], "cond": ["D7"] },
  { "id": "S29", "name": "Domestic Class 3 + SaMD", "nameZh": "國產三級+軟體(SaMD)", "conditions": { "origin": "DOMESTIC", "risk": "CLASS_3", "is_software": true }, "req": ["D1","D2","D3","D6","D7","D8","D11","D22"], "cond": ["D9"] },
  { "id": "S30", "name": "Import Class 3 + SaMD", "nameZh": "輸入三級+軟體(SaMD)", "conditions": { "origin": "IMPORT", "risk": "CLASS_3", "is_software": true }, "req": ["D1","D2","D3","D4","D5","D6","D7","D8","D11","D22"], "cond": ["D9"] },
  { "id": "S31", "name": "Sterile Medical Device", "nameZh": "滅菌類醫材", "conditions": { "is_sterile": true }, "req": ["D25"], "cond": ["D7"] },
  { "id": "S32", "name": "Med-to-MD Transition", "nameZh": "藥轉醫過渡案", "conditions": { "is_med_to_md": true }, "req": ["D1","D2","D3","D30"], "cond": ["D6"] },
  { "id": "S33", "name": "Contract Mfg (Domestic)", "nameZh": "委託製造(國產)", "conditions": { "origin": "DOMESTIC", "is_contract": true }, "req": ["D1","D3","D6","D18"], "cond": [] },
  { "id": "S34", "name": "Class 2 No Similar (9-4)", "nameZh": "無類似品二級(9-4)醫材", "conditions": { "risk": "CLASS_2", "has_similar": false }, "req": ["D1","D2","D3","D6","D8","D9"], "cond": ["D7"] },
  { "id": "S35", "name": "Device with Trademark", "nameZh": "冠有商標之醫材", "conditions": { "has_trademark": true }, "req": ["D21"], "cond": [] },
  { "id": "S36", "name": "Class 2 with Similar (9-3)", "nameZh": "二級具類似品(9-3)免臨床", "conditions": { "risk": "CLASS_2", "has_similar": true }, "req": ["D1","D2","D3","D6","D8"], "cond": ["D9"] },
  { "id": "S37", "name": "Import Non-English", "nameZh": "輸入案+外文非英文", "conditions": { "origin": "IMPORT", "lang_english": false }, "req": ["D17"], "cond": [] },
  { "id": "S38", "name": "Stability Required", "nameZh": "安定性要求醫材", "conditions": { "need_stability": true }, "req": ["D26"], "cond": ["D8"] },
  { "id": "S39", "name": "Biocompatibility Required", "nameZh": "生物相容性要求醫材", "conditions": { "need_biocompat": true }, "req": ["D23"], "cond": ["D7"] },
  { "id": "S40", "name": "Class 3 CER", "nameZh": "三級案+臨床評估報告", "conditions": { "risk": "CLASS_3", "method": "CER" }, "req": ["D9","D11"], "cond": [] },
  { "id": "S41", "name": "IVD Class 2 Standard", "nameZh": "體外診斷二級標準", "conditions": { "category": "IVD", "risk": "CLASS_2" }, "req": ["D1","D2","D3","D6","D8"], "cond": ["D7"] },
  { "id": "S42", "name": "IVD Class 3 Standard", "nameZh": "體外診斷三級標準", "conditions": { "category": "IVD", "risk": "CLASS_3" }, "req": ["D1","D2","D3","D6","D7","D8","D11"], "cond": ["D9"] },
  { "id": "S43", "name": "Combination Product", "nameZh": "組合產品(醫材主體)", "conditions": { "is_combination": true }, "req": ["D1","D2","D8","D15"], "cond": ["D9"] },
  { "id": "S44", "name": "Approved Abroad (Class 3)", "nameZh": "國外已上市三級(簡化)", "conditions": { "risk": "CLASS_3", "us_eu_approved": true }, "req": ["D4","D5","D7","D11"], "cond": ["D9"] },
  { "id": "S45", "name": "Required Testing Case", "nameZh": "需檢驗品項送驗案", "conditions": { "need_testing": true }, "req": ["D16"], "cond": [] },
  { "id": "S46", "name": "Add Specs Matching", "nameZh": "同一產品增列規格", "conditions": { "path": "ADD_SPEC" }, "req": ["D1","D2","D8","D14"], "cond": ["D7"] },
  { "id": "S47", "name": "Class 2 Ethnic Diff", "nameZh": "二級類似品(有種族差異性)", "conditions": { "risk": "CLASS_2", "ethnic_diff": true }, "req": ["D9"], "cond": [] },
  { "id": "S48", "name": "HQ Authorization", "nameZh": "輸入總公司授權案", "conditions": { "origin": "IMPORT", "auth_type": "HQ" }, "req": ["D5"], "cond": [] },
  { "id": "S49", "name": "License Change Parallel", "nameZh": "藥商執照變更併案", "conditions": { "need_license_change": true }, "req": ["D3"], "cond": [] },
  { "id": "S50", "name": "EUA Pathway", "nameZh": "緊急授權(EUA)案", "conditions": { "path": "EUA" }, "req": ["D1","D2","D8","D15"], "cond": ["D6"] }
];

export const CONFLICT_RULES: Rule[] = [
  { "id": "C01", "name": "FSC Validity", "nameZh": "FSC 效期判定", "logic": "D4_issue_date < today - 730 days", "description": "FSC 已超過 2 年效期，依準則規定無效。", "descriptionZh": "FSC exceeded 2 year validity period." },
  { "id": "C02", "name": "QMS Expiry Warning", "nameZh": "QMS 效期預警", "logic": "D9_expiry_date < today + 180 days", "description": "QMS 證明文件將於半年內過期，建議更換。", "descriptionZh": "QMS certificate will expire within 180 days." },
  { "id": "C03", "name": "Agent Consistency", "nameZh": "代理商一致性", "logic": "D5_agent != D3_owner", "description": "授權書(LOA)代理商與藥商執照持有人不符。", "descriptionZh": "Authorization letter agent does not match license holder." },
  { "id": "C04", "name": "Address Matching", "nameZh": "產地地址匹配", "logic": "D4_mfg_addr != D9_mfg_addr", "description": "FSC 地址與 QMS 廠址字串不一致，請核對。", "descriptionZh": "FSC address does not match QMS address." },
  { "id": "C05", "name": "Class 3 STED Requirement", "nameZh": "三級案 STED 強制性", "logic": "risk == 'CLASS_3' and not exists(D11)", "description": "第三等級案件必須提供 STED 技術文件摘要。", "descriptionZh": "Class 3 must provide STED summary." },
  { "id": "C06", "name": "Sterile Report Conflict", "nameZh": "無菌報告衝突", "logic": "attr_sterile == true and not exists(D25)", "description": "宣稱為無菌產品，但缺少滅菌確效報告。", "descriptionZh": "Sterile claim but missing validation report." },
  { "id": "C07", "name": "China Origin Permit", "nameZh": "中國產地准許證", "logic": "origin_country == 'CHINA' and not exists(D19)", "description": "產地為中國，應檢附經濟部輸入許可證明。", "descriptionZh": "China origin requires specific import permit." },
  { "id": "C08", "name": "Transfer Statement", "nameZh": "讓與案共同聲明", "logic": "change_type == 'TRANSFER' and not exists(D16)", "description": "讓與案件必須由雙方共同簽署讓與聲明書。", "descriptionZh": "Transfer requires mutual statement." },
  { "id": "C09", "name": "Reissue Logic Error", "nameZh": "遺失補發邏輯錯誤", "logic": "path == 'REISSUE' and exists(D3)", "description": "既申請遺失補發，系統不應偵測到原許可證正本。", "descriptionZh": "Reissue cannot exist with original document." },
  { "id": "C10", "name": "Software Validation", "nameZh": "軟體確效報告", "logic": "attr_software == true and not exists(D22)", "description": "產品包含軟體功能，缺少軟體確效報告(Validation)。", "descriptionZh": "Software requires validation report." },
  { "id": "C11", "name": "FSC Translation", "nameZh": "FSC 語言譯本", "logic": "D4_lang == 'OTHER' and not exists(D29)", "description": "FSC 非英日文，應檢附核證之中文譯本。", "descriptionZh": "Non-En/Jp FSC requires translation." },
  { "id": "C12", "name": "Label Comparison", "nameZh": "變更案標籤對照", "logic": "change_label == true and (not exists(D4) or not exists(D5))", "description": "標籤變更需同時提供原核定本與擬變更稿對照。", "descriptionZh": "Label change requires comparison sheet." },
  { "id": "C13", "name": "Biocompatibility", "nameZh": "生物相容性完整性", "logic": "attr_implant == true and not exists(D23)", "description": "植入性產品必須檢附生物相容性測試報告。", "descriptionZh": "Implants require biocompatibility data." },
  { "id": "C14", "name": "Radiation Data", "nameZh": "輻射防護資料", "logic": "attr_radiation == true and not exists(D13)", "description": "放射性醫材必須提供輻射防護安全資料。", "descriptionZh": "Radiation requires safety data." },
  { "id": "C15", "name": "Electrical Safety", "nameZh": "電氣安全測試", "logic": "category == 'INSTRUMENT' and not exists(D24)", "description": "儀器類醫材必須檢附電氣安全(IEC 60601)報告。", "descriptionZh": "Instrument requires safety report." },
  { "id": "C16", "name": "Future Date Error", "nameZh": "變更說明函日期", "logic": "D14_date > today", "description": "原廠說明函日期為未來時間，請檢查輸入格式。", "descriptionZh": "Letter date cannot be in the future." },
  { "id": "C17", "name": "IVD Technical Data", "nameZh": "IVD 技術資料", "logic": "category == 'IVD' and risk == 'CLASS_3' and not exists(D24)", "description": "三級 IVD 應提供完整技術性資料。", "descriptionZh": "Class 3 IVD needs tech data." },
  { "id": "C18", "name": "Address Rezoning", "nameZh": "門牌整編排除", "logic": "change_addr == true and rezoning == true and exists(D9)", "description": "若為門牌整編，可豁免新廠 QMS 證明。", "descriptionZh": "Rezoning may exempt new QMS cert." },
  { "id": "C19", "name": "GMP Substitution", "nameZh": "藥轉醫 GMP 替代", "logic": "med_to_md == true and exists(D30)", "description": "藥轉醫案件，系統已接受以 GMP 證明替代 QMS。", "descriptionZh": "GMP can substitute QMS for transition case." },
  { "id": "C20", "name": "Testing Status", "nameZh": "樣品送驗狀態", "logic": "testing_needed == true and not exists(D27)", "description": "依規定需送驗，請上傳檢驗費與樣品明細。", "descriptionZh": "Testing required, upload fee details." },
  { "id": "C21", "name": "LOA Scope", "nameZh": "LOA 授權範圍", "logic": "D5_scope != 'FULL' and change_spec == true", "description": "授權書範圍不完整，可能無法支援規格變更。", "descriptionZh": "Incomplete LOA scope for spec change." },
  { "id": "C22", "name": "Simplified Statement", "nameZh": "二級簡化聲明", "logic": "risk == 'CLASS_2' and path == 'SIMPLIFIED' and not exists(D27)", "description": "二級簡化路徑應附類似品比較暨符合性聲明。", "descriptionZh": "Simplified path requires compliance stmt." },
  { "id": "C23", "name": "Country Mismatch", "nameZh": "原廠地址國別匹配", "logic": "D4_country != D9_country", "description": "FSC 生產國與 QMS 登錄國別不一致。", "descriptionZh": "FSC country does not match QMS country." },
  { "id": "C24", "name": "Clinical Report (CER)", "nameZh": "臨床評價報告(CER)", "logic": "risk == 'CLASS_3' and not exists(D9_clinical)", "description": "三級醫材應包含臨床評價報告(CER)或臨床數據。", "descriptionZh": "Class 3 requires clinical evaluation report." },
  { "id": "C25", "name": "Contract Mfg Agreement", "nameZh": "委託製造關係", "logic": "is_contract == true and not exists(D28)", "description": "屬委託製造，應檢附委託製造契約書影本。", "descriptionZh": "Contract manufacturing requires agreement." },
  { "id": "C26", "name": "Stability Shelf Life", "nameZh": "穩定性試驗效期", "logic": "D26_shelf_life != label_shelf_life", "description": "穩定性報告年限與標籤宣稱效期不符。", "descriptionZh": "Stability data does not match claimed shelf life." },
  { "id": "C27", "name": "IVD Storage", "nameZh": "IVD 儲存條件", "logic": "category == 'IVD' and not exists(D45_storage)", "description": "IVD 產品應明確提供儲存條件資料(D45)。", "descriptionZh": "IVD must provide storage conditions." },
  { "id": "C28", "name": "Transfer Date Logic", "nameZh": "讓與日期邏輯", "logic": "transfer_date < D3_issue_date", "description": "讓與日期早於許可證核發日期，邏輯有誤。", "descriptionZh": "Transfer date before license date error." },
  { "id": "C29", "name": "Class 3 Efficacy Change", "nameZh": "三級效能縮減", "logic": "risk == 'CLASS_3' and change_intended_use == true", "description": "三級效能變更審查較嚴，需確認 D12 是否詳盡。", "descriptionZh": "Class 3 efficacy change strict review." },
  { "id": "C30", "name": "Color Photos", "nameZh": "標籤彩色照片", "logic": "D5_color == false", "description": "標籤擬稿建議提供彩色版，以利外觀比對。", "descriptionZh": "Color version recommended for labels." },
  { "id": "C31", "name": "Export Exemption", "nameZh": "專供外銷標籤豁免", "logic": "path == 'EXPORT' and exists(D2)", "description": "專供外銷案不需標籤擬稿，系統已自動排除。", "descriptionZh": "Export only case does not need label draft." },
  { "id": "C32", "name": "Trademark Check", "nameZh": "品名商標核對", "logic": "brand_name == true and not exists(D21)", "description": "品名含商標者，建議提供商標註冊資料。", "descriptionZh": "Trademark name needs registration data." },
  { "id": "C33", "name": "Class 2 ClinicalData", "nameZh": "二級無類似品臨床", "logic": "risk == 'CLASS_2' and similar == false and not exists(D9)", "description": "二級無類似品案件應加強檢附臨床數據。", "descriptionZh": "Class 2 no similar requires clinical data." },
  { "id": "C34", "name": "LOA Change Missing", "nameZh": "代理權移轉遺漏", "logic": "path == 'LOA_CHANGE' and not exists(D8)", "description": "代理權移轉案件必須上傳新授權書。", "descriptionZh": "LOA change requires new authorization letter." },
  { "id": "C35", "name": "Factory Name Match", "nameZh": "QMS 廠名相似度", "logic": "D9_factory_name != D4_factory_name", "description": "QMS 廠名與 FSC 廠名不精確匹配，請確認。", "descriptionZh": "Factory name mismatch across documents." },
  { "id": "C36", "name": "Duplicate Chinese Name", "nameZh": "中文品名重複檢查", "logic": "name_cn == existing_database", "description": "該中文品名已被其他許可證佔用，請修改。", "descriptionZh": "Chinese name already exists in database." },
  { "id": "C37", "name": "English Name Spelling", "nameZh": "英文品名拼寫衝突", "logic": "name_en != D4_name_en", "description": "英文品名與產地證明(FSC)上名稱不符。", "descriptionZh": "English name spelling mismatch with FSC." },
  { "id": "C38", "name": "Animal Source Control", "nameZh": "動物來源管制", "logic": "attr_animal == true and not exists(D20)", "description": "含牛羊組織者，需附來源管制說明(D20)。", "descriptionZh": "Animal tissue requires source control info." },
  { "id": "C39", "name": "IVD Specimen Type", "nameZh": "體外診斷檢體類型", "logic": "category == 'IVD' and specimen_type == null", "description": "請於申請書標明 IVD 之檢體類型。", "descriptionZh": "Mark specimen type for IVD." },
  { "id": "C40", "name": "Multi-Model List", "nameZh": "單一包裝多型號", "logic": "multi_model == true and not exists(D15)", "description": "多型號變更，必須檢附詳盡之型號對照表。", "descriptionZh": "Multi-model requires comparison table." },
  { "id": "C41", "name": "Signatory Title", "nameZh": "說明函授權有效性", "logic": "D14_sign_title == 'LOW'", "description": "原廠說明函簽署人職位過低，可能不被採認。", "descriptionZh": "Signatory position may be too low." },
  { "id": "C42", "name": "LOA Legalization", "nameZh": "外文授權書核證", "logic": "D5_notarized == false", "description": "國外授權書應經我國駐外館處驗證。", "descriptionZh": "Foreign LOA requires notarization." },
  { "id": "C43", "name": "Consolidated Change", "nameZh": "合併規格變更技術要求", "logic": "change_spec == true and change_intended_use == true", "description": "合併效能與規格變更，技術文件應整合說明。", "descriptionZh": "Consolidated change needs tech integration doc." },
  { "id": "C44", "name": "Label Defacement", "nameZh": "原核定標籤污損", "logic": "path == 'LABEL_DEFACED' and not exists(D4)", "description": "污損換發必須檢附原污損之核定標籤正本。", "descriptionZh": "Defaced label replacement requires original." },
  { "id": "C45", "name": "Sterilization Change", "nameZh": "滅菌方式變更報告", "logic": "change_sterile_method == true and not exists(D25)", "description": "變更滅菌方式應重新提交滅菌確效驗證。", "descriptionZh": "Sterilization change requires re-validation." },
  { "id": "C46", "name": "EP Check List Gaps", "nameZh": "EP Check List 缺項", "logic": "risk == 'CLASS_3' and exists(D11) and D28_ep_list == false", "description": "STED 內應包含基本規範(EP)符合性清單。", "descriptionZh": "STED should include EP compliance list." },
  { "id": "C47", "name": "Raw Data Integrity", "nameZh": "臨床前試驗原始數據", "logic": "D7_raw_data == false", "description": "臨床前測試僅有摘要無原始紀錄，可能被退件。", "descriptionZh": "Missing raw test records for preclinical tests." },
  { "id": "C48", "name": "Non-Core Change", "nameZh": "變更不涉原核准事項", "logic": "change_item == 'OTHER' and exists(D15)", "description": "其他變更應檢附變更前後內容比較表。", "descriptionZh": "Other changes require comparison sheet." },
  { "id": "C49", "name": "Simplified 722", "nameZh": "二級案簡化切結", "logic": "path == 'SIMPLIFIED_722' and not exists(D29)", "description": "依 7-2-2 辦辦辦者應檢附臨床前測試資料切結書。", "descriptionZh": "7-2-2 requires preclinical commitment letter." },
  { "id": "C50", "name": "Conflict Overflow", "nameZh": "總體邏輯一致性檢查", "logic": "errors_count > 10", "description": "本案衝突過多，請重新檢視案件完整性。", "descriptionZh": "Too many conflicts detected." }
];

export const MODELS = [
  'gemini-3-flash-preview',
  'gemini-3.1-flash-lite-preview',
  'gemini-2.5-flash',
  'gemini-2.5-flash-lite',
  'gpt-4o-mini',
  'gpt-4.1-mini',
  'claude-3-5-sonnet',
  'grok-4-fast-reasoning',
  'grok-3-mini'
];

export const I18N = {
  en: {
    title: 'MDMDS Pro',
    subtitle: 'Regulatory Intelligence System',
    dashboard: 'Dashboard',
    interrogation: 'Interrogation',
    inspector: 'Doc Inspector',
    notes: 'AI Note Keeper',
    rules: 'Rules Manager',
    style: 'Artist Style',
    jackpot: 'Style Jackpot',
    language: 'Language',
    apiKey: 'API Key',
    execute: 'Execute Chain',
    magic: 'AI Magics',
    agents: 'Agents',
    prompt: 'Prompt',
    maxTokens: 'Max Tokens',
    status: 'System Status',
    logs: 'Live Logs',
    ready: 'Ready',
    processing: 'Processing',
    conflictFound: 'Conflicts Detected',
    noConflicts: 'Integrity Verified',
    save: 'Save Note',
    formatting: 'AI Formatting',
    keywords: 'AI Keywords',
    summarize: 'AI Summarize',
    translate: 'AI Translate',
    fixGrammar: 'Fix Grammar',
    extractEntities: 'Extract Entities'
  },
  zh: {
    title: 'MDMDS Pro',
    subtitle: '醫療器材查驗登記智慧審核系統',
    dashboard: '儀表板',
    interrogation: '智慧審問',
    inspector: '衝突核對',
    notes: 'AI 筆記助手',
    rules: '規則管理器',
    style: '藝術風格',
    jackpot: '風格大樂透',
    language: '語系',
    apiKey: 'API 金鑰',
    execute: '執行代理鏈',
    magic: 'AI 魔法',
    agents: '代理人',
    prompt: '提示詞',
    maxTokens: '最大 Token',
    status: '系統狀態',
    logs: '即時日誌',
    ready: '就緒',
    processing: '處理中',
    conflictFound: '偵測到邏輯衝突',
    noConflicts: '文件完整性良好',
    save: '儲存筆記',
    formatting: 'AI 格式化',
    keywords: 'AI 關鍵字',
    summarize: 'AI 摘要',
    translate: 'AI 翻譯',
    fixGrammar: '語法修正',
    extractEntities: '實體提取'
  }
};
