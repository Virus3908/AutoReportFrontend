import { useState } from 'react';
import { createParticipant } from '../api/Participant';
import { useNavigate } from 'react-router-dom';

export const useAddParticipant = (
    onSuccess?: () => void,
    onClose?: () => void
) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!name.trim()) return alert('Введите имя');

        try {
            await createParticipant({ name, email });
            setName('');
            setEmail('');
            onSuccess?.();
            onClose?.();
            navigate('/participants');
        } catch (err) {
            console.error('Ошибка при добавлении пользователя:', err);
            alert('Ошибка при добавлении');
        }
    };
    return {
        name,
        setName,
        email,
        setEmail,
        handleSubmit,
    }
}