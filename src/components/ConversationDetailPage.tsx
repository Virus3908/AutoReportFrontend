import { useParams } from 'react-router-dom';
import { useConversation } from '../hooks/useConversation';

const ConversationDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { conversation, error, loading } = useConversation(id);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>{error}</div>;
  if (!conversation) return <div>Совещание не найдено</div>;

  return (
    <div>
      <h2>{conversation.conversation_name}</h2>
      <p><strong>ID:</strong> {conversation.id}</p>
      <p><strong>Статус:</strong> {conversation.status}</p>
      <p><strong>Создано:</strong> {conversation.created_at}</p>
      <p>
        <strong>Файл:</strong>{' '}
        <a href={conversation.file_url} target="_blank" rel="noreferrer">
          Скачать
        </a>
      </p>
    </div>
  );
};

export default ConversationDetailPage;