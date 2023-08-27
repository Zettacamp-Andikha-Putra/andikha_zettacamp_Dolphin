let book = {
    title : "Kata",
    writer : "Rintik Sedu",
    price : 60000
};


function bookPurchase (bookDetails, discountPercentage, taxPercentage, amountStock, amountPurchasedBook){

    const bookPurchasedPrice = bookDetails.price * amountPurchasedBook;

    const amountDiscount = bookPurchasedPrice * (discountPercentage / 100);
    const afterDiscount = bookPurchasedPrice - amountDiscount;

    const amountTax = afterDiscount * (taxPercentage / 100);
    const priceAfterTax = afterDiscount + amountTax;

    const priceCheap = priceAfterTax < 100000;

    const sisaBuku = amountStock - amountPurchasedBook;

    let bookShopping = (`
    Judul Buku = ${book.title}
    Jumlah Buku Dibeli = ${amountPurchasedBook}
    Harga Buku = ${book.price}
    Total Harga Buku = ${bookPurchasedPrice}

    Diskon = ${amountDiscount}
    Harga Setelah Diskon = ${afterDiscount}
    
    Tax = ${amountTax}
    Total Harga = ${priceAfterTax}

    Is It Cheap? = ${priceCheap}
    `)

    for (i=0; i<amountStock; i++){
        if (sisaBuku < 0){
            console.log("Permintaan Tidak Tersedia");
            break;
        } else if (sisaBuku == 0){
            console.log("Sisa Buku Tersedia = " + sisaBuku);
            break;
            console.log(bookShopping);
        } else {
            console.log(bookShopping);
            console.log("Sisa Buku Tersedia = " + sisaBuku);
            break;
        }
    }
}

bookPurchase(book, 50, 10, 5, 4);