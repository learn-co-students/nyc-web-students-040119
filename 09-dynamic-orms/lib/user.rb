class User < ActiveRecord::Base

  has_many :tweets
  # def tweets
  #   # Go ask the Tweet model a question
  #   # look thru all of the tweets in the db
  #   # select the one's where the foreign key is my primary key id
  #   Tweet.where(user_id: self.id)
  #   # Look up the ActiveRecord documentation
  #   # .where
  # end
end
