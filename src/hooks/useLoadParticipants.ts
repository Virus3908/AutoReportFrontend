import { Participant, fetchParticipants, deleteParticipantByID } from "../api/Participant";
import { useEffect, useState } from "react";

export const useLoadParticipants = () => {
    const [participants, setParticipants] = useState<Participant[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const loadConversations = async () => {
        try {
            setLoading(true);
            const data = await fetchParticipants();
            setParticipants(data);
            setError(null);
        } catch (err) {
            console.error(err);
            setError("Ошибка загрузки участников");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadConversations();

        const handler = () => {
            console.log("Получено событие обновления участников");
            loadConversations();
        };

        window.addEventListener("participantsUpdated", handler);

        return () => {
            window.removeEventListener("participantsUpdated", handler);
        };
    }
    , []);

    const deleteParticipant = async (id: string) => {
        try {
            await deleteParticipantByID(id);
            setParticipants((prev) => prev.filter((part) => part.id !== id));
        } catch (err) {
            console.error('Ошибка при удалении:', err);
        }
    };
            

    return { participants, loading, error, deleteParticipant };
};