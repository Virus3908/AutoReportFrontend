import React from 'react';
import './ConversationList.css';
import { Conversation } from '../../api/Conversation';

type Props = {
    conversations: Conversation[];
    onDelete: (id: string) => void;
};

const ConversationsList: React.FC<Props> = ({ conversations, onDelete }) => {
    if (!conversations || conversations.length === 0) {
        return <p>Совещаний пока нет.</p>;
    }

    return (
        <div className="conversations-list">
            {conversations.map((conv) => (
                <div
                    key={conv.id}
                    className="conversation-item"
                    onClick={() => window.location.href = `/conversations/${conv.id}`}
                >
                    <span className="conversation-title">{conv.conversation_name}</span>
                    <button
                        className="conversation-delete"
                        onClick={(e) => {
                            e.stopPropagation();
                            onDelete(conv.id);
                        }}
                        title="Удалить совещание"
                    >
                        ×
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ConversationsList;

