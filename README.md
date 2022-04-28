# IntroductoryProgramAltimetrik :smiley:
Hello there!:wave: :wave: Welcome to my Github repository. My name is Ariadna Ferreira, I'm 23 years old, student of Informatic Engineering.
Recently, I have started a bootcamp of front end development with Altimetrick | 2nd edition, I'm thrilled with this opportunity. I will be posting here all my documents, material and progress. I hope this helps someone in the future, so feel free to use any information you need from here! 
Good Luck :)

For a detailed information on every topic, please visit My Documentation: [Ariadna Ferreira | BAFEDA 2nd edition.](https://docs.google.com/document/d/1ZryFCgftlsIX_5totunmEqqRSNZ_iNu28rxVZfv8q6s/edit?usp=sharing)

# WEEK NUMBER ONE
## Javascript
Javascript is basically a high-level interpreted programming language used to make web pages more interactive. Have you ever thought that your website is missing something?
Maybe it's not engaging enough or it's not as creative as you want it to be. Now Javascript is that missing piece which can be used to enhance web pages, applications etc. to provide a more user-friendly experience. Javascript is the language of the web, it is used to make the web look alive by adding motion to it. 

## HOW TO USE JAVASCRIPT ON YOUR WEBSITE PROJECT?
There are 2 main methods: **INTERNAL JAVASCRIPT** and **EXTERNAL JAVASCRIPT**
  
  1.Basically, when the script codes are presented in the same HTML file of it witch be used, we say that it is an **Internal Javascript** . 
  
  ```html
<!-- index.html -->
<!DOCTYPE html>
<html>
  <head>
    <title>Javascript Syntax and Basic Constructs</title>
  </head>
  <body>
    <h1>FIRST CARD OF JAVASCRIPT</h1>

    <!-- Javascript area -->
    <script>
      console.log('Hey, Javascript!!');
    </script>
  </body>
</html>
```

GLOSSARY OF FUNCTIONS:
`console.log( 'EXAMPLE' )` : Is used to print any kind of variables defined before in it or to just print any message that needs to be displayed to the user.

  2.Whenever the script codes are placed in another file and are simply referenced in the HTML, we can say that it is an **External Javascript**
 
  ```js
  // script.js
console.log('Hey, Javascript!!');
```
In our `index.html`, we could simply replace the Javascript area with `<script src='script.js'></script>.` The `src` attribute means source which contains the location of the javascript file we are trying to reference.

## Syntax and Basic Constructs
 1. Every statement should end with a semicolon `;`
 2. Comments: for single line use `//` and for multiline use `/* content */`
 3. Variables: These are like containers used for saving values. Instead of repeating a value for different uses, you could just assign it to a variable. The `var` keyword is used for this.
 4. Operators: They can be Arithmetic operators, such as, +, - , =, * etc. And also Assignment Operators, those are used to assign values to variables. They include `=`, `/=`, `*=`,` %=`, `-=`, `+=`.
 
 ## Data Types
 This can be divided in 2 types, the non-modifiable or immutable, named **Primitive Data Types** and the modifiable or mutable, named **Non-Primitive Data Types** .
