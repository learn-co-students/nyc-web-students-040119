## Object Relational Mapper (ORM)

+ Definition:

## Active Record Pattern
- Remind me to define this tomorrow

# CRUD REVIEW
What are the four ways we can interact with data?


* Create
SQL: INSERT INTO dogs (name) VALUES ("scooby");
Ruby: Dog.new('scooby')

* Read
SQL: SELECT * FROM dogs; SELECT * FROM dogs WHERE name = "scooby"
Ruby: Dog.all; Dog.all.first



* Update
SQL: UPDATE dogs SET name  = 'scrappy' WHERE id = 1
Ruby:  scooby = Dog.new('scooby')

scooby.name = 'scrappy'


* Destroy
SQL: DELETE FROM dogs WHERE id = 1
Ruby:  Tweet.all.pop; Tweet.destroy(1)



## Domain Modeling and SQL Review

Draw out what your schema (structure of your tables and columns) would be for the following domains. Consider what tables are needed, what columns belong on which tables, and where the foreign keys belong.

1. Books and Authors where each book has a single author. Books should have a title and authors should have a name

Books belong to Author
Author has many Books

books
id | title                                            | author_id
1   Practical Object Oriented Design in Ruby (POODR)   12
2   Secrets of the JS Ninja                            13
3   99 Bottles of OOP                                  12


authors
id | name         
12   Sandi Metz                  
13  John Resig        

Q: Write the SQL to find all books written by a certain author given the author's id.
SELECT * FROM books WHERE author_id = 12

Q: Write the SQL to find all books written by a certain author given the author's name.

SELECT * FROM books JOIN authors ON authors.id = books.author_id WHERE authors.name = "Whatever"



2. Books and Authors where each book can have one or multiple authors. Books should have a title and authors should have a name

Book has many book_authors
Book has many authors through book_authors

Author has many book_authors
Author has many books through book_authors

BookAuthor belongs to author
BookAuthor belongs to book

books
id | title                                           
1   Practical Object Oriented Design in Ruby (POODR)   
2   Secrets of the JS Ninja                            
3   99 Bottles of OOP   
4   JS + Ruby Together                               

book_authors
id | book_id | author_id
1     1         12
2     2         13
3     3         12
4     4         12
5     4         13

authors
id | name         
12   Sandi Metz                  
13  John Resig   


Q: Write the SQL to find all books written by a certain author given their name

SELECT * FROM books
JOIN book_authors ON books.id = book_authors.book_id
JOIN authors ON authors.id = book_authors.authors_id
WHERE authors.name = "Wahtever Name"


3. Twitter where Tweets can have Tags (i.e. '#fun', '#hottake', '#tbt'). A tweet can have multiple tags, many tweets can be tagged with the same tag. Tweets have a message and user_id; tags have a name.

tweets
id | message
1    "wow #learnlovecode"
2    "wow #fun"
3    "wowwww #learnlovecode #fun"

tags
id | name
10    "#learnlovecode"
11    "#fun"

tweet_tags
id | tweet_id | tag_id
1       1       10
2       2       11
3       3       10
4       3       11


Q: Write the SQL to find all the tweets tagged '#tbt'


4. After completing the questions above, is there a rule you can determine about which table the foreign key belongs on given two associated tables?

FK goes on the belongs_to



## Lecture Notes
