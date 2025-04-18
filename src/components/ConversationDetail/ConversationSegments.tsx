import SegmentTranscript from "./SegmentTranscript";
import SegmentParticipantSelector from "./SegmentParticipantSelector";

type Segment = {
  segment_id: string;
  start_time: number;
  end_time: number;
  speaker: number;
  participant_id?: string;
  participant_name?: string;
  transcription_id?: string;
  transcription?: string;
};

type Props = {
  segments: Segment[];
  conversation_id: string;
};

const ConversationSegments: React.FC<Props> = ({ segments, conversation_id }) => {
  if (segments.length === 0) return null;

  return (
    <div className="conversation-segments">
      <div className="segment-list">
        {segments.map((segment) => (
          <div key={segment.segment_id} className="segment-row">
            <div className="segment-meta">
              <div className="segment-time">
                {segment.start_time.toFixed(2)} – {segment.end_time.toFixed(2)} сек
              </div>
              <SegmentParticipantSelector
                speaker={segment.speaker}
                participantID={segment.participant_id}
                participantName={segment.participant_name}
                segmentId={segment.segment_id}
                conversationId={conversation_id}
              />
            </div>
            <div className="segment-text">
              <SegmentTranscript
                id={segment.segment_id}
                text={segment.transcription}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConversationSegments;