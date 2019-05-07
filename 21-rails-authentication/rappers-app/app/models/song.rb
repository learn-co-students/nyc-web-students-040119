class Song < ApplicationRecord
  belongs_to :rapper
  validates :title, presence: true
end
