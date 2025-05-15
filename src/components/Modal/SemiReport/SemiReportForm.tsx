import { useSemiReportForm } from '../../../hooks/useSemiReportForm';
import '../Modal.css';

type Props = {
    onClose: () => void;
    onSuccess?: () => void;
};

const SemiReportForm: React.FC<Props> = ({ onClose, onSuccess }) => {
    const {
        conversationId,
        setConversationId,
        promptName,
        setPromptName,
        handleSubmit
    } = useSemiReportForm(onSuccess, onClose);

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="ID разговора"
                value={conversationId}
                onChange={(e) => setConversationId(e.target.value)}
                required
                className="text-input"
            />
            <input
                type="text"
                placeholder="Название запроса"
                value={promptName}
                onChange={(e) => setPromptName(e.target.value)}
                required
                className="text-input"
            />
            <button type="submit" className="modal-button">
                Создать задачу
            </button>
        </form>
    );
};

export default SemiReportForm;