type Props = {
    // id: string;
    status: string;
  };
  
  const ConversationInfo: React.FC<Props> = ({ status }) => (
    <>
      {/* <p className="conversation-field"><strong>ID:</strong> {id}</p> */}
      <p className="conversation-field"><strong>Статус:</strong> {status}</p>
    </>
  );
  
  export default ConversationInfo;