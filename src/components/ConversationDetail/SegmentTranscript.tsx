import TextareaAutosize from 'react-textarea-autosize';
import { useState, useEffect } from 'react';
import { useNotification } from '../Notification/useNotification';
import { useUpdateTranscription } from '../../hooks/useUpdateTranscription';
import './ConversationDetail.css';

type Props = {
  text?: string;
  id?: string;
};

const SegmentTranscript: React.FC<Props> = ({ text = '', id }) => {
  const [value, setValue] = useState(text);
  const originalValue = text;
  const { update, loading, success, error, resetSuccess } = useUpdateTranscription();
  const { showNotification } = useNotification();

  const handleBlur = () => {
    if (!id || value.trim() === originalValue.trim()) return;
    update(id, value.trim());
  };

  useEffect(() => {
    if (success) {
      showNotification('✅ Транскрипция сохранена');
      resetSuccess();
    }
  }, [success, showNotification, resetSuccess]);

  return (
    <div className="segment-transcription">
      <TextareaAutosize
        className="segment-textarea"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={handleBlur}
        minRows={1}
        maxRows={10}
      />
      {loading && <p className="save-status">Сохраняем...</p>}
      {success && <p className="save-status success">✅ Сохранено</p>}
      {error && <p className="save-status error">{error}</p>}
    </div>
  );
};

export default SegmentTranscript;