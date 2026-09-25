
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#111318] px-6">

      {/* Background Glow */}
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-[#C2F800]/10 blur-3xl animate-pulse" />

      <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-[#C2F800]/10 blur-3xl animate-pulse" />

      {/* Main Content */}
      <div className="relative z-10 max-w-xl text-center text-white">

        {/* 404 */}
        <div className="relative mb-6">

          <h1
            className="
              bg-gradient-to-r from-[#C2F800] via-[#D8FF5A] to-[#C2F800]
              bg-clip-text
              text-[120px]
              font-black
              leading-none
              tracking-tight
              text-transparent
              sm:text-[180px]
              animate-pulse
            "
          >
            404
          </h1>

          {/* Floating Workout Dots */}
          <span className="absolute left-[18%] top-6 h-3 w-3 rounded-full bg-[#C2F800] animate-bounce" />

          <span className="absolute right-[18%] top-20 h-4 w-4 rounded-full bg-[#C2F800]/70 animate-bounce [animation-delay:300ms]" />

          <span className="absolute bottom-5 left-[30%] h-2 w-2 rounded-full bg-[#C2F800] animate-bounce [animation-delay:500ms]" />

          <span className="absolute bottom-10 right-[30%] h-2 w-2 rounded-full bg-white/40 animate-ping" />
        </div>

        {/* Heading */}
        <h2 className="mb-4 text-2xl font-bold sm:text-4xl">
          WORKOUT NOT FOUND
        </h2>

        {/* Description */}
        <p className="mb-8 text-sm leading-relaxed text-gray-400 sm:text-base">
          Looks like this workout took a rest day. The page you're looking
          for doesn't exist or may have been moved.
        </p>

        {/* Back Button */}
        <Link
          href="/"
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-[#C2F800]
            px-7
            py-3
            font-bold
            text-black
            shadow-lg
            shadow-[#C2F800]/10
            transition-all
            duration-300
            hover:scale-105
            hover:bg-[#d5ff45]
            hover:shadow-[#C2F800]/30
          "
        >
          <span className="text-lg">←</span>
          BACK TO WORKOUTS
        </Link>

        {/* Small Brand */}
        <p className="mt-8 text-xs font-bold tracking-[0.3em] text-gray-600">
          FITLOG
        </p>
      </div>
    </main>
  );
};

export default NotFound;
