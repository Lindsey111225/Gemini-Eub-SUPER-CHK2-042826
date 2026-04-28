
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PDFDocument } from 'pdf-lib';
import { 
  ShieldCheck, 
  Search, 
  FileText, 
  BookOpen, 
  Settings, 
  Moon, 
  Sun, 
  Languages, 
  Dices, 
  Zap, 
  Activity, 
  Terminal, 
  CheckCircle2, 
  AlertTriangle, 
  ChevronRight, 
  Sparkles,
  RefreshCw,
  Code2,
  Key,
  LayoutDashboard,
  BrainCircuit,
  PencilLine,
  Eraser,
  Palette,
  FileJson,
  PlusCircle,
  Download,
  Upload
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { cn } from './lib/utils';
import { 
  Language, 
  Theme, 
  PainterStyle, 
  Scenario, 
  Rule, 
  Agent, 
  Note,
  InterrogationDoc 
} from './types';
import { 
  PAINTER_STYLES, 
  SCENARIOS, 
  CONFLICT_RULES, 
  MODELS, 
  I18N 
} from './constants';
import { 
  setCustomApiKey, 
  isApiKeySet, 
  runAgent 
} from './lib/gemini';

// --- Components ---

const WowVisual = ({ type }: { type: number }) => {
  switch (type) {
    case 1: // Scanning Matrix
      return (
        <motion.div 
          className="fixed inset-0 pointer-events-none z-50 overflow-hidden mix-blend-overlay opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-red/20 to-transparent h-40 w-full"
            animate={{ top: ['-20%', '120%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(0deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
          <motion.div 
            className="absolute inset-0 flex items-center justify-center text-accent-red font-black text-9xl opacity-5 select-none"
            animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            SCANNING
          </motion.div>
        </motion.div>
      );
    case 2: // Neural Pulse
      return (
        <motion.div 
          className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center bg-black/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {[1, 2, 3].map((i) => (
            <motion.div 
              key={i}
              className="absolute border-2 border-cyan-500/50 rounded-full"
              initial={{ width: 0, height: 0, opacity: 1 }}
              animate={{ width: 1000, height: 1000, opacity: 0 }}
              transition={{ duration: 1.5, delay: i * 0.3, ease: "easeOut" }}
            />
          ))}
        </motion.div>
      );
    case 3: // Digital Rainfall
      return (
        <motion.div 
          className="fixed inset-0 pointer-events-none z-50 overflow-hidden opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          exit={{ opacity: 0 }}
        >
          {Array.from({ length: 40 }).map((_, i) => (
            <motion.div 
              key={i}
              className="absolute text-[8px] font-mono text-emerald-500 whitespace-pre leading-none"
              style={{ left: `${i * 2.5}%` }}
              animate={{ y: [-100, 1000] }}
              transition={{ duration: Math.random() * 2 + 1, repeat: Infinity, ease: "linear" }}
            >
              {Array.from({ length: 20 }).map(() => String.fromCharCode(33 + Math.random() * 93)).join('\n')}
            </motion.div>
          ))}
        </motion.div>
      );
    case 4: // Chromatic Abberation
      return (
        <motion.div 
          className="fixed inset-0 pointer-events-none z-50 mix-blend-screen bg-red-500/10"
          animate={{ x: [-2, 2, -2, 0], opacity: [0, 0.5, 0] }}
          transition={{ duration: 0.1, repeat: 5 }}
        />
      );
    case 5: // Geometric Shatter
      return (
        <motion.div 
          className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center"
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-24 h-24 border border-zinc-500/30"
              initial={{ rotate: 0, scale: 0, opacity: 1 }}
              animate={{ 
                rotate: Math.random() * 360, 
                scale: 4, 
                opacity: 0,
                x: (Math.random() - 0.5) * 800,
                y: (Math.random() - 0.5) * 800
              }}
              transition={{ duration: 1, ease: "circOut" }}
            />
          ))}
        </motion.div>
      );
    case 6: // Golden Ratio Spiral
      return (
        <motion.div 
          className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center overflow-hidden bg-black/20 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute border border-accent-red/40"
                style={{
                  width: `${Math.pow(1.618, i) * 20}px`,
                  height: `${Math.pow(1.618, i) * 20}px`,
                  borderRadius: i % 2 === 0 ? '0%' : '50%'
                }}
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.5, 0.1],
                  rotate: i * 45
                }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
              />
            ))}
          </motion.div>
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="absolute p-8 bg-white border-2 border-ink shadow-neo text-center"
          >
            <h2 className="text-4xl font-bold serif italic mb-2">COMPLETE</h2>
            <p className="text-xs font-bold uppercase tracking-widest opacity-60">System Synchronized</p>
          </motion.div>
        </motion.div>
      );
    default:
      return null;
  }
};

// --- App Layout ---

export default function App() {
  // State
  const [lang, setLang] = useState<Language>('zh');
  const [theme, setTheme] = useState<Theme>('light');
  const [painter, setPainter] = useState<PainterStyle>(PAINTER_STYLES[0]);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'interrogation' | 'inspector' | 'notes' | 'rules'>('dashboard');
  const [apiKey, setApiKey] = useState(process.env.GEMINI_API_KEY || '');
  const [isAiReady, setIsAiReady] = useState(false);
  const [wowEffect, setWowEffect] = useState<number | null>(null);
  const [logs, setLogs] = useState<{ id: string; msg: string; type: 'info' | 'warn' | 'error' }[]>([]);
  const [conflictRules, setConflictRules] = useState<Rule[]>(CONFLICT_RULES);
  const [scenarios, setScenarios] = useState<Scenario[]>(SCENARIOS);
  const [rulesSource, setRulesSource] = useState<'mdpass' | 'conflict'>('mdpass');
  const [interrogationLocked, setInterrogationLocked] = useState(false);
  const [magicPromptOverride, setMagicPromptOverride] = useState('');
  const [interrogationDoc, setInterrogationDoc] = useState<InterrogationDoc | null>(null);
  const [selectedAuditRules, setSelectedAuditRules] = useState<string[]>([]);
  const [docViewMode, setDocViewMode] = useState<'text' | 'markdown'>('markdown');
  const [resultsViewMode, setResultsViewMode] = useState<'text' | 'markdown'>('markdown');
  const [trimPagesInput, setTrimPagesInput] = useState('');
  const [pasteDocInput, setPasteDocInput] = useState('');
  const [docSourceType, setDocSourceType] = useState<'upload' | 'paste'>('upload');

  const [agent1, setAgent1] = useState<Agent>({
    id: 'a1',
    name: 'Regulatory Strategist',
    role: 'Expert in TFDA medical device classification and technical requirements.',
    prompt: 'Analyze the following document and identify risks related to TFDA Class 2/3 classification:',
    model: MODELS[0],
    maxTokens: 1024,
    status: 'idle',
    agentType: 'agent1'
  });

  const [agent2, setAgent2] = useState<Agent>({
    id: 'a2',
    name: 'Compliance Auditor',
    role: 'Expert in clinical data, biocompatibility, and manufacturing quality standards.',
    prompt: 'Verify if the clinical and manufacturing data in this document matches TFDA QMS requirements:',
    model: MODELS[1],
    maxTokens: 1024,
    status: 'idle',
    agentType: 'agent2'
  });

  // Interrogation State
  const [selection, setSelection] = useState<Scenario['conditions']>({
    origin: 'IMPORT',
    risk: 'CLASS_2',
    path: 'STANDARD'
  });
  const [attributes, setAttributes] = useState({
    isSterile: false,
    isSoftware: false,
    isRad: false,
    isChina: false
  });

  // Note Keeper State
  const [note, setNote] = useState<Note>({
    content: '',
    model: 'gemini-3-flash-preview',
    prompt: 'Transform this text into an organized, professional regulatory markdown report.'
  });

  // Agent Chain State
  const [agents, setAgents] = useState<Agent[]>([
    {
      id: 'agent-1',
      name: 'Regulatory Analyst',
      role: 'Breakdown raw documents into technical parameters.',
      prompt: 'Extract manufacturing address, issue date, and certificate number.',
      model: 'gemini-3-flash-preview',
      maxTokens: 12000,
      status: 'idle'
    },
    {
      id: 'agent-2',
      name: 'Rule Auditor',
      role: 'Check parameters against advanced_conflict_rules.json.',
      prompt: 'Compare extracted data with regulatory requirements.',
      model: 'gemini-3-flash-preview',
      maxTokens: 12000,
      status: 'idle'
    }
  ]);

  const t = I18N[lang];

  // Helpers
  const addLog = useCallback((msg: string, type: 'info' | 'warn' | 'error' = 'info') => {
    setLogs(prev => [{ id: Math.random().toString(), msg, type }, ...prev].slice(0, 50));
  }, []);

  const triggerWow = (effect?: number) => {
    const e = effect ?? Math.floor(Math.random() * 6) + 1;
    setWowEffect(e);
    setTimeout(() => setWowEffect(null), 2500);
  };

  const spinJackpot = () => {
    let count = 0;
    const interval = setInterval(() => {
      setPainter(PAINTER_STYLES[Math.floor(Math.random() * PAINTER_STYLES.length)]);
      count++;
      if (count > 10) {
        clearInterval(interval);
        addLog(`Style changed to ${PAINTER_STYLES[Math.floor(Math.random() * PAINTER_STYLES.length)].name}`, 'info');
      }
    }, 100);
  };

  useEffect(() => {
    if (apiKey) {
      setCustomApiKey(apiKey);
      setIsAiReady(true);
    }
  }, [apiKey]);

  // Logic: Interrogation
  const activeScenario = useMemo(() => {
    return SCENARIOS.find(s => 
      s.conditions.origin === selection.origin && 
      s.conditions.risk === selection.risk && 
      s.conditions.path === selection.path
    );
  }, [selection]);

  const requiredFiles = useMemo(() => {
    if (!activeScenario) return [];
    const files = [...activeScenario.req];
    if (attributes.isSterile) files.push('D25');
    if (attributes.isSoftware) files.push('D22');
    if (attributes.isRad) files.push('D10');
    if (attributes.isChina) files.push('D19');
    return Array.from(new Set(files)).sort();
  }, [activeScenario, attributes]);

  // Logic: Execute Agent Chain
  const executeAgent = async (index: number) => {
    if (!isAiReady) {
      addLog('API Key not set!', 'error');
      return;
    }
    
    setAgents(prev => {
      const next = [...prev];
      next[index].status = 'running';
      return next;
    });
    
    addLog(`Agent ${agents[index].name} starting...`, 'info');
    triggerWow();

    try {
      // Use previous agent's output as input, or note content for first agent
      const input = index === 0 ? note.content : (agents[index - 1].output || '');
      const output = await executeSimpleAI({
        prompt: agents[index].prompt,
        input,
        model: agents[index].model,
        maxTokens: agents[index].maxTokens
      });

      setAgents(prev => {
        const next = [...prev];
        next[index].status = 'completed';
        next[index].output = output;
        return next;
      });
      addLog(`Agent ${agents[index].name} completed.`, 'info');
    } catch (err) {
      setAgents(prev => {
        const next = [...prev];
        next[index].status = 'error';
        return next;
      });
      addLog(`Agent ${agents[index].name} failed.`, 'error');
    }
  };

  const handleDownloadRules = () => {
    const data = {
      ruleset_name: rulesSource === 'mdpass' ? "TFDA 醫材查驗登記路徑規則庫" : "TFDA 醫材查驗登記智慧審核規則庫",
      version: "2.1",
      source: rulesSource,
      rules: rulesSource === 'mdpass' ? scenarios : conflictRules
    };
    const filename = rulesSource === 'mdpass' ? 'mdpass_rules.json' : 'advanced_conflict_rules.json';
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleUploadRules = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target?.result as string);
        const rulesData = json.rules || json;
        if (rulesSource === 'mdpass') {
          setScenarios(rulesData);
          addLog('MDPass rules (Scenarios) database updated', 'info');
        } else {
          setConflictRules(rulesData);
          addLog('Conflict rules database updated', 'info');
        }
        triggerWow(2);
      } catch (err) {
        addLog('Failed to parse rules JSON', 'error');
      }
    };
    reader.readAsText(file);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type === 'application/pdf') {
      const reader = new FileReader();
      reader.onload = async (ev) => {
        const arrayBuffer = ev.target?.result as ArrayBuffer;
        try {
          const pdfDoc = await PDFDocument.load(arrayBuffer);
          const pageCount = pdfDoc.getPageCount();
          // Convert ArrayBuffer to Base64 string safely
          const base64 = btoa(new Uint8Array(arrayBuffer).reduce((data, byte) => data + String.fromCharCode(byte), ''));
          setInterrogationDoc({
            name: file.name,
            type: 'pdf',
            content: base64,
            pageCount
          });
          addLog(`PDF Loaded: ${file.name} (${pageCount} pages)`, 'info');
        } catch (err) {
          console.error(err);
          addLog('Failed to load PDF', 'error');
        }
      };
      reader.readAsArrayBuffer(file);
    } else {
      const text = await file.text();
      setInterrogationDoc({
        name: file.name,
        type: file.name.endsWith('.md') ? 'markdown' : 'text',
        content: text
      });
      addLog(`Document Loaded: ${file.name}`, 'info');
    }
  };

  const handleTrimPdf = async () => {
    if (!interrogationDoc || interrogationDoc.type !== 'pdf') return;
    try {
      const binaryString = atob(interrogationDoc.content);
      const len = binaryString.length;
      const bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      
      const pdfDoc = await PDFDocument.load(bytes.buffer);
      const newPdfDoc = await PDFDocument.create();
      
      const ranges = trimPagesInput.split(',').map(r => r.trim());
      const pagesToCopy: number[] = [];
      
      ranges.forEach(range => {
        if (range.includes('-')) {
          const [start, end] = range.split('-').map(Number);
          for (let i = start; i <= end; i++) pagesToCopy.push(i - 1);
        } else {
          pagesToCopy.push(Number(range) - 1);
        }
      });

      const validPages = pagesToCopy.filter(p => p >= 0 && p < pdfDoc.getPageCount());
      const copiedPages = await newPdfDoc.copyPages(pdfDoc, validPages);
      copiedPages.forEach(p => newPdfDoc.addPage(p));
      
      const pdfBytes = await newPdfDoc.save();
      const base64 = btoa(new Uint8Array(pdfBytes).reduce((data, byte) => data + String.fromCharCode(byte), ''));
      
      setInterrogationDoc({
        ...interrogationDoc,
        trimmedContent: base64,
        selectedPages: validPages.map(p => p + 1)
      });
      addLog(`PDF Trimmed to ${validPages.length} pages`, 'info');
      triggerWow(4);
    } catch (err) {
      addLog('Trim failed. Check page range format (e.g. 1-3, 5)', 'error');
    }
  };

  const handleDownloadTrimmed = () => {
    if (!interrogationDoc?.trimmedContent) return;
    const binaryString = atob(interrogationDoc.trimmedContent);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    const blob = new Blob([bytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `trimmed_${interrogationDoc.name}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const runInterrogationAgent = async (agentId: 'agent1' | 'agent2') => {
    if (!isAiReady) {
      addLog('AI not ready. Check API key.', 'error');
      return;
    }
    const agent = agentId === 'agent1' ? agent1 : agent2;
    const setAgent = agentId === 'agent1' ? setAgent1 : setAgent2;

    setAgent(prev => ({ ...prev, status: 'running' }));
    addLog(`Running ${agent.name}...`, 'info');

    const docText = interrogationDoc?.type === 'pdf' 
      ? `PDF Document: ${interrogationDoc.name}. (Content extraction placeholder for preview)` // In real app, use PDF.js to extract text
      : interrogationDoc?.content || '';

    const selectedRulesText = selectedAuditRules.map(id => {
      const r = conflictRules.find(rule => rule.id === id);
      return `- ${r?.name}: ${r?.description}`;
    }).join('\n');

    const prompt = `
Role: ${agent.role}
Context: Analyzing doc "${interrogationDoc?.name}"
Selected Rules to verify:
${selectedRulesText}

Prompt: ${agent.prompt}

Content:
${docText}
    `;

    try {
      const output = await executeSimpleAI({
        prompt,
        input: '',
        model: agent.model,
        maxTokens: agent.maxTokens
      });

      setAgent(prev => ({ ...prev, output, status: 'completed' }));
      addLog(`${agent.name} execution completed.`, 'info');
      triggerWow(6);
    } catch (err) {
      addLog(`${agent.name} failed.`, 'error');
      setAgent(prev => ({ ...prev, status: 'error' }));
    }
  };

  const executeSimpleAI = async (config: { prompt: string; input: string; model: string; maxTokens: number }) => {
    const { GoogleGenAI } = await import('@google/genai');
    const genAI = new (GoogleGenAI as any)({ apiKey });
    const model = genAI.getGenerativeModel({ model: config.model });
    const result = await model.generateContent(`${config.prompt}\n\nContent:\n${config.input}`);
    return result.response.text();
  };

  const [keywordColor, setKeywordColor] = useState('yellow');

  const handleAiMagic = async (magicType: string) => {
    if (!isAiReady) return;
    addLog(`Executing Magic: ${magicType}...`, 'info');
    triggerWow();
    
    let magicPrompt = magicPromptOverride;
    if (!magicPrompt) {
      switch(magicType) {
        case 'Formatting': magicPrompt = 'Format this regulatory text into clean markdown with clear headers.'; break;
        case 'Keywords': magicPrompt = `Identify significant medical device regulatory keywords and wrap them in <span style="background: ${keywordColor}">...</span> tags.`; break;
        case 'Summarize': magicPrompt = 'Provide a executive summary of these regulatory documents.'; break;
        case 'Translate': magicPrompt = 'Translate this document accurately into Traditional Chinese (Taiwan regulatory style).'; break;
        case 'Fix': magicPrompt = 'Fix any grammatical errors and improve professional tone.'; break;
        case 'Entities': magicPrompt = 'Extract key entities like Manufacturer, Product Code, and Issue Date into a markdown table.'; break;
        default: magicPrompt = 'Process this text for regulatory clarity.';
      }
    }

    try {
      const result = await executeSimpleAI({
        prompt: magicPrompt,
        input: note.content,
        model: note.model,
        maxTokens: 4000
      });
      setNote(prev => ({ ...prev, content: result }));
      addLog('Magic execution successful.', 'info');
    } catch (err) {
      addLog('Magic execution failed.', 'error');
    }
  };

  const styleClass = painter.colors;

  return (
    <div className={cn(
      "min-h-screen transition-colors duration-500 border-[12px] border-ink",
      theme === 'dark' ? "bg-stone-900 text-stone-100" : styleClass.bg,
      painter.fontFamily
    )}>
      <AnimatePresence>
        {wowEffect && <WowVisual type={wowEffect} />}
      </AnimatePresence>

      {/* --- Top Navbar --- */}
      <nav className={cn(
        "sticky top-0 z-40 border-b flex items-center justify-between px-6 py-3",
        theme === 'dark' ? "border-stone-800 bg-stone-900/80" : cn(styleClass.border, "bg-white")
      )}>
        <div className="flex items-baseline gap-4">
          <h1 className="serif text-3xl font-bold italic tracking-tight">{t.title}</h1>
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] px-2 py-0.5 border border-ink bg-accent-red text-white">v4.2 System</span>
        </div>

        <div className="flex items-center gap-4">
          {/* API Key Modal-like button */}
          {!process.env.GEMINI_API_KEY && (
            <div className="flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full">
              <Key className="w-3 h-3 text-amber-600" />
              <input 
                type="password" 
                placeholder={t.apiKey}
                className="bg-transparent text-xs w-32 focus:outline-none"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
              />
            </div>
          )}

          <div className={cn("flex items-center gap-2 bg-stone-100 p-1 border border-ink rounded-sm", theme === 'dark' && "bg-stone-800 border-stone-700")}>
            <span className="text-[10px] uppercase font-bold pl-2 hidden md:block">{t.style}:</span>
            <div className="bg-white dark:bg-stone-900 border border-ink dark:border-stone-700 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest shadow-neo-sm">
              {painter.name}
            </div>
            <button 
              onClick={spinJackpot}
              className="bg-accent-red text-white px-3 py-1 text-xs font-bold hover:bg-black transition-colors"
              title={t.jackpot}
            >
              SPIN
            </button>
            <div className="w-px h-4 bg-stone-300 dark:bg-stone-700 mx-2" />
            <button 
              onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
              className="text-xs font-bold hover:underline"
            >
              {lang === 'en' ? 'EN' : '繁中'}
            </button>
            <button 
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="p-1 hover:bg-stone-200 dark:hover:bg-stone-700 rounded transition-all"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* --- Sidebar --- */}
        <aside className={cn(
          "w-64 min-h-[calc(100vh-4rem)] border-r bg-white dark:bg-stone-900 border-ink flex flex-col sticky top-16 self-start",
          theme === 'dark' ? "border-stone-800" : ""
        )}>
          <nav className="flex-1 py-10 px-6 space-y-8">
            <div>
              <label className="text-[10px] text-gray-400 uppercase font-bold mb-4 tracking-widest block">Modules</label>
              <div className="space-y-4">
                {[
                  { id: 'dashboard', icon: LayoutDashboard, label: t.dashboard },
                  { id: 'interrogation', icon: Search, label: t.interrogation },
                  { id: 'inspector', icon: AlertTriangle, label: t.inspector },
                  { id: 'notes', icon: PencilLine, label: t.notes },
                  { id: 'rules', icon: FileJson, label: t.rules },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id as any)}
                    className={cn(
                      "w-full flex items-center gap-3 text-sm font-bold transition-all group",
                      activeTab === item.id 
                        ? "text-accent-red border-l-2 border-accent-red pl-2" 
                        : "text-gray-500 hover:text-ink"
                    )}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-[10px] text-gray-400 uppercase font-bold mb-4 tracking-widest block">{t.status}</label>
              <div className="grid grid-cols-2 gap-2">
                <div className="border border-ink p-2 text-center bg-stone-50 dark:bg-stone-800">
                  <div className="text-xs font-bold">PRO</div>
                  <div className="text-[8px] uppercase">Engine</div>
                </div>
                <div className="border border-ink p-2 text-center bg-accent-red text-white">
                  <div className="text-xs font-bold">READY</div>
                  <div className="text-[8px] uppercase">Status</div>
                </div>
              </div>
            </div>
          </nav>

          <div className="p-4 border-t border-ink bg-stone-100 dark:bg-stone-800">
            <div className="text-[10px] uppercase font-bold mb-2">Secure API Access</div>
            <div className="flex items-center gap-2 px-3 py-1 bg-white dark:bg-stone-900 border border-ink rounded-sm">
              <Key className="w-3 h-3 opacity-40" />
              <input 
                type="password" 
                placeholder="GEMINI KEY"
                className="bg-transparent text-[10px] w-full focus:outline-none font-mono"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
              />
            </div>
          </div>
        </aside>

        {/* --- Main Content --- */}
        <main className="flex-1 p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* WOW Visual Overlay */}
              {wowEffect !== null && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center overflow-hidden"
                >
                  {wowEffect === 1 && (
                    <motion.div 
                      className="w-[200%] h-[200%] bg-accent-red opacity-10"
                      animate={{ rotate: 360, scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                  {wowEffect === 2 && (
                    <div className="absolute inset-0 flex flex-wrap gap-4 p-4">
                      {Array.from({ length: 50 }).map((_, i) => (
                        <motion.div 
                          key={i}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 0.2 }}
                          transition={{ delay: i * 0.05 }}
                          className="w-12 h-12 border border-ink bg-accent-red"
                        />
                      ))}
                    </div>
                  )}
                  {wowEffect === 3 && (
                    <motion.div 
                      className="text-[20vw] font-black text-ink opacity-10 select-none whitespace-nowrap"
                      animate={{ x: [-1000, 1000] }}
                      transition={{ duration: 3, ease: "linear" }}
                    >
                      TFDA DATA HUB MDMDS PRO
                    </motion.div>
                  )}
                  {wowEffect === 4 && (
                    <div className="flex gap-2">
                       {Array.from({ length: 6 }).map((_, i) => (
                         <motion.div 
                           key={i}
                           animate={{ height: [40, 200, 40] }}
                           transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                           className="w-8 bg-ink opacity-20"
                         />
                       ))}
                    </div>
                  )}
                  {wowEffect === 5 && (
                    <motion.div 
                      className="w-full h-1 bg-accent-red shadow-[0_0_20px_red]"
                      animate={{ top: ['0%', '100%'] }}
                      style={{ position: 'absolute' }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}
                  {wowEffect === 6 && (
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 10, opacity: [1, 0] }}
                      transition={{ duration: 1 }}
                      className="w-40 h-40 border-4 border-accent-red rounded-full"
                    />
                  )}
                </motion.div>
              )}

              {activeTab === 'dashboard' && (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className={cn("p-8 border flex flex-col items-center justify-center text-center space-y-4 shadow-neo", styleClass.surface, styleClass.border)}>
                      <LayoutDashboard className="w-12 h-12 opacity-20" />
                      <div>
                        <div className="text-4xl font-bold serif">1,248</div>
                        <div className="text-xs uppercase tracking-widest opacity-60">Total Audits</div>
                      </div>
                    </div>
                    <div className={cn("p-8 border flex flex-col items-center justify-center text-center space-y-4 shadow-neo", styleClass.surface, styleClass.border)}>
                      <Activity className="w-12 h-12 opacity-20" />
                      <div>
                        <div className="text-4xl font-bold serif text-emerald-500">98.2%</div>
                        <div className="text-xs uppercase tracking-widest opacity-60">Success Rate</div>
                      </div>
                    </div>
                    <div className={cn("p-8 border flex flex-col items-center justify-center text-center space-y-4 shadow-neo", styleClass.surface, styleClass.border)}>
                      <AlertTriangle className="w-12 h-12 opacity-20" />
                      <div>
                        <div className="text-4xl font-bold serif text-accent-red">24</div>
                        <div className="text-xs uppercase tracking-widest opacity-60">Pending Alerts</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Live Logs */}
                    <div className={cn("border overflow-hidden shadow-neo", styleClass.border, styleClass.surface)}>
                      <div className="px-6 py-4 border-b flex items-center justify-between bg-stone-50 dark:bg-stone-900/50">
                        <div className="flex items-center gap-2">
                          <Terminal className="w-4 h-4 opacity-40" />
                          <h2 className="text-xs font-bold uppercase tracking-widest">{t.logs}</h2>
                        </div>
                        <span className="text-[8px] font-bold opacity-30">ID: 8829-X</span>
                      </div>
                      <div className="h-64 p-4 overflow-y-auto font-mono text-[11px] space-y-1.5 bg-ink text-white selection:bg-red-500 selection:text-white">
                        {logs.length === 0 && <div className="opacity-20 italic">No logs generated...</div>}
                        {logs.map((log) => (
                          <div key={log.id} className={cn(
                            "flex items-start gap-2",
                            log.type === 'error' ? "text-red-500" : log.type === 'warn' ? "text-amber-500" : "text-emerald-400"
                          )}>
                            <span>[{new Date().toLocaleTimeString()}]</span>
                            <span>{log.msg.toUpperCase()}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Quick Stats/Style Info */}
                    <div className={cn("p-8 border flex flex-col justify-between shadow-neo", styleClass.border, styleClass.surface)}>
                      <div>
                        <h2 className="text-2xl serif font-bold mb-2 italic">Visual Atmosphere</h2>
                        <p className="text-sm opacity-60 mb-6 underline decoration-accent-red underline-offset-4">
                          Current Style: {painter.name}
                        </p>
                        <div className="flex gap-2">
                          <div className={cn("w-12 h-12 border border-ink", painter.colors.accent)} />
                          <div className={cn("w-12 h-12 border border-ink", painter.colors.bg)} />
                          <div className={cn("w-12 h-12 border border-ink", painter.colors.surface)} />
                        </div>
                      </div>
                      <button onClick={spinJackpot} className="w-full mt-8 flex items-center justify-center gap-2 py-3 bg-ink text-white dark:bg-stone-100 dark:text-stone-900 font-bold hover:bg-black transition-colors border border-ink">
                        <Dices className="w-4 h-4" />
                        {t.jackpot}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'interrogation' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Doc Upload & Configuration */}
                  <div className="lg:col-span-4 space-y-6">
                    <div className="p-6 border-2 border-ink bg-white shadow-neo-sm">
                      <h3 className="text-lg font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                        <Upload className="w-5 h-5 text-accent-red" />
                        Regulatory Source
                      </h3>

                      <div className="flex gap-2 mb-4 border-b border-ink pb-2">
                        <button 
                          onClick={() => setDocSourceType('upload')}
                          className={cn(
                            "text-[10px] font-bold px-3 py-1 transition-all",
                            docSourceType === 'upload' ? "bg-ink text-white" : "opacity-40 hover:opacity-100"
                          )}
                        >
                          FILE UPLOAD
                        </button>
                        <button 
                          onClick={() => setDocSourceType('paste')}
                          className={cn(
                            "text-[10px] font-bold px-3 py-1 transition-all",
                            docSourceType === 'paste' ? "bg-ink text-white" : "opacity-40 hover:opacity-100"
                          )}
                        >
                          PASTE TEXT
                        </button>
                      </div>
                      
                      {docSourceType === 'upload' ? (
                        <div className="relative group">
                          <label className="block w-full text-center border-2 border-dashed border-ink p-8 bg-stone-50 cursor-pointer hover:bg-stone-100 transition-all">
                            <input type="file" className="hidden" accept=".pdf,.txt,.md" onChange={handleFileUpload} />
                            <Activity className="w-12 h-12 mx-auto mb-4 opacity-20 group-hover:scale-110 transition-transform" />
                            <p className="text-xs font-black uppercase tracking-tighter">Click to Upload doc</p>
                            <p className="text-[10px] opacity-40 mt-2">PDF, Markdown or Text (Max 50MB)</p>
                          </label>
                        </div>
                      ) : (
                        <div className="space-y-3">
                          <textarea 
                            className="w-full h-32 p-3 bg-stone-50 border border-ink text-xs focus:outline-none resize-none font-mono"
                            placeholder="Paste your regulatory source text here..."
                            value={pasteDocInput}
                            onChange={(e) => setPasteDocInput(e.target.value)}
                          />
                          <button 
                            onClick={() => {
                              if (!pasteDocInput.trim()) return;
                              setInterrogationDoc({
                                name: 'Pasted Document',
                                type: 'text',
                                content: pasteDocInput
                              });
                              addLog('Pasted document ingested.', 'info');
                              triggerWow(2);
                            }}
                            className="w-full py-2 bg-ink text-white text-[10px] font-bold border border-ink hover:bg-accent-red transition-all"
                          >
                            APPLY PASTE
                          </button>
                        </div>
                      )}

                      {interrogationDoc && (
                        <div className="mt-6 p-4 border border-ink bg-stone-50 animate-in fade-in slide-in-from-top-2">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] font-bold px-2 py-0.5 bg-ink text-white truncate max-w-[150px]">
                              {interrogationDoc.name}
                            </span>
                            <button onClick={() => setInterrogationDoc(null)} className="text-[10px] text-red-500 font-bold hover:underline">RESET</button>
                          </div>
                          
                          {interrogationDoc.type === 'pdf' && (
                            <div className="space-y-4 mt-4">
                              <div className="flex items-center justify-between">
                                <span className="text-[10px] font-bold opacity-60 uppercase">Pages Detected: {interrogationDoc.pageCount}</span>
                              </div>
                              <div className="flex flex-col gap-2">
                                <label className="text-[8px] font-bold uppercase tracking-widest opacity-40">Trim Range (e.g. 1, 3-5)</label>
                                <div className="flex gap-2">
                                  <input 
                                    className="flex-1 px-3 py-2 border border-ink bg-white text-xs font-mono focus:outline-none focus:ring-1 focus:ring-accent-red"
                                    placeholder="1-2, 4"
                                    value={trimPagesInput}
                                    onChange={(e) => setTrimPagesInput(e.target.value)}
                                  />
                                  <button 
                                    onClick={handleTrimPdf}
                                    className="px-4 py-2 bg-ink text-white text-[10px] font-bold hover:bg-accent-red transition-all"
                                  >
                                    TRIM
                                  </button>
                                </div>
                              </div>
                              {interrogationDoc.trimmedContent && (
                                <button 
                                  onClick={handleDownloadTrimmed}
                                  className="w-full py-2 bg-accent-red text-white text-[10px] font-bold border border-ink shadow-neo-sm flex items-center justify-center gap-2"
                                >
                                  <Download className="w-3 h-3" />
                                  DOWNLOAD TRIMMED (PDF)
                                </button>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="p-6 border-2 border-ink bg-white shadow-neo-sm space-y-4">
                      <h3 className="text-lg font-bold uppercase tracking-widest flex items-center gap-2">
                        <Zap className="w-5 h-5 text-accent-red" />
                        Audit Protocols
                      </h3>
                      <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                        {conflictRules.map(rule => (
                          <label key={rule.id} className="flex items-start gap-3 p-3 border border-ink cursor-pointer hover:bg-stone-50 transition-colors group">
                            <input 
                              type="checkbox"
                              className="mt-1 accent-ink w-4 h-4"
                              checked={selectedAuditRules.includes(rule.id)}
                              onChange={(e) => {
                                if (e.target.checked) setSelectedAuditRules(prev => [...prev, rule.id]);
                                else setSelectedAuditRules(prev => prev.filter(id => id !== rule.id));
                              }}
                            />
                            <div>
                               <p className="text-[10px] font-bold uppercase">{rule.nameZh}</p>
                               <p className="text-[8px] opacity-40 leading-tight">{rule.descriptionZh}</p>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Agents & Results */}
                  <div className="lg:col-span-8 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Agent 1 UI */}
                      <div className="p-6 border-2 border-ink bg-white shadow-neo-sm flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-[10px] font-bold px-2 py-0.5 bg-accent-red text-white uppercase tracking-tighter">Agent 1: Strategy</span>
                            <div className={`w-2 h-2 rounded-full ${agent1.status === 'running' ? 'bg-accent-red animate-pulse' : agent1.status === 'completed' ? 'bg-green-500' : 'bg-stone-300'}`} />
                          </div>
                          <h4 className="text-xl serif font-bold italic mb-2">{agent1.name}</h4>
                          <p className="text-[10px] opacity-60 mb-4">{agent1.role}</p>
                          <textarea 
                             className="w-full h-24 p-3 bg-stone-50 border border-ink text-xs focus:outline-none resize-none"
                             value={agent1.prompt}
                             onChange={(e) => setAgent1(prev => ({ ...prev, prompt: e.target.value }))}
                          />
                        </div>
                        <button 
                          disabled={!interrogationDoc || agent1.status === 'running'}
                          onClick={() => runInterrogationAgent('agent1')}
                          className="mt-4 w-full py-4 bg-ink text-white font-bold hover:bg-accent-red disabled:opacity-50 transition-all shadow-neo-sm"
                        >
                          {agent1.status === 'running' ? 'COMPUTING...' : 'EXECUTE STRATEGY'}
                        </button>
                      </div>

                      {/* Agent 2 UI */}
                      <div className="p-6 border-2 border-ink bg-white shadow-neo-sm flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-[10px] font-bold px-2 py-0.5 bg-black text-white uppercase tracking-tighter">Agent 2: Compliance</span>
                            <div className={`w-2 h-2 rounded-full ${agent2.status === 'running' ? 'bg-accent-red animate-pulse' : agent2.status === 'completed' ? 'bg-green-500' : 'bg-stone-300'}`} />
                          </div>
                          <h4 className="text-xl serif font-bold italic mb-2">{agent2.name}</h4>
                          <p className="text-[10px] opacity-60 mb-4">{agent2.role}</p>
                          <textarea 
                             className="w-full h-24 p-3 bg-stone-50 border border-ink text-xs focus:outline-none resize-none"
                             value={agent2.prompt}
                             onChange={(e) => setAgent2(prev => ({ ...prev, prompt: e.target.value }))}
                          />
                        </div>
                        <button 
                          disabled={!interrogationDoc || agent2.status === 'running'}
                          onClick={() => runInterrogationAgent('agent2')}
                          className="mt-4 w-full py-4 bg-ink text-white font-bold hover:bg-accent-red disabled:opacity-50 transition-all shadow-neo-sm"
                        >
                          {agent2.status === 'running' ? 'COMPUTING...' : 'EXECUTE COMPLIANCE'}
                        </button>
                      </div>
                    </div>

                    <div className="border-2 border-ink bg-white shadow-neo">
                      <div className="p-3 border-b border-ink bg-stone-100 flex items-center justify-between">
                         <span className="text-[10px] font-black uppercase tracking-widest">Audit Output Consolidated</span>
                         <div className="flex gap-1">
                           <button 
                            onClick={() => setResultsViewMode('text')}
                            className={cn("px-4 py-1 text-[8px] font-bold border border-ink transition-all", resultsViewMode === 'text' ? 'bg-ink text-white' : 'hover:bg-white')}
                           >TEXT</button>
                           <button 
                            onClick={() => setResultsViewMode('markdown')}
                            className={cn("px-4 py-1 text-[8px] font-bold border border-ink transition-all", resultsViewMode === 'markdown' ? 'bg-ink text-white' : 'hover:bg-white')}
                           >PREVIEW</button>
                         </div>
                      </div>
                      <div className="p-8 min-h-[400px]">
                        {resultsViewMode === 'markdown' ? (
                          <div className="prose prose-sm max-w-none dark:prose-invert">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                              {`# Consolidated Audit Result\n\n## Agent 1 Evaluation\n${agent1.output || '*No data generated yet*'}\n\n---\n\n## Agent 2 Verification\n${agent2.output || '*No data generated yet*'}`}
                            </ReactMarkdown>
                          </div>
                        ) : (
                          <textarea 
                             className="w-full h-[400px] bg-transparent font-mono text-xs focus:outline-none resize-none"
                             placeholder="The consolidated results of your regulatory interrogation will appear here..."
                             value={`AGENT 1 OUTPUT:\n${agent1.output || ''}\n\n======================\n\nAGENT 2 OUTPUT:\n${agent2.output || ''}`}
                             onChange={(e) => {
                               const val = e.target.value;
                               if (val.includes('AGENT 2 OUTPUT:')) {
                                 const [a1, a2] = val.split('======================');
                                 const cleanA1 = a1.replace('AGENT 1 OUTPUT:', '').trim();
                                 const cleanA2 = a2.replace('AGENT 2 OUTPUT:', '').trim();
                                 setAgent1(prev => ({ ...prev, output: cleanA1 }));
                                 setAgent2(prev => ({ ...prev, output: cleanA2 }));
                               }
                             }}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'rules' && (
                <div className="space-y-8 max-w-6xl mx-auto pb-20">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h2 className="text-3xl serif font-bold italic">{t.rules}</h2>
                      <p className="text-sm opacity-60">Management module for regulatory logic databases.</p>
                      <div className="flex gap-2 mt-4">
                        <button 
                          onClick={() => setRulesSource('mdpass')}
                          className={cn(
                            "px-4 py-1.5 text-[10px] font-bold border border-ink transition-all",
                            rulesSource === 'mdpass' ? "bg-ink text-white" : "bg-white text-ink hover:bg-stone-100"
                          )}
                        >
                          MDPass Scenarios (mdpass_rules.json)
                        </button>
                        <button 
                          onClick={() => setRulesSource('conflict')}
                          className={cn(
                            "px-4 py-1.5 text-[10px] font-bold border border-ink transition-all",
                            rulesSource === 'conflict' ? "bg-ink text-white" : "bg-white text-ink hover:bg-stone-100"
                          )}
                        >
                          Conflict Audit (advanced_conflict_rules.json)
                        </button>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <label className="px-6 py-2.5 bg-ink text-white border border-ink text-sm font-bold shadow-neo-sm cursor-pointer hover:bg-accent-red transition-all flex items-center gap-2">
                        <Upload className="w-4 h-4" />
                        UPLOAD JSON
                        <input type="file" className="hidden" accept=".json" onChange={handleUploadRules} />
                      </label>
                      <button 
                        onClick={handleDownloadRules}
                        className="px-6 py-2.5 bg-white border border-ink text-sm font-bold shadow-neo-sm hover:translate-y-[1px] transition-all flex items-center gap-2"
                      >
                        <Download className="w-4 h-4" />
                        DOWNLOAD
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {rulesSource === 'conflict' ? conflictRules.map((rule, idx) => (
                      <div key={rule.id} className="p-4 border border-ink bg-white dark:bg-stone-900 shadow-neo-sm flex flex-col justify-between hover:shadow-neo transition-all">
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-[10px] font-bold px-2 py-0.5 bg-ink text-white">RULE {rule.id}</span>
                            <div className="flex gap-2">
                              <button 
                                onClick={() => setConflictRules(prev => prev.filter(r => r.id !== rule.id))}
                                className="text-[10px] text-red-500 font-bold hover:underline"
                              >
                                REMOVE
                              </button>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <input 
                              placeholder="Rule Title"
                              className="w-full text-sm font-bold uppercase bg-transparent border-b border-stone-200 focus:border-ink focus:outline-none py-1"
                              value={lang === 'en' ? rule.name : rule.nameZh}
                              onChange={(e) => {
                                const next = [...conflictRules];
                                if (lang === 'en') next[idx].name = e.target.value;
                                else next[idx].nameZh = e.target.value;
                                setConflictRules(next);
                              }}
                            />
                            <textarea 
                              placeholder="Rule description..."
                              className="w-full text-[10px] opacity-60 bg-transparent resize-none focus:outline-none min-h-[40px]"
                              value={lang === 'en' ? rule.description : rule.descriptionZh}
                              onChange={(e) => {
                                const next = [...conflictRules];
                                if (lang === 'en') next[idx].description = e.target.value;
                                else next[idx].descriptionZh = e.target.value;
                                setConflictRules(next);
                              }}
                            />
                          </div>
                        </div>
                        <div className="bg-stone-50 dark:bg-stone-800 border border-ink p-3 mt-4">
                           <div className="text-[8px] font-bold text-stone-400 mb-1 uppercase tracking-widest">Logic Expression</div>
                           <input 
                             className="w-full bg-transparent font-mono text-[10px] font-bold text-accent-red focus:outline-none"
                             value={rule.logic}
                             onChange={(e) => {
                               const next = [...conflictRules];
                               next[idx].logic = e.target.value;
                               setConflictRules(next);
                             }}
                           />
                        </div>
                      </div>
                    )) : scenarios.map((scenario, idx) => (
                      <div key={scenario.id} className="p-4 border border-ink bg-white dark:bg-stone-900 shadow-neo-sm flex flex-col justify-between hover:shadow-neo transition-all">
                         <div>
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-[10px] font-bold px-2 py-0.5 bg-ink text-white">SCENARIO {scenario.id}</span>
                            <div className="flex gap-2">
                              <button 
                                onClick={() => setScenarios(prev => prev.filter(s => s.id !== scenario.id))}
                                className="text-[10px] text-red-500 font-bold hover:underline"
                              >
                                REMOVE
                              </button>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <input 
                              placeholder="Scenario Name"
                              className="w-full text-sm font-bold uppercase bg-transparent border-b border-stone-200 focus:border-ink focus:outline-none py-1"
                              value={lang === 'en' ? scenario.name : scenario.nameZh}
                              onChange={(e) => {
                                const next = [...scenarios];
                                if (lang === 'en') next[idx].name = e.target.value;
                                else next[idx].nameZh = e.target.value;
                                setScenarios(next);
                              }}
                            />
                            <div className="flex flex-wrap gap-1">
                              <span className="text-[8px] font-bold opacity-40 uppercase">Required:</span>
                              {scenario.req.map((r, rIdx) => (
                                <input 
                                  key={rIdx}
                                  className="w-8 border border-stone-200 text-[8px] text-center"
                                  value={r}
                                  onChange={(e) => {
                                    const next = [...scenarios];
                                    next[idx].req[rIdx] = e.target.value.toUpperCase();
                                    setScenarios(next);
                                  }}
                                />
                              ))}
                              <button 
                                onClick={() => {
                                  const next = [...scenarios];
                                  next[idx].req.push('D1');
                                  setScenarios(next);
                                }}
                                className="text-[8px] font-bold text-blue-500 hover:underline"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    <button 
                      onClick={() => {
                        if (rulesSource === 'conflict') {
                          setConflictRules(prev => [...prev, {
                            id: `C${prev.length + 1}`,
                            name: 'New Rule',
                            nameZh: '新規則',
                            description: 'New logic check description...',
                            descriptionZh: '新邏輯檢查說明...',
                            logic: 'D1_exists == true && D2_exists == false'
                          }]);
                        } else {
                          setScenarios(prev => [...prev, {
                            id: `S${prev.length + 1}`,
                            name: 'New Scenario',
                            nameZh: '新路徑',
                            conditions: {},
                            req: ['D1'],
                            cond: []
                          }]);
                        }
                      }}
                      className="p-12 border border-dashed border-ink flex flex-col items-center justify-center opacity-40 hover:opacity-100 hover:bg-stone-50 transition-all gap-4 group"
                    >
                      <PlusCircle className="w-10 h-10 group-hover:scale-110 transition-transform" />
                      <span className="text-xs font-black uppercase tracking-widest">Add Regulatory Item</span>
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'inspector' && (
                <div className="space-y-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-3xl serif font-bold italic">{t.inspector}</h2>
                      <p className="text-sm opacity-60">Cross-document consistency check powered by AI.</p>
                    </div>
                    <div className="flex gap-2">
                       <button 
                        onClick={() => executeAgent(0)}
                        disabled={agents[0].status === 'running'}
                        className="px-6 py-2.5 bg-ink text-white border border-ink text-sm font-bold flex items-center gap-2 shadow-neo-sm hover:translate-y-[1px] transition-all"
                       >
                         {agents[0].status === 'running' ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                         {t.execute}
                       </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Multi-Agent Chain */}
                    <div className="space-y-6">
                      {agents.map((agent, idx) => (
                        <div key={agent.id} className={cn("p-6 border relative overflow-hidden shadow-neo", styleClass.surface, styleClass.border)}>
                          <div className="absolute top-0 right-0 p-2">
                            {agent.status === 'completed' && <CheckCircle2 className="text-emerald-500 w-5 h-5" />}
                            {agent.status === 'running' && <RefreshCw className="text-blue-500 w-5 h-5 animate-spin" />}
                             {agent.status === 'error' && <AlertTriangle className="text-red-500 w-5 h-5" />}
                          </div>
                          
                          <div className="flex items-center gap-2 mb-4">
                            <span className="text-[10px] font-bold px-2 py-0.5 bg-ink text-white border border-ink">AGENT {idx + 1}</span>
                            <h3 className="font-bold uppercase tracking-tight">{agent.name}</h3>
                          </div>

                          <div className="space-y-3 mb-6">
                            <div className="flex gap-2">
                              <div className="flex-1">
                                <label className="text-[9px] uppercase font-bold opacity-40 mb-1 block">Model</label>
                                <select 
                                  value={agent.model}
                                  onChange={(e) => setAgents(prev => {
                                    const next = [...prev];
                                    next[idx].model = e.target.value;
                                    return next;
                                  })}
                                  className="w-full bg-white dark:bg-stone-900 border border-ink px-2 py-1 text-xs font-bold"
                                >
                                  {MODELS.map(m => <option key={m} value={m}>{m}</option>)}
                                </select>
                              </div>
                              <div>
                                <label className="text-[9px] uppercase font-bold opacity-40 mb-1 block">Tokens</label>
                                <input 
                                  type="number"
                                  value={agent.maxTokens}
                                  onChange={(e) => setAgents(prev => {
                                    const next = [...prev];
                                    next[idx].maxTokens = parseInt(e.target.value);
                                    return next;
                                  })}
                                  className="w-20 bg-white dark:bg-stone-900 border border-ink px-2 py-1 text-xs text-center font-bold"
                                />
                              </div>
                            </div>
                            <div>
                                <label className="text-[9px] uppercase font-bold opacity-40 mb-1 block">{t.prompt}</label>
                                <textarea 
                                  value={agent.prompt}
                                  onChange={(e) => setAgents(prev => {
                                    const next = [...prev];
                                    next[idx].prompt = e.target.value;
                                    return next;
                                  })}
                                  className="w-full bg-white dark:bg-stone-900 border border-ink px-3 py-2 text-xs h-16 resize-none focus:outline-none"
                                />
                            </div>
                          </div>

                          <div className="space-y-2">
                             <label className="text-[9px] uppercase font-bold opacity-40 mb-1 block">Agent Output</label>
                             <div className="min-h-32 bg-stone-100 dark:bg-stone-950 border border-ink p-3 text-[11px] font-mono whitespace-pre-wrap max-h-64 overflow-y-auto">
                               {agent.output ? (
                                 <textarea 
                                  className="w-full bg-transparent border-none focus:outline-none p-0 h-full resize-none"
                                  value={agent.output}
                                  onChange={(e) => {
                                    const val = e.target.value;
                                    setAgents(prev => {
                                      const next = [...prev];
                                      next[idx].output = val;
                                      return next;
                                    });
                                  }}
                                 />
                               ) : (
                                 <span className="opacity-20 italic">Waiting for execution...</span>
                               )}
                             </div>
                             {idx < agents.length - 1 && agent.status === 'completed' && (
                               <button 
                                onClick={() => executeAgent(idx + 1)}
                                className="w-full py-2 mt-4 bg-accent-red text-white border border-ink text-xs font-bold hover:bg-black transition-colors shadow-neo-sm"
                               >
                                 RELAY TO {agents[idx+1].name}
                               </button>
                             )}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Conflict Dashboard */}
                    <div className={cn("p-8 border sticky top-24 self-start shadow-neo", styleClass.surface, styleClass.border)}>
                       <div className="flex items-center gap-3 mb-8">
                         <h3 className="text-xl serif font-bold italic">Audit Summary</h3>
                         {agents.every(a => a.status === 'completed') ? (
                           <span className="px-3 py-1 bg-accent-red text-white border border-ink text-[10px] font-bold animate-pulse">
                             {t.conflictFound}
                           </span>
                         ) : (
                           <span className="px-3 py-1 bg-stone-100 dark:bg-stone-800 border border-ink text-stone-400 text-[10px] font-bold">
                             Awaiting Audit
                           </span>
                         )}
                       </div>

                       <div className="space-y-6">
                         {CONFLICT_RULES.map(rule => (
                           <div key={rule.id} className="relative pl-6 border-l border-ink py-1">
                             <div className="absolute left-[-4.5px] top-2 w-2 h-2 bg-ink" />
                             <div className="flex items-center justify-between mb-1">
                               <h4 className="text-sm font-bold uppercase tracking-tight">{lang === 'en' ? rule.name : rule.nameZh}</h4>
                               <span className="text-[10px] font-mono opacity-40">{rule.id}</span>
                             </div>
                             <p className="text-xs opacity-60 leading-relaxed mb-2 font-medium">
                               {lang === 'en' ? rule.description : rule.descriptionZh}
                             </p>
                             <div className="text-[9px] p-2 bg-stone-100 dark:bg-stone-900 border border-ink font-mono font-bold">
                               LOGIC: {rule.logic}
                             </div>
                           </div>
                         ))}
                       </div>

                       <div className="mt-12 p-6 bg-ink text-white border border-ink flex items-center justify-between shadow-neo-sm">
                         <div>
                            <p className="text-[10px] uppercase tracking-widest opacity-60 mb-1">Compliance Score</p>
                            <p className="text-2xl serif font-bold italic">82 / 100</p>
                         </div>
                         <button className="px-4 py-2 border border-white/20 rounded-sm text-xs font-bold hover:bg-white/10 transition-all uppercase">
                           Review Full Audit
                         </button>
                       </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'notes' && (
                <div className="max-w-6xl mx-auto space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-3xl serif font-bold italic">{t.notes}</h2>
                      <p className="text-sm opacity-60">Organize and refine your regulatory draft.</p>
                    </div>
                    <div className="flex items-center gap-3">
                       <select 
                          value={note.model}
                          onChange={(e) => setNote(prev => ({ ...prev, model: e.target.value }))}
                          className="px-3 py-2 text-xs border border-ink bg-white dark:bg-stone-900 font-bold"
                       >
                          {MODELS.map(m => <option key={m} value={m}>{m}</option>)}
                       </select>
                       <button 
                        onClick={() => handleAiMagic('Standard')}
                        className="px-6 py-2 bg-accent-red text-white border border-ink text-xs font-bold shadow-neo-sm hover:translate-y-[1px] transition-all"
                       >
                         {t.save}
                       </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[70vh]">
                    {/* Input Side */}
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
                         {[
                           { id: 'Formatting', label: t.formatting, icon: Sparkles },
                           { id: 'Keywords', label: t.keywords, icon: Palette },
                           { id: 'Summarize', label: t.summarize, icon: BookOpen },
                           { id: 'Translate', label: t.translate, icon: Languages },
                           { id: 'Fix', label: t.fixGrammar, icon: CheckCircle2 },
                           { id: 'Entities', label: t.extractEntities, icon: BrainCircuit }
                         ].map(magic => (
                           <button
                            key={magic.id}
                            onClick={() => handleAiMagic(magic.id)}
                            className="flex items-center gap-2 px-3 py-1.5 whitespace-nowrap bg-white dark:bg-stone-900 border border-ink text-[10px] font-bold hover:bg-accent-red hover:text-white transition-all shadow-neo-sm"
                           >
                             <magic.icon className="w-3 h-3" />
                             {magic.label}
                           </button>
                         ))}
                         <div className="flex items-center gap-1 border-l border-ink pl-4 ml-2">
                           {['yellow', 'cyan', 'lime', 'pink', 'orange'].map(c => (
                             <button 
                                key={c}
                                onClick={() => setKeywordColor(c)}
                                className={cn(
                                  "w-5 h-5 border border-ink transition-transform shadow-neo-sm",
                                  keywordColor === c ? "translate-y-0.5 shadow-none" : "hover:-translate-y-0.5"
                                )}
                                style={{ backgroundColor: c }}
                             />
                           ))}
                         </div>
                      </div>
                      
                      <div className="flex-1 p-2 border border-ink bg-white dark:bg-stone-900 relative shadow-neo">
                        <textarea 
                          placeholder="Paste your raw text or markdown here..."
                          className="w-full h-full p-6 resize-none bg-transparent focus:outline-none text-sm font-sans font-medium"
                          value={note.content}
                          onChange={(e) => setNote(prev => ({ ...prev, content: e.target.value }))}
                        />
                        <div className="absolute top-4 right-4 p-2 bg-stone-100 dark:bg-stone-800 border border-ink shadow-neo-sm cursor-pointer hover:bg-accent-red hover:text-white transition-all" onClick={() => setNote(prev => ({ ...prev, content: '' }))}>
                          <Eraser className="w-4 h-4" />
                        </div>
                      </div>
                      
                      <div className="p-4 border border-ink bg-stone-100 dark:bg-stone-900 shadow-neo-sm space-y-3">
                        <div className="flex items-center justify-between">
                          <label className="text-[10px] uppercase font-bold opacity-40 block">AI Magic Prompt Override</label>
                          <span className="text-[8px] opacity-40 italic">Leave empty to use defaults</span>
                        </div>
                        <input 
                          placeholder="Force AI to: Summarize focusing on clinical safety..."
                          className="w-full bg-transparent border-b border-ink py-1 text-xs focus:outline-none italic font-bold"
                          value={magicPromptOverride}
                          onChange={(e) => setMagicPromptOverride(e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Preview Side */}
                    <div className="flex flex-col border border-ink bg-stone-50/50 dark:bg-stone-950/50 overflow-hidden shadow-neo">
                      <div className="px-6 py-4 border-b border-ink flex items-center justify-between bg-white dark:bg-stone-900">
                         <span className="text-[10px] font-bold uppercase tracking-widest">Post-Processing View</span>
                         <div className="flex gap-2">
                            <div className="w-3 h-3 border border-ink bg-accent-red" />
                            <div className="w-3 h-3 border border-ink bg-white" />
                            <div className="w-3 h-3 border border-ink bg-ink" />
                         </div>
                      </div>
                      <div className="flex-1 p-10 overflow-y-auto prose dark:prose-invert prose-stone max-w-none prose-sm leading-relaxed serif font-medium">
                        {note.content ? (
                          <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {note.content}
                          </ReactMarkdown>
                        ) : (
                          <div className="h-full flex flex-col items-center justify-center opacity-10 text-center">
                            <Sparkles className="w-20 h-20 mb-4" />
                            <p className="text-2xl serif italic">The AI Magic will happen here...</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <footer className="mt-20 pt-10 border-t border-ink max-w-6xl mx-auto pb-20">
            <div className="flex items-center gap-2 mb-8">
              <BookOpen className="w-5 h-5 text-accent-red" />
              <h3 className="text-xl font-bold uppercase tracking-widest">Regulatory Deep-Dive & Follow-up</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "How does the new EU MDR affect TFDA STED requirements for Class III devices?",
                "What are the specific criteria for 'Similar Product' comparison in simplified pathways?",
                "How can SaMD validation reports be optimized for faster TFDA clinical review?",
                "What is the impact of UDI (Unique Device Identification) on labeling requirements?",
                "How to handle multi-site manufacturing in a single QMS certificate for LoA?",
                "What are the most common reasons for TFDA deficiency letters in 2024?",
                "When is a Clinical Evaluation Report (CER) mandatory for Class II devices?",
                "How does TFDA treat AI/ML updates in software vs. standard hardware changes?",
                "What are the guidelines for biocompatibility testing on non-invasive sensors?",
                "How to accelerate 'Med-to-MD' transition cases for legacy pharmaceutical products?",
                "What is the current wait time for Class III technical audits (Technical Review)?",
                "Can ISO 13485:2016 completely replace the TFDA QMS site audit?",
                "How to document 'Equivalence' when the similar product is from a different legal manufacturer?",
                "What are the labeling requirements for sterile vs. non-sterile variations of the same model?",
                "How does the 'Electronic IFU' policy apply to specialized hospital equipment?",
                "What is the protocol for reporting adverse events during the registration process?",
                "How to manage 'Change of Ownership' without interrupting current product distribution?",
                "What are the specific requirements for 'Chinese Labels' for products manufactured in China?",
                "How does the TFDA view Real-World Evidence (RWE) in support of clinical claims?",
                "What is the 'Green Channel' criteria for innovative medical devices (Breakthrough Devices)?"
              ].map((q, i) => (
                <div key={i} className="p-4 border border-ink bg-stone-50 hover:bg-white hover:shadow-neo-sm transition-all group cursor-help">
                  <span className="text-[8px] font-black opacity-30 block mb-2 uppercase">Query {i+1}</span>
                  <p className="text-xs font-bold leading-relaxed group-hover:text-accent-red">{q}</p>
                </div>
              ))}
            </div>
          </footer>
        </main>
      </div>
      
      {/* Footer / Floating Status */}
      <footer className="fixed bottom-8 right-8 z-50">
         <div className="px-6 py-2 bg-ink border border-white/20 text-white font-bold tracking-widest shadow-neo flex items-center gap-4">
           <span className="w-2 h-2 bg-accent-red animate-pulse" />
           <span className="text-[10px] uppercase tracking-[0.3em]">System Integrity: Optimal</span>
           <span className="opacity-20">|</span>
           <span className="text-[10px] uppercase tracking-[0.3em] font-serif italic">{painter.name} Atmosphere</span>
         </div>
      </footer>
    </div>
  );
}

const PlayCircle = ({ className }: { className?: string }) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M256 48C141.2 48 48 141.2 48 256s93.2 208 208 208 208-93.2 208-208S370.8 48 256 48zm-41 292.5V171.5L343 256l-128 84.5z"></path>
  </svg>
);
