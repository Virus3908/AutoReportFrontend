import React from 'react';
import { useConvertTask } from '../../hooks/useConvertTask';

type Props = {
  conversationId: string;
};

const ConvertButton: React.FC<Props> = ({ conversationId }) => {
  const { convert, loading, error, success } = useConvertTask();

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
        {loading ? 'Конвертация...' : 'Конвертировать'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>Задача успешно создана!</p>}
    </div>
  );
};

export default ConvertButton;