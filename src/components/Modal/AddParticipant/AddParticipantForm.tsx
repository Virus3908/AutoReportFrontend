import { useAddParticipant } from '../../../hooks/useAddParticipant';
import '../AddModal.css';

type Props = {
    onClose: () => void;
    onSuccess?: () => void;
};

const AddParticipantForm: React.FC<Props> = ({ onClose, onSuccess }) => {
    const {
        name,
        setName,
        email,
        setEmail,
        handleSubmit,
    } = useAddParticipant(onSuccess, onClose);

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
            <button type="submit" className="modal-button">Создать</button>
        </form>
    );
};

export default AddParticipantForm;