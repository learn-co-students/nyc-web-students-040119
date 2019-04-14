class Squirrel < ActiveRecord::Base
  has_many :nests
   # SELECT "nests".* FROM "nests" WHERE "nests"."squirrel_id" = ?  [["squirrel_id", 3]]
  # SELECT ________.* FROM ______ WHERE ______._____id = ?
  has_many :trees, through: :nests
  # SELECT "trees".* FROM "trees" INNER JOIN "nests" ON "trees"."id" = "nests"."tree_id" WHERE "nests"."squirrel_id" = ?  [["squirrel_id", 3]]
end
