

function buttonfunction(e) {
    var x = document.getElementById("panel1");
    if (x.style.display == 'none' || x.style.display == "") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    e.classList.toggle("toggled");
  }
function buttonfunction2(e) {
    var y = document.getElementById("panel2");
    if (y.style.display == 'none' || y.style.display == "") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
    }
    e.classList.toggle("toggled");
  }
function buttonfunction3(e) {
    var z = document.getElementById("panel3");
    if (z.style.display == 'none' || z.style.display == "") {
      z.style.display = "block";
    } else {
      z.style.display = "none";
    }
    e.classList.toggle("toggled");
  }