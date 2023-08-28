let book = {
    title : "Kata",
    writer : "Rintik Sedu",
    price : 60000
};


function bookPurchase (bookDetails, discountPercentage, taxPercentage, amountStock, amountPurchasedBook, creditDuration){

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

    const creditPrice = priceAfterTax / creditDuration;

    const creditDate = 28;
    const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthStart = 8;

    const monthValue = [];

    for (let i = 0; i<creditDuration; i++) {
    const countMonth = (i+monthStart)%12;
    monthName[countMonth];
    const countYear = 2023+Math.floor((monthStart+i)/12);
    monthValue.push(' ' + creditDate + ' ' + monthName[countMonth] + ' ' + countYear);
    }

    console.log("\nCredit Price = Rp" + creditPrice);
    console.log("Payment Date =" + monthValue);
}

bookPurchase(book, 50, 10, 5, 4, 5);