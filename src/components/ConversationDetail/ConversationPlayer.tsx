import { forwardRef } from "react";

type Props = {
  url: string;
};

const ConversationPlayer = forwardRef<HTMLVideoElement, Props>(({ url }, ref) => {
  const isVideo = url.match(/\.(mp4|webm|ogg)$/i);
  if (isVideo) {
    return (
      <div className="media-player">
        <video ref={ref} controls>
          <source src={url} />
          Ваш браузер не поддерживает видео.
        </video>
      </div>
    );
  }
  return null;
});

export default ConversationPlayer;