require 'sqlite3'
require 'pry'


db = SQLite3::Database.new('chinook.db')


# module SQLite3
#   class Database
      # attr_accessor :results_as_hash
#      def initialize(filename)
#        @filename = filename
        # @results_as_hash = false
#      end
#   end
# end

binding.pry
