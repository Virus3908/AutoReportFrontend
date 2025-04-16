import React from 'react';
import '../AddModal.css';
import { useAddConversation } from '../../../hooks/useAddConversation';

type Props = {
    onSuccess?: () => void;
    onClose: () => void;
};

const AddConversationForm: React.FC<Props> = ({ onSuccess, onClose }) => {
    const {
        title,
        setTitle,
        file,
        setFile,
        handleSubmit,
    } = useAddConversation(onSuccess, onClose);

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Название совещания"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="text-input"
            />
            <div className="button-group">
                <label htmlFor="file-upload" className="modal-button">
                    Загрузить видео
                </label>
                <input
                    id="file-upload"
                    type="file"
                    accept="video/mp4"
                    style={{ display: 'none' }}
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                    required
                />
                <button type="submit" className="modal-button">Создать</button>
            </div>
            {file && (
                <div className="selected-file-block">
                    <span className="selected-file"> {file.name}</span>
                    <button
                        type="button"
                        className="remove-file-button"
                        onClick={() => setFile(null)}
                    >
                        ✖
                    </button>
                </div>
            )}
        </form>
    );
};

export default AddConversationForm;