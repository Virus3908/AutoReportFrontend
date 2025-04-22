import axios from "axios";

export type Prompt = {
    id: string;
    prompt_name: string;
    prompt: string;
  };
  
  export const fetchPrompts = async (): Promise<Prompt[]> => {
    const res = await axios.get<Prompt[]>('/api/prompts');
    return res.data;
  };
  
  export const createPrompt = async (data: { prompt_name: string; prompt: string }) => {
    const res = await fetch('/api/prompts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Ошибка при создании промта');
    return res;
  };
  
  export const updatePrompt = async (id: string, data: { prompt_name: string; prompt: string }) => {
    const response = await fetch(`/api/prompts/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
        throw new Error('Ошибка при редактировании участника');
    }

    if (response.status === 204) return;

    return response.json();
  };
  
  export const deletePromptById = async (id: string) => {
    const res = await fetch(`/api/prompts/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('Ошибка при удалении промта');
  };