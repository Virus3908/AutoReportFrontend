import TranscriptionButton from './TranscriptionButton';
import DownloadButton from './DownloadButton';
import './ConversationDetail.css';
import { useEditConversationName } from '../../hooks/useEditConversationName';
import ReportButton from './ReportButton';

type Props = {
  title: string;
  fileUrl: string;
  conversationId: string;
  status: number; // 👈 добавили статус
};

const ConversationHeader: React.FC<Props> = ({
  title,
  conversationId,
  fileUrl,
  status
}) => {
  const {
    isEditing,
    setIsEditing,
    newTitle,
    setNewTitle,
    handleSave,
    handleCancel,
    loading
  } = useEditConversationName(conversationId, title);

  return (
    <div className="conversation-header">
      {isEditing ? (
        <div className="conversation-title-wrapper ">
          <textarea
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="edit-title-textarea"
          />
          <div className="edit-title-buttons">
            <button className="edit-button" onClick={handleSave} disabled={loading}>💾</button>
            <button className="edit-button" onClick={handleCancel} disabled={loading}>✖</button>
          </div>
        </div>
      ) : (
        <h2 className="conversation-title">
          {newTitle}
          <button
            className="edit-button"
            onClick={() => setIsEditing(true)}
            title="Редактировать"
          >✏️</button>
        </h2>
      )}

      <div className="conversation-header">
        <DownloadButton url={fileUrl} />
        <TranscriptionButton
          conversationId={conversationId}
          disabled={status !== 0}
        />
        <ReportButton
          conversationId={conversationId}
          disabled={status !== 3}
          reportType='semi'
        />
        <ReportButton
          conversationId={conversationId}
          disabled={status < 3}
          reportType='full'
        />
      </div>
    </div>
  );
};

export default ConversationHeader;