class Favorite < ApplicationRecord
  belongs_to :rapper
  belongs_to :user
end
