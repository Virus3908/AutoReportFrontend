import axios from 'axios';

type Prompt = {
  prompt_name: string;
  prompt: string;
}

export const createTranscriptionTask = async (conversationId: string): Promise<void> => {
  await axios.post(`/api/task/create/convert/${conversationId}`);
};

export const createSemiReportTask = async (conversationId: string, prompt: Prompt): Promise<void> => {
  await axios.post(`/api/task/create/semireport/${conversationId}`, prompt);
}

// export const createDiarizeTask = async (conversationId: string): Promise<void> => {
//   await axios.post(`/api/task/create/diarize/${conversationId}`);
// };

// export const createTranscriptionTask = async (conversationId: string): Promise<void> => {
//   await axios.post(`/api/task/create/transcription/${conversationId}`);
// };