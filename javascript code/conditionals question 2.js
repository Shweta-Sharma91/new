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
 
 