class CreateOtters < ActiveRecord::Migration[5.2]
  def change
    create_table :otters do |t|
      t.string :name
      t.integer :age
      t.integer :cuteness_level

      t.timestamps
    end
  end
end
