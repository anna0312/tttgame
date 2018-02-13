# ID="2213" TOKEN="BAhJIiUyZWMzNmJiODk0ZDE5NDhiNjM3OTA2MGVjM2FiMWYzYwY6BkVG--d06ecbc0677dd01974d262d1127f625dac410b69" sh curlscripts/logout_user.sh
curl "http://tic-tac-toe.wdibos.com/sign-out/${ID}" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "authorization: Token token=${TOKEN}" \
