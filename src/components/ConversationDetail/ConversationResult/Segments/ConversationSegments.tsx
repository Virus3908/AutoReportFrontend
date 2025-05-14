import { useEffect, useState } from "react";
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
  videoRef: React.RefObject<HTMLVideoElement | null>;
};

const ConversationSegments: React.FC<Props> = ({ segments, conversation_id, videoRef }) => {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (!videoRef.current) return;

    const handleTimeUpdate = () => {
      setCurrentTime(videoRef.current!.currentTime);
    };

    const video = videoRef.current;
    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [videoRef]);

  if (segments.length === 0) return null;

  const handleClick = (time: number) => {
    if (videoRef && videoRef.current) {
      console.log("Перемотка на", time);
      videoRef.current.currentTime = time;
      videoRef.current.play();
    } else {
      console.error("videoRef или videoRef.current отсутствует!");
    }
  };

  return (
    <div className="conversation-segments">
      <div className="segment-list">
        {segments.map((segment) => {
          const isActive = currentTime >= segment.start_time && currentTime <= segment.end_time;

          return (
            <div
              key={segment.segment_id}
              className={`segment-row ${isActive ? "active" : ""}`}
            >
              <div className="segment-meta">
                <div 
                className="segment-time" 
                style={{ cursor: "pointer" }}
                onClick={() => handleClick(segment.start_time)}
                >
                  <span
                  // onClick={() => handleClick(segment.start_time)}
                  >
                    {segment.start_time.toFixed(2)}
                  </span>
                  {" - "}
                  <span
                  // onClick={() => handleClick(segment.end_time)}
                  >
                    {segment.end_time.toFixed(2)}
                  </span>
                  {" сек"}
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
          );
        })}
      </div>
    </div>
  );
};

export default ConversationSegments;