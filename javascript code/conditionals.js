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
