// function to validate form inputs before submitting data
function validationForm(){
    let booktitle = document.getElementById("booktitle").value;
    let authorsname = document.getElementById("authorsname").value;
    let totalcount = document.getElementById("totalcount").value;
    let bookdescription = document.getElementById("bookdescription").value;

    if(booktitle == ""){
        alert("Book Title is Required!")
        return false;
    }

    if(authorsname == ""){
        alert("Authors Name is Required!")
        return false;
    }

    if(totalcount == ""){
        alert("Totl Count is Required!")
        return false;
    } else if(totalcount < 1){
        alert("Total Count Must Not be 0 or Less Than Zero!")
        return false;
    }

    if(bookdescription == ""){
        alert("Book Description is Required!")
        return false;
    }

    return true;
}

// function to show data from local storage
function showData(){
    let bookList;
    if(localStorage.getItem("bookList") == null){
        bookList = [];
    } else {
        bookList = JSON.parse(localStorage.getItem("bookList"));
    }

    let html = "";

    bookList.forEach(function (element, index){
        html += "<tr>"
        html += "<td>" + element.booktitle + "</td>";
        html += "<td>" + element.authorsname + "</td>";
        html += "<td>" + element.totalcount + "</td>";
        html += "<td>" + element.bookdescription + "</td>";
        html += '<td><button onclick="deleteData('+index+')" class="btn btn-danger">Delete</button><button onclick="updateData('+index+')" class="btn btn-warning">Edit</button></td>';
        html += "</tr>";
    });

    document.querySelector("#crudTable tbody").innerHTML = html;
}

// loads all data from local storage when document or page loaded
document.onload = showData();

// function to add Data to local storage
function AddData(){
    // if form is validate
    if(validationForm() == true){
        let booktitle = document.getElementById("booktitle").value;
        let authorsname = document.getElementById("authorsname").value;
        let totalcount = document.getElementById("totalcount").value;
        let bookdescription = document.getElementById("bookdescription").value;

        let bookList;
        if(localStorage.getItem("bookList") == null){
            bookList = [];
        } else {
            bookList = JSON.parse(localStorage.getItem("bookList"));
        }

        bookList.push({
            booktitle : booktitle,
            authorsname : authorsname,
            totalcount : totalcount,
            bookdescription : bookdescription
        });

        localStorage.setItem("bookList", JSON.stringify(bookList));
        showData();
        document.getElementById("booktitle").value = "";
        document.getElementById("authorsname").value = "";
        document.getElementById("totalcount").value = "";
        document.getElementById("bookdescription").value = "";
    }
}

// function to delete data from local storage
function deleteData(index){
    let bookList;
    if(localStorage.getItem("bookList") == null){
        bookList = [];
    } else {
        bookList = JSON.parse(localStorage.getItem("bookList"));
    }

    bookList.splice(index, 1);
    localStorage.setItem("bookList", JSON.stringify(bookList));
    showData();
}

// function to update data from local storage
function updateData(index){
    // submit button will hide
    // update button will show for updating of data in local storage
    document.getElementById("Submit").style.display = "none";
    document.getElementById("Update").style.display = "block";

    let bookList;
    if(localStorage.getItem("bookList") == null){
        bookList = [];
    } else {
        bookList = JSON.parse(localStorage.getItem("bookList"));
    }

    document.getElementById("booktitle").value = bookList[index].booktitle;
    document.getElementById("authorsname").value = bookList[index].authorsname;
    document.getElementById("totalcount").value = bookList[index].totalcount;
    document.getElementById("bookdescription").value = bookList[index].bookdescription;

    document.querySelector("#Update").onclick = function(){
        if(validationForm() == true){
            bookList[index].booktitle = document.getElementById("booktitle").value;
            bookList[index].authorsname = document.getElementById("authorsname").value;
            bookList[index].totalcount = document.getElementById("totalcount").value;
            bookList[index].bookdescription = document.getElementById("bookdescription").value;

            localStorage.setItem("bookList", JSON.stringify(bookList));

            showData();

            document.getElementById("booktitle").value = "";
            document.getElementById("authorsname").value = "";
            document.getElementById("totalcount").value = "";
            document.getElementById("bookdescription").value = "";

            // update button will hide
            // submit button will show for updating of data in local storage
            document.getElementById("Submit").style.display = "block";
            document.getElementById("Update").style.display = "none";
        }
    }
}