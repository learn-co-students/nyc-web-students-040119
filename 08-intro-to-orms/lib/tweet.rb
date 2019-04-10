class Tweet
  attr_accessor :message, :user_id
  attr_reader :id

  # ALL = []
  # ALL = "hello" this will error
  # ALL << "hello" this is fine

  # @@all = []
  # @@all = 'hello' # this is fine

  def self.all
    # ALL
    sql = "SELECT * FROM tweets"

    tweets = DB[:conn].execute(sql)

    # tweets is an array of hashes
    # this method should return an array of Tweet instances
    # [{"message" => ..., "user_id" => 1}, {"message" => ..., "user_id" => 1}]
    # [<Tweet @user_id = 1 @message = ...>, <Tweet @user_id = 1 @message = ...>]


    tweets.map do |row|
      Tweet.new(row)
    end
  end

  def initialize(attributes={})
    @message = attributes['message']
    @user_id = attributes['user_id']

    @id = attributes['id']
  end

  def save
    # if this tweet has already been in the Database
      # update it
    # otherwise (its brand new)
     # INSERT it

    # end


    # self.class.all << self
    # construct a SQL statement
    sql = <<-SQL
      INSERT INTO tweets
      (message, user_id)
      VALUES (?, ?)
    SQL


    DB[:conn].execute(sql, self.message, self.user_id)
    # execute that sql on the db

  end

end
