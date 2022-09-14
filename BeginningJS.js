// console.log("hello world, from the console!");

// console.log(firstName);

// 	var firstName = "Kelly";
// 	var birthdayMonth = 11;
// 	var isDeveloper = true;

//---------------------------------------------

// var currentMonth = 4;
// var currentDate = 23;
// var happyLevel = 9.4456;

// console.log(currentMonth,currentDate,happyLevel);

//---------------------------------------------

// var firstName = "Kelly";
// var middleName = "Amanda";
// var lastName = "Hauer";

// var fullName = firstName + " " + middleName + " " +lastName;

// console.log(fullName);

//----------------------------------------------

// var cake = "I like cake";
// var pops = "pops";

// console.log(cake);

// cake += " " + pops;

// console.log(cake);

//---------------------------------------------

// function logName() {
// 		console.log("Kelly Hauer");
// }

// logName();

// logName();

//----------------------------------------------

// function myBirthday(x, y, z) {
// 	return(month + " " + day + " " + year);
// }

// var month = 11;
// var day = 7;
// var year = 2000;

// var getBirthday = myBirthday(month, day, year);

// console.log(getBirthday);

//-----------------------------------------------

// function whatIsAwesome() {
//     var chapter = "Minneapolis";
//     return awesomeGroup + " " + chapter;
// }

// console.log(whatIsAwesome);

//---------------------------------------------


// var age = 13


// if (age < 1) {
//     console.log("infant")
// }
// else if (age > 1) {
//     console.log("toddler")
// }
// else if (age > 3) {
//     console.log("child")
// }
// else if (age > 11) {
//     console.log("preteen")
// }
// else if (age > 12) {
//     console.log("teenager")
// }
// else if (age > 18) {
//     console.log("adult")
// }


//------------------------------------------------


// var bottleCount = 99;

// while (bottleCount >= 1) {

//     var message = "Take one down, and pass it around. " + bottleCount + " bottle";

//     if (bottleCount != 1) {
//         message += "s"
//     }

//     message += " of beer on the wall!";
//     console.log(message);

//     bottleCount--;
// }

//------------------------------------------------

// var lyrics = "";

// for (var i = 1; i <= 7; i++) {

//     lyrics += i;

//     if (i != 4) {
//         lyrics += " potato"
//     }

//     lyrics += ", ";

//     if (i === 7) {
//         lyrics += "more!";
//     }
// }

// --------------------------------------------------

// for (var i = 1; i <= 12; i++) {

// 	var result = 9 * i;

// 	console.log("9 x " + i + " =" + result);

// }


// OR

// for (var i = 1; i <= 12; i++) {
//
// 	console.log("9 x " + i + " =" + (9 * i));

// }

// for (var i = 1; i <= 12; i++) {
//
// 	for (var j = 1; j <= 12; j++) {
//
//   console.log(i + " x " + j + " = " + (i * j));
//
//   }
//
// <!-- 	console.log("1 x " + i + " = " + (i * 1)); -->
//
// }

//--------------------------------------------------------

// var fruits =["orange", "grapefruit", "apple"];
// //display the first item
// console.log(0);
// //add another item
// fruits.push("banana");
// //loop through all items and log each of them
// for (var i = o; i < fruits.length; i++) {
// 	console.log(fruits[i]);
// }
//
// ----------------------------------------------------------

// var person = {
// 	"firstName" : "Kelly",
// 	"lastName" : "Hauer",
// 	"eyeColor" : "hazel",
// 	"profession" : "Developer",
// 	"jsLove" : "9.5",
// 	"hobbies" : ["coding", "movies", "books", "yoga"]
// };
//
// function getAboutMe() {
// 	return person.firstName + " " + person.lastName + " " + person.profession + " " + person.jsLove + " " + person.hobbies;
// }
//
// console.log(getAboutMe());
//
// ----------------------------------------------------------

// var people = [
// 	{
// 		"firstName" : "Kelly",
// 		"lastName" : "Hauer"
// 	},
// 	{
// 		"firstName" : "Donald",
// 		"lastName" : "Duck"
// 	}
// ];
//
// function getFullName(person){
// 	return person["firstName"] + " " + person["lastName"];
// }
//  console.log(getFullName(people[0]));
//
//  people[0]["lastName"] = "Duck";
//
//  console.log(getFullName(people[0]));
// --------------------------------------------------------------

// var recipe = {
// 	"name" : "Banana Bread",
// 	"prepTime" : "20 min",
// 	"ingredients" : [
// 		{"ingredient": "bananas", "amount": "three"},
// 		{"ingredient": "flour", "amount": "2 cups"},
// 		{"ingredient": "baking soda", "amount": "1 tbl"},
// 		{"ingredient": "eggs", "amount": "two"},
// 		{"ingredient": "salt", "amount": "1 tsp"}
// 	],
// 	"listIngredients": function(allIngredients){
// 		var output = "";
// 		for (var i = 0; i < this.ingredients.length; i++){
// 			var ingredients = this.ingredients[i];
// 			output += ingredients.ingredient;
// 			if(allIngredients){
// 					output += " " + ingredients.amount;
// 			}
// 		}
// 		output += " | ";
// 	}
// 	console.log(output);
// }
// };
//
// recipe.listIngredients(true);
// -----------------------------------------------------------------

// var contentElement = document.getElementById("content");
// console.log(contentElement.innerHTML);
//---------------------------------------------------------------

// var contentElement = document.getElementsByClassName("girlDevelopIt");
//
// for (var i = 0; i < contentElement.length; i++){
//     console.log(contentElement[i].innerHTML);
// }

//--------------------------------------------------------------

// document.getElementById("content").style.fontSize = "xx-large";
// document.getElementById("content").style.color = "#00FFFF";
//--------------------------------------------------------------

document.getElementById("girlDevelopIt").addEventListener("click", function(){
	document.getElementById("girlDevelopIt").style.color = "red";
})
