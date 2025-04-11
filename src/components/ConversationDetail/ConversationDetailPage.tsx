import { useParams } from 'react-router-dom';
import { useConversation } from '../../hooks/useConversation';
import ConversationHeader from './ConversationHeader';
import ConversationInfo from './ConversationInfo';
import ConversationFiles from './ConversationFiles';
import ConversationSegments from './ConversationSegments';
import './ConversationDetail.css';

const ConversationDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { conversation, error, loading } = useConversation(id);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>{error}</div>;
  if (!conversation) return <div>Совещание не найдено</div>;

  return (
    <div className="conversation-detail">
      <ConversationHeader
        title={conversation.conversation_name}
        conversationId={conversation.id}
      />

      <ConversationInfo
        // id={conversation.id}
        status={conversation.status}
      />

      <ConversationFiles
        original={conversation.file_url}
        converted={conversation.converted_file_url}
      />

      <ConversationSegments segments={conversation.segments || []} />
    </div>
  );
};

export default ConversationDetailPage;