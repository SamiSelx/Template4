
let freindBox = document.querySelectorAll(".friend-box");
let windo = document.querySelector(".sure-window");
let sureWindow = document.querySelector(".sure");
let main =  document.querySelector(".main")
console.log(sureWindow.lastElementChild.firstElementChild)
freindBox.forEach(
    function(box){
        box.lastElementChild.lastElementChild.lastElementChild.onclick = function(e){
            e.preventDefault();
            windo.style.display = "block"
            main.classList.add("blur")
            confirmYes(sureWindow.lastElementChild.firstElementChild,box,windo)
            cancelNo(sureWindow.lastElementChild.lastElementChild,windo)
            cancelNo(windo.firstElementChild,windo)
        }
    }
)


function confirmYes (btn,boxElem,windw){
    btn.onclick = function(e){
        e.preventDefault()
        boxElem.remove();
        windw.style.display= "none"
        main.classList.remove("blur")
    }
}

function cancelNo (btn,windw){
    btn.onclick = function(e){
        e.preventDefault()
        windw.style.display= "none"
        main.classList.remove("blur")
    }
}