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