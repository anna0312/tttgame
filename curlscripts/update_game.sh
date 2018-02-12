# ID="25366" TOKEN="BAhJIiU0MWFhYTY5MGQzMTA5MTM3NGUzMzdkY2JhNzc4YTU1NQY6BkVG--4ae4352cc7ac36bab88313290e6239a1291fec7c" sh curlscripts/update_game.sh
curl "http://tic-tac-toe.wdibos.com/games/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "authorization: Token token=${TOKEN}" \
  --data '{
  "game": {
    "cell": {
      "index": 0,
      "value": "x"
    },
    "over": false
  }
}'
