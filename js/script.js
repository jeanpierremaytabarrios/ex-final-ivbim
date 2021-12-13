let ch_name = document.getElementById("ch-name");
let ch_color = document.getElementById("ch-color");
let ch_shape = document.getElementById("sel-shape");
let show = document.getElementById("show");
let mostrar_btn = document.getElementById("mostrar-btn");
let a = 1;

const generar = () => {
    if(ch_name.value)
    {
        show.insertAdjacentHTML("beforeend",`
            <div class="res-${a}"><h1>${ch_name.value}</h1></div>
        `);
        show.style.display = "flex";
        show.style.flexDirection = "row";
        show.style.justifyContent = "flex-start";
        show.style.flexWrap = "wrap";
        show.lastElementChild.style.backgroundColor = ch_color.value;
        if(ch_shape.value == "cuadrado")
        {
            show.lastElementChild.style.width = "9em";
            show.lastElementChild.style.height = "9em";
            show.lastElementChild.style.borderRadius = "0%";
            show.lastElementChild.style.marginRight = "1em";
            show.lastElementChild.style.display = "flex";
            show.lastElementChild.style.flexDirection = "row";
            show.lastElementChild.style.justifyContent = "center";
            show.lastElementChild.style.alignItems = "center";
            show.lastElementChild.firstElementChild.style.fontSize = "1.15rem";
            show.lastElementChild.firstElementChild.style.fontFamily = "font-family: 'Red Rose', cursive;";
        }
        else if(ch_shape.value == "circulo")
        {
            show.lastElementChild.style.width = "9em";
            show.lastElementChild.style.height = "9em";
            show.lastElementChild.style.borderRadius = "100%";
            show.lastElementChild.style.marginRight = "1em";
            show.lastElementChild.style.display = "flex";
            show.lastElementChild.style.flexDirection = "row";
            show.lastElementChild.style.justifyContent = "center";
            show.lastElementChild.style.alignItems = "center";
            show.lastElementChild.firstElementChild.style.fontSize = "1.15rem";
            show.lastElementChild.firstElementChild.style.fontFamily = "font-family: 'Red Rose', cursive;";
        }
        ch_name.value = "";
        ch_color.value = "#FFFFFF";
        ch_shape.value = "cuadrado";
        a++;
    }
    else
    {
        alert("Pon un nombre valido");
    }
};

mostrar_btn.addEventListener("click", ()=>{
    generar();
});