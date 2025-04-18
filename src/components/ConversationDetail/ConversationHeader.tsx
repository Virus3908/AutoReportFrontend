import React from 'react';
import TranscriptionButton from './TranscriptionButton';
import DownloadButton from './DownloadButton';

type Props = {
  title: string;
  fileUrl: string;
  conversationId: string;
};

const ConversationHeader: React.FC<Props> = ({ title, conversationId, fileUrl }) => (
  <div className="conversation-header">
    <h2 className="conversation-title">{title}</h2>
    <div>
    <DownloadButton url={fileUrl} />
    <TranscriptionButton conversationId={conversationId} />
    </div>
    
  </div>
);

export default ConversationHeader;