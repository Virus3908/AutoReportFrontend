import Modal from 'react-modal';
import ConversationForm from './Conversation/ConversationForm';
import ParticipantForm from './Participant/ParticipantForm';

import './Modal.css'
import { Participant } from '../../api/Participant';

type Props = {
    isOpen: boolean;
    onClose: () => void;
    onSuccess?: () => void;
    type: 'conversationCreate' | 'participantCreate' | 'participantEdit';
    participant?: Participant
};

const AddEntityModal: React.FC<Props> = ({ isOpen, onClose, onSuccess, type, participant }) => {
    const getTitle = () => {
        switch (type) {
            case 'conversationCreate':
                return 'Новое совещание';
            case 'participantCreate':
                return 'Новый пользователь';
            case 'participantEdit':
                return 'Редактирование пользователя';
            default:
                return 'Создание';
        }
    };

    const renderForm = () => {
        switch (type) {
            case 'conversationCreate':
                return <ConversationForm onClose={onClose} onSuccess={onSuccess} />;
            case 'participantCreate':
                return <ParticipantForm onClose={onClose} onSuccess={onSuccess} />;
            case 'participantEdit':
                return participant ? (
                    <ParticipantForm
                        onClose={onClose}
                        onSuccess={onSuccess}
                        initialName={participant.name}
                        initialEmail={participant.email}
                        participantId={participant.id}
                    />
                ) : null;
            default:
                return null;
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel={getTitle()}
            className="modal"
            overlayClassName="overlay"
        >
            <button className="modal-close" onClick={onClose}>×</button>
            <p className="modal-header">{getTitle()}</p>
            {renderForm()}
        </Modal>
    );
};

export default AddEntityModal;