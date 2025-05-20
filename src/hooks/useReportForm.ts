import { useState } from 'react';
import { createSemiReportTask, createReportTask } from '../api/Task';

export const useReportForm = (
  conversationId: string,
  reportType: 'semi' | 'full',
  onSuccess?: () => void,
  onClose?: () => void
) => {
  const [promptName, setPromptName] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (reportType === 'semi') {
        await createSemiReportTask(conversationId, {
          prompt_name: promptName,
          prompt: ''
        });
      } else if (reportType === 'full') {
        await createReportTask(conversationId, {
          prompt_name: promptName,
          prompt: ''
        });
      }

      if (onSuccess) onSuccess();
      if (onClose) onClose();
    } catch (error) {
      console.error("Ошибка при создании отчёта:", error);
    }
  };

  return {
    promptName,
    setPromptName,
    handleSubmit
  };
};