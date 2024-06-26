// CountrySectionSkeleton.tsx

import React from "react";

const CountrySectionSkeleton: React.FC = () => {
  return (
    <section>
      <h1 className="mt-12 text-3xl font-semibold text-center">Loading...</h1>
      <h1 className="mt-12 text-3xl font-semibold text-center">Loading...</h1>

      <ul className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 20 }).map((_, index) => (
          <li
            key={index}
            className="p-4 bg-gray-300 rounded-lg shadow-md animate-pulse"
          >
            <div className="w-full h-20 mb-4 bg-gray-400 rounded-lg"></div>
            <h3 className="w-3/4 h-6 mb-2 bg-gray-400 rounded"></h3>
            <p className="w-1/2 h-4 bg-gray-400 rounded"></p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CountrySectionSkeleton;
