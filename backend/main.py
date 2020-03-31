import uvicorn
import requests
from datetime import date, timedelta
from fastapi import FastAPI

app = FastAPI()

GITHUB_REPOS_API = 'https://api.github.com/search/repositories?q=created:>{}&sort=stars&order=desc'


@app.get("/")
@app.get("/{nbr_days}")
def root(nbr_days: int = 30):
    """
        Returns the most used languages in trending the repos
        in a number of days given
    """

    # get a start date to retrieve repos
    # based on a giver number of days
    start_date = str(date.today() - timedelta(days=nbr_days))

    # response from Github endpoint
    response = requests.get(GITHUB_REPOS_API.format(start_date))

    if response.ok:
        languages = {}

        # retievie all repos from github response
        json_repos = response.json().get("items", [])
        for repo in json_repos:
            repo_language = repo.get('language')
            if repo_language is not None:

                # get language from dict if is already assigned else create new dict
                language = languages.get(repo_language, {})

                # increase number of utilisation
                language['nbr_used'] = language.get('nbr_used', 0) + 1

                # add repo's url to the language repos
                language_repos = language.get('repos', [])
                language_repos.append(repo.get('git_url'))
                language['repos'] = language_repos

                languages[repo_language] = language

    return {
        'nbr_days': nbr_days,
        'date': str(start_date),
        'languages': languages
    }


if __name__ == "__main__":
    uvicorn.run(app)
