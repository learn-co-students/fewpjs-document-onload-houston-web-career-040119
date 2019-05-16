document.addEventListener("DOMContentLoaded", function() {
    updateDOM()
    
});

function updateDOM() {
  document.getElementById("text").innerHTML = "This is really cool!";
  debugger
}

//when we add an event listener we need to update the DOM. Hence the function updateDOM()