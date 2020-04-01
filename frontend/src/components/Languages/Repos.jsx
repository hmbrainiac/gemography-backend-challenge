import React from "react";


function Repos({ repos }) {
  return (
    <ul className="list-disc">
      {repos.map((repo) =>
        <li key={repo.substring(repo.lastIndexOf('/') + 1)} className="flex items-start mt-2">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <a className="ml-2 leading-5 font-medium text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150" href="{repo}">
            {repo}
          </a>
        </li>
      )}
    </ul>
  );
}

export default Repos;
