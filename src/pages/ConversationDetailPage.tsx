import { useParams } from 'react-router-dom';
import { useConversationDetail } from '../hooks/useConversationDetail';
import ConversationHeader from '../components/ConversationDetail/ConversationHeader';
import ConversationInfo from '../components/ConversationDetail/ConversationInfo';
import ConversationPlayer from '../components/ConversationDetail/ConversationPlayer';
import ConversationSegments from '../components/ConversationDetail/ConversationSegments';
import '../components/ConversationDetail/ConversationDetail.css';

const ConversationDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { conversation, error, loading } = useConversationDetail(id);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>{error}</div>;
  if (!conversation) return <div>Совещание не найдено</div>;

  return (
    <div className="conversation-detail">
      <ConversationHeader
        title={conversation.conversation_name}
        conversationId={conversation.id}
        fileUrl={conversation.file_url}
        status={conversation.status}
      />

      <ConversationInfo
        // id={conversation.id}
        status={conversation.status}
      />

      <ConversationPlayer
        url={conversation.file_url}
        // converted={conversation.converted_file_url}
      />

      <ConversationSegments 
        segments={conversation.segments || []}
        conversation_id={conversation.id}
       />
    </div>
  );
};

export default ConversationDetailPage;