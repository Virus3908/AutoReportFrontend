import { useState } from "react";
import { createPrompt, updatePrompt, Prompt } from "../api/Prompt";

// type Props = {
//     onSuccess?: () => void,
//     onClose?: () => void,
//     type: "promptCreate" | "promptEdit";
//     initialData?: Prompt;
// };

export const usePromptForm = (
    type: "promptCreate" | "promptEdit",
    onSuccess?: () => void,
    onClose?: () => void,
    initialData?: Prompt
) => {
    const [name, setName] = useState(initialData?.prompt_name || "");
    const [prompt, setPrompt] = useState(initialData?.prompt || "");

    // useEffect(() => {
    //     if (type === "promptEdit" && initialData) {
    //         setName(initialData.name);
    //         setPrompt(initialData.prompt);
    //     }
    // }, [type, initialData]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!name.trim()) return alert('Введите название');
        if (!prompt.trim()) return alert('Введите промпт');
        const promptData = {
            prompt_name: name,
            prompt: prompt,
        };

        try {
            if (type === "promptCreate") {
                await createPrompt(promptData);
            } else if (type === "promptEdit" && initialData) {
                await updatePrompt(initialData.id, promptData);
            }

            setName("");
            setPrompt("");
            onSuccess?.();
            onClose?.();

        } catch (error) {
            console.error("Error while submitting prompt form:", error);
        }
    };

    return {
        name,
        setName,
        prompt,
        setPrompt,
        handleSubmit,
    };
};