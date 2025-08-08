let button = document.getElementById("btn")

// List of all mouse events
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

button.addEventListener("click", ()=> {
    // alert("I was clicked.Yay!!")
    document.querySelector(".box").innerHTML = "<b> Yayy you were clicked bro"
})

button.addEventListener("dblclick", ()=> {
    document.querySelector(".box").innerHTML = "<b> Yayy you were clicked bro </b>Enjoy your click!!"
})

button.addEventListener("contextmenu", ()=> {
    alert("Yayy you were hacked!!")
})

document.addEventListener("keydown", (e)=>{
    console.log(e, e.keyCode, e.key)
})

