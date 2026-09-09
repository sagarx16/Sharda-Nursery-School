"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Camera, Pause, Play } from "lucide-react";

interface SlideItem {
  src: string;
  alt: string;
  caption?: string;
}

const CAMPUS_SLIDES: SlideItem[] = [
  {
    src: "/images/WhatsApp Image 2026-09-09 at 15.26.40.jpeg",
    alt: "S.N. Public School campus life Bokaro",
    caption: "Campus Life",
  },
  {
    src: "/images/WhatsApp Image 2026-09-09 at 15.26.41.jpeg",
    alt: "S.N. Public School classroom activity Bokaro",
    caption: "Classroom Activities",
  },
  {
    src: "/images/WhatsApp Image 2026-09-09 at 15.26.41 (1).jpeg",
    alt: "S.N. Public School students learning together",
    caption: "Learning Together",
  },
  {
    src: "/images/WhatsApp Image 2026-09-09 at 15.26.42.jpeg",
    alt: "S.N. Public School events and activities",
    caption: "School Events",
  },
  {
    src: "/images/WhatsApp Image 2026-09-09 at 15.26.43.jpeg",
    alt: "S.N. Public School Bokaro students",
    caption: "Our Students",
  },
  {
    src: "/images/WhatsApp Image 2026-09-09 at 15.26.43 (1).jpeg",
    alt: "S.N. Public School moments",
    caption: "School Moments",
  },
  {
    src: "/images/WhatsApp Image 2026-09-09 at 15.26.43 (2).jpeg",
    alt: "S.N. Public School activities Bokaro Steel City",
    caption: "Daily Activities",
  },
];

const AUTOPLAY_DELAY = 3500;

export default function PhotoCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const total = CAMPUS_SLIDES.length;

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      const next = ((index % total) + total) % total;
      setIsTransitioning(true);
      setCurrent(next);
      setTimeout(() => setIsTransitioning(false), 500);
    },
    [isTransitioning, total]
  );

  const prev = useCallback(() => goTo(current - 1), [current, goTo]);
  const next = useCallback(() => goTo(current + 1), [current, goTo]);

  // Autoplay
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, AUTOPLAY_DELAY);
    return () => clearInterval(timer);
  }, [isPlaying, total]);

  // Touch / swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) delta < 0 ? next() : prev();
    touchStartX.current = null;
  };

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [prev, next]);

  const prevIndex = ((current - 1) + total) % total;
  const nextIndex = (current + 1) % total;

  return (
    <section className="w-full pt-4 sm:pt-6 pb-12 sm:pb-16 bg-surface-container-low overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-secondary-fixed/40 text-on-secondary-fixed-variant font-label-badge text-[10px] sm:text-label-badge uppercase font-bold tracking-wider mb-2">
            <Camera className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
            Campus Glimpses
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary-container leading-tight">
            Life at S.N. Public School
          </h2>
          <p className="font-body-md sm:font-body-lg text-body-md sm:text-body-lg text-on-surface-variant mt-1.5">
            A peek into the vibrant, nurturing environment where every child flourishes.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative group rounded-2xl overflow-hidden shadow-2xl border border-surface-container-high select-none"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          role="region"
          aria-label="Campus photo slideshow"
          aria-live="polite"
        >
          {/* Slides */}
          <div className="relative w-full aspect-[4/3] sm:aspect-video md:aspect-[16/7] bg-surface-container-high">
            {CAMPUS_SLIDES.map((slide, i) => {
              const isActive = i === current;
              const isNear = i === prevIndex || i === nextIndex;

              return (
                <div
                  key={slide.src}
                  aria-hidden={!isActive}
                  className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                    isActive ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                    className="object-cover"
                    priority={isActive || isNear}
                    loading={isActive || isNear ? "eager" : "lazy"}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-container/70 via-transparent to-transparent" />

                  {/* Caption */}
                  {slide.caption && (
                    <div className="absolute bottom-0 left-0 right-0 px-5 pb-4 z-20">
                      <span className="inline-block px-3 py-1 rounded-full bg-secondary-container/90 text-on-secondary-container font-label-badge text-[11px] font-bold uppercase tracking-wider">
                        {slide.caption}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Slide counter */}
            <div className="absolute top-4 right-4 z-20 px-2.5 py-1 rounded-full bg-primary-container/70 backdrop-blur-sm text-on-primary font-label-badge text-[11px] font-bold tabular-nums">
              {current + 1} / {total}
            </div>

            {/* Play/Pause toggle */}
            <button
              onClick={() => setIsPlaying((p) => !p)}
              className="absolute top-4 left-4 z-20 w-8 h-8 rounded-full bg-primary-container/70 backdrop-blur-sm text-on-primary flex items-center justify-center hover:bg-primary-container transition-colors"
              aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Left Arrow */}
          <button
            onClick={prev}
            className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-surface-container-lowest/80 backdrop-blur-sm text-primary shadow-lg border border-surface-container-high flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus:opacity-100 transition-all hover:bg-surface-container-lowest hover:scale-110 duration-200"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-surface-container-lowest/80 backdrop-blur-sm text-primary shadow-lg border border-surface-container-high flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus:opacity-100 transition-all hover:bg-surface-container-lowest hover:scale-110 duration-200"
            aria-label="Next photo"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div
          className="flex items-center justify-center gap-1.5 mt-5"
          role="tablist"
          aria-label="Slide navigation dots"
        >
          {CAMPUS_SLIDES.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 h-2 bg-primary-container"
                  : "w-2 h-2 bg-surface-container-highest hover:bg-secondary"
              }`}
            />
          ))}
        </div>

        {/* Thumbnail Strip (sm+) */}
        <div className="hidden sm:flex items-center gap-2 mt-5 overflow-x-auto pb-1 justify-center flex-wrap">
          {CAMPUS_SLIDES.map((slide, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`relative w-14 h-10 rounded-lg overflow-hidden shrink-0 transition-all duration-200 border-2 ${
                i === current
                  ? "border-primary-container scale-110 shadow-md"
                  : "border-transparent opacity-60 hover:opacity-90 hover:scale-105"
              }`}
              aria-label={`Go to thumbnail ${i + 1}`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="56px"
                className="object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
