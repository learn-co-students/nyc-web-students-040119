class Alien
  attr_reader :name

  def initialize(name)
    @name = name
  end

  def colonize_planet(planet)
    Colony.new(planet, self)
  end

  def colonies
    # Go ask the Colony model a question
    # "querying" the colony model
    # out of all the colony instances, which ones belong to me this specic alien aka self
    Colony.all.select do |colony|
      colony.alien == self
    end
  end

  def planets
    # return all of the planets this alien has colonies on
    # alien has many planets through colonies

    self.colonies.map do |colony|
      colony.planet
    end
  end

end
