import React from 'react';
import '../Lists.css';
import { Prompt } from '../../../api/Prompt';

type Props = {
    prompts: Prompt[];
    onDelete: (id: string) => void;
    onEdit: (prompt: Prompt) => void;
  };
  

const PromptsList: React.FC<Props> = ({ prompts, onDelete, onEdit }) => {
    if (!prompts || prompts.length === 0) {
        return <p>Промптов пока нет.</p>;
    }

    return (
        <div className="lists">
            {prompts.map((part) => (
                <div
                    key={part.id}
                    className="lists-item"
                    onClick={() => onEdit(part)}
                >
                    <div className="lists-text">
                        <span className="lists-title">{part.prompt_name}</span>
                        <span className="lists-subtitle">{part.prompt}</span>
                    </div>
                    <button
                        className="lists-delete"
                        onClick={(e) => {
                            e.stopPropagation();
                            onDelete(part.id);
                        }}
                        title="Удалить промпт"
                    >
                        ×
                    </button>
                </div>
            ))}
        </div>
    );
}

export default PromptsList;