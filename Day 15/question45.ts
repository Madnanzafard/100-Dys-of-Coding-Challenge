/*Question 45: Cars: Create detailed car objects with flexible properties.
Explain & TIP: Functions accepting a mix of fixed and arbitrary parameters let
 you create detailed and flexible objects.
This is ideal for data with a few required fields and many optional fields.*/

function make_car(manufacturer: string, model: string, ...options:[string,any][]) {
    let car = { manufacturer, model};
    options.forEach(([key,value])=>
        car[key] = value);
        return car;
    }
console.log(make_car("Suzuki", "Civic", ["color", "black"], ["year", 2024]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));

