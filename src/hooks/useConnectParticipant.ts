import { useState } from 'react';
import { connectParticipantToSegment } from '../api/Participant';

export const useConnectParticipant = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const connect = async (
    segmentId: string,
    conversationId: string,
    participantId?: string
  ) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await connectParticipantToSegment(
        segmentId,
        participantId || '',
        conversationId
      );

      setSuccess(true);
    } catch (err) {
      console.error(err);
      setError('Ошибка при назначении участника');
    } finally {
      setLoading(false);
    }
  };

  return { connect, loading, error, success };
};