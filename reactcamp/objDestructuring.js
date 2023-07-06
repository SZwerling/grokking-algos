const hotel = {
    id: 0,
    city: "Honolulu",
    name: "Hotel Honolulu"
};

const {id, city, name1} = hotel
//variable names must be same as property value names


//destructuring object in a function

function greeting({id, city, name}){
    console.log(`Hello from the hotel ${name} with id ${id} in the city of ${city}`)
}

console.log(greeting(hotel))