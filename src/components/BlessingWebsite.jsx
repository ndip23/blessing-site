import React, { useState, useRef } from "react";
import { Heart, Music2, ChevronLeft, ChevronRight, VolumeX } from "lucide-react";

export default function BlessingWebsite() {
  // Combined list of sweet, reassuring messages
  const messages = [
    "I'm probably thinking about you right now ❤️",
    "You make my world softer and brighter ✨",
    "You are loved more than you realize 💕",
    "Virtual hug incoming 🤗",
    "Thank you for existing, My Sunshine ☀️",
    "You make ordinary moments feel magical 🌸",
    "My favorite place is wherever you are ❤️",
    "You are my peace in the chaos 🌸",
    "I miss your smile so much 💕",
    "I love you more than words can write ❤️",
    "You're my favorite thought of the day ☀️",
  ];

  // Combined reasons why she is special
  const reasons = [
    "Because your smile can change my entire mood.",
    "Because your presence brings undeniable peace.",
    "Because you make me want to become a better person.",
    "Because your heart is incredibly beautiful and pure.",
    "Because talking to you never feels like a chore.",
    "Because life feels brighter with you in it.",
    "Because you are my absolute favorite notification.",
    "Because you are completely irreplaceable.",
    "Because you feel like home.",
    "Because you understand me like no one else does.",
  ];

  // Images pointing to the public folder (details below on where to put them)
  const images = [
    "/images/us1.jpg",
    "/images/us2.jpg",
    "/images/us3.jpg",
    "/images/us4.jpg",
    "/images/us5.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [message, setMessage] = useState("Click the heart below whenever you miss me ❤️");
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const randomMessage = () => {
    const randomIdx = Math.floor(Math.random() * messages.length);
    setMessage(messages[randomIdx]);
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((err) => console.log("Audio play deferred: ", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden text-white bg-neutral-950 font-sans select-none">
      
      {/* Background Image Container */}
      <div className="fixed inset-0 z-0">
        <img
          src="/images/us1.jpg"
          className="w-full h-full object-cover filter blur-[2px] scale-105 transition-all duration-1000"
          alt="background"
          onError={(e) => {
            // Fallback if background image isn't loaded yet
            e.target.style.display = 'none';
          }}
        />
        {/* Soft dark pinkish-violet overlay to make text easy to read */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-purple-950/75 to-black/90 backdrop-blur-[3px]" />
      </div>

      {/* Floating Hearts Layer */}
      <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute text-rose-400 opacity-25 animate-pulse"
            style={{
              left: `${(i * 7) % 100}%`,
              top: `${(i * 13) % 100}%`,
              animationDuration: `${4 + (i % 5)}s`,
              fontSize: `${12 + (i % 3) * 8}px`
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      {/* Audio Element */}
      <audio ref={audioRef} id="song" loop>
        <source src="/music/blessing-song.mp3" type="audio/mp3" />
      </audio>

      {/* Floating Music Control */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 px-5 py-3 border border-white/20 backdrop-blur-xl transition active:scale-95 shadow-lg"
      >
        {isPlaying ? <VolumeX size={18} className="text-pink-300" /> : <Music2 size={18} className="text-pink-300 animate-bounce" />}
        <span className="text-sm font-medium">{isPlaying ? "Pause Music" : "Play Music"}</span>
      </button>

      {/* HERO SECTION */}
      <section className="relative z-20 flex min-h-screen flex-col items-center justify-center text-center px-6">
        <Heart className="w-20 h-20 text-pink-400 fill-pink-400 animate-pulse mb-6 filter drop-shadow-[0_0_10px_rgba(244,63,94,0.5)]" />

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          To My Sunshine,
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-rose-300 to-purple-300">
            Blessing ❤️
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-2xl text-pink-100 max-w-2xl font-light leading-relaxed">
          Among all the people in the world, somehow my heart found you. You are the most beautiful chapter of my life.
        </p>

        <a
          href="#letter"
          className="mt-10 inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-pink-500/30 hover:scale-105 transition-all duration-300"
        >
          Open My Heart ❤️
        </a>
      </section>

      {/* LETTER SECTION */}
      <section id="letter" className="relative z-20 px-6 py-24">
        <div className="max-w-3xl mx-auto bg-white/5 border border-white/10 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-pink-200">
            A Letter For You 💌
          </h2>

          <div className="space-y-6 text-base md:text-lg leading-relaxed text-pink-100/90 font-light">
            <p className="font-medium text-pink-200 text-xl">My Sunshine,</p>

            <p>
              There are thousands of words in the world, yet sometimes I still struggle to find the perfect ones to describe how much you mean to me. You came into my life quietly, but somehow you became one of the most important parts of it.
            </p>

            <p>
              I don’t know how to explain it perfectly, but you feel like peace. You feel like home. You feel like everything good in this world wrapped into one person.
            </p>

            <p>
              You have a way of making ordinary days feel special and difficult days feel lighter. When I think about happiness, your smile is one of the first things that comes to mind. When I think about comfort, I think about hearing your voice.
            </p>

            <p>
              I don’t need perfect moments with you. I just need you. I love you for your kindness, your heart, your little habits, the way you laugh, and the way you care. Every little thing that makes you uniquely <strong>Blessing</strong>.
            </p>

            <p>
              If life ever becomes overwhelming, please remember this: you are deeply appreciated, you are genuinely loved, and somewhere in this world, there is a man smiling simply because you exist.
            </p>

            <div className="pt-6 text-right">
              <p className="text-xl md:text-2xl font-semibold text-pink-300">— Samuel ❤️</p>
            </div>
          </div>
        </div>
      </section>

      {/* CAROUSEL / PHOTO SECTION */}
      <section className="relative z-20 px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pink-200">Our Memories ❤️</h2>
        <p className="text-pink-300/80 mb-10 text-sm md:text-base max-w-md mx-auto">
          A few of my favorite moments captured in time.
        </p>

        <div className="relative max-w-2xl mx-auto group">
          <div className="overflow-hidden rounded-3xl shadow-2xl border border-white/10 bg-white/5 aspect-[4/3] flex items-center justify-center">
            <img
              src={images[currentIndex]}
              className="w-full h-full object-cover transition-all duration-500 ease-in-out"
              alt={`Memory ${currentIndex + 1}`}
              onError={(e) => {
                // If the user hasn't added images yet, show this clean placeholder
                e.target.onerror = null; 
                e.target.src = "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1000&auto=format&fit=crop";
              }}
            />
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 p-3 rounded-full text-white/80 transition backdrop-blur-sm hover:scale-105 active:scale-95"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 p-3 rounded-full text-white/80 transition backdrop-blur-sm hover:scale-105 active:scale-95"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? "w-6 bg-pink-500" : "w-2 bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* REASONS SECTION */}
      <section className="relative z-20 px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-pink-200">
          Why You're Special ✨
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="bg-white/5 border border-white/10 backdrop-blur-xl p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-pink-400 text-xl mb-3">❤️</div>
              <p className="text-pink-100/90 text-sm md:text-base font-light leading-relaxed">{reason}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MISS ME INTERACTIVE SECTION */}
      <section className="relative z-20 text-center px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-pink-200">
          When You Miss Me ❤️
        </h2>

        <div className="bg-white/5 border border-white/10 backdrop-blur-xl max-w-xl mx-auto p-8 rounded-3xl shadow-xl">
          <p className="mb-8 text-lg md:text-xl text-pink-100 min-h-[3.5rem] flex items-center justify-center italic">
            "{message}"
          </p>

          <button
            onClick={randomMessage}
            className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 px-8 py-3.5 rounded-full font-bold shadow-lg hover:shadow-pink-500/20 hover:scale-105 active:scale-95 transition duration-200"
          >
            ❤️ Press Me ❤️
          </button>
        </div>
      </section>

      {/* FINAL STATEMENT */}
      <section className="relative z-20 px-6 py-20 text-center">
        <div className="max-w-2xl mx-auto bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-3xl">
          <h2 className="text-3xl font-bold mb-6 text-pink-200">One Last Thing ❤️</h2>
          <p className="text-lg md:text-xl leading-relaxed font-light text-pink-100">
            If I had to choose again, I'd still choose you. <br />
            In every lifetime. Every chapter. Every version of my story. <br /><br />
            I'd still be incredibly grateful that I met you.
          </p>
          <div className="mt-8 text-4xl animate-bounce">❤️</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-20 text-center py-12 border-t border-white/5 text-pink-200/60 text-sm">
        Made with love by Samuel ❤️
      </footer>

    </div>
  );
}