type Props = {
    id: string;
    status: number;
  };
  
  const ConversationInfo: React.FC<Props> = ({ id, status }) => (
    <>
      <p className="conversation-field"><strong>ID:</strong> {id}</p>
      <p className="conversation-field"><strong>Статус:</strong> {status}</p>
    </>
  );
  
  export default ConversationInfo;