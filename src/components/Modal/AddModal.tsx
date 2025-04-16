import Modal from 'react-modal';
import AddConversationForm from './AddConversation/AddConversationForm';
import AddParticipantForm from './AddParticipant/AddParticipantForm';

import './AddModal.css'

type Props = {
    isOpen: boolean;
    onClose: () => void;
    onSuccess?: () => void;
    type: 'conversation' | 'participant';
};

const AddEntityModal: React.FC<Props> = ({ isOpen, onClose, onSuccess, type }) => {
    const getTitle = () => {
        switch (type) {
            case 'conversation':
                return 'Новое совещание';
            case 'participant':
                return 'Новый пользователь';
            default:
                return 'Создание';
        }
    };

    const renderForm = () => {
        switch (type) {
            case 'conversation':
                return <AddConversationForm onClose={onClose} onSuccess={onSuccess} />;
            case 'participant':
                return <AddParticipantForm onClose={onClose} onSuccess={onSuccess} />;
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