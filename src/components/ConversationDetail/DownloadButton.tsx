type Props = {
  url: string;
}

const ConversationFiles: React.FC<Props> = ({ url }) => (
  <>
    <p className="conversation-field">
      <a
        href={url}
        download
        target="_blank"
        rel="noreferrer"
        className="btn"
      >
        Скачать видео
      </a>
    </p>
  </>
);

export default ConversationFiles;