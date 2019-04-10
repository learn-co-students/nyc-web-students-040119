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


Q: Write the SQL to find all books written by a certain author given their name


3. Twitter where Tweets can have Tags (i.e. '#fun', '#hottake', '#tbt'). A tweet can have multiple tags, many tweets can be tagged with the same tag. Tweets have a message and user_id; tags have a name.


Q: Write the SQL to find all the tweets tagged '#tbt'


4. After completing the questions above, is there a rule you can determine about which table the foreign key belongs on given two associated tables?



## Lecture Notes
