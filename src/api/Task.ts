import axios from 'axios';

export const createConvertTask = async (conversationId: string): Promise<void> => {
  await axios.post(`/api/task/create/convert/${conversationId}`);
};