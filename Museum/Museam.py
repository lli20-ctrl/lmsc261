import requests 

search_term = input("Enter a search term: ")
min_year = int(input("Enter minimum year: "))
max_year = int(input("Enter maximum year: "))

headers = {
    "AIC-User-Agent": "museum-crawler (lli20@berklee.edu)",
    "User-Agent": "museum-crawler (lli20@berklee.edu)",
} 

params = { 
	'q' : search_term, 
    "dateBegin": min_year,
    "dateEnd": max_year,
	'fields' : "title,artist_display,date_display" 
}

response = requests.get("https://api.artic.edu/api/v1/artworks", params=params, headers=headers)
data = response.json()

for artwork in data.get("data"):
    print(f"{artwork.get('title')} is by {artwork.get('artist_display')} which was displayed on {artwork.get('date_display')}")

