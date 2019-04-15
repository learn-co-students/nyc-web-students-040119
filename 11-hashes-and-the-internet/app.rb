# 'https://www.googleapis.com/books/v1/volumes?q=ruby+programming'

require 'rest-client'
require 'json'
require 'pry'


# * Write an application that takes a search term from a user
# * Make a Request to the GoogleBooks API and get back some results
#   * https://www.googleapis.com/books/v1/volumes?q=ruby+programming
# * Display the titles, author names, and description for each book

puts "Welcome to the Book Searcher"

puts "Enter a subject to find books about:"

input = gets.chomp

# response = make_a_web_request("https://www.googleapis.com/books/v1/volumes?q=ruby+programming")
response = RestClient.get("https://www.googleapis.com/books/v1/volumes?q=#{input}")
# response.body is a String, we need to convert the string into a Hash
body = response.body
# turn the string into a hash
results = JSON.parse(body)

books = results["items"]

books.each do |book|
  title = book["volumeInfo"]["title"]
  authors_data = book["volumeInfo"]["authors"]

  if authors_data
    authors = authors_data.join(" & ")
  else
    authors = "No Authors found for this book"
  end


  description_data = book["volumeInfo"]["description"]

  if description_data
    description = description_data[0..100] + "..."
  else
    description = "No Description found for this book"
  end

  puts "Title: #{title}"
  puts "Authors: #{authors}"
  puts "Description: #{description}"
  # puts Author Names separated by a &

  # puts First 100 characters of description followed by ...

  puts "*" * 10
end


# User
# Book
# Authors

# CLI.new.start

# GoogleBooksFetcher.new.get_books("dogs")

# response.each do |book|
#  # puts book.title
# end
