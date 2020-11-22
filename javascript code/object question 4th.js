var home ={
	Total_rooms:5,
	bed_rooms:3,
	master_bed_rooms:2,
	wahsrooms:6,
	garden:"yes",
	kitchen:1,
	garage:2,
	porch:"yes",
	color:"cream",
	new_master_room:[],
	new_bed_room:[],
	new_master_bed_room:[],
	new_washroom:[],
	new_garden:[],
	new_kitchen:[],
	new_porch:[],
	new_color:[],
	set_garden:function(garden){
		this.new_garden.push(garden)
	},
	get_new_garden:function(){
		return ` ${this.Total_rooms} in the home \n ${this.new_garden.length}`
	},
	set_washroom:function(washroom){
		this.new_washroom.push(washroom)
	},
	get_new_washroom:function(){
		return ` ${this.Total_rooms} in the home \n ${this.new_washroom_room.length}`
	},
	set_master_bed_room:function(room){
		this.new_master_bed_room.push(room)
	},
	get_new_master_bed_room:function(){
		return ` ${this.Total_rooms} in the home \n ${this.new_master_bed_room_room.length}`
	},	
		set_bed_room:function(room){
		this.new_bed_room.push(room)
	},
	get_new_bed_room:function(){
		return ` ${this.Total_rooms} in the home \n ${this.new_bed_room_room.length}`
	},
	set_new_master_room:function(room){
		this.new_master_room.push(room)
	},
	get_new_master_room:function(){
		return ` ${this.Total_rooms} in the home \n ${this.new_master_room.length}`
	},
	get_home_info: function(){
	return ` ${this.Total_rooms} in the home \n ${this.bed_rooms} in the home \n ${this.master_bed_rooms} in the home \n ${this.wahsrooms} in the home\n ${this.garden} available \n ${this.kitchen} in the home \n ${this.color} is the color of home\n ${this.porch} available \n ${this.garage} available`
	}
	}
console.log(home.get_new_garden())
console.log(home.get_home_info())
	