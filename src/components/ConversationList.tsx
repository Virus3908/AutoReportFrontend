import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllConversations, Conversation } from "../services/api";
import CreateConversation from "./CreateConversation";

const ConversationList = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);

  const fetchConversations = async () => {
    try {
      const data = await getAllConversations();
      setConversations(data);
    } catch (error) {
      console.error("Ошибка при получении разговоров:", error);
    }
  };

  useEffect(() => {
    fetchConversations();
  }, []);

  return (
    <div>
      <h2>Список разговоров</h2>
      <CreateConversation onCreated={fetchConversations} />
      <ul>
        {conversations.map((conv) => (
          <li key={conv.id}>
            <Link to={`/conversation/${conv.id}`}>
              <strong>{conv.conversation_name}</strong> — {conv.status}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConversationList;