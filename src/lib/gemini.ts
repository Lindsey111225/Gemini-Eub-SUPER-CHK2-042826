
import { GoogleGenAI } from '@google/genai';

let customApiKey: string | null = null;

export const setCustomApiKey = (key: string) => {
  customApiKey = key;
};

export const getApiKey = () => {
  // If user provided a custom key, use it. Otherwise use the env key.
  return customApiKey || process.env.GEMINI_API_KEY || '';
};

export const isApiKeySet = () => {
  return !!getApiKey();
};

export interface AgentExecution {
  prompt: string;
  input: string;
  model: string;
  maxTokens: number;
}

export const runAgent = async ({ prompt, input, model, maxTokens }: AgentExecution) => {
  const apiKey = getApiKey();
  if (!apiKey) throw new Error('API Key not found');

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: model || 'gemini-3-flash-preview',
      contents: `${prompt}\n\nINPUT DATA:\n${input}`,
      config: {
        maxOutputTokens: maxTokens
      }
    });
    
    return response.text || '';
  } catch (error) {
    console.error('Agent Execution Error:', error);
    throw error;
  }
};
