import React from "react";
import LanguageItem from "./LanguageItem";


function Languages() {
  const languages = [
    {
      language: "C++",
      nbr_used: 2,
      repos: [
        'git://github.com/MegEngine/MegEngine.git',
        'git://github.com/Jittor/jittor.git'
      ]
    },
    {
      language: "Jupyter Notebook",
      nbr_used: 4,
      repos: [
        'git://github.com/google/automl.git',
        'git://github.com/jcl5m1/ventilator.git',
        'git://github.com/bmild/nerf.git',
        'git://github.com/github/covid19-dashboard.git'
      ]
    },
    {
      language: "Dart",
      nbr_used: 1,
      repos: [
        'git://github.com/WorldHealthOrganization/app.git'
      ]
    }
  ]
  return (
    <div className="w-full mx-auto mt-20 bg-white shadow overflow-hidden sm:rounded-md">
      <div className="px-4 py-5">
        <div className="ml-4 mt-2">
          <h3 className="text-xl leading-6 font-medium text-gray-900">
            Trending languages
          </h3>
        </div>
      </div>
      <ul>
        {languages.map((item) => <LanguageItem language={item.language} repos={item.repos} />)}
      </ul>
    </div>
  );
}

export default Languages;
