import requests

API_URL = "https://graphql.anilist.co"

def fetch_data(query ):
    response = requests.post(API_URL, json={'query': query})
    response.raise_for_status()
    return response.json()["data"]["Page"]["media"]

def get_popular_animes():
    query = """
    query {
      Page(page: 1, perPage: 6) {
        media(type: ANIME, sort: POPULARITY_DESC) {
          id
          title { romaji english native }
          coverImage { large }
        }
      }
    }
    """
    return fetch_data(query)

def get_trending_animes():
    query = """
    query {
      Page(page: 1, perPage: 6) {
        media(type: ANIME, sort: TRENDING_DESC) {
          id
          title { romaji english native }
          coverImage { large }
        }
      }
    }
    """
    return fetch_data(query)

def get_seasonal_animes():
    query = """
    query {
      Page(page: 1, perPage: 6) {
        media(type: ANIME, sort: POPULARITY_DESC, season: FALL, seasonYear: 2025) {
          id
          title { romaji english native }
          coverImage { large }
        }
      }
    }
    """
    return fetch_data(query)

def get_all_animes():
    query = """
    query {
      Page(page: 1, perPage: 20) {
        media(type: ANIME, sort: POPULARITY_DESC) {
          id
          title { romaji english native }
          description
          coverImage { large }
        }
      }
    }
    """
    return fetch_data(query)
