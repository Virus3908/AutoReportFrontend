import React from 'react';
import '../Lists.css';
import { Participant } from '../../../api/Participant';

type Props = {
    participants: Participant[];
    onDelete: (id: string) => void;
    onEdit: (participant: Participant) => void;
  };
  

const ParticipantsList: React.FC<Props> = ({ participants, onDelete, onEdit }) => {
    if (!participants || participants.length === 0) {
        return <p>Участников пока нет.</p>;
    }

    return (
        <div className="lists">
            {participants.map((part) => (
                <div
                    key={part.id}
                    className="lists-item"
                    onClick={() => onEdit(part)}
                >
                    <div className="lists-text">
                        <span className="lists-title">{part.name}</span>
                        <span className="lists-subtitle">{part.email}</span>
                    </div>
                    <button
                        className="lists-delete"
                        onClick={(e) => {
                            e.stopPropagation();
                            onDelete(part.id);
                        }}
                        title="Удалить участника"
                    >
                        ×
                    </button>
                </div>
            ))}
        </div>
    );
}

export default ParticipantsList;