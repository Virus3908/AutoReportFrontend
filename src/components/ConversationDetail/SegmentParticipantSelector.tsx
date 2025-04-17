import { useState } from 'react';
import { useLoadParticipants } from '../../hooks/useLoadParticipants';
import './ConversationDetail.css';

type Props = {
  speaker: number;
  participantName?: string;
  segmentId: string;
};

const SegmentParticipantSelector: React.FC<Props> = ({ speaker, participantName, segmentId }) => {
  const { participants, loading } = useLoadParticipants();
  const [selectedId, setSelectedId] = useState<string | undefined>(undefined);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newParticipantId = e.target.value;
    setSelectedId(newParticipantId);
    // TODO: отправить PATCH: updateSegmentParticipant(segmentId, newParticipantId);
    console.log(`Назначен участник ${newParticipantId} для сегмента ${segmentId}`);
  };

  return (
    <select
      value={selectedId || ''}
      onChange={handleChange}
      className="speaker-select"
    >
      <option value="">
        {participantName ? participantName : `Спикер ${speaker}`}
      </option>

      {loading && <option disabled>Загрузка...</option>}

      {!loading &&
        (participants?.length > 0 ? (
          participants.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))
        ) : (
          <option disabled>Нет участников</option>
        ))}
    </select>
  );
};

export default SegmentParticipantSelector;