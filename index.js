// Your code goes here


// document.addEventListener("DOMContentLoaded",function(){
//   console.log("The DOM has loaded")
// });
//
// console.log("This console.log() fires when index.js loads - before DOMContentLoaded is triggered");
// understood mostly


document.addEventListener( "DOMContentLoaded", function () {//when content is loaded do this function
  updateDOM()
} );


function updateDOM() {// function
  document.getElementById( "text" )//search in the document for something that has an id of text
    .innerHTML = "This is really cool!";//changes is to this string
}
