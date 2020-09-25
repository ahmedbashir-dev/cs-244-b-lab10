var firstName = "Usman";
var lastName = "Ali";
var fullName = firstName + " " + lastName;

//Mathematical Operators
var num1 = 10.6;
var num2 = 20;
var sum = num1 + num2;
var diff = num1 - num2;
var product = num1 * num2;
var div = num1 / num2;
var rem = num1 % num2;
console.log("Sum = " + sum);
console.log("Difference = " + diff);
console.log("Product = " + product);
console.log("Division = " + div);
console.log("Remainder = " + rem);

// var username = prompt("Enter Username: ");
// console.log(username);







var heading = document.getElementById('heading');
var changeColorButton = document.getElementById('changeColorBtn');

// var h1 = document.createElement("h1");
// h1.innerHTML = "This is a dynamically generated heading";
// var divCol = document.getElementsByClassName("col-sm-6")[0];
// divCol.appendChild(h1);



//functions
// function functionName(parameters){
//     //function body
// }

function greetUser(name){
    alert("Hello! Welcome to our page, dear " + name);
}


var colorInput = document.getElementById('color');

changeColorButton.addEventListener('click',function(){
    heading.style.color = colorInput.value;
    divCol.style.backgroundColor = colorInput.value;
});

var listItems = document.getElementsByTagName('li');

for(var i = 0; i < listItems.length; ++i){
    listItems[i].addEventListener('click', function(){
        // console.log(listItems[i]);
    });
}












