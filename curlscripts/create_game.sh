# TOKEN="BAhJIiU0MWFhYTY5MGQzMTA5MTM3NGUzMzdkY2JhNzc4YTU1NQY6BkVG--4ae4352cc7ac36bab88313290e6239a1291fec7c" sh curlscripts/create_game.sh
curl "http://tic-tac-toe.wdibos.com/games/" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "authorization: Token token=${TOKEN}" \
  --data '{}'
