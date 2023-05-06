const input = document.getElementById("input");



input.addEventListener("keydown",(e) => {
  if (e.key === "Enter") {
    if (e.target.value > 0) {
        let id = setInterval(Counter,1000)
    }

   
  }
});



 


//FUNCTION FOR COUNTDOWN LOGIC

function Counter() {
  console.log("counter function trrigred");
  if (input.value > 0) {
    result = input.value -= 1;
    document.getElementById("counter").innerText = result;
  }

   else if ((input.value === 0)) {
      document.getElementById("counter").innerText = "0";
      input.value = "";
     
      
    }
   
    
  }



