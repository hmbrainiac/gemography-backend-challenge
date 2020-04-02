import React from "react";

function WaitingElement({ language, nbr_used, repos }) {
  return (
    <li className="border-t border-gray-200 text-center">
      <div className="px-4 py-4 sm:px-6">
        <span className="text-lg text-indigo-500">
          Getting languages ...
          <span role="img" aria-label="Yamiiii">😋</span>
        </span>
      </div>
    </li>
  );
}

export default WaitingElement;
