bindBook();
function addBookDataToLocalStorage(bookObj) {


    //already has data in localstorage then update it other create new one
    var books = JSON.parse(localStorage.getItem('bookData')); 
    if (books != null) {
        books.push(bookObj);
       
        localStorage.setItem('bookData', JSON.stringify(books));
    }
    else {
        var bookData = new Array();
        bookData.push(bookObj);
        localStorage.setItem('bookData', JSON.stringify(bookData));


    }
}


function updateDataToLocalStorage(bookObj) {


    var books = JSON.parse(localStorage.getItem('bookData'));
    if (books != null) {
        var book = books.filter((x) => x.id == bookObj.id).pop();
        if (book != null) {
            book.name = bookObj.name; 
            book.author = bookObj.author;
            book.count = bookObj.count;
            book.desc = bookObj.desc;
        }
        localStorage.setItem('bookData', JSON.stringify(books));
    }
}


function deletedataFromLocalStorage(BookId) {


    var books = JSON.parse(localStorage.getItem('bookData'));
    if (books != null) {
        books.splice(books.findIndex(a => a.id === BookId), 1)
        localStorage.setItem('bookData', JSON.stringify(books));
    }
}




function bindBook() {
    var books = JSON.parse(localStorage.getItem('bookData'));
    if (books != null) {
        document.getElementById('tblbody').innerHTML = "";
        books.forEach(function (item, index) {
            debugger;
            var btnEditId = "btnedit" + item.id;
            var btnDeleteId = "btndelete" + item.id;
            var tableRow = "<tr Id='" + item.id + "'   data-CustomerID='" + item.id + "'   data-name='" + item.name + "' data-author='" + item.author + "' data-count='" + item.count + "' data-desc='" + item.desc + "'>"
                + "<td class='td-data'>" + item.id + "</td>"
                + "<td class='td-data'>" + item.name + "</td>"
                + "<td class='td-data'>" + item.author + "</td>"
                + "<td class='td-data'>" + item.count + "</td>"
                + "<td class='td-data'>" + item.desc + "</td>"
                + "<td class='td-data'>" +
                "<button id='" + btnEditId + "' class='btn btn-info btn-xs btn-editcustomer' onclick='showEditRow(" + item.id + ")'><i class='fa fa-pencil' aria-hidden='true'></i>Edit</button>" +
                "<button id='" + btnDeleteId + "' class='btn btn-danger btn-xs btn-deleteCustomer' onclick='deleteRow(" + item.id + ")'><i class='fa fa-trash' aria-hidden='true'>Delete</button>"
                + "</td>"
                + "</tr>";
            document.getElementById('tblbody').innerHTML += tableRow;
        })
    }
    var AddRow = "<tr>"
        + "<td class='td-data'></td>"
        + "<td class='td-data'><input type='text' id='txtbook' placeholder='title'></td>"
        + "<td class='td-data'><input type='text' id='author' placeholder='author'></td>"
        + "<td class='td-data'><input type='text' id='count' placeholder='count'></td>"
        + "<td class='td-data'><input type='text' id='desc' placeholder='desc'></td>"
        + "<td class='td-data'>" + "<button id= 'btnaddCustomer' onclick='addUser()' class='btn btn-success'> <i class='fa fa-plus-circle' aria-hidden='true'></i>Add</button>" + "</td>"
        + "</tr>";
    document.getElementById('tblbody').innerHTML += AddRow;
}


function GetBookId() {
    const ID = Date.now();
    return ID;
}


