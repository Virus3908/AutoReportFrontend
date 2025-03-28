// hooks/useAddConversation.ts
import { useState } from 'react';
import { createConversation } from '../api/Conversation';
import { useNavigate } from 'react-router-dom';

export const useAddConversation = (
  onSuccess?: () => void,
  onClose?: () => void
) => {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !file) return alert('Заполните все поля');

    const formData = new FormData();
    formData.append('conversation_name', title);
    formData.append('file', file);

    try {
      await createConversation(formData);
      setTitle('');
      setFile(null);
      onSuccess?.();
      onClose?.();
      navigate('/');
    } catch (err) {
      console.error('Ошибка при создании совещания:', err);
      alert('Ошибка при добавлении');
    }
  };

  return {
    title,
    setTitle,
    file,
    setFile,
    handleSubmit,
  };
};