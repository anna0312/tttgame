# sh scripts/create_user.sh
# EMAIL="anna@anna.com" PASSWORD="mypwd" PASSWORD_CONFIRMATION="mypwd" sh curlscripts/create_user.sh
curl "http://tic-tac-toe.wdibos.com/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD_CONFIRMATION}"'"
    }
  }'
