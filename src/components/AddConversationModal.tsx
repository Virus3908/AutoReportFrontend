import Modal from 'react-modal';
import AddConversationForm from './AddConversationForm';
import './AddConversation.css'

type Props = {
    isOpen: boolean;
    onClose: () => void;
    onSuccess?: () => void;
};

const AddConversationModal: React.FC<Props> = ({ isOpen, onClose, onSuccess }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Новое совещание"
            className="modal"
            overlayClassName="overlay"
        >
            <button className="modal-close" onClick={onClose}>×</button>
            <p className="modal-header">Новое совещание</p>
            <AddConversationForm onClose={onClose} onSuccess={onSuccess} />
        </Modal>
    );
};

export default AddConversationModal;