let leastFavouriteBook = "Crayon Sinchan";
leastFavouriteBook = "Kata"

const favouriteBook = "Laskar Pelangi";
// favouriteBook = "Crayon Sinchan"

// dynamic types
let bookPrice;
bookPrice = "Seratus Ribu";
bookPrice = 75000;

// boolean
let apakahBagus = true;

// array
const books = [favouriteBook, " Crayon Sinchan", leastFavouriteBook]

// object
const person = {
    firstName : "Andikha",
    lastName : "Putra",
    age : 23
};

// concat
let hasil = "Halo, nama saya " + person.firstName + ", umur saya " + person.age + " tahun." +  
" Saya pernah membaca buku " + books + ". Buku favorit saya adalah " + favouriteBook + 
" dengan harga Rp " + bookPrice + " dan buku lainnya adalah " + leastFavouriteBook + 
" dengan harga Rp " + bookPrice + " " + apakahBagus;

console.log(hasil);