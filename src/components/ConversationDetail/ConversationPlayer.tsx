type Props = {
  url: string;
};

const ConversationPlayer: React.FC<Props> = ({ url }) => {
  const isVideo = url.match(/\.(mp4|webm|ogg)$/i);
  if (isVideo) {
    return (
      <div className="media-player">
        <video controls>
          <source src={url} />
          Ваш браузер не поддерживает видео.
        </video>
      </div>
    );
  }
  return null;
};

export default ConversationPlayer;