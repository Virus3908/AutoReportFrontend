import React from 'react';
import '../Lists.css';
import { Conversation } from '../../../api/Conversation';

type Props = {
    conversations: Conversation[];
    onDelete: (id: string) => void;
};

const ConversationsList: React.FC<Props> = ({ conversations, onDelete }) => {
    if (!conversations || conversations.length === 0) {
        return <p>Совещаний пока нет.</p>;
    }

    return (
        <div className="lists">
            {conversations.map((conv) => (
                <div
                    key={conv.id}
                    className="lists-item"
                    onClick={() => window.location.href = `/conversations/${conv.id}`}
                >
                    <span className="lists-title">{conv.conversation_name}</span>
                    <button
                        className="lists-delete"
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

