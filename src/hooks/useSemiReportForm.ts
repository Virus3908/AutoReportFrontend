import { useState } from 'react';
import { createSemiReportTask } from '../api/Task';

export const useSemiReportForm = (
  onSuccess?: () => void,
  onClose?: () => void
) => {
  const [conversationId, setConversationId] = useState('');
  const [promptName, setPromptName] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createSemiReportTask(conversationId, {
        prompt_name: promptName,
        prompt: ''
      });

      if (onSuccess) onSuccess();
      if (onClose) onClose();
    } catch (error) {
      console.error("Ошибка при создании отчёта:", error);
    }
  };

  return {
    conversationId,
    setConversationId,
    promptName,
    setPromptName,
    handleSubmit
  };
};