/*Question 42: Great Magicians: Add "the Great" to magician names.
Explain & TIP: Modifying array contents within a function demonstrates how functions can change data.
This shows the impact of passing arrays by reference.*/

let magicians: string[] = ["Magician 1", "Magician 2", "Magician 3"];
function show_magicians(magicians: string[]) {
  magicians.forEach(magician => {
    console.log(magician);
  });
}
function make_great(magicians: String[]){
    for(let i = 0; i< magicians.length; i++){
        magicians[i]= magicians[i] + ` the great`;
    }
}
make_great(magicians);
show_magicians(magicians);