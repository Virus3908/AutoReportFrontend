import { Prompt } from '../../../api/Prompt';
import { usePromptForm } from '../../../hooks/usePromptForm';
import '../Modal.css'

type Props = {
    onClose: () => void;
    onSuccess?: () => void;
    type: 'promptEdit' | 'promptCreate';
    initialData?: Prompt;
};

const PromptForm: React.FC<Props> = ({
    onClose,
    onSuccess,
    type,
    initialData,
}) => {
    const {
        name,
        setName,
        prompt,
        setPrompt,
        handleSubmit
    } = usePromptForm(type, onSuccess, onClose, initialData);

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Название"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="text-input"
            />
            <textarea 
                className="text-input" 
                value={prompt} 
                onChange={(e) => setPrompt(e.target.value)} 
                placeholder="Введите промпт..." 
                required />
            <button type="submit" className="modal-button">
                {initialData ? 'Обновить' : 'Создать'}
            </button>
        </form>
    );
};

export default PromptForm;