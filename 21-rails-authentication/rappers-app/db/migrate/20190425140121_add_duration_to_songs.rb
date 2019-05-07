class AddDurationToSongs < ActiveRecord::Migration[5.2]
  def change
    add_column :songs, :duration, :integer
  end
end
