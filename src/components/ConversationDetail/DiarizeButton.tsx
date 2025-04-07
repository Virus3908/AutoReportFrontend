import React from 'react';
import { useDiarizeTask } from '../../hooks/useDiarizeTask';

type Props = {
  conversationId: string;
};

const DiarizeButton: React.FC<Props> = ({ conversationId }) => {
  const { convert, loading, error, success } = useDiarizeTask();

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
        {loading ? 'Диаризация...' : 'Диаризация'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>Задача успешно создана!</p>}
    </div>
  );
};

export default DiarizeButton;