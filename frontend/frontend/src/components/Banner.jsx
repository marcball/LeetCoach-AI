import React from "react";

export default function Banner() {
  return (
    <div className="relative text-white w-full "> {/* border-b border-gray-600 h-16 ex for height of banner */}

    {/* Sign In Button positioned at top right */}
      <div className="absolute top-2 right-4">
        <button className="bg-white hover:bg-gray-200 text-black font-bold py-1.5 px-4 rounded-full">
          Sign In
        </button>
      </div>
    </div>
  );
}


