![Image description](https://i1.faceprep.in/ProGrad/face-logo-resized.png)

# ProGrad Lab | Typescript Introduction - Arrays

## Learning Goals

After this lesson, you will be able to:

- Develop some basic TypeScript functions.
- Develop some basic arraysa and perform some array related operations.
- You will learn to work with mixed arrays.
- Create a TypeScript interface, and use it from a class.
- Implement two different interfaces and use them from classes.

## Requirements

- Fork this repo.
- Clone this repo.
- Install TypeScript on your computer

```$ npm install -g typescript```

## Submission
Upon completion, run the following commands:
```
$ git add .
$ git commit -m "done"
$ git push origin master
```
Navigate to your repo and create a pull request from your master branch to the original repository master branch.

In the pull request name, add your ProGrad Id and last names separated by a dash "-"

## How to run the project
- To compile the project
- Open the terminal inside Vscode editor and execute the following command.
    - ``` tsc main.ts ```
- Once you complie your typescript code, main.js file get generated automatically.
- Now run the main.js file to see the output. To run the file, use the command given below
    - ``` node main.js ```
- You can see the output in the terminal.
- Also open the index.html and see the output in browser console.

![Complile&Run](https://i1.faceprep.in/ProGrad/typescript-lab-image1.png)

## Introduction
When we are studying, it's very common to understand arrays. Some of them are more important than others, but we have to remember all of them.

We are going to help you with this. How? We are going to work with arrays in TypeScript. We are going to create different operations following different strategies with TypeScript. In the process, we will cover several important basic topics: variable types, arrays, functions, classes, and interfaces.

Project Structure
The project structure will be as follows:
```
starter-code/
├── progression-1
    ├── index.html
    ├── main.js
    └── main.ts
    
```
You are going to work over the *.ts files.

Note: Remember that the *.js files are generated every time we save the TypeScript files in our solution.

## Progression #1: 
- Go to app-service.ts.
- Create an Interface called StringManipulationService and don't forget to export it.
- Define the following methods inside the StringManipulationService,
    - arrayFindMultiples(myArray : any) : Array<Number>;
    - arraySeparate(myArray : any) : Array<string>;
    - arraySplit(myString : string) : Array<number>;
    - arraySort(myArray : any) : Array<string>;
    - arrayReplace(myArray : any) : Array<Number>;

## PROGRESSION #2: 
- Go to main.ts.
- Create a class called as ArrayManipulations which should implement the StringManipulationService.
- Your class should implement all the 5 methods.
- arrayFindMultiples(myArray : any) : Array<Number> method is used to find the multiples of 5 and 10 in the given array.
- arraySeparate(myArray : any) : Array<string> method is used to find the string values in the mixed array and return them.
- arraySplit(myString : string) : Array<number> method is used to find the prime number in the mixed array. First identify the numbers in the array, typecast it and check whether the number is a prime number or not.
- arraySort(myArray : any) : Array<string> method is used to sort the given array of strings.
- arrayReplace(myArray : any) : Array<Number> method is to used to find the numbers which are divisible by 3 and replace it with 5.    

Happy Coding ProGrad ❤️
