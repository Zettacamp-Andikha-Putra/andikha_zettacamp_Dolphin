let book = {
    title : "Kata",
    writer : "Rintik Sedu",
    price : 60000
};

bookPurchase(book, 50, 100);

function bookPurchase (bookDetails, discountPercentage, taxPercentage){

    const amountDiscount = bookDetails.price * (discountPercentage / 100);
    const afterDiscount = bookDetails.price - amountDiscount;

    const amountTax = afterDiscount * (taxPercentage / 100);
    const priceAfterTax = afterDiscount + amountTax;

    const priceCheap = priceAfterTax < 100000;

    let bookShopping = (`
    Judul Buku = ${book.title}
    Harga Buku = ${book.price}
    Diskon = ${amountDiscount}
    Harga Setelah Diskon = ${afterDiscount}
    Tax = ${amountTax}
    Total Harga = ${priceAfterTax}
    is it cheap? = ${priceCheap}
    `)

    console.log(bookShopping);
}