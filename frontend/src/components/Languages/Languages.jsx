import React, { useState, useEffect } from "react";
import axios from "axios"

import LanguageItem from "./LanguageItem";


function Languages() {
  const languagesEndpoint = "http://localhost:8000"
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    axios.get(languagesEndpoint)
      .then(response => {
        setLanguages(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

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
        {languages.map((item) => <LanguageItem key={item.language} language={item.language} nbr_used={item.nbr_used} repos={item.repos} />)}
      </ul>
    </div>
  );
}

export default Languages;
