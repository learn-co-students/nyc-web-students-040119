# Dynamic ORMs

We should be able to
  * Define a super class that our models can inherit from
  * Child class does not need to 'know' too much about the Database.
  * By inheriting from the superclass the connection to the DB is established
  * Call methods on the child class to interact with the DB

## Active Record Pattern
ORM
Object Relational Mapper

SQL WORLD <> RUBY WORLD
* Tables <> Class (Model)
* Rows (Records) <> Instance
* Columns <> attributes or properties that instances have
