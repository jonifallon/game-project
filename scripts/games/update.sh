curl --include --request GET "http://localhost:4741/games" \
  --header "Content-Type: application/json" \
  --data '{
  "game": {
    "id": 1,
    "game": ["","","","","","","","",""],
    "over":false,
    "player_x": {
      "id": 1,
      "email": "and@and.com"
      },
    "player_o": {
      "id": 3,
      "email":
      "dna@dna.com"
    }
  }
}'
