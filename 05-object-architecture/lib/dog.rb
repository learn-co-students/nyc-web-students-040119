class Dog < Pet
  include Walkable
  include Swimmable

end


# Dog < ActiveRecord::Base
# # ActiveRecord
# module ActiveRecord
#   class Base
#
#   end
# end
#
#
# # Sinatra
# module Sinatra
#   class Base
#
#   end
# end
#
# DogsController < Sinatra::Base
