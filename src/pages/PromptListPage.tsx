import { useLoadPrompts } from '../hooks/useLoadPrompts';
import PromptsList from '../components/Lists/PromptList/PromptList';
import { Prompt } from '../api/Prompt';
import { useState } from 'react';
import AddEntityModal from '../components/Modal/Modal';

const PromptListPage: React.FC = () => {
    const { prompts, loading, error, deletePrompt } = useLoadPrompts();
    const [modalType, setModalType] = useState<'promptEdit' | null>(null);
    const [selectedPrompt, setSelectedPrompt] = useState<Prompt | undefined>(undefined);
    const handleEdit = (prompt: Prompt) => {
        setSelectedPrompt(prompt);
        setModalType('promptEdit');
    };

    const handleClose = () => {
        setModalType(null);
        setSelectedPrompt(undefined);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Список промтов</h2>
            {loading && <p>Загрузка...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {!loading && !error && <PromptsList
                prompts={prompts}
                onDelete={deletePrompt}
                onEdit={handleEdit}

            />}
            {modalType === 'promptEdit' && selectedPrompt && (
                <AddEntityModal
                    isOpen={true}
                    onClose={handleClose}
                    onSuccess={() => {
                        window.dispatchEvent(new Event('promptsUpdated'));
                        handleClose();
                    }}
                    type="promptEdit"
                    prompt={selectedPrompt}
                />
            )}
        </div>
    );
};

export default PromptListPage;