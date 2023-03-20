
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