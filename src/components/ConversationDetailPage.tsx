import { useParams } from 'react-router-dom';
import { useConversation } from '../hooks/useConversation';
import './ConversationDetail.css'

const ConversationDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { conversation, error, loading } = useConversation(id);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>{error}</div>;
  if (!conversation) return <div>Совещание не найдено</div>;

  return (
    <div className="conversation-detail">
      <h2 className="conversation-title">{conversation.conversation_name}</h2>
      <p className="conversation-field"><strong>ID:</strong> {conversation.id}</p>
      <p className="conversation-field"><strong>Статус:</strong> {conversation.status}</p>
      <p className="conversation-field"><strong>Создано:</strong> {conversation.created_at}</p>
      <p className="conversation-field">
        <strong>Файл:</strong>{' '}
        <a href={conversation.file_url} target="_blank" rel="noreferrer" className="file-link">
          Скачать
        </a>
      </p>
    </div>
  );
};

export default ConversationDetailPage;