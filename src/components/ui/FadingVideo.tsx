import { useRef, useEffect } from 'react';
import type { VideoHTMLAttributes } from 'react';

interface FadingVideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
}

const FADE_MS = 500;
const FADE_OUT_LEAD = 0.55;

export function FadingVideo({ src, style, ...props }: FadingVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fadingOutRef = useRef(false);
  const animFrameRef = useRef<number | null>(null);

  const fadeTo = (targetOpacity: number, durationMs: number) => {
    const video = videoRef.current;
    if (!video) return;

    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);

    const startOpacity = parseFloat(video.style.opacity || '0');
    const startTime = performance.now();

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const currentOpacity = startOpacity + (targetOpacity - startOpacity) * progress;

      video.style.opacity = currentOpacity.toString();

      if (progress < 1) {
        animFrameRef.current = requestAnimationFrame(animate);
      }
    };

    animFrameRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      video.style.opacity = '0';
      video.play().catch(() => {}); // handle auto-play restrictions silently
      fadeTo(1, FADE_MS);
    };

    const handleTimeUpdate = () => {
      if (video.duration && !fadingOutRef.current) {
        const remaining = video.duration - video.currentTime;
        if (remaining <= FADE_OUT_LEAD && remaining > 0) {
          fadingOutRef.current = true;
          fadeTo(0, FADE_MS);
        }
      }
    };

    const handleEnded = () => {
      video.style.opacity = '0';
      setTimeout(() => {
        if (!videoRef.current) return;
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
        fadingOutRef.current = false;
        fadeTo(1, FADE_MS);
      }, 100);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      muted
      playsInline
      preload="auto"
      style={{ ...style, opacity: 0 }}
      {...props}
    />
  );
}
