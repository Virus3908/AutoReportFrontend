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