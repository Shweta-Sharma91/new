

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
 
	
