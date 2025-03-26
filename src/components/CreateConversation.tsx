import { useState, useRef } from "react";
import axios from "axios";

interface CreateConversationProps {
    onCreated: () => void;
}

const CreateConversation = ({ onCreated }: CreateConversationProps) => {
    const [conversationName, setConversationName] = useState("");
    const [file, setFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!file || !conversationName) return;

        const formData = new FormData();
        formData.append("conversation_name", conversationName);
        formData.append("file", file);

        try {
            const response = await axios.post("http://localhost:8080/api/conversations", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            console.log("Совещание добавлено:", response.data);

            setConversationName("");
            setFile(null);
            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }

            setTimeout(() => {
                onCreated();
            }, 500);

        } catch (error) {
            console.error("Ошибка при создании совещания:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Создать совещание</h3>
            <input
                type="text"
                placeholder="Название совещания"
                value={conversationName}
                ref={fileInputRef}
                onChange={(e) => setConversationName(e.target.value)}
            />
            <input
                type="file"
                accept=".mp4"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
            <button type="submit">Создать</button>
        </form>
    );
};

export default CreateConversation;