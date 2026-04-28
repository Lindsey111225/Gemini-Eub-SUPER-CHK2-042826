
export type Language = 'en' | 'zh';
export type Theme = 'light' | 'dark';

export interface PainterStyle {
  name: string;
  id: string;
  colors: {
    bg: string;
    text: string;
    accent: string;
    surface: string;
    border: string;
  };
  fontFamily: string;
}

export interface Scenario {
  id: string;
  name: string;
  nameZh: string;
  conditions: {
    origin?: 'DOMESTIC' | 'IMPORT';
    risk?: 'CLASS_1' | 'CLASS_2' | 'CLASS_3';
    path?: string;
    is_china?: boolean;
    is_rad?: boolean;
    is_software?: boolean;
    is_animal?: boolean;
    category?: string;
    method?: string;
    has_similar?: boolean;
    is_sterile?: boolean;
    is_med_to_md?: boolean;
    is_contract?: boolean;
    has_trademark?: boolean;
    lang_english?: boolean;
    need_stability?: boolean;
    need_biocompat?: boolean;
    is_combination?: boolean;
    us_eu_approved?: boolean;
    need_testing?: boolean;
    ethnic_diff?: boolean;
    auth_type?: string;
    need_license_change?: boolean;
  };
  req: string[];
  cond: string[];
}

export interface Rule {
  id: string;
  name: string;
  nameZh: string;
  description: string;
  descriptionZh: string;
  logic: string;
}

export interface InterrogationDoc {
  name: string;
  type: 'text' | 'markdown' | 'pdf';
  content: string; 
  trimmedContent?: string;
  pageCount?: number;
  selectedPages?: number[];
}

export interface Agent {
  id: string;
  name: string;
  role: string;
  prompt: string;
  model: string;
  maxTokens: number;
  output?: string;
  status: 'idle' | 'running' | 'completed' | 'error';
  agentType?: 'agent1' | 'agent2';
}

export interface Note {
  content: string;
  model: string;
  prompt: string;
}
