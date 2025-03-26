import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getConversation, Conversation } from "../services/api";

const ConversationDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [conversation, setConversation] = useState<Conversation | null>(null);

  useEffect(() => {
    if (id) {
      getConversation(id).then(setConversation).catch(console.error);
    }
  }, [id]);

  if (!conversation) return <p>Загрузка...</p>;

  return (
    <div>
      <h2>{conversation.conversation_name}</h2>
      <p>Статус: {conversation.status}</p>
      <p>URL файла: <a href={conversation.file_url}>{conversation.file_url}</a></p>
      <p>Создано: {new Date(conversation.created_at).toLocaleString()}</p>
    </div>
  );
};

export default ConversationDetails;