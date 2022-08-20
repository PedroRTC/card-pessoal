

let button_expandir=document.querySelector(".button_expandir")
let main=document.querySelector("main")
let div_img=document.querySelector(".div_img")

console.log(button_expandir)
console.log(main)
console.log(div_img)


function expandirInfor(){

    button_expandir.addEventListener("click",expandir)

    function expandir(){
        main.classList.add("expandir_main")
        div_img.classList.add("expandir_img")
        button_expandir.removeEventListener("click",expandir)
        button_expandir.addEventListener("click",comprimir)

    }

    function comprimir(){
        main.classList.remove("expandir_main")
        div_img.classList.remove("expandir_img")
        button_expandir.addEventListener("click",expandir)
        button_expandir.removeventListener("click",comprimir)
    }
}


expandirInfor()