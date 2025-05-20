import { useRef } from "react";
import { useParams } from 'react-router-dom';
import { useConversationDetail } from '../hooks/useConversationDetail';
import ConversationHeader from '../components/ConversationDetail/ConversationHeader';
import ConversationInfo from '../components/ConversationDetail/ConversationInfo';
import ConversationPlayer from '../components/ConversationDetail/ConversationPlayer';
import './Pages.css';
import ConversationResult from "../components/ConversationDetail/ConversationResult/ConversationResult";

const ConversationDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { conversation, error, loading } = useConversationDetail(id);
  const videoRef = useRef<HTMLVideoElement>(null);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>{error}</div>;
  if (!conversation) return <div>Совещание не найдено</div>;

  return (
    <div className="conversation-detail">
      <div className="conversation-detail-header">
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
      </div>

      <div className="conversation-layout">
        <div className="player-fixed">
          <ConversationPlayer
            url={conversation.file_url}
            ref={videoRef}
          />
        </div>

        <div className="result-scrollable">
          <ConversationResult
            segments={conversation.segments || []}
            conversation_id={conversation.id}
            videoRef={videoRef}
            semi_report={conversation.semi_report}
            report={conversation.report}
          />
        </div>
      </div>
    </div>
  );
};

export default ConversationDetailPage;