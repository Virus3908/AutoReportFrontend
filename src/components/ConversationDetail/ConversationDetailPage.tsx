import { useParams } from 'react-router-dom';
import { useConversation } from '../../hooks/useConversation';
import './ConversationDetail.css'
import ConvertButton from './ConvertButton';
import DiarizeButton from './DiarizeButton';
import TranscriptionButton from './TranscriptionButton';

const ConversationDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { conversation, error, loading } = useConversation(id);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>{error}</div>;
  if (!conversation) return <div>Совещание не найдено</div>;

  return (
    <div className="conversation-detail">
      <h2 className="conversation-title">{conversation.conversation_name}</h2>
      <ConvertButton conversationId={conversation.id} />
      <DiarizeButton conversationId={conversation.id} />
      <TranscriptionButton conversationId={conversation.id} />

      <p className="conversation-field"><strong>ID:</strong> {conversation.id}</p>
      <p className="conversation-field"><strong>Статус:</strong> {conversation.status}</p>

      <p className="conversation-field">
        <strong>Файл:</strong>{' '}
        <a href={conversation.file_url} target="_blank" rel="noreferrer" className="file-link">
          Скачать
        </a>
      </p>

      {conversation.converted_file_url && (
        <p className="conversation-field">
          <strong>Сконвертированный файл:</strong>{' '}
          <a href={conversation.converted_file_url} target="_blank" rel="noreferrer" className="file-link">
            Скачать
          </a>
        </p>
      )}

      {conversation.segments && conversation.segments.length > 0 && (
        <div className="conversation-segments">
          <h3>Сегменты:</h3>
          <ul>
            {conversation.segments.map(segment => (
              <li key={segment.segment_id} className="segment">
                <p><strong>Начало:</strong> {segment.start_time.toFixed(2)} сек</p>
                <p><strong>Конец:</strong> {segment.end_time.toFixed(2)} сек</p>
                <p><strong>Спикер:</strong> Speaker {segment.speaker}</p>
                {segment.transcription && (
                  <p><strong>Транскрипция:</strong> {segment.transcription}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ConversationDetailPage;