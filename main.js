document.querySelector("button").addEventListener("click", horoscopeFinder);

function horoscopeFinder(e) {
  let month = document.getElementById("month").value;
  let date = document.getElementById("date").value;
  let year = document.getElementById("year").value;

  console.log(e);
  console.log(month);
  console.log(date);
  console.log(year);
}
