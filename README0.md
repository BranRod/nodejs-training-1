# Exercise 1: 3rd Party API integration

In this exercise you will build a NodeJS program which pulls JSON data from a
3rd party API (https://randomuser.me), transforms it into a certain schema, and returns the result for consumption
(hypothetically by a UI layer).

## Setup
Fork this repository to your Github account and clone to your local, this will be your working directory.

## Components overview

Your program will consist of the following components:

1. A submodule which is responsible for pulling data from the 3rd party API and transforming it
2. A unit test spec file to test your submodule
3. An entry file which runs your submodule code

## Component Requirements

### Submodule
- Exports a method to perform a GET request to randomuser API. Pull a batch of 3 records from the API. This method returns a promise.
- Exports a method to transform the randomuser response data into the following schema
```json
[
    {
        "first_name": "John",
        "last_name": "Doe",
        "dob_ISO": "1947-10-30T18:22:36.000Z",
        "is_male": true,
        "avatar": "thumbnailpicture.jpg",
        "username": "bigelephant127",
        "password_length": 8
    }
]
```
- Take note of:
  - capitalization of names
  - format of date of birth
  - `is_male` is a `Boolean` value
  - `avatar` is specifically thumbnail sized
  - `password_length` is a number, and is calculated from a string value

### Spec file
- Will test both of the submodule's methods
- Use `Joi` to validate schema

### Entry file
- Will import the submodule, call it's methods, and log the result to the console.
