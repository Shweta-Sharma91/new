/* a man has a basket that contains five different kinds of fruits which are mango,apple, 
banana, orange and kiwi . a man wants a software  that will tell him that the fruit is exist in basket or not.
*/
var basket=["mango","apple","banana","orange","kiwi"];
var fruit_name ="mango";
var index=basket.indexOf(fruit_name);

if(index==-1)
{ 
	console.log("not exist")
}
else if(index>=-1)
{
	console.log("exist")
}	
