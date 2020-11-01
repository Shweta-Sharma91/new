var array_of_elements=[1,2,3,4,5,6,7,8,9]
var array_lenght=array_of_elements.length
if(array_lenght<=10&&array_lenght>=5)
{ if(array_of_elements[array_lenght-1]%2==0)
	{console.log("array_of_elements: "+array_of_elements.slice(0,5))
}else if(array_of_elements[array_lenght-1]%2!=0)

{console.log("array_of_elements: "+array_of_elements.slice(0,3))
}
}
else if(array_lenght<5&&array_lenght>0)
{console.log("element: "+array_of_elements[0])

}else if(array_lenght>10)
{
	array_of_elements.push(array_of_elements[4])
array_of_elements.push(array_of_elements[7])
	console.log("element "+array_of_elements.slice(array_lenght-5,array_lenght))
}

