import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

export interface Conversation {
  id: string;
  conversation_name: string;
  file_url: string;
  status: number;
  created_at: string;
  updated_at: string;
}

export const getConversation = async (id: string) => {
  const response = await axios.get(`${API_BASE_URL}/api/conversations/${id}`);
  return response.data;
};

export const getAllConversations = async (): Promise<Conversation[]> => {
  const response = await axios.get(`${API_BASE_URL}/api/conversations`);
  return response.data;
};