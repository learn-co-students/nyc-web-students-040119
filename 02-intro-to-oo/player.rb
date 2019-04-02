require 'pry'
# player = {
#   player_name: "Alan Anderson",
#   number: 0,
#   shoe: 16,
#   points: 22,
#   rebounds: 12,
#   assists: 12,
#   steals: 3,
#   blocks: 1,
#   slam_dunks: 1
# }

class Player

  attr_accessor :name, :number, :points, :shoe, :rebounds
  # attr_reader :name, :number, :points, :shoe, :rebounds
  # attr_writer :points

  def initialize(name, number, shoe, points, rebounds)
    @name = name
    @number = number
    @shoe = shoe
    @points = points
    @rebounds = rebounds
  end

  # def points=(new_points)
  #   @points = new_points
  # end

  # def name
  #   @name
  # end
  #
  # def points
  #   @points
  # end
  #
  # def number
  #   @number
  # end

end

player = Player.new("Alan Anderson", 0, 16, 22, 12)

binding.pry
