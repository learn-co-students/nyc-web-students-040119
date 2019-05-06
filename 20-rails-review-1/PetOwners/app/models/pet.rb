class Pet < ApplicationRecord
  belongs_to :owner
  validates :name, presence: true
  # validates :animal_type, inclusion: {in: ["cat", "bird", "dog", "turtle"]}
  validate :validate_animal_type


  def validate_animal_type
    array = ["cat", "bird", "dog", "turtle"]
    if array.include?(self.animal_type) == false
      errors.add(:animal_type, "is this even a real pet?")
    end
  end


end
