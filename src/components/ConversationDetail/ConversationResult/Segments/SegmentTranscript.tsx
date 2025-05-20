import TextareaAutosize from 'react-textarea-autosize';
import { useState } from 'react';
import { useUpdateTranscription } from '../../../../hooks/useUpdateTranscription';
import './Segments.css';

type Props = {
  text?: string;
  id?: string;
};

const SegmentTranscript: React.FC<Props> = ({ text = '', id }) => {
  if (!id || !text) return null;
  const [value, setValue] = useState(text);
  const originalValue = text;
  const { update, error } = useUpdateTranscription();

  const handleBlur = () => {
    if (!id || value.trim() === originalValue.trim()) return;
    update(id, value.trim());
  };

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
      {/* {loading && <p className="save-status">Сохраняем...</p>}
      {success && <p className="save-status success">✅ Сохранено</p>} */}
      {error && <p className="save-status error">{error}</p>}
    </div>
  );
};

export default SegmentTranscript;