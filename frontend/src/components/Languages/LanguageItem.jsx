import React from "react";
import Repos from "./Repos"

function LanguageItem({ language, nbr_user, repos }) {
  return (
    <li key={language} className="border-t border-gray-200">
      <div className="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out">
        <div className="px-4 py-4 sm:px-6">
          <div className="flex items-center justify-between">
            <div className="text-lg font-medium text-gray-800">
              {language}
            </div>
            <div className="ml-2 flex-shrink-0 flex">
              <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium leading-5 bg-indigo-100 text-indigo-800">
                Used by {nbr_user}
              </span>
            </div>
          </div>
          <div className="mt-2">
            <div className="ml-6 text-sm">
              <Repos repos={repos} />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default LanguageItem;
