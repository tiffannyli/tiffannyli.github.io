
window.onclick = function(event) {
    if(event.target.id === "pic1") {
        var dropdown = document.getElementsByClassName("content1")
        dropdown[0].classList.toggle("show")
    }
    if(event.target.id === "pic2") {
        var dropdown = document.getElementsByClassName("content2")
        dropdown[0].classList.toggle("show")
    }
    if(event.target.id === "pic3") {
        var dropdown = document.getElementsByClassName("content3")
        dropdown[0].classList.toggle("show")
    }
}

  