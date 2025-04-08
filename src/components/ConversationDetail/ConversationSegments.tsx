import SegmentTranscript from "./SegmentTranscript";

type Segment = {
    segment_id: string;
    start_time: number;
    end_time: number;
    speaker: number;
    transcription_id?: string;
    transcription?: string;
  };
  
  type Props = {
    segments: Segment[];
  };
  
  const ConversationSegments: React.FC<Props> = ({ segments }) => {
    if (segments.length === 0) return null;
  
    return (
      <div className="conversation-segments">
        <h3>Сегменты:</h3>
        <ul>
          {segments.map((segment) => (
            <li key={segment.segment_id} className="segment">
              <p><strong>Начало:</strong> {segment.start_time.toFixed(2)} сек</p>
              <p><strong>Конец:</strong> {segment.end_time.toFixed(2)} сек</p>
              <p><strong>Спикер:</strong> Speaker {segment.speaker}</p>
              {segment.transcription && segment.transcription_id && (
                <SegmentTranscript text={segment.transcription} id={segment.transcription_id}/>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ConversationSegments;