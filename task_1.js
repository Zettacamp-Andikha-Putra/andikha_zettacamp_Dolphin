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

    console.log("Judul Buku = " +book.title);
    console.log("Harga Buku = " + book.price);
    console.log("Jumlah Buku Dibeli = " + amountPurchasedBook);
    console.log("Total Harga Buku = " + bookPurchasedPrice);
    console.log("------------------------------");
    console.log("Diskon = " + amountDiscount);
    console.log("Harga Setelah Diskon = " + afterDiscount);
    console.log("------------------------------");
    console.log("Tax = " + amountTax);
    console.log("Total Harga = " + priceAfterTax);
    console.log("------------------------------");
    console.log("Is It Cheap? = " + priceCheap);
    console.log("------------------------------");


    // let bookShopping = (`
    // Judul Buku = ${book.title}
    // Jumlah Buku Dibeli = ${amountPurchasedBook}
    // Harga Buku = ${book.price}
    // Total Harga Buku = ${bookPurchasedPrice}
    // ------------------------------
    // Diskon = ${amountDiscount}
    // Harga Setelah Diskon = ${afterDiscount}
    // ------------------------------
    // Tax = ${amountTax}
    // Total Harga = ${priceAfterTax}
    // ------------------------------
    // Is It Cheap? = ${priceCheap}
    // ------------------------------
    // `)

    const sisaBuku = amountStock - amountPurchasedBook;

    // console.log("------------------------------");
    for (i=0; i<amountStock; i++){
        if (sisaBuku > 0){
            console.log("Sisa Buku Tersedia = " + sisaBuku);
            break;
        } else if (sisaBuku <= 0){
            console.log("Permintaan Tidak Tersedia");
            break;
            // console.log(bookShopping);
        }
    }

    console.log("------------------------------");
    const creditPrice = priceAfterTax / creditDuration;

    const creditDate = 28;
    const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthStart = 8;

    const monthValue = [];

    for (let i = 0; i<creditDuration; i++) {
    const countMonth = (i+monthStart)%12;
    monthName[countMonth];
    const countYear = 2023+Math.floor((monthStart+i)/12);
    monthValue.push({'dueDate' : creditDate + ' ' + monthName[countMonth] + ' ' + countYear, 'Credit Price' : creditPrice});
    }
    
    console.log("\nCredit.....");
    console.log("Total Price = Rp" + priceAfterTax);
    console.log("Credit Duration = " + creditDuration + " Month");
    console.log("Credit Price/Month = Rp" + creditPrice);
    console.log(monthValue);

    // monthValue.forEach((value, index) => {
    // const key = `Due Date Month${index + 1}`;
    // creditValueObj[key] = value;
    // });
    
    // creditValueObj.dueDate.push(monthValue)

    
    // creditValueObj.amountCreditPrice.push('Rp' + creditPrice)

    //console.log(creditValueObj);

    console.log("----------------------------------------------------------");
}

bookPurchase(book, 50, 10, 5, 3, 5);