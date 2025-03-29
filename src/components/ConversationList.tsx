import React from 'react';
import { Link } from 'react-router-dom';
import './ConversationList.css';
import { Conversation } from '../api/Conversation';

type Props = {
    conversations: Conversation[];
    onDelete: (id: string) => void;
};

const ConversationsList: React.FC<Props> = ({ conversations, onDelete }) => {
    if (conversations.length === 0) {
        return <p>Совещаний пока нет.</p>;
    }

    return (
        <div className="conversations-list">
            {conversations.map((conv) => (
                <div className="conversation-item" key={conv.id}>
                    <Link to={`/conversations/${conv.id}`} className="conversation-title">
                        {conv.conversation_name}
                    </Link>
                    <button
                        className="conversation-delete"
                        onClick={() => onDelete(conv.id)}
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