function addUser() {
    var bookId = GetBookId();
    var txtbook = document.getElementById("txtbook").value;
    if (!txtbook) {
        alert('Please enter book title!')
        return false;
    }

    var author = document.getElementById("author").value;
    if (!author) {
        alert('Please enter authors name!')
        return false;
    }

    var count = document.getElementById("count").value;
    if (!count) {
        alert('Please enter total count!')
        return false;
    } else if(count < 1){
        alert("Total Count Must Not be 0 or Less Than Zero!")
        return false;
    }

    var desc = document.getElementById("desc").value;
    if (!desc) {
        alert('Please enter book description!')
        return false;
    }


    var bookObj = {
        "id": bookId,
        "name": txtbook,
        "author": author,
        "count": count,
        "desc": desc
    };

    addBookDataToLocalStorage(bookObj);
    document.getElementById('txtbook').value = "";
    document.getElementById('author').value = "";
    document.getElementById('count').value = "";
    document.getElementById('desc').value = "";
    bindBook();
};


function showEditRow(BookId) { 
    var bookRow = document.getElementById(BookId); //this gives tr of  whose button was clicked
    var trdata = bookRow.querySelectorAll(".td-data");
    /*returns array of all elements with
    "row-data" class within the row with given id*/
    var bookId = trdata[0].innerHTML;
    var bookName = trdata[1].innerHTML;
    var author = trdata[2].innerHTML;
    var count = trdata[3].innerHTML;
    var desc = trdata[4].innerHTML;


    trdata[0].innerHTML = '<input name="txtbookId"  disabled id="txtbookId" value="' + bookId + '"/>';
    trdata[1].innerHTML = '<input name="txtbook" id="txtbook" value="' + bookName + '"/>';
    trdata[2].innerHTML = '<input name="author" id="author" value="' + author + '"/>';
    trdata[3].innerHTML = '<input name="count" id="count" value="' + count + '"/>';
    trdata[4].innerHTML = '<input name="desc" id="desc" value="' + desc + '"/>';


    trdata[5].innerHTML =
        "<button class='btn btn-primary btn-xs btn-updateCustomer' onclick='updateBook(" + bookId + ")'>" +
        "<i class='fa fa-pencil' aria-hidden='true'></i>Update</button>"
        + "<button class='btn btn-warning btn-xs btn-cancelupdate' onclick='cancel(" + bookId + ")'><i class='fa fa-times' aria-hidden='true'></i>Cancel</button>"
}
function cancel(BookID) {
    debugger;
    var btneditId = "btnedit" + BookID;
    var btndeleteId = "btndelete" + BookID;


    var CustomerRow = document.getElementById(BookID); //this gives tr of  whose button was clicked
    var data = CustomerRow.querySelectorAll(".td-data");


    var name = CustomerRow.getAttribute("data-name");
    var author = CustomerRow.getAttribute("data-author");
    var count = CustomerRow.getAttribute("data-count");
    var desc = CustomerRow.getAttribute("data-desc");


    data[0].innerHTML = BookID;
    data[1].innerHTML = name;
    data[2].innerHTML = author;
    data[3].innerHTML = count;
    data[4].innerHTML = desc;
    var actionbtn = "<button id='" + btneditId + "' class='btn btn-info btn-xs btn-editcustomer' onclick='showEditRow(" + BookID + ")'><i class='fa fa-pencil' aria-hidden='true'></i>Edit</button>" +
        "<button id='" + btndeleteId + "' class='btn btn-danger btn-xs btn-deleteCustomer' onclick='deleteRow(" + BookID + ")'><i class='fa fa-trash' aria-hidden='true'>Delete</button>"
    data[5].innerHTML = actionbtn;
}
function updateBook(BookID) {
    var bookRow = document.getElementById(BookID); //this gives tr of  whose button was clicked
    var data = bookRow.querySelectorAll(".td-data");
    var name = data[1].querySelector("#txtbook").value;
    var author = data[2].querySelector("#author").value;
    var count = data[3].querySelector("#count").value;
    var desc = data[4].querySelector("#desc").value;
    var bookObj = {
        "id": BookID,
        "name": name,
        "author": author,
        "count": count,
        "desc": desc
    };
    updateDataToLocalStorage(bookObj);
    bindBook();
}
function deleteRow(BookID) {
    deletedataFromLocalStorage(BookID);
    bindBook();
}