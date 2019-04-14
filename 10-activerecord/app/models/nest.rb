class Nest < ActiveRecord::Base
  belongs_to :squirrel
  # SELECT  "squirrels".* FROM "squirrels" WHERE "squirrels"."id" = ? LIMIT ?  [["id", 1], ["LIMIT", 1]]

  belongs_to :tree
end
