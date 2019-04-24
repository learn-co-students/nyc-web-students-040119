class Rappers < ActiveRecord::Migration
  def change
    create_table :rappers do |t|
      t.string :name
    end
  end
end
