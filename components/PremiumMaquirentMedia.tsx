"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function PremiumMaquirentMedia({ videoUrl }: { videoUrl: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  // Extract video ID from URL
  const videoId = videoUrl.match(/embed\/([^?]+)/)?.[1] || "aQSMzCVpwxg";

  // Load YT API
  useEffect(() => {
    function loadPlayer() {
      if (window.YT && window.YT.Player) {
        initPlayer();
      } else {
        const previous = window.onYouTubeIframeAPIReady;
        window.onYouTubeIframeAPIReady = () => {
          if (previous) previous();
          initPlayer();
        };
      }
    }

    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      if (firstScriptTag && firstScriptTag.parentNode) {
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      } else {
        document.head.appendChild(tag);
      }

      window.onYouTubeIframeAPIReady = () => {
        initPlayer();
      };
    } else {
      loadPlayer();
    }

    function initPlayer() {
      if (!document.getElementById("maquirent-yt-player")) return;
      
      playerRef.current = new window.YT.Player("maquirent-yt-player", {
        videoId: videoId,
        width: "100%",
        height: "100%",
        playerVars: {
          autoplay: 0,
          controls: 0,
          disablekb: 1,
          fs: 0,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          mute: 1,
          loop: 1,
          playlist: videoId,
          playsinline: 1,
          origin: typeof window !== "undefined" ? window.location.origin : "http://localhost:3000",
        },
        events: {
          onReady: (event: any) => {
            setDuration(event.target.getDuration());
            setupIntersectionObserver(event.target);
          },
          onStateChange: (event: any) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              setIsPlaying(true);
            } else if (
              event.data === window.YT.PlayerState.PAUSED ||
              event.data === window.YT.PlayerState.ENDED
            ) {
              setIsPlaying(false);
            }
          },
        },
      });
    }

    return () => {
      if (playerRef.current && typeof playerRef.current.destroy === 'function') {
        playerRef.current.destroy();
      }
    };
  }, [videoId]);

  // Track progress
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && playerRef.current) {
      interval = setInterval(() => {
        if (typeof playerRef.current.getCurrentTime === 'function') {
          setProgress(playerRef.current.getCurrentTime());
        }
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  function setupIntersectionObserver(player: any) {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Auto play when visible
            if (typeof player.playVideo === 'function') {
              player.playVideo();
            }
          } else {
            // Pause when out of view
            if (typeof player.pauseVideo === 'function') {
              player.pauseVideo();
            }
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(containerRef.current);
  }

  const togglePlay = () => {
    if (!playerRef.current) return;
    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  };

  const toggleMute = () => {
    if (!playerRef.current) return;
    if (isMuted) {
      playerRef.current.unMute();
      setIsMuted(false);
    } else {
      playerRef.current.mute();
      setIsMuted(true);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setProgress(time);
    if (playerRef.current && typeof playerRef.current.seekTo === 'function') {
      playerRef.current.seekTo(time, true);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full transition-all duration-700 ease-in-out flex flex-col group h-auto pt-6"
      style={{ perspective: "1200px" }}
    >
      {/* 3D Phone Container */}
      <div 
        className="relative mx-auto w-full max-w-[240px] sm:max-w-[280px] aspect-[14/28] transition-transform duration-700 ease-out [transform:rotateY(-18deg)_rotateX(8deg)] group-hover:[transform:rotateY(-5deg)_rotateX(2deg)]"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div 
          className="absolute -bottom-8 left-1/2 w-3/4 h-8 bg-black/80 blur-xl -translate-x-1/2 rounded-[100%] transition-opacity duration-700 pointer-events-none" 
          style={{ transform: "translateZ(-40px) translateY(20px)", opacity: 1 }}
        />

        {/* Phone Body */}
        <div className="absolute inset-0 rounded-[2.5rem] md:rounded-[3rem] bg-zinc-900 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.8)] border-[6px] md:border-[8px] border-zinc-700 overflow-hidden ring-1 ring-white/10 ring-inset flex flex-col z-10 transition-all duration-700">
          
          {/* Punch Hole Camera */}
          <div className="absolute top-3 md:top-3 inset-x-0 flex justify-center z-30 pointer-events-none">
            <div className="w-4 h-4 md:w-3 md:h-3 bg-black rounded-full border border-white/5 shadow-[inset_0_-1px_2px_rgba(255,255,255,0.1)] flex items-center justify-center">
              {/* Lens reflection */}
              <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-blue-400/30 translate-x-0.5 -translate-y-0.5" />
            </div>
          </div>

          {/* Screen Glare/Reflection */}
          <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-white/10 mix-blend-overlay" />

          {/* Video Player */}
          <div className="absolute inset-0 z-0 bg-black pointer-events-none rounded-[2rem] md:rounded-[2.5rem] overflow-hidden">
             {/* scale to hide youtube borders */}
             <div className="w-full h-full scale-[1.05]">
               <div id="maquirent-yt-player" />
             </div>
          </div>
        </div>
      </div>

      {/* Control Bar */}
      <div className="mt-8 mb-4 w-full mx-auto bg-zinc-900/90 backdrop-blur-xl rounded-2xl border border-zinc-800 p-4 shadow-xl flex flex-col gap-3 transition-all duration-300 z-50 max-w-[280px]">
        {/* Progress */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-medium text-zinc-400 w-9 text-right tabular-nums">{formatTime(progress)}</span>
          <div className="relative flex-1 flex items-center h-4 group/slider cursor-pointer">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-emerald-500 transition-all duration-150 ease-out" 
                  style={{ width: `${(progress / (duration || 1)) * 100}%` }}
                />
              </div>
            </div>
            <input 
              type="range" 
              min={0} 
              max={duration || 100} 
              step="any"
              value={progress}
              onChange={handleSeek}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div 
              className="absolute h-3 w-3 bg-white rounded-full shadow border border-zinc-200 pointer-events-none opacity-0 group-hover/slider:opacity-100 transition-opacity"
              style={{ left: `calc(${(progress / (duration || 1)) * 100}% - 6px)` }}
            />
          </div>
          <span className="text-xs font-medium text-zinc-400 w-9 tabular-nums">{formatTime(duration)}</span>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between px-2 mt-1">
          <button 
            onClick={togglePlay}
            className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 hover:text-emerald-300 flex items-center justify-center transition-colors"
          >
            {isPlaying ? <Pause size={20} className="fill-current" /> : <Play size={20} className="fill-current ml-1" />}
          </button>

          <div className="flex items-center gap-4">
            <button 
              onClick={toggleMute}
              className="text-zinc-400 hover:text-white transition-colors flex items-center justify-center w-8 h-8"
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
