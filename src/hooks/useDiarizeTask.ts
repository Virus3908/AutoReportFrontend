import { useState } from 'react';
import { createDiarizeTask } from '../api/Task';

export const useDiarizeTask = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const convert = async (conversationId: string) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await createDiarizeTask(conversationId);
      setSuccess(true);
    } catch (err) {
      console.error(err);
      setError('Ошибка при создании задачи на конвертацию');
    } finally {
      setLoading(false);
    }
  };

  return { convert, loading, error, success };
};