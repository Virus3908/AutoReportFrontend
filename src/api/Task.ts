import axios from 'axios';

export const createConvertTask = async (conversationId: string): Promise<void> => {
  await axios.post(`/api/task/create/convert/${conversationId}`);
};

export const createDiarizeTask = async (conversationId: string): Promise<void> => {
  await axios.post(`/api/task/create/diarize/${conversationId}`);
};

export const createTranscriptionTask = async (conversationId: string): Promise<void> => {
  await axios.post(`/api/task/create/transcription/${conversationId}`);
};