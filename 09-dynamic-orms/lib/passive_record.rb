class PassiveRecord

  # self.attr_accessor(:message, :user_id, :id)

  # ALL = []
  # ALL = "hello" this will error
  # ALL << "hello" this is fine

  # @@all = []
  # @@all = 'hello' # this is fine
  def self.table_name
    self.to_s.downcase + "s"
  end

  def self.col_names
     DB[:conn].execute("PRAGMA table_info (#{self.table_name})").map do |col_info|
       col_info["name"]
    end
  end

  def self.all
    # ALL
    sql = "SELECT * FROM #{self.table_name}"

    results = DB[:conn].execute(sql)

    # tweets is an array of hashes
    # this method should return an array of Tweet instances
    # [{"message" => ..., "user_id" => 1}, {"message" => ..., "user_id" => 1}]
    # [<Tweet @user_id = 1 @message = ...>, <Tweet @user_id = 1 @message = ...>]

    results.map do |row|
      self.new(row)
    end
  end

  def initialize(attributes={})
    self.class.col_names.each do |col|
      self.class.send("attr_accessor", col.to_sym)

      self.send("#{col}=", attributes[col])
    end
    # self.message = attributes['message']
    # @message = attributes['message']
    # self.user_id = attributes['user_id']
    # @user_id = attributes['user_id']
  end

  def save
    # if the tweet is coming from the DB
    # update it
    if persisted?
      update_record
    else
      # otherwise, if its brand new
      # insert into the db
      insert_record
    end
  end

  def persisted?
    !!self.id
  end

  private

  def insert_record
    # sql = "INSERT INTO tweets (message, user_id) VALUES ('my latest tweet', 2)"
    # sql = "INSERT INTO tweets (message, user_id) VALUES ('#{self.message}', #{self.user_id})"
    sql = <<-SQL
    INSERT INTO tweets
    (message, user_id)
    VALUES (?, ?);
    SQL
    DB[:conn].execute(sql, self.message, self.user_id)

    last_row_sql = <<-SQL
    SELECT *
    FROM tweets
    ORDER BY id DESC
    LIMIT 1
    SQL
    @id = DB[:conn].execute(last_row_sql)[0]["id"]
    self
  end

  def update_record
    sql = <<-SQL
    UPDATE tweets
    SET message = ?, user_id = ?
    WHERE id = #{self.id}
    SQL

    DB[:conn].execute(sql, self.message, self.user_id)
    self
  end
end
