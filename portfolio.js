
// finding the cb id from html and storing it in a variable
var cb = document.getElementById("cb");

// finding the modal01 id from html and storing it in a variable
var modal01 = document.getElementById("modal01");

// finding the close id from html and storing it in a variable
var close = document.getElementById("close");

// Adding addEventListener to cb check the click functionality and running a function on click
cb.addEventListener("click", function(){
	modal01.style.display = "block";
});

// Adding addEventListener to close to check the click functionality and running a function on click
close.addEventListener("click", function(){
	modal01.style.display = "none";
});
