import { useEffect, useState } from 'react';
import { useLoadParticipants } from '../../../../hooks/useLoadParticipants';
import '../ConversationResult.css';
import { useConnectParticipant } from '../../../../hooks/useConnectParticipant';

type Props = {
  speaker: number;
  participantID?: string;
  participantName?: string;
  segmentId: string;
  conversationId: string;
};

const SegmentParticipantSelector: React.FC<Props> = ({
  speaker,
  participantID,
  participantName,
  segmentId,
  conversationId
}) => {
  const { participants, loading } = useLoadParticipants();
  const { connect } = useConnectParticipant();


  const [selectedId, setSelectedId] = useState<string | ''>(participantName || '');

  useEffect(() => {
    setSelectedId(participantID || '');
  }, [participantID]);

  const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newParticipantId = e.target.value || '';
    setSelectedId(newParticipantId);
    await connect(segmentId, conversationId, newParticipantId || undefined);
  };

  return (
    <div className="speaker-select-wrapper">
      <select
        value={selectedId}
        onChange={handleChange}
        className="speaker-select"
      >
        <option value="">{`Спикер ${speaker}`}</option>
        {loading && <option disabled>Загрузка...</option>}
        {!loading &&
          participants.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
      </select>
    </div>
  );
};

export default SegmentParticipantSelector;