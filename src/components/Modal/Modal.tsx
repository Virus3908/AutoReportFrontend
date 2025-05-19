import Modal from 'react-modal';
import ConversationForm from './Conversation/ConversationForm';
import ParticipantForm from './Participant/ParticipantForm';

import './Modal.css'
import { Participant } from '../../api/Participant';
import PromptForm from './Prompt/PromptForm';
import { Prompt } from '../../api/Prompt';
import SemiReportForm from './SemiReport/SemiReportForm';

type Props = {
    isOpen: boolean;
    onClose: () => void;
    onSuccess?: () => void;
    type: 'conversationCreate' | 'participantCreate' | 'participantEdit' | 'promptEdit' | 'promptCreate' | 'createSemiReport';
    participant?: Participant;
    prompt?: Prompt;
    conversationId?: string;
};

const AddEntityModal: React.FC<Props> = ({
    isOpen,
    onClose,
    onSuccess,
    type,
    participant,
    prompt,
    conversationId,
}) => {
    const getTitle = () => {
        switch (type) {
            case 'conversationCreate':
                return 'Новое совещание';
            case 'participantCreate':
                return 'Новый пользователь';
            case 'participantEdit':
                return 'Редактирование пользователя';
            case 'promptEdit':
                return 'Редактирование промпта';
            case 'promptCreate':
                return 'Создание промпта';
            case 'createSemiReport':
                return 'Подведение итогов';
            default:
                return 'Создание';
        }
    };

    const renderForm = () => {
        switch (type) {
            case 'conversationCreate':
                return <ConversationForm onClose={onClose} onSuccess={onSuccess} />;
            case 'participantCreate':
                return <ParticipantForm
                    onClose={onClose}
                    onSuccess={onSuccess}
                    type={type}
                />;
            case 'participantEdit':
                return participant ? (
                    <ParticipantForm
                        onClose={onClose}
                        onSuccess={onSuccess}
                        type={type}
                        participant={participant}
                    />
                ) : null;
            case 'promptEdit':
                return prompt ? (<PromptForm
                    type={type}
                    onClose={onClose}
                    onSuccess={onSuccess}
                    initialData={prompt}
                />) : null;
            case 'promptCreate':
                return <PromptForm
                    type={type}
                    onClose={onClose}
                    onSuccess={onSuccess}
                />;
            case 'createSemiReport':
                return conversationId ? (<SemiReportForm
                    conversationId={conversationId}
                    onClose={onClose}
                    onSuccess={onSuccess}
                />) : null;
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