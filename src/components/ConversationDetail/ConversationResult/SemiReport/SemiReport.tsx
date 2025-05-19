import React from "react";
import "../ConversationResult.css";

type Props = {
    semi_report?: string;
};

const SemiReport: React.FC<Props> = ({ semi_report }) => {
    return (
        <div className="semi-report-box">
            {semi_report ? (
                <>
                    <h3 className="semi-report-title">Подведение итогов</h3>
                    <div className="semi-report-text">{semi_report}</div>
                </>
            ) : (
                <p>Итог пока не создан.</p>
            )}
        </div>
    );
};

export default SemiReport;