import { useState } from 'react';
import { createParticipant, Participant, updateParticipant } from '../api/Participant';

export const useParticipantForm = (
  type: 'participantEdit' | 'participantCreate',
  onSuccess?: () => void,
  onClose?: () => void,
  initialData?: Participant
) => {
  const [name, setName] = useState(initialData?.name || '');
  const [email, setEmail] = useState(initialData?.email || '');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) return alert('Введите имя');
    if (!email.trim()) return alert('Введите email');

    const participantData = {
      name,
      email,
    };

    try {
      if (type === 'participantEdit' && initialData) {
        await updateParticipant(initialData.id, participantData);
      } else if (type === 'participantCreate') {
        await createParticipant(participantData);
      }

      setName('');
      setEmail('');
      onSuccess?.();
      onClose?.();
    } catch (err) {
      console.error('Ошибка при сохранении пользователя:', err);
      alert('Ошибка при сохранении');
    }
  };

  return {
    name,
    setName,
    email,
    setEmail,
    handleSubmit,
  };
};