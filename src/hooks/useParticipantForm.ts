import { useState } from 'react';
import { createParticipant, updateParticipant } from '../api/Participant';
import { useNavigate } from 'react-router-dom';

export const useParticipantForm = (
  onSuccess?: () => void,
  onClose?: () => void,
  initialName: string = '',
  initialEmail: string = '',
  participantId?: string
) => {
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) return alert('Введите имя');

    try {
      if (participantId) {
        await updateParticipant(participantId, { name, email });
      } else {
        await createParticipant({ name, email });
      }

      setName('');
      setEmail('');
      onSuccess?.();
      onClose?.();

      if (!participantId) navigate('/participants');
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