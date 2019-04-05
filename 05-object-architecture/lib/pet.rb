class Pet
  attr_reader :name
  attr_accessor :mood

  def initialize(name)
    @name = name
    @mood = 'nervous'
  end

  # def take_a_walk
  # end
  #
  # def take_a_swim
  # end
end
