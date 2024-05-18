import { useEffect, useRef } from "react";

export default function AutoPlaySilentVideo(props) {
  const videoRef = useRef(undefined);
  useEffect(() => {
    videoRef.current.defaultMuted = true;
  });
  return (
    <video
      className={props.className}
      ref={videoRef}
      loop
      autoPlay
      muted
      playsInline
      style={{
        width: "100%", // Ensures the video covers the full width of the Flex container
        height: "100%", // Ensures the video covers the full height of the Flex container
        objectFit: "cover", // Ensures the video covers the area without distorting aspect ratio
        position: "absolute", // Positions video correctly within the Flex container
        top: 0,
        left: 0,
        borderRadius: "12px",
        zIndex: "1", // Rounds the corners of the video
      }}
    >
      <source src={props.video} type="video/mp4" />
    </video>
  );
}
