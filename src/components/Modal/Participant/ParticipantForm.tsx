import { Participant } from '../../../api/Participant';
import { useParticipantForm } from '../../../hooks/useParticipantForm';
import '../Modal.css';

type Props = {
    onClose: () => void;
    onSuccess?: () => void;
    type: 'participantEdit' | 'participantCreate';
    participant?: Participant;
};

const ParticipantForm: React.FC<Props> = ({
    onClose,
    onSuccess,
    type,
    participant,
}) => {
    const {
        name,
        setName,
        email,
        setEmail,
        handleSubmit,
    } = useParticipantForm(type, onSuccess, onClose, participant);

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
                {participant ? 'Обновить' : 'Создать'}
            </button>
        </form>
    );
};

export default ParticipantForm;