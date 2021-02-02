import React, {useState, useEffect } from "react";
import PhoneScreenStyles from "../styles/phonescreencorsa.module.scss"
import mainVideo from "../media/corsa.mp4"
import gifvideo from "../media/screen.png"

const isSafari = () => {
  const ua = navigator.userAgent.toLowerCase();
  return ua.indexOf("safari") > -1 && ua.indexOf("chrome") < 0;
};

export default function VideoPlayer() {
  const [shouldUseImage, setShouldUseImage] = useState(false);
  useEffect(() => {
    // check if user agent is safari
    if (isSafari()) {
      setShouldUseImage(true);
    }
  }, []);

  return shouldUseImage ? (
    <img src={gifvideo} className = {PhoneScreenStyles.appvideo} alt="Muted Video" />
  ) : (
    <div
      dangerouslySetInnerHTML={{
        __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          preload="metadata"
          style="position: relative;
          left: 8%;
          top: 18px;
          height: 532px;
          border-radius: 20px;
          width: auto;
          z-index: 8;
          @media (max-width: 1158px) {
              bottom: 410px;
          }"
        >
        <source src="${mainVideo}" type="video/mp4" />
        </video>`
      }}
    />
  );
}
