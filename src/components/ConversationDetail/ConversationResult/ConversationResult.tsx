import React, { useState } from "react";
import ConversationSegments from "./Segments/ConversationSegments";
import SemiReport from "./SemiReport/SemiReport";
import "./ConversationResult.css";

type Segment = {
    segment_id: string;
    start_time: number;
    end_time: number;
    speaker: number;
    participant_id?: string;
    participant_name?: string;
    transcription_id?: string;
    transcription?: string;
};

type Props = {
    segments: Segment[];
    conversation_id: string;
    videoRef: React.RefObject<HTMLVideoElement | null>;
    semi_report?: string;
};

const ConversationResult: React.FC<Props> = ({ segments, conversation_id, videoRef, semi_report }) => {
    const [activeTab, setActiveTab] = useState<"transcription" | "semireport" | "report">("transcription");

    return (
        <div className="tabs-container">
            <div className="tab-buttons">
                <button
                    className={activeTab === "transcription" ? "active" : ""}
                    onClick={() => setActiveTab("transcription")}
                >
                    Транскрипция
                </button>
                <button
                    className={activeTab === "semireport" ? "active" : ""}
                    onClick={() => setActiveTab("semireport")}
                >
                    Подведение итогов
                </button>
                <button
                    className={activeTab === "report" ? "active" : ""}
                    onClick={() => setActiveTab("report")}
                >
                    Отчёт
                </button>
            </div>

            <div className="tab-content">
                {activeTab === "transcription" && (
                    <ConversationSegments
                        conversation_id={conversation_id}
                        segments={segments}
                        videoRef={videoRef}
                    />
                )}
                {activeTab === "semireport" && (
                    <SemiReport semi_report={semi_report} />
                )}
                {/* {activeTab === "report" && (
          <ReportView conversation_id={conversation_id} />
        )} */}
            </div>
        </div>
    );
};

export default ConversationResult;