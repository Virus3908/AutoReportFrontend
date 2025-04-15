import { useEffect, useState } from 'react';
import { Conversation, fetchConversationByID } from '../api/Conversation';

export const useConversationDetail = (id: string | undefined) => {
  const [conversation, setConversation] = useState<Conversation | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!id) return;

    const loadConversation = async () => {
      try {
        const data = await fetchConversationByID(id);
        setConversation(data);
        setError(null);
      } catch (err) {
        console.error(err);
        setError('Ошибка загрузки совещания');
      } finally {
        setLoading(false);
      }
    };

    loadConversation();
  }, [id]);

  return { conversation, error, loading };
};