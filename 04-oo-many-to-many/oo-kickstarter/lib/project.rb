class Project
  attr_reader :title, :backers

  def initialize(title)
    @title = title
    @backers = []
  end

  def add_backer(backer)
    self.backers << backer

    backer.back_project(self)
  end

end

# Project.new("hoverboard", 150)
# Project.new("hoverboard", 60)
# Project.new("hoverboard", 10)
