type Props = {
    original: string;
    converted?: string;
  };
  
  const ConversationFiles: React.FC<Props> = ({ original, converted }) => (
    <>
      <p className="conversation-field">
        <strong>Файл:</strong>{' '}
        <a href={original} target="_blank" rel="noreferrer" className="file-link">Скачать</a>
      </p>
  
      {converted && (
        <p className="conversation-field">
          <strong>Сконвертированный файл:</strong>{' '}
          <a href={converted} target="_blank" rel="noreferrer" className="file-link">Скачать</a>
        </p>
      )}
    </>
  );
  
  export default ConversationFiles;