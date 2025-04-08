import React from 'react';
import TranscriptionButton from './TranscriptionButton';

type Props = {
  title: string;
  conversationId: string;
};

const ConversationHeader: React.FC<Props> = ({ title, conversationId }) => (
  <div className="conversation-header">
    <h2 className="conversation-title">{title}</h2>
    <TranscriptionButton conversationId={conversationId} />
  </div>
);

export default ConversationHeader;