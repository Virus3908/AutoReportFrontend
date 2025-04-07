import React from 'react';
import { useTranscriptionTask } from '../../hooks/useTranscriptionTask';

type Props = {
  conversationId: string;
};

const TranscriptionButton: React.FC<Props> = ({ conversationId }) => {
  const { convert, loading, error, success } = useTranscriptionTask();

  const handleClick = () => {
    convert(conversationId);
  };

  return (
    <div style={{ marginTop: '1rem' }}>
      <button
        className="btn"
        onClick={handleClick}
        disabled={loading}
      >
        {loading ? 'Транскрибация...' : 'Транскрибация'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>Задача успешно создана!</p>}
    </div>
  );
};

export default TranscriptionButton;