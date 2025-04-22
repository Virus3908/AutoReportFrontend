import axios from 'axios';

export type Participant = {
    id: string;
    name: string;
    email: string;
};

export const fetchParticipants = async (): Promise<Participant[]> => {
    const response = await axios.get<Participant[]>(`/api/participants`);
    return response.data;
};

export const createParticipant = async (data: { name: string; email: string }) => {
    const response = await fetch(`/api/participants`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error(`Ошибка API: ${response.status}`);
    }

    return response;
};

export async function deleteParticipantByID(id: string): Promise<void> {
    const response = await fetch(`/api/participants/${id}`, { method: 'DELETE' });
    if (!response.ok) throw new Error('Delete failed');
};

export const connectParticipantToSegment = async (
    segmentId: string,
    participantId: string,
    conversationId: string
) => {
    const response = await fetch(`/api/segments/${segmentId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            participant_id: participantId,
            conversation_id: conversationId,
        }),
    });

    if (!response.ok) {
        throw new Error('Ошибка при подключении участника к сегменту');
    }

    if (response.status === 204) return;

    return response.json();
};

export const updateParticipant = async (
    participantId: string,
    data: { name: string; email: string }
) => {
    const response = await fetch(`/api/participants/${participantId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error('Ошибка при редактировании участника');
    }

    if (response.status === 204) return;

    return response.json();
}