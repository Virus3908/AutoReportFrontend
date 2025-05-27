import { useEffect, useState } from 'react';
import { fetchPrompts, deletePromptById, Prompt } from '../api/Prompt';

export const useLoadPrompts = () => {
    const [prompts, setPrompts] = useState<Prompt[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const loadPrompts = async () => {
        try {
            setLoading(true);
            const data = await fetchPrompts();
            if (Array.isArray(data)) {
                setPrompts(data);
                setError(null);
            } else {
                console.error("Ожидался массив, но пришло:", data);
                setPrompts([]);
            }
        } catch (err) {
            console.error(err);
            setError('Ошибка при загрузке');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadPrompts();
        const handler = () => loadPrompts();
        window.addEventListener('promptsUpdated', handler);
        return () => window.removeEventListener('promptsUpdated', handler);
    }, []);

    const deletePrompt = async (id: string) => {
        try {
            await deletePromptById(id);
            setPrompts((prev) => prev.filter((p) => p.id !== id));
        } catch (err) {
            console.error('Ошибка при удалении:', err);
        }
    };

    return { prompts, loading, error, deletePrompt };
};