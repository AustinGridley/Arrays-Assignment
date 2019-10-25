1. Why would I use the filter function?
You would use the filter function to find a specific part of the array and then filtering that part of the array for a specific part of that array. An example is maybe part of the array is Last Name. You would filter it so that it uses only the Last Name's and then you could search for Smith and then it would pull up all the people with Smith as a last name.

2. Why would I use the map function?
A map function helps create a new array with paramaters that you would like to set with array values according to the past array. For example lets say that you have an array that has everyones age but then a year passes and you want to have a new array for the new year. The only difference you would like is you would like last year's year to be in your new array the "inital age" and you would make a new property for the current year.
Inital Array            New Array
First Name Pamela       First Name Pamela       
Last Name Smith         Last Name Smith
Age 32                  Initial Age 32
Gender Female           Current Age 33
                        Gender Female

3. Why would I use the reduce function?
The reduce method will collect all of one property and then will find how many " " of that variable there are.
For example lets say that the property is pet. I then want to know how many dogs there are out of all the pets.
I would use the reduce method to out of the pet property how many "dog" there are. It would then give me a number.




<img src="http://i.imgur.com/UzC7XPe.png" alt="Helio Training" width="226" align="center"/> v1.0.0

---------------

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

# Boilerplate

Basic example exercise for the new platform. Make sure you're using the new application when running the below commands.

## Instructions

```sh
# Install dependencies
yarn

# Test the application
yarn test
```

## Coding Exercise

1. Using the senators array of data, perform the following filters, paste your filter code alongside each type of filter:
    1. By Party
        1. Republicans
        2. Democrats
        3. Independents
    2. Gender
        1. Male
        2. Female
    3. State
2. Map the array to format each object to look like this: 
    ```js
      { firstName: '', lastName: '', party: '', gender: ''}
    ```   
3. Find the senator from your birth state, and reduce your array to pull the most senior senator. Paste the filter, and reduce function here: (code)

ECHO is on.
