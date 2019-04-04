require 'pry'
require_relative './lib/alien'
require_relative './lib/planet'
require_relative './lib/colony'


# Alien
# alien has many colonies
# alien has many planets through colonies

# Planet
# planet has many colonies
# planet has many aliens through colonies

# Colony
# colony belongs to planet
# colony belongs to alien


humans = Alien.new('humans')
omochros = Alien.new('Omochromians')
bird_peeps = Alien.new('Bird People')

earth = Planet.new('earth')
mars = Planet.new('mars')
pluto = Planet.new('pluto')

humans.colonize_planet(earth)
humans.colonize_planet(mars)
bird_peeps.colonize_planet(pluto)
omochros.colonize_planet(mars)

binding.pry
