import axios from 'axios';

export type Conversation = {
  id: string;
  conversation_name: string;
  file_url: string;
  status: number;
  created_at: string;
  updated_at: string;
  created_at_date: Date;
  updated_at_date: Date;
};

export const fetchConversations = async (): Promise<Conversation[]> => {
  const response = await axios.get<Conversation[]>(`/api/conversations`);

  return response.data.map((conv) => ({
    ...conv,
    created_at_date: new Date(conv.created_at),
    updated_at_date: new Date(conv.updated_at),
  }));
};

export const fetchConversationByID = async (id: string): Promise<Conversation> => {
  const response = await axios.get<Conversation>(`/api/conversations/${id}`);
  response.data.created_at_date = new Date(response.data.created_at)
  response.data.updated_at_date = new Date(response.data.updated_at)
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