let isMorning = true;

function toggleText() {
  let heading = document.getElementById("heading");

  if (isMorning) {
    heading.textContent = "Good Evening!";
  } else {
    heading.textContent = "Good Morning!";
  }

  isMorning = !isMorning; 
}