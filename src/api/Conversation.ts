import axios from 'axios';

export type Conversation = {
  id: string;
  conversation_name: string;
  file_url: string;
  status: number;
  created_at: string;
  updated_at: string;
};

export const fetchConversations = async (): Promise<Conversation[]> => {
  const response = await axios.get<Conversation[]>(`/api/conversations`);
  return response.data
};

export const fetchConversationByID = async (id: string): Promise<Conversation> => {
  const response = await axios.get<Conversation>(`/api/conversations/${id}`);
  return response.data;

};

export const createConversation = async (formData: FormData) => {
  const response = await fetch(`/api/conversations`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Ошибка API: ${response.status}`);
  }

  return response;
};

export async function deleteConversationByID(id: string): Promise<void> {
  const response = await fetch(`/api/conversations/${id}`, { method: 'DELETE' });
  if (!response.ok) throw new Error('Delete failed');
}

