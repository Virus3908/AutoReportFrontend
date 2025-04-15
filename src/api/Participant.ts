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

export const createParticipant = async (formData: FormData) => {
    const response = await fetch(`/api/participants`, {
        method: 'POST',
        body: formData,
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