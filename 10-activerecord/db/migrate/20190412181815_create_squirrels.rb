class CreateSquirrels < ActiveRecord::Migration[5.2]
  def change
    create_table :squirrels do |t|
      t.string :name
      t.string :eye_color
      t.string :temperament

      t.timestamps
    end
  end
end

# CreateSquirrels.new.change

# def create_table(table_name)
#   yield(TableBuilder.new)
# end
#
# class TableBuilder
#
#   def string
#     #
#   end
#
#   def integer
#     #
#   end
# end
#
# def my_each(arr)
#   puts "starting to execute the method"
#   count = 0
#   while count < arr.length
#     yield(arr[count])
#
#     count += 1
#   end
#   puts "at the end of the method"
# end
#
# my_each([1,2,3]) do |n|
#   puts "the element is #{n}"
# end
