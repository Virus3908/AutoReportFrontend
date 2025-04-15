import { useLoadParticipants } from "../hooks/useLoadParticipants";
import ParticipantList from "../components/ParticipantList/ParticipantList";

const ParticipantListPage: React.FC = () => {
    const { participants, loading, error, deleteParticipant } = useLoadParticipants();

    return (
        <div style={{ padding: '20px' }}>
            <h2>Список участников</h2>
            {loading && <p>Загрузка...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {!loading && !error && <ParticipantList
                participants={participants}
                onDelete={deleteParticipant}
            />}
        </div>
    );
}

export default ParticipantListPage;