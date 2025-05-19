import React, { useState } from 'react';
import AddEntityModal from '../Modal/Modal';
import './ConversationDetail.css';

type Props = {
    conversationId: string;
    disabled?: boolean;
};

const SemiReportButton: React.FC<Props> = ({ conversationId, disabled }) => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <button
                className="btn"
                onClick={() => setOpen(true)}
                disabled={disabled}
            >
                Создать итоговый отчёт
            </button>

            {open && (
                <AddEntityModal
                    type="createSemiReport"
                    isOpen={true}
                    onClose={() => setOpen(false)}
                    onSuccess={() => {
                        window.dispatchEvent(new Event('semiReportCreated'));
                        setOpen(false);
                    }}
                    conversationId={conversationId}
                />
            )}
        </div>
    );
};

export default SemiReportButton;