import { useEffect, useState } from "react";
import { fetchConversations, Conversation, deleteConversationByID } from "../api/Conversation";

export const useLoadConversations = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadConversations = async () => {
    try {
      setLoading(true);
      const data = await fetchConversations();
      setConversations(data);
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Ошибка загрузки совещаний");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadConversations();

    const handler = () => {
      console.log("Получено событие обновления совещаний");
      loadConversations();
    };

    window.addEventListener("conversationsUpdated", handler);

    return () => {
      window.removeEventListener("conversationsUpdated", handler);
    };
  }, []);

  const deleteConversation = async (id: string) => {
    try {
      await deleteConversationByID(id);
      setConversations((prev) => prev.filter((conv) => conv.id !== id));
    } catch (err) {
      console.error('Ошибка при удалении:', err);
    }
  };

  return { conversations, loading, error, deleteConversation };
};