class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string :title
      t.belongs_to :rapper, foreign_key: true

      t.timestamps
    end
  end
end
