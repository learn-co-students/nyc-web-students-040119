require_relative '../lib/pet'
require_relative '../lib/walkable'
require_relative '../lib/swimmable'
Dir[File.join(File.dirname(__FILE__), "../lib", "*.rb")].sort.each {|f| require f}
