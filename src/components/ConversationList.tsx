import React from 'react';
import { Link } from 'react-router-dom';
import './ConversationList.css';
import { Conversation } from '../api/Conversation';

type Props = {
    conversations: Conversation[];
};

const ConversationsList: React.FC<Props> = ({ conversations }) => {
    if (conversations.length === 0) {
        return <p>Совещаний пока нет.</p>;
    }

    return (
        <div className="conversations-list">
            {conversations.map((conv) => (
                <Link
                    to={`/conversations/${conv.id}`}
                    key={conv.id}
                    className="conversation-link"
                >
                    <div className="conversation-item">
                        <h3 className="conversation-title">{conv.conversation_name}</h3>
                        <small className="conversation-id">ID: {conv.id}</small>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default ConversationsList;