const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleclick(){

    title.classList.toggle(CLICKED_CLASS);
}

function init(){
    title.addEventListener("click", handleclick);
}

init();