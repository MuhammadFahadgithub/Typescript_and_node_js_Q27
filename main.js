//  27. Alien colors_3: Turn your if_else chain previous exersise:
// If the alien is green, print a message that the player earned 5 points.
// If the alien is yellow, print a message that the player earned 10 points.
// If the alien is red, print a message that the player earned 15 points.
// Write three versiion of this program, making sure each message is 
// printed for the approprate color allien.5
// Version 1 of the program
var allienColors = 'green';
if (allienColors === 'green') {
    console.log("Version 1; player earned 5 points.");
}
else if (allienColors === 'yellow') {
    console.log("player earned 10 points.");
}
else if (allienColors === 'red') {
    console.log("player earned 15 points.");
}
else {
    console.log("please select right color");
}
// Version 2 of the program
allienColors = "yellow";
if (allienColors === 'green') {
    console.log("player earned 5 points.");
}
else if (allienColors === 'yellow') {
    console.log("Version 2; player earned 10 points.");
}
else if (allienColors === 'red') {
    console.log("player earned 15 points.");
}
else {
    console.log("please select right color");
}
// Version 3 of the program
allienColors = "red";
if (allienColors === 'green') {
    console.log("player earned 5 points.");
}
else if (allienColors === 'yellow') {
    console.log("player earned 10 points.");
}
else if (allienColors === 'red') {
    console.log("Version 3; player earned 15 points.");
}
else {
    console.log("please select right color");
}
