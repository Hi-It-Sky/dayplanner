var saveButton9 = document.querySelector("#saveButton9");
var saveButton10 = document.querySelector("#saveButton10");
var saveButton11 = document.querySelector("#saveButton11");
var saveButton12 = document.querySelector("#saveButton12");
var saveButton13 = document.querySelector("#saveButton13");
var saveButton14 = document.querySelector("#saveButton14");
var saveButton15 = document.querySelector("#saveButton15");
var saveButton16 = document.querySelector("#saveButton16");
var saveButton17 = document.querySelector("#saveButton17");
var input9 = document.querySelector("#input9");
var input10 = document.querySelector("#input10");
var input11 = document.querySelector("#input11");
var input12 = document.querySelector("#input12");
var input13 = document.querySelector("#input13");
var input14 = document.querySelector("#input14");
var input15 = document.querySelector("#input15");
var input16= document.querySelector("#input16");
var input17 = document.querySelector("#input17");


renderLast();

document.getElementById("currentDay").innerHTML=moment().format("dddd");

function renderLast() {
    //get current hour
    //for loop
    //change item9 to item or something
    for (var i = 9; i < 18; i++){
    item = localStorage.getItem("input" + i);
    console.log ("item"+ i + "=" +item);
    document.getElementById('input' + i).value = item;
    if (item === null) {
        console.log ("error");
        return;
    }
    input9.textContent = item;
    console.log ("worked");
    }
    //end for loop
};


saveButton9.addEventListener("click", function(event) {
    console.log ("hello");
    var item = document.getElementById('input9').value;
    console.log (JSON.stringify(item));
    localStorage.setItem(("input9"), item);
    renderLast();

});

saveButton10.addEventListener("click", function(event) {
    console.log ("hello");
    var item = document.getElementById('input10').value;
    console.log (JSON.stringify(item));
    localStorage.setItem(("input10"), item);
    renderLast();

});

saveButton11.addEventListener("click", function(event) {
    console.log ("hello");
    var item = document.getElementById('input11').value;
    console.log (JSON.stringify(item));
    localStorage.setItem(("input11"), item);
    renderLast();

});

saveButton12.addEventListener("click", function(event) {
    console.log ("hello");
    var item = document.getElementById('input12').value;
    console.log (JSON.stringify(item));
    localStorage.setItem(("input12"), item);
    renderLast();

});

saveButton13.addEventListener("click", function(event) {
    console.log ("hello");
    var item = document.getElementById('input13').value;
    console.log (JSON.stringify(item));
    localStorage.setItem(("input13"), item);
    renderLast();

});

saveButton14.addEventListener("click", function(event) {
    console.log ("hello");
    var item = document.getElementById('input14').value;
    console.log (JSON.stringify(item));
    localStorage.setItem(("input14"), item);
    renderLast();

});

saveButton15.addEventListener("click", function(event) {
    console.log ("hello");
    var item = document.getElementById('input15').value;
    console.log (JSON.stringify(item));
    localStorage.setItem(("input15"), item);
    renderLast();

});

saveButton16.addEventListener("click", function(event) {
    console.log ("hello");
    var item = document.getElementById('input16').value;
    console.log (JSON.stringify(item));
    localStorage.setItem(("input16"), item);
    renderLast();

});

saveButton17.addEventListener("click", function(event) {
    console.log ("hello");
    var item = document.getElementById('input17').value;
    console.log (JSON.stringify(item));
    localStorage.setItem(("input17"), item);
    renderLast();

});