import { useState } from 'react';
import { updateTranscription } from '../api/Conversation';

export const useUpdateTranscription = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const update = async (id: string, text: string) => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            await updateTranscription(id, text);
            setSuccess(true);
        } catch (err) {
            console.error(err);
            setError('Ошибка при обновлении транскрипции');
        } finally {
            setLoading(false);
        }
    };
    const resetSuccess = () => {
        setSuccess(false);
    };

    return {
        update,
        loading,
        error,
        success,
        resetSuccess,
    };
};