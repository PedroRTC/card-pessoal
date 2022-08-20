

let button_expandir=document.querySelector(".button_expandir")
let main=document.querySelector("main")
let div_img=document.querySelector(".div_img")
let i_expandir=document.querySelector("#i_expandir")




function expandirInfor(){

    button_expandir.addEventListener("click",expandir)

    function expandir(){
        main.classList.add("expandir_main")
        div_img.classList.add("expandir_img")
        i_expandir.classList.remove("fa-expand")
        i_expandir.classList.add("fa-compress")
        button_expandir.removeEventListener("click",expandir)
        button_expandir.addEventListener("click",comprimir)

    }

    function comprimir(){
        main.classList.remove("expandir_main")
        div_img.classList.remove("expandir_img")
        i_expandir.classList.add("fa-expand")
        i_expandir.classList.remove("fa-compress")
        button_expandir.addEventListener("click",expandir)
        button_expandir.removeventListener("click",comprimir)
    }
}


expandirInfor()