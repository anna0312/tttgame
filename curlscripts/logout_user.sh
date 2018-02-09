# ID="2115" TOKEN="BAhJIiVhZThjYjhiYmQyNGFmNzBkYmM3NzVjNTAzMzUyN2FlZQY6BkVG--da948201b13381f0c1c41349dcc646c242359c26" sh curlscripts/logout_user.sh
curl "http://tic-tac-toe.wdibos.com/sign-out/${ID}" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "authorization: Token token=${TOKEN}" \
