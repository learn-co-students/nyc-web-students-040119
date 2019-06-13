class ApplicationController < ActionController::API
  def user_payload(user)
    { user_id: user.id }
  end

  def encode_token(user)
    JWT.encode(user_payload(user), secret, 'HS256')
  end

  def token
    request.headers["Authorization"]
  end

  def secret
    "otters"
  end

  def decoded_token
    JWT.decode(token, secret, true, { algorithm: 'HS256' })
  end

  def current_user
    User.find(decoded_token[0]["user_id"])
  end
end
