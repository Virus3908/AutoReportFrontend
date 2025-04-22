import { useState } from 'react';
import { updateConversationName } from '../api/Conversation';

export const useEditConversationName = (conversationId: string, title: string) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(title);
    const [loading, setLoading] = useState(false);

    const handleSave = async () => {
        try {
            setLoading(true);
            await updateConversationName(conversationId, newTitle);
            setIsEditing(false);
        } catch (err) {
            console.error('Ошибка обновления названия:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleCancel = () => {
        setNewTitle(title);
        setIsEditing(false);
    };
    return {
        isEditing,
        setIsEditing,
        newTitle,
        setNewTitle,
        handleSave,
        handleCancel,
        loading,
    }
}