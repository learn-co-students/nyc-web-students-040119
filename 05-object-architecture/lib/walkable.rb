module Walkable
  module InstanceMethods
    def take_a_walk
      puts "im on a walk"
    end

    def run_away_from_owner
      puts "im freee"
    end
  end

  module ClassMethods
    def im_a_class_method
      puts "im called on the class"
    end
  end

end
