import React, { useState } from 'react';
import AddEntityModal from '../Modal/Modal';
import './ConversationDetail.css';

type Props = {
    conversationId: string;
    reportType: 'semi' | 'full';
    disabled?: boolean;
  };

const ReportButton: React.FC<Props> = ({ conversationId, disabled, reportType }) => {
    const [open, setOpen] = useState(false);

    const modalType = reportType === 'semi' ? "createSemiReport" : "createReport";
    const buttonText = reportType === 'semi' ? 'Создать итоги' : 'Создать отчёт';
    const updateEvent = reportType === 'semi' ? 'semiReportCreated' : 'reportCreated';

    return (
        <div>
            <button
                className="btn"
                onClick={() => setOpen(true)}
                disabled={disabled}
            >
                {buttonText}
            </button>

            {open && (
                <AddEntityModal
                    type={modalType}
                    isOpen={true}
                    onClose={() => setOpen(false)}
                    onSuccess={() => {
                        window.dispatchEvent(new Event(updateEvent));
                        setOpen(false);
                    }}
                    conversationId={conversationId}
                />
            )}
        </div>
    );
};

export default ReportButton;