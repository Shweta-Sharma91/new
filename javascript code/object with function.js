var laptop={ 
name:"dell",
color:"white",
ram:"8Gb"
};
var laptop_compare=(laptop_object,laptop_name) =>
{
	if(laptop_object.name!==laptop_name)
	{
	laptop_object.name=laptop_name
	return false;
	} 
	return true;
} 
console.log(laptop_compare(laptop,"apple"))
