class Owner < ApplicationRecord
  has_many :pets
  validates :first_name, presence: true


  def full_name
    self.first_name + " " + self.last_name
  end

  def self.you_da_pet_gawd
    Owner.select do |owner|
      owner.pets.count >= 2
    end
  end

end
