type Props = {
  text?: string;
  id?: string;
};

const SegmentTranscript: React.FC<Props> = ({ text, id }) => {
  if (!text || text.trim() === '') return null;
  
  return (
    <p className="segment-transcription">
      {/* <strong>ID:</strong> {id} */}
      <strong>Транскрипция:</strong> {text}
    </p>
  );
};

export default SegmentTranscript;