class User
  attr_reader :username

  def initialize(username)
    @username = username
    # @tweets = []
  end

  def tweets
    # Go ask the Tweet model a question
    # "querying" our database (asking a question)

    # Look thru all of the tweets in the "database"
    # "choose" the tweets that belong to this user
    Tweet.all.select do |tweet|
      tweet.user == self
    end
  end

  def post_tweet(message)
    tweet = Tweet.new(message, self)
  end

end
