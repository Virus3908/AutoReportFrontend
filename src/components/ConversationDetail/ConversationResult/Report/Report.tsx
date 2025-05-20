import React from "react";
import "./Report.css";

type Props = {
    report?: string;
    type: "semireport" | "report";
};

const SemiReport: React.FC<Props> = ({ report, type }) => {
    const getTitle = () => {
        switch (type) {
            case "semireport":
                return "Подведение итогов";
            case "report":
                return "Отчёт";
            default:
                return "";
        }
    };
    return (
        <div className="report-box">
            {report ? (
                <>
                    <h3 className="report-title">{getTitle()}</h3>
                    <div className="report-text">{report}</div>
                </>
            ) : (
                <p>Итог пока не создан.</p>
            )}
        </div>
    );
};

export default SemiReport;