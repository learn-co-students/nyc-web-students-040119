require 'pry'
require_relative './book'

player = {
  player_name: "Alan Anderson",
  number: 0,
  shoe: 16,
  points: 22,
  rebounds: 12,
  assists: 12,
  steals: 3,
  blocks: 1,
  slam_dunks: 1
}

# calvin_and_hobbes = {
#   title: 'the essential calvin and hobbes',
#   author: 'bill watterson'
# }

# poodr = {
#   title: 'practical object oriented design in ruby',
#   author: 'sandi metz'
# }

poodr = Book.new('practical object oriented design in ruby','sandi metz')
calvin_and_hobbes = Book.new('the essential calvin and hobbes', 'bill watterson')

# puts poodr.cover_page

binding.pry
# 'bye'
