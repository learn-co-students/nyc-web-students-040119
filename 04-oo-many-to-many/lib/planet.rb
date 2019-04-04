class Planet
  attr_reader :name

  def initialize(name)
    @name = name
  end

  def colonies
    # Go ask the Colony model a question
    # "querying" the colony model
    # out of all the colony instances, which ones belong to me this specic planet aka self
    Colony.all.select do |colony|
      colony.planet == self
    end
  end

  def aliens
    # return all of the aliens that have colonies on this  planet
    # planet has many aliens through colonies
    self.colonies.map do |colony|
      colony.alien
    end
  end
end
