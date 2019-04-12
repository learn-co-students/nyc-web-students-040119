class Nests < ActiveRecord::Migration[5.2]
  def change
    create_table :nests do |t|
      t.integer :squirrel_id
    end
  end
end
