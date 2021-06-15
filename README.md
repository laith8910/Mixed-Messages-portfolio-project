# Mixed Messages Project
*This project has been completed as part of a full- stack development course at Codecademy*

## Introduction
The aim of this project is to return a truly random message to the user, in this scenario that message is the outcome of achieving a paticular grade in an exam. The grade and outcomes are randomised, but higher grades achieve better outcomes.

## Technolgies
- JavaScript
- Git
- Github
- Command Line

## Setup and start
This program is written in JavaScript so it is reccomended to run the program on a runtime such as node.js.
Each run of the program will generate a new message with the default library of answers- however there is built in functionaility to add more messages.

### Adding more to the data library
You will can add new scenarios to the 'data' object isnide of the main.js file. In order to this you will need to know which property to change and how the corresponds with the output sentence:
- The middle part of the message is bought from the either goodGrade of badGrade array
- The end part of the sentene is bought from either the badAddOn or goodAddOn array
- *The 'good' and 'bad' types of arrays are called depending on what randomised grade is given*

Sentences can be added to the array by just changing the relevant array of the data object, like this: 
```javascript 
data.goodGrade = 'you have achieved a knighthood for your amazing grades';
```
This will automatically push your sentence to the array and then log the rest of the items of the array in the console. If your sentence has spaces at the beginning or end it will not push the sentence and log that there was an error in the console.

It shown be known that calling the arrays  inside of this object will return a random element inside of those arrays.

## Project Status
**This project is complete!**