import { useEffect, useRef, useState } from 'react';

export function useVideoLazyLoad(options?: IntersectionObserverInit) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '200px', ...options }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, [options]);

  // Pause when out of viewport
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePause = () => {
      if (video && video.paused === false) {
        const rect = video.getBoundingClientRect();
        const inView = rect.bottom > 0 && rect.top < window.innerHeight;
        if (!inView) video.pause();
      }
    };

    window.addEventListener('scroll', handlePause, { passive: true });
    return () => window.removeEventListener('scroll', handlePause);
  }, []);

  return { videoRef, isVisible };
}
