import React from 'react';
import { useTranscriptionTask } from '../../hooks/useTranscriptionTask';
import './ConversationDetail.css';

type Props = {
  conversationId: string;
};

const TranscriptionButton: React.FC<Props> = ({ conversationId }) => {
  const { convert, loading, error, success } = useTranscriptionTask();

  const handleClick = () => {
    convert(conversationId);
  };

  return (
    <div>
      <button
        className="btn"
        onClick={handleClick}
        disabled={loading}
      >
        {loading ? 'Создание транскрипции...' : 'Создать транскрипцию'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>Задача успешно создана!</p>}
    </div>
  );
};

export default TranscriptionButton;