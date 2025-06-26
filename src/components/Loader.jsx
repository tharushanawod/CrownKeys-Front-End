import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full min-h-screen">
      <span className="relative flex h-12 w-12 sm:h-16 sm:w-16">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-12 w-12 sm:h-16 sm:w-16 bg-blue-700"></span>
      </span>
      <span className="mt-4 text-blue-700 text-base sm:text-lg font-semibold tracking-wide">
        Loading...
      </span>
    </div>
  );
};

export default Loader;
