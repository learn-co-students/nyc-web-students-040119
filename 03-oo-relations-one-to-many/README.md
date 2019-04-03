Intro to OO Relations
===========================

## Lecture Notes

* Has Many / Belongs to

* Single Source of truth

#### Where we've been

class Student

class Batch

ferris = Student.new('ferris')
will = Student.new('will')
danielle = Student.new('danielle')

ferris.batch
=> "nyc-web-040119"

batch = Batch.new('nyc-web-career-040119')


batch.students
=> ["ferris", "will", "danielle"]

#### Where we'll be from here on out


batch.students
=> [<Student @name="ferris">, <Student @name = "will">, ...]

will.batch
=> <Batch @name="nyc-web-040119">


#### Define terminology
  * Model -> Class that's primary role is to store data

    Lesson (a model)
    Student ( a model)
    GithubRepoSyncer (class, not a model, service object)

  * Domain / Domain Modeling -> Subject Matter of our App


  * Deliverables


### Deliverables
# TODO do this one
* `Tweet#username` that returns the username of the tweet's user

* Create a User class. The class should have these methods:
  * `#initialize` which takes a username and has a reader method for the username
  * `#tweets` that returns an array of Tweet instances
  * `#post_tweet` that takes a message, creates a new tweet, and adds it to the user's tweet collection

* Create a Tweet class. The class should have these methods:
  * `Tweet#message` that returns a string
  * `Tweet#user` that returns an instance of the user class
  * `Tweet.all` that returns all the Tweets created.
