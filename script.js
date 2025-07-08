//Getting all the values 

var n = document.getElementById("names");
var a = document.getElementById("age");
var c = document.getElementById("course");
var e = document.getElementById("mail");
var save = document.getElementById("save");
var con = document.getElementById("contents");

save.addEventListener("click", function(event) {
    event.preventDefault();

    // Get selected gender at the time of click
    var selectedGender = document.querySelector(".gend:checked");
    var genderValue = selectedGender ? selectedGender.value : "Not selected";

    // Get selected course
    var courseValue = c.value;

    // getting them in a row inner html so they go in as data 
    var row = document.createElement("tr");
    row.innerHTML =
        "<td>" + n.value + "</td>" +
        "<td>" + a.value + "</td>" +
        "<td>" + genderValue + "</td>" +
        "<td>" + courseValue + "</td>" +
        "<td>" + e.value + "</td>" +
        "<td><button class='deleted' onclick='deleteitem(event)'>Delete</button></td>";

    con.appendChild(row);
});

//deleting the row created 
     function deleteitem(event){
        console.log(event)
        event.target.parentElement.parentElement.remove(); // Removes the <tr>
        }