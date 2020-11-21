# session 1  summary
-git - is a vcs (version control system)
version controle system - is a system that records changes to a file or 
set of files over time so that you can recall specific version later.
- git has total six stages
1 working directory
2 staging
3 repository
4 remote
# day 2 
- git cammands
- git init - create an empty git repository
- git add . - add file content to the index
- git status - show the working tree status
- git commit - Record changes to tha repository
 ```syntax 
 - git commit -m	"message or intial message"
 ``` 
 - git push - update remote refs along with associated objects
  ```syntax 
 git push -u origin main
 ```
- readme clone - Clone a repository into a new directory.
```syntax
git clone url
```
- git branch-list,create or delete branches
``` syntax
git branch-M main
```
- git pull- fetch from snd integrates with another repository or local branch.
```syntax
git pull
```
- #h1, #h2,#h3,#h4 ... are used for header formatting
- README.md- It cantains information about other files in a directory or archive of computer software.

- md stands for markdown
 
## Day 3
# Node.js
 Node.js is an open-source ,back-end javascript run time envirment that execute
 javascript code outside a web browsers.it used compiler .
 it is a package manager  i.e help to download all software.
- node.js files have extension".js".
# how to run a program on node.js .
- first install node.js
- create a node.js file & add some code in it.
 save the file in the computer :c\user\your name\file name.js
- After saving the code on your computer . open the command prompt,
 because node.js used command prompt for run the code.
 here write write node filename and press enter.
# JAVASCRIPT
- What is javascript
 JAVASCRIPT is a programming lang. which is designed to interact with elements of web pages .
--javascript can run both on web browsers and servers.
- node.js is server side enviroment for javascript.
- Datatypes in javascript.
 there are 6 main data type in javascript i.e.
- var. 
- let
- cosnt
- local
- global
- count 
# Define variable
 variable it gives the liability to chnage the value in the code. .
 constant but in constant once you declare the value you can't change the value in the code .
# operators 
- assignment operators - assign the value to a variable
 ```
 syntax
 =
 ```
 ```
 Example
var x=5; // assig the value 5 to x
```
- Adding - used to add numbers
```
syntax
+
```
```
Example
var x=10;
var y=20;
var z=x+y;
```
- Multiplication - used to multiplies numbers.
```
syntax
*
```
```
Example
var x =10;
var y =20;
var z= x*y;
```
- Division - used for divied the numbers.
```
syntax 
/
```
- Modulus - used for dvision remainder.
```
syntax
%
```
- increment - used for increase number by 1
```
syntax
++
```
- Decrement - used for decrease number by 1
```
 syntax	
--
```
# comparison operators
- == used for equal to 
- === equal value and equal type.
- != not equal 
- > greater than
- < less than
- >= greater then equal to
- <= less than equal to
# Logical operators
- && and operator
- // or operator
- ! not operator.
# Array
- Array are used to store multiple values in a single varriable.
or Array is the collection of multiple numbers or elements.
- It can hold the more than one value at a time.
```
syntax
var array_name=[a,b,c...nth];
```
```
Example
var name =["shweta","anu","priya"]
console.log(name)
```
This example show the result 
```
 shweta ,anu,priya
 ```
- Accessing the Element of an Array
you can also access the element of array by refering the index number.
```
Example
var animals = ['cat','dog','cow']
console.log(animals[2])
```
The result is 
```
cow
```
```
Note 
index of array start from 0,1,2...nth
```
accessing the first Array elemnt
```
Example
var animals = ['cat','dog','cow']
console.log(animals[0])
```
The result is 
```
cat
```
Accessing the last Array elemnt
```
Example
var animals = ['cat','dog','cow']
console.log(animals.[animals-1])
```
The result is 
```
cow
```
- Length of array
you can also find the length of array by using command which is given below
```
 console.log(array.length)
 ```
```
Example
var animals = ['cat','dog','cow']
console.log(animals.length)
```
result is 
```
3
```
- Array slicing
the slice() method returs the selected elements in an array,as a new array object.
```
syntax
array.slice(start,end)
```
- Adding a array
The push() method is used for add an element in array list.
```	
syntax
array.push()
```
## conditionals statement
- The if Statement
The if statement to specify a block of code to be execute if a condition is true.
```
syntax
if(condition)
{
 block of code
}
```
- The else Statement
the else statement to specify a block of code to be execute if the condition is false.
```
Syntax
if(condition)
{
block true
}
else
{
block false
}
```
- The else if statement
The esle if statement is used when it specify a new condition if the first condition is false.  
```
syntax
if(condition1)
{
block one true
}
else if(condition2)
{
block 2nd if condition one is false and condition 2 is true
}
else
{
block 3 when both condition 1 and 2nd is false
}
``` 
## Day 4
# practice of array with conditionals statement
use of else if statement with array
```
 var array_of_male_18_plus=[]
var array_of_female_18_plus=[]
var array_of_male_18_less=[]
var array_of_female_18_less=[]
var age=15
var gender="female"
var name="Amisha"
if(age>=18)
{ if(gender=="male")
	{ array_of_male_18_plus.push(name)
	}else if(gender=="female")
	{ array_of_female_18_plus.push(name)
}
}
else if(age<=18&&age>0)
{ if(gender=="female")
	{ array_of_female_18_less.push(name)
	}else if(gender=="male")
	{array_of_male_18_less.push(name)
	}
}
console.log("array_of_male_18_plus: "+ array_of_male_18_plus)
console.log("array_of_female_18_plus: "+ array_of_female_18_plus)
console.log("array_of_female_18_less: "+ array_of_female_18_less)
console.log("array_of_male_18_less: "+ array_of_male_18_less)
```
# conditionals statement question 2
use of else if & nested if statement
```
var element_of_array =[1,2,3,4,6,5];
var lenght_of_array=element_of_array.length;
var random_number=6;
if ( lenght_of_array>15)
{
	console.log("first four number is: "+element_of_array.slice(0,4))
}

else if(lenght_of_array>10&&lenght_of_array<15)
 {
	if(element_of_array[lenght_of_array-1]%2==0)
	{
		element_of_array[0]=element_of_array[lenght_of_array-1]+1
		console.log("print first element of array: "+element_of_array[0])
	}
	if(element_of_array[lenght_of_array-1]%2!=0)
	{
		element_of_array[0]=element_of_array[lenght_of_array-1]
		console.log("replace last element with first: "+element_of_array[0])
	}
 }
else if(lenght_of_array<10)
{
	var index=element_of_array.indexOf(random_number)
	if(index== -1)
	{

			element_of_array.push(random_number)
	}
	else
	{ console.log(element_of_array[index])
	}
}
 ```
 
 ## Looping in javascript
 There are thre types of loop :
 - for loop
 - while loop
 - do while loop
 # for loop
 It includes three important parts-
 - intialization :- in this part we intialize the value.
 - test statement :- this part check that the condition is true or false , if true then execute
   otherwise will come out of the loop
 - iteration statement :- in this part increment/decrement is done
 ```
 Syntax
 for(intialization; test condition; iteration statement)
 {
 
 }
 ```
Example
```
/* print 0 to 100 numbers */
for(let i =0; i<=100;i++)
{
console.log(i)
}
```
# While loop

 
 # Functions
 function is a block of code designed to perform a particular task.These fuction are executeed when we call it .
- function keyword is used for declaring functions
- we can also pass parameter in function
 ```
 syntax
 - type one
 function functionName(parameters){
 code to v executed
 return ;
 }
 ```
 ```
 syntax
 - type 2 
 function var x = (parameter){
 code to be executed
 return ;
 }
 ```
 ```
 syntax
 - type 3
 function var x = (parameter) =>{
 block of code
 return ;
 }
 ```
 ```
 Example
 
/*create a function that acepts an array of fruit and the name of the fruit which is needed to be searched ,
check the required fruit is exist in the array or not . 
if it exist than return exist string otherwise return not existed.*/

var fruits = ["apple" , "mango" ,"banana" ,"kiwi"]
var fruit_finder = (Array_of_fruit ,fruit) =>
{
	for(let i=0 ;i<Array_of_fruit.length;i++)
	{
		if(array[i]=== fruit)
		{
			return "exist"
		}
			else if(array[i]!==fruit && i===Array_of_fruit.length-1)
			{
				return "not exist"
			}
	}
	
	
}
 console.log(fruit_finder(fruits , "kiwi"))
 ```
 ```
 Example 2
 /*create a function that acepts an array of fruit and the name of the fruit which is needed to be searched ,
check the required fruit is exist in the array or not . 
if it exist than return exist string otherwise return not existed.*/

var fruit_finder = (Array_of_fruit , fruit_name) =>{
	var index = Array_of_fruit.indexOf(fruit_name) 
	if(index==-1)
	{
		return "not exixt"
	}
	else
	{
		return "exist"
	}
}	
console.log(fruit_finder(["apple","mango","kiwi","orange","banana"] ,"mango"))
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 