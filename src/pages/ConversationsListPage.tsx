import ConversationsList from '../components/ConversationList';
import { useLoadConversations } from '../hooks/useLoadConversations';

const ConversationsListPage: React.FC = () => {
  const {conversations, loading, error} = useLoadConversations();

  return (
    <div style={{ padding: '20px' }}>
      <h2>Список совещаний</h2>
      {loading && <p>Загрузка...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && !error && <ConversationsList conversations={conversations} />}
    </div>
  );
};

export default ConversationsListPage;