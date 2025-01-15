import React, { useRef } from "react";

const VideoPlayer = ({ videoFile, fileType, thumbnail }) => {
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <div>
      <video
        ref={videoRef}
        width="325px"
        onClick={handlePlayPause}
        style={{ cursor: "pointer" }}
        poster={thumbnail} // Replace with your thumbnail path
      >
        <source src={videoFile} type={fileType} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
