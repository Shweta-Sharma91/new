var tv={
	available_channel:10,
	color:"black",
	resolution:1080,
	subscribed_channel:[],
	set_subscribed_channel: function(channel)
	{
		this.subscribed_channel.push(channel)
	},
	get_subscribed_channel:function(){
		return ` ${this.available_channel} are available channels \n ${this.subscribed_channel.length}` 
	},
	get_tv_info: function(){
	return ` ${this.available_channel} are total channels \n ${this.color} is the color of tv \n ${this.resolution} \n ${this.subscribed_channel} are the subscribed_channel`
	}
}
console.log(tv.get_tv_info())
console.log(tv.get_subscribed_channel())
console.log(tv.set_subscribed_channel("zee tv"))
console.log(tv.subscribed_channel.length)
