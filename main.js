document.querySelector("button").addEventListener("click", horoscopeFinder);
document.querySelector("button").addEventListener("click", clearForm);
document.querySelector("button").addEventListener("click", reset);

function clearForm() {
  document.getElementById("horoscopeForm").reset();
}

function horoscopeFinder() {
  let month = document.getElementById("month").value;
  let day = document.getElementById("date").value;

  if (month > 12 || month < 1 || day > 31 || day < 1) {
    console.log("You must enter a valid birthdate");
    return;
  }

  if (month == 1) {
    if (day < 20) {
      document.querySelector(".capricorn").classList.add("chosen");
    } else {
      document.querySelector(".aquarius").classList.add("chosen");
    }
  }

  if (month == 2) {
    if (day < 19) {
      document.querySelector(".aquarius").classList.add("chosen");
    } else {
      document.querySelector(".pices").classList.add("chosen");
    }
  }

  if (month == 3) {
    if (day < 21) {
      document.querySelector(".pisces").classList.add("chosen");
    } else {
      document.querySelector(".aries").classList.add("chosen");
    }
  }

  if (month == 4) {
    if (day < 20) {
      document.querySelector(".aries").classList.add("chosen");
    } else {
      document.querySelector(".taurus").classList.add("chosen");
    }
  }

  if (month == 5) {
    if (day < 21) {
      document.querySelector(".taurus").classList.add("chosen");
    } else {
      document.querySelector(".gemini").classList.add("chosen");
    }
  }

  if (month == 6) {
    if (day < 21) {
      document.querySelector(".gemini").classList.add("chosen");
    } else {
      document.querySelector(".cancer").classList.add("chosen");
    }
  }

  if (month == 7) {
    if (day < 23) {
      document.querySelector(".cancer").classList.add("chosen");
    } else {
      document.querySelector(".leo").classList.add("chosen");
    }
  }

  if (month == 8) {
    if (day < 23) {
      document.querySelector(".leo").classList.add("chosen");
    } else {
      document.querySelector(".virgo").classList.add("chosen");
    }
  }

  if (month == 9) {
    if (day < 23) {
      document.querySelector(".virgo").classList.add("chosen");
    } else {
      document.querySelector(".libra").classList.add("chosen");
    }
  }

  if (month == 10) {
    if (day < 23) {
      document.querySelector(".libra").classList.add("chosen");
    } else {
      document.querySelector(".scorpio").classList.add("chosen");
    }
  }

  if (month == 11) {
    if (day < 21) {
      document.querySelector(".scorpio").classList.add("chosen");
    } else {
      document.querySelector(".sagittarius").classList.add("chosen");
    }
  }

  if (month == 12) {
    if (day < 22) {
      document.querySelector(".sagittarius").classList.add("chosen");
    } else {
      document.querySelector(".capricorn").classList.add("chosen");
    }
  }
}

function reset() {
  setTimeout(() => {
    sign = document.querySelectorAll(".horoscope");
    sign.forEach((e) => {
      e.classList.remove("chosen");
    });
  }, 2500);
}

// Aries (March 21-April 19)
// Taurus (April 20-May 20)
// Gemini (May 21-June 20)
// Cancer (June 21-July 22)
// Leo (July 23-August 22)
// Virgo (August 23-September 22)
// Libra (September 23-October 22)
// Scorpio (October 23-November 21)
// Sagittarius (November 22-December 21)
// Capricorn (December 22-January 19)
// Aquarius (January 20-February 18)
// Pisces (February 19-March 20)
