'use client';

import { useState, useEffect, useRef } from 'react';
import { VolumeX } from 'lucide-react';

export default function AudioToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const userInteractedRef = useRef(false);

  useEffect(() => {
    // 1. Initialize global ambient audio
    const audio = new Audio('/audio/background-music.mp3');
    audio.loop = true;
    audio.volume = 0.4; // 40% ambient volume
    audioRef.current = audio;

    // 2. Function to start audio automatically on user's VERY FIRST click/touch
    const startAudioOnFirstInteraction = () => {
      if (userInteractedRef.current || !audioRef.current) return;

      audioRef.current
        .play()
        .then(() => {
          userInteractedRef.current = true;
          setIsPlaying(true);
          removeListeners();
        })
        .catch(() => {
          // If browser policy blocks, keep listeners active for next touch
        });
    };

    const removeListeners = () => {
      window.removeEventListener('pointerdown', startAudioOnFirstInteraction);
      window.removeEventListener('click', startAudioOnFirstInteraction);
      window.removeEventListener('keydown', startAudioOnFirstInteraction);
      window.removeEventListener('touchstart', startAudioOnFirstInteraction);
    };

    // Attach listeners so ANY initial click/tap on the site starts audio automatically
    window.addEventListener('pointerdown', startAudioOnFirstInteraction);
    window.addEventListener('click', startAudioOnFirstInteraction);
    window.addEventListener('keydown', startAudioOnFirstInteraction);
    window.addEventListener('touchstart', startAudioOnFirstInteraction);

    return () => {
      removeListeners();
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      userInteractedRef.current = true; // Don't auto-resume if explicitly muted
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          userInteractedRef.current = true;
        })
        .catch((err) => console.warn('Audio play failed:', err));
    }
  };

  return (
    <button
      onClick={toggleSound}
      className="fixed bottom-[calc(12px+env(safe-area-inset-bottom,0px))] right-3 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 sm:gap-3 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full bg-white/85 backdrop-blur-xl border border-[#E5E3DE] text-[#C41E2A] hover:border-[#C41E2A]/40 transition shadow-xl group cursor-pointer"
      title="Toggle Ambient Background Music"
    >
      <div className="flex items-center gap-1 h-4 sm:h-5">
        {isPlaying ? (
          <>
            <div className="equalizer-bar bg-[#C41E2A]" />
            <div className="equalizer-bar bg-[#C41E2A]" />
            <div className="equalizer-bar bg-[#C41E2A]" />
            <div className="equalizer-bar bg-[#C41E2A]" />
          </>
        ) : (
          <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#7A7A7A] group-hover:text-[#C41E2A] transition" />
        )}
      </div>

      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#3B3B3B] group-hover:text-[#C41E2A] transition hidden xs:inline">
        {isPlaying ? 'SOUND ON' : 'SOUND OFF'}
      </span>
    </button>
  );
}
