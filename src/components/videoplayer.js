import React, { useRef, useState, useEffect } from "react";
import mainVideo from "../media/corsa.mp4"


export default function VideoPlayer() {

  return (
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
