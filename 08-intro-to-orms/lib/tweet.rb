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
    binding.pry

    tweets
  end

  def initialize(attributes={})
    @message = attributes['message']
    @user_id = attributes['user_id']
  end

  def save
    # self.class.all << self
  end

end
