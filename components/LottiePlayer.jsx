"use client";

import { useEffect, useRef } from "react";

const LottiePlayer = ({ animationData, width = 200, height = 200 }) => {
  const containerRef = useRef(null);
  useEffect(() => {
    let animationInstance;
    let didCancel = false;
    if (!containerRef.current || !animationData) return;

    containerRef.current.innerHTML = "";

    import("lottie-web")
      .then((lottie) => {
        if (didCancel || !containerRef.current) return;
        const player = lottie.default || lottie;
        animationInstance = player.loadAnimation({
          container: containerRef.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData,
        });
      })
      .catch((error) => {
        console.error("Failed to load Lottie animation", error);
      });

    return () => {
      didCancel = true;
      if (animationInstance) {
        animationInstance.destroy();
      }
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [animationData]);

  return (
    <div
      ref={containerRef}
      style={{ width: `${width}px`, height: `${height}px` }}
      className="lottie-container"
    />
  );
};

export default LottiePlayer;
