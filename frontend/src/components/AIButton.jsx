const AIButton = () => {
  return (
    <button
      className="group relative flex items-center gap-2 px-2 py-1 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded transition-all duration-300"
    >
      {/* LeetCoach Text with Glow Effect */}
      <span className="relative font-bold text-white">
        <span className="relative z-10">LeetCoach</span>
      </span>

      {/* Sparkles Icon with Clipped Shine */}
      <div className="relative w-6 h-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute inset-0 w-full h-full transition-all duration-300 ease-in-out 
                     group-hover:scale-110 group-hover:rotate-6"
        >
          <defs>
            {/* Clipping Path to Keep Shine Inside the Sparkles */}
            <clipPath id="sparkleClip">
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
            </clipPath>
          </defs>

          {/* Sparkles Icon */}
          <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
          <path d="M20 3v4" />
          <path d="M22 5h-4" />
          <path d="M4 17v2" />
          <path d="M5 18H3" />

          {/* Shine Effect (Clipped to Sparkles, Only Visible While Passing) */}
          <rect
            x="-100"
            y="-100"
            width="200"
            height="200"
            fill="rgba(255, 255, 255, 0.5)" /* Soft white glow */
            clipPath="url(#sparkleClip)"
            className="opacity-0 group-hover:opacity-100 group-hover:animate-shine"
          />
          <rect
            x="-100"
            y="-100"
            width="200"
            height="200"
            fill="rgba(255, 255, 0, 0.3)" 
            clipPath="url(#sparkleClip)"
            className="opacity-0 group-hover:opacity-100 group-hover:animate-shine"
          />
        </svg>
      </div>
    </button>
  );
};

export default AIButton;
