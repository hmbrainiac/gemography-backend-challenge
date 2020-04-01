import uvicorn
import requests
from datetime import date, timedelta
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
),

GITHUB_REPOS_API = 'https://api.github.com/search/repositories?q=created:>{}&sort=stars&order=desc'
DEFAULT_NBR_DAYS = 30


@app.get("/")
@app.get("/{nbr_days}")
async def root(nbr_days: int = DEFAULT_NBR_DAYS):
    """
        Returns list of the most used languages in trending repos
        in a number of days given
    """

    # if days number not between 0 and 100 replaced by default number
    nbr_days = nbr_days if 0 < nbr_days <= 100 else DEFAULT_NBR_DAYS

    # get a start date to retrieve repos
    # based on a giver number of days
    start_date = str(date.today() - timedelta(days=nbr_days))

    # response from Github endpoint
    response = requests.get(GITHUB_REPOS_API.format(start_date))

    languages = {}
    if response.ok:

        # retievie all repos from github response
        json_repos = response.json().get("items", [])
        for repo in json_repos:
            repo_language = repo.get('language')
            if repo_language is not None:

                # get language from dict if it's already assigned else create new dict
                language = languages.get(
                    repo_language, {'language': repo_language}
                )

                # increase number of utilisation
                language['nbr_used'] = language.get('nbr_used', 0) + 1

                # add repo's url to the language's repos
                language['repos'] = language.get(
                    'repos', []
                ) + [repo.get('git_url')]

                languages[repo_language] = language

        # Sort languages by number of utilisation
        languages = sorted(
            languages.values(), key=lambda x: x.get('nbr_used'),
            reverse=True,
        )

    return languages


if __name__ == "__main__":
    uvicorn.run(app)
