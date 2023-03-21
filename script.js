
var surname = "Lebron";
var surname = "Lebronie";
console.log(surname)

const color = "Green";
console.log(color);

let soup = "Chicken";
  soup = "Miso";
 console.log(soup);
// cant update const variables but able to use array methods.
 const newPresent = ["Jeans"];
 const wardrobe = ["Shirts", "Socks"];
 wardrobe.push(newPresent);
 console.log(wardrobe);

const myClothes = {
    tShirts: 2,
    slacks: 1,
}
myClothes.slacks++;
console.log(myClothes)

dob = 2002;
var dob = 2001;
console.log(dob);

// the const variable below cannot be accessed in global scope
function displayMessage() {
    const variable = "This variable cannot be accessed outside of this scope";
    console.log(variable);
}
 displayMessage();

 // Whereas the let variable can be accessed by local scope in global scope source
let cityToVisit = ["Tokyo", "Paris"];
function showTravel() {
    console.log("Next year, travel to " + cityToVisit);
}
showTravel();
console.log(cityToVisit);

if (10 === 10) {
    console.log("This space is called block scope");
}

const drivingAge = 18;
let canDrive = false;
if (drivingAge >= 18) {
    let canDrive = true;
    console.log(canDrive);
}
console.log(canDrive);

for (let index = 0; index < 4; index++) {
    console.log(index);
}

//if a var variabkle is declared inside a block scope you can still access in global scope
if ( 2 === 2) {
    var result = "Numbers match";
}
console.log(result)

// whereas you cannot access a const variable declared in local scope in global scope
function fixHouse() {
    const fix = "Fix mirror";
}

const study = false;
if (study) {
    let study = "Well done for studying";
    console.log(study);
}else {
    let study = "Why aren't you studying?";
    console.log(study);
}
console.log(study)

function playMusic() {
    const artists = ["AC Slater", "Billy Kenny", "Fisher"];
    if (artists && artists.length) {
        const availableArtists = "Artists are available";
        console.log(availableArtists);
    }
}
playMusic();

function getGreeting() {
    return "Hey there i am a normal function";
}
const greeting = () => "Hello from an arrow function";
console.log(getGreeting());
console.log(greeting())

function getMonth(month) {
    return "The month is " + month;
}
const month = (month) => {
return "The month is " + month;
}   
console.log(getMonth("March"));
console.log(month("April"));

const hello = function myFunction() {
    return "Greetings from my function";
}
const helloArrowFunction = () =>{
return "Awe from an arrow function";
}
console.log(hello());
console.log(helloArrowFunction());

const getPrice = (price, discount) => price - (discount * price);
console.log(getPrice(500, 0.25));

const showPrice = total => {
    const discount = 0.10;
    return total - (discount * total);
}
console.log(showPrice(100))

const getDefaultPrice = (price=100, discount=0.10) => {
return price - (discount * price);
} 
console.log(getDefaultPrice());

const getSquare = (number=0) => number * number;
console.log(getSquare());

const getArea = (length=0,width=0) => length * width;
console.log(getArea(5, 8))

const fullName = "Joe Biden";
console.log("Hello " + fullName + "!");
console.log(`Hello ${fullName}!`);

const category = `pie`;
const cake = `Apple${category}`;
console.log(cake);

const quantity = 10;
const price = 7;
const cost = `Total cost: ${quantity * price}`;
console.log(cost);

// ok below string literal is a bit confusing when calling it with a function
const stringLiteralGreeting = name=> {
    return `Bonjour ${name}`;
}
console.log(stringLiteralGreeting`Michael`);

let oldMovie = `Fast 1`;
let latestMovie = `2 fast`;
let nowShowing = `${oldMovie}, ${latestMovie}`;
console.log(nowShowing);

let ticketPrice= 200;
let pax = 3;
let ticketTotal = `Coachella Ticket Total Price: ${ticketPrice * pax}`
console.log(ticketTotal)

const likedBy = (user) => {
    return `Liked by ${user}`;
}
console.log(likedBy`Dax`);



