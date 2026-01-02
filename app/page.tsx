"use client";

export default function Home() {
  return (
    <section className="w-full  px-5">
      <div className="relative h-[300px] sm:h-[420px] md:h-[520px] rounded-3xl overflow-hidden">

        {/* VIDEO */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/Banner video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/45" />

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight">
            Bringing your celebrations
          </h1>

          <p className="mt-3 text-white/90 text-base sm:text-lg md:text-xl">
            Celebrate your special moments with us!
          </p>

          {/* SCROLL DOWN BUTTON */}
          <button
            aria-label="Scroll Down"
            onClick={() =>
              document.getElementById("next-section")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="absolute bottom-6 flex items-center justify-center w-12 h-12 rounded-full
                       border border-white/40 bg-white/10 backdrop-blur
                       animate-bounce hover:bg-white/20 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </button>
        </div>

      </div>

      {/* NEXT SECTION (for scroll demo) */}
      <div id="next-section" className="h-[600px]"></div>
    </section>
  );
}
