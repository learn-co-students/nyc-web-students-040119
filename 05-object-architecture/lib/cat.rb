class Cat < Pet
  # 'include' -> bring in the methods defined in the walkable module as instance methods
  # include Walkable
  include Walkable::InstanceMethods

  # 'extend' -> bring in the methods defined in the walkable module as class methods
  extend Walkable::ClassMethods

  attr_reader :num_lives

  def initialize(*args)
    super
    @num_lives = 9
  end


  def meow
    puts "im meowing"
  end
end

# classical inheritance is for when something "is a" something

# modules when something "does" something

# cat and dog, but not fish
# take_a_walk

# Cat < Mammal
# Dog < Mammal
#
# class Mammal < Pet


# dog and fish, but not cat
# take_a_swim

# module Walkable
