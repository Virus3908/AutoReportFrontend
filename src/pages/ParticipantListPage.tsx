import { useLoadParticipants } from "../hooks/useLoadParticipants";
import ParticipantList from "../components/Lists/ParticipantList/ParticipantList";
import { useState } from 'react';
import AddEntityModal from '../components/Modal/Modal';
import { Participant } from '../api/Participant';

const ParticipantListPage: React.FC = () => {
    const { participants, loading, error, deleteParticipant } = useLoadParticipants();
    const [modalType, setModalType] = useState<'participantEdit' | null>(null);
    const [selectedParticipant, setSelectedParticipant] = useState<Participant | undefined>(undefined);
    const handleEdit = (participant: Participant) => {
        setSelectedParticipant(participant);
        setModalType('participantEdit');
    };

    const handleClose = () => {
        setModalType(null);
        setSelectedParticipant(undefined);
    };


    return (
        <div style={{ padding: '20px' }}>
            <h2>Список участников</h2>
            {loading && <p>Загрузка...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {!loading && !error && <ParticipantList
                participants={participants}
                onDelete={deleteParticipant}
                onEdit={handleEdit}
            />}
            {modalType === 'participantEdit' && selectedParticipant && (
                <AddEntityModal
                    isOpen={true}
                    onClose={handleClose}
                    onSuccess={() => {
                        window.dispatchEvent(new Event('participantsUpdated'));
                        handleClose();
                    }}
                    type="participantEdit"
                    participant={selectedParticipant}
                />
            )}
        </div>
    );
}

export default ParticipantListPage;