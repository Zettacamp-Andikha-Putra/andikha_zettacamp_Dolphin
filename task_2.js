let leastFavouriteBook = "Crayon Sinchan";
leastFavouriteBook = "Kata";

let leastFavouriteBookPrice = 200000;

const favouriteBook = "Laskar Pelangi";

let favouriteBookPrice = 300000;

// price comparison
if (favouriteBookPrice > leastFavouriteBookPrice){
    console.log(favouriteBook + " memiliki harga lebih tinggi");
} else if (favouriteBookPrice < leastFavouriteBookPrice){
    console.log(leastFavouriteBook + " memiliki harga lebih tinggi");
} else{
    console.log(favouriteBook + " dan " + leastFavouriteBook + " memiliki harga yang sama");
}


// average
let averagePrice = (favouriteBookPrice + leastFavouriteBookPrice) / 2;
console.log("Average Price = " + averagePrice);


// ternary
let setPrice = 500000;
let determinePrice = averagePrice <= setPrice ? "Cheap" : "Expensive";

console.log(determinePrice);