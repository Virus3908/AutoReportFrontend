import React from 'react';
import './ParticipantList.css';
import { Participant } from '../../api/Participant';

type Props = {
    participants: Participant[];
    onDelete: (id: string) => void;
};

const ParticipantsList: React.FC<Props> = ({ participants, onDelete }) => {
    if (!participants || participants.length === 0) {
        return <p>Участников пока нет.</p>;
    }

    return (
        <div className="participants-list">
            {participants.map((part) => (
                <div
                    key={part.id}
                    className="participant-item"
                >
                    <span className="participant-name">{part.name}</span>
                    <button
                        className="participant-delete"
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