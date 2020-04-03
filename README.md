# [Gemography Backend Coding Challenge](https://github.com/gemography/backend-coding-challenge)

[![Build Status](https://travis-ci.com/abidar95/gemography-backend-challenge.svg?token=UsVtQjHpkFVnyoJUuZVA&branch=master)](https://travis-ci.com/abidar95/gemography-backend-challenge)

** A coding challenge to fetch the most used programing langagues in trending repositories **

Live DEMO for the project is available [HERE](https://gemography-challenge.herokuapp.com/).

And automatic docs ([OpenAPI](https://github.com/OAI/OpenAPI-Specification)/[Redoc](https://github.com/Redocly/redoc)) for the APIs is available [HERE](https://gemography-challenge.herokuapp.com/redoc).


# Functional Specs
* Develop a REST microservice that list the languages used by the 100 trending public repos on GitHub.
* For every language, you need to calculate the attributes below 👇:
  * Number of repos using this language
  * The list of repos using the language



# Technologies Used

- [FastAPI](https://github.com/tiangolo/fastapi): Python web framework for building APIs
- [React](https://github.com/facebook/react): JavaScript library for building user interfaces
- [TailwindCSS](https://github.com/tailwindcss/tailwindcss): Utility-first CSS framework for building user interfaces
- [TailwindUI](https://tailwindui.com/): Beautiful UI components based on Tailwind CSS.
- [Docker](https://www.docker.com/): Stack as containsers.
- [Travis CI](https://travis-ci.com/): Run tests before builds.
- [Heroku](https://www.heroku.com): Cloud platform for applications.




# Quick Start

## Requirements
* Docker

We **highly recommend** and only officially support the latest patch release of
each Python and Django series.

## Installation

Clone the project

    git clone https://github.com/abidar95/gemography-backend-challenge.git

Make sure you are in the project directory

    cd gemography-backend-challenge

Create .env file with PORT variable (you can set any available port)

    touch .env

Now build the image and run the container with docker-compose:

    docker-compose up -d

And you can find the app is running at http://localhost:{CHOSEN_PORT} in your browser.



# Available Endpoints

| Method     |  endpoint          | description|
|----------- |--------------------|------------|
|*GET*         |  [/api/get_languages](https://gemography-challenge.herokuapp.com/api/get_languages) | List of trending languages in the last 30 days
|*GET*         |  [/api/get_languages/{nbr_days}](https://gemography-challenge.herokuapp.com/api/get_languages/70) | List of trending languages in the last given days