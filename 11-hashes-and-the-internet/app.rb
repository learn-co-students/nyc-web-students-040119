# 'https://www.googleapis.com/books/v1/volumes?q=ruby+programming'

require 'rest-client'
require 'json'
require 'pry'


# * Write an application that takes a search term from a user
# * Make a Request to the GoogleBooks API and get back some results
#   * https://www.googleapis.com/books/v1/volumes?q=ruby+programming
# * Display the titles, author names, and description for each book


# response = make_a_web_request("https://www.googleapis.com/books/v1/volumes?q=ruby+programming")
response = RestClient.get("https://www.googleapis.com/books/v1/volumes?q=ruby+programming")
# response.body is a String, we need to convert the string into a Hash
body = response.body
# turn the string into a hash
results = JSON.parse(body)

books = results["items"]

books.each do |book|
  puts "Title: #{book["volumeInfo"]["title"]}"

  puts "*" * 10
end




# response.each do |book|
#  # puts book.title
# end
