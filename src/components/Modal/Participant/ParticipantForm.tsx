import { useParticipantForm } from '../../../hooks/useParticipantForm';
import '../Modal.css';

type Props = {
    onClose: () => void;
    onSuccess?: () => void;
    initialName?: string;
    initialEmail?: string;
    participantId?: string;
};

const ParticipantForm: React.FC<Props> = ({
    onClose,
    onSuccess,
    initialName = '',
    initialEmail = '',
    participantId
}) => {
    const {
        name,
        setName,
        email,
        setEmail,
        handleSubmit,
    } = useParticipantForm(onSuccess, onClose, initialName, initialEmail, participantId);

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Имя пользователя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="text-input"
            />
            <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="text-input"
            />
            <button type="submit" className="modal-button">
                {participantId ? 'Обновить' : 'Создать'}
            </button>
        </form>
    );
};

export default ParticipantForm;