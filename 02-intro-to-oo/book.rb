class Book

  def initialize(title, author)
    @title = title
    @author = author
  end

  def title
    @title.split.map do |word|
      word.capitalize
      #
    end.join(" ")
  end

  def author
    @author.split.map do |word|
      word.capitalize
    end.join(" ")
  end

  def zebra
  end

  def cover_page
    title = "hello world"
    # capitalized_title = @title.split.map do |word|
    #   word.capitalize
    #   #
    # end.join(" ")

    # capitalized_author = @author.split.map do |word|
    #   word.capitalize
    # end.join(" ")

    # self is the implict reciver of any method call
    "\"#{self.title}\"\n  by\n#{self.author}"
    # "Title Of The Book"
    #   by
    # Author Name
  end

end
