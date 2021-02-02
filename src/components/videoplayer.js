import React, { useRef, useState, useEffect } from "react";
import mainVideo from "../media/corsa.mp4"
import gifvideo from "../media/corsa.gif"
import PhoneScreenStyles from "../styles/phonescreencorsa.module.scss"



const isSafari = () => {
  const ua = navigator.userAgent.toLowerCase();
  return ua.indexOf("safari") > -1 && ua.indexOf("chrome") < 0;
};

export default function App() {
  const videoParentRef = useRef();
  const [shouldUseImage, setShouldUseImage] = useState(false);
  useEffect(() => {
    // check if user agent is safari and we have the ref to the container <div />
    if (isSafari()) {
        setShouldUseImage(true);
    }
  }, []);

  return shouldUseImage ? (
    <img src={gifvideo}
    style="position: relative;
    left: 8%;
    top: 18px;
    height: 532px;
    border-radius: 20px;
    width: auto;
    z-index: 8;
    @media (max-width: 1158px) {
        bottom: 410px;
    }" alt="Muted Video" />
  ) : (
    <div
      ref={videoParentRef}
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
