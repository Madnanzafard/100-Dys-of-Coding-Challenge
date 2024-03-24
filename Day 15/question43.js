/*Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.
Explain & TIP: Creating a copy of an array before modifying it allows you to maintain the original data.
 This exercise demonstrates array copying and manipulation.*/
var magicians = ["magician1", "magician2", "magician3"];
function make_great(magicians) {
    var greatMagicians = [];
    magicians.forEach(function (magician) {
        greatMagicians.push("".concat(magician, " the Great"));
    });
    return greatMagicians;
}
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
var greatMagicians = make_great(magicians.slice()); // Creates a new modified array
console.log("Original magicians:");
show_magicians(magicians); // Shows original names
console.log("Great magicians:");
show_magicians(greatMagicians); // Shows modified names
