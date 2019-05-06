# Goal: Review all of the core concepts of Rails by building an app from scratch

    - MVC
    - ActiveRecord
    - Routes
    - Controller actions
    - Views
    - Forms
    - Validations

Objective: Create a Pets app

# Deliverables:

MODELS:

- Owner has a first name, last name, age, and email
- Owner has many pets
- Pet has a name and animal_type (dog, cat, or bird)
- Pet belongs to a User

CONTROLLERS AND VIEWS:

- User can do full CRUD on an Owner
- User can do full CRUD on a Pet
- Owner and Pet index pages link to show page
- Custom route allows users to see all Owners with 2 or more pets

VALIDATIONS:

- There cannot be duplicate Owners (unique first names)
- Owners must be older than 17
- Pet cannot be added if the type is not a dog, cat, bird, or turtle
- User sees a message to verify that a Pet/Owner was successfully, or unsuccessfully, created
