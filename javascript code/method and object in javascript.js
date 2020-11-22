var laptop={
	name:"apple",
	color:"red",
	ram:"8Gb",
	get_laptop_info: function(){
	return `${this.name} is the name of laptop \n ${this.color} is the color of laptop \n${this.ram} is the ram of laptop`
	}
}
console.log(laptop.get_laptop_info())