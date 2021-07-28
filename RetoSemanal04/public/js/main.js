//Ppal
let ppalj1 = document.getElementById("ppal__input1")
let ppalj2 = document.getElementById("ppal__input2")
let ppalbtnjugar = document.getElementById("ppal__btn")
let cartassub = document.getElementById("cartas__sub")

//variables para el render
let cartascontenedor = document.querySelector('#cartas__carrucont')

//variables de las secciones para modificar display
let ppal = document.getElementById("ppal")
let carga = document.getElementById("carga")
let cartas = document.getElementById("cartas")
let match = document.getElementById("match")

//array de cartas
const CARTAS = [
    {
        nombre: "Agua",
        descripcion: "Sentimientos, expansión, habilidad de adaptarse.",
        imagen: "img/cartaAgua.png",
        numeroMatch: 3
    },
    {
        nombre: "Arena",
        descripcion: "Seguridad, tranquilidad, certeza.",
        imagen: "img/cartaArena.png",
        numeroMatch: 1
    },
    {
        nombre: "Aro",
        descripcion: "Continuidad, ciclos, prisión.",
        imagen: "img/cartaAro.png",
        numeroMatch: -2
    },
    {
        nombre: "Borrar",
        descripcion: "Desaparición, olvido, incierto.",
        imagen: "img/cartaBorrar.jpg",
        numeroMatch: -4
    },
    {
        nombre: "Burbujas",
        descripcion: "Multitud, unión, camuflaje con otres.",
        imagen: "img/cartaBurbujas.png",
        numeroMatch: 1
    },
    {
        nombre: "Cambio",
        descripcion: "Cambio de apariencia, adaptarse, renovarse.",
        imagen: "img/cartaCambio.png",
        numeroMatch: 2
    },
    {
        nombre: "Creación",
        descripcion: "Creación, imaginación, desafíos.",
        imagen: "img/cartaCreacion.png",
        numeroMatch: 4
    },
    {
        nombre: "Dormir",
        descripcion: "Paralización, despiste, descanso.",
        imagen: "img/cartaDormir.png",
        numeroMatch: -3
    },
    {
        nombre: "Escudo",
        descripcion: "Protección de algo o alguien a quién consideremos valioso/a.",
        imagen: "img/cartaEscudo.png",
        numeroMatch: 3
    },
    {
        nombre: "Flecha",
        descripcion: "Precisión, certeza, objetivos.",
        imagen: "img/cartaFlecha.png",
        numeroMatch: 4
    },
    {
        nombre: "Flor",
        descripcion: "Salud, comienzo del amor, florecimiento.",
        imagen: "img/cartaFlor.png",
        numeroMatch: 5
    },
    {
        nombre: "Fuego",
        descripcion: "Creatividad, voluntad, destrucción.",
        imagen: "img/cartaFuego.png",
        numeroMatch: -4
    },
    {
        nombre: "Laberinto",
        descripcion: "Desorientación, prisión, desesperación.",
        imagen: "img/cartaLaberinto.png",
        numeroMatch: -5
    },
    {
        nombre: "Movimiento",
        descripcion: "Cambio, movimiento, nuevas formas.",
        imagen: "img/cartaMovimiento.png",
        numeroMatch: 2
    },
    {
        nombre: "Nada",
        descripcion: "Espacio, vacío, negativo.",
        imagen: "img/cartaNada.png",
        numeroMatch: -3
    },
    {
        nombre: "Oscuridad",
        descripcion: "Oculto, sin descubrir, incertidumbre.",
        imagen: "img/cartaOscuridad.png",
        numeroMatch: -4
    },
    {
        nombre: "Pelea",
        descripcion: "Destreza, lucha, fortaleza.",
        imagen: "img/cartaPelea.png",
        numeroMatch: 4
    },
    {
        nombre: "Regreso",
        descripcion: "Repetición, pasado, volver atrás.",
        imagen: "img/cartaRegreso.png",
        numeroMatch: 1
    },
    {
        nombre: "Voz",
        descripcion: "Autoridad, convicción, comunicación.",
        imagen: "img/cartaVoz.jpg",
        numeroMatch: 3
    },
    {
        nombre: "Vuelo",
        descripcion: "Libertad, movilidad, evasión.",
        imagen: "img/cartaVuelo.png",
        numeroMatch: 4
    }
]

//Click en boton jugar
ppalbtnjugar.addEventListener("click", function(){
    //capturamos los valores de los input
    let jugador1 = ppalj1.value
    let jugador2 = ppalj2.value
    if (jugador1 != "" && jugador2 != "") {
        carga.classList.remove("dn")
        carga.classList.add("db")
        ppal.classList.remove("db")
        ppal.classList.add("dn")
    
    renderCartas()

    //Pantalla de carga
    setTimeout(function(){
        carga.classList.remove("db")
        carga.classList.add("dn")
        cartas.classList.remove("dn")
        cartas.classList.add("db")
    }, 3000);


    } else {
        alert("Por favor completá los nombres de los dos jugadores")
    }
})

//Función para obtener un número random entre un min y un max
function obtenerNumeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

//Función para renderizar las cartas repartidas
function renderCartas(){
    remover()
    //se reparten las cartas
    let seisCartas = [
        CARTAS[obtenerNumeroRandom(0, 6)], 
        CARTAS[obtenerNumeroRandom(7, 13)], 
        CARTAS[obtenerNumeroRandom(14, 19)],
        CARTAS[obtenerNumeroRandom(0, 6)], 
        CARTAS[obtenerNumeroRandom(7, 13)], 
        CARTAS[obtenerNumeroRandom(14, 19)],
    ]
    for(let i=0;i<seisCartas.length;i++){
        //creamos item del carrusel
        let item = document.createElement("div")
        item.classList.add("carousel-item")
        
        //creamos la card
        let card = document.createElement("div")
        card.classList.add("card")
        card.classList.add("card-custom")
        card.classList.add("d-block")
        card.classList.add("w-100")
        card.id = i
        
        //capturamos de nuevo los valores porque por el scope no los toma
        let jugador1 = ppalj1.value
        let jugador2 = ppalj2.value

        //Creamos los indicadores y los agregamos a la card
        if (i<3){
            let indi = document.createElement("h5")
            indi.innerHTML = `Carta ${i+1}/3 de ${jugador1}`
            card.insertAdjacentElement("afterbegin", indi)
        } else {
            let indi = document.createElement("h5")
            indi.innerHTML = `Carta ${i-2}/3 de ${jugador2}`
            card.insertAdjacentElement("afterbegin", indi)
        }
        

        //renderizamos la imagen
        let img = document.createElement("img")
        img.classList.add("card-img-top")
        img.classList.add("p-3")
        img.setAttribute("src", seisCartas[i].imagen) 
        img.setAttribute("style", "height: 200px; width: 200px") 

        //creamos el body de la card
        let body = document.createElement("div")
        body.classList.add("card-body")

        //renderizamos la descripción
        let descripcion = document.createElement("p")
        descripcion.innerHTML = seisCartas[i].descripcion
        descripcion.classList.add("card-text")

        //renderizamos el título
        let titulo = document.createElement("h4")
        titulo.innerHTML = seisCartas[i].nombre
        titulo.classList.add("card-title")
        
        //le insertamos todo a la card
        card.insertAdjacentElement("afterbegin", img)
        body.insertAdjacentElement("afterbegin", titulo)
        body.insertAdjacentElement("beforeend", descripcion)
        card.insertAdjacentElement("beforeend", body)
        item.insertAdjacentElement("beforeend", card)
        //renderizamos en el carrusel
        cartascontenedor.insertAdjacentElement("beforeend", item)
        
    }
    let active = document.querySelector(".carousel-item")
    active.classList.add("active")
    
    let ol = document.getElementById("cartas__ol")
    for(let i=0;i<seisCartas.length;i++){
        //creamos el contenedor y le damos clases
        let li = document.createElement("li")
        li.classList.add("removedor")
        li.setAttribute("data-bs-target", "#carouselExampleSlidesOnly")
        li.setAttribute("data-bs-slide-to", i)
        ol.insertAdjacentElement("beforeend", li)
    }
    
    //capturar row 1 y 2
    let match__row1 = document.querySelector("#match__row1")
    let match__row2 = document.querySelector("#match__row2")

    for(let i=0;i<3;i++){
    //creamos div col
    let col = document.createElement("div")
    col.classList.add("col-4")

    //creamos imagen
    let img = document.createElement("img")
    img.classList.add("match__carta")
    img.classList.add("img-fluid")
    img.setAttribute("src", seisCartas[i].imagen)

    //unimos
    col.insertAdjacentElement("afterbegin", img)
    match__row1.insertAdjacentElement("afterbegin", col)
    }
    for(let i=3;i<seisCartas.length;i++){
        //creamos div col
        let col = document.createElement("div")
        col.classList.add("col-4")
    
        //creamos imagen
        let img = document.createElement("img")
        img.classList.add("match__carta")
        img.classList.add("img-fluid")
        img.setAttribute("src", seisCartas[i].imagen)
    
        //unimos
        col.insertAdjacentElement("afterbegin", img)
        match__row2.insertAdjacentElement("afterbegin", col)
    }

    //Match
    let suma1 = seisCartas[0].numeroMatch + seisCartas[1].numeroMatch + seisCartas[2].numeroMatch
    let suma2 = seisCartas[3].numeroMatch + seisCartas[4].numeroMatch + seisCartas[5].numeroMatch
    //capturamos
    let match__si = document.querySelector("#match__si")
    let match__no = document.querySelector("#match__no")

    if (suma1 <= 0){
        if(suma2 <= 0){
            match__si.classList.remove("dn")
        } else {
            match__no.classList.remove("dn")
        }
    } else {
        if(suma2 > 0){
            match__si.classList.remove("dn")
        } else {
            match__no.classList.remove("dn")
        }
    }
    
}

//click en modal de pantalla cartas
let cartas__btnmatch = document.querySelector("#cartas__btnmodal1")
let cartas__btnvolver = document.querySelector("#cartas__btnmodal2")

//funcion btn match
cartas__btnmatch.addEventListener("click", function(){
    cartas.classList.remove("db")
    cartas.classList.add("dn")
    match.classList.remove("dn")
    match.classList.add("db")
})

//funcion btn volver
cartas__btnvolver.addEventListener("click", function(){
    cartas.classList.remove("db")
    cartas.classList.add("dn")
    ppal.classList.remove("dn")
    ppal.classList.add("db")
    match.classList.remove("db")
    match.classList.add("dn")
    remover()
})

//remover objetos renderizados
function remover(){
    let item = document.querySelectorAll(".carousel-item")
    let li = document.querySelectorAll(".removedor")
    let indi = document.querySelectorAll("h5")
    let col4 = document.querySelectorAll(".col-4")
    let match__si = document.querySelector("#match__si")
    let match__no = document.querySelector("#match__no")
    //multiples for para eliminar
    for(let i=0;i<item.length;i++){
        item[i].parentNode.removeChild(item[i]);
    }
    for(let i=0;i<li.length;i++){
        li[i].parentNode.removeChild(li[i]);
    }
    for(let i=0;i<indi.length;i++){
        indi[i].parentNode.removeChild(indi[i]);
    }
    for(let i=0;i<col4.length;i++){
        col4[i].parentNode.removeChild(col4[i]);
    }
    match__si.classList.add("dn")
    match__no.classList.add("dn")
}


//funciones botones match

let btnguardar = document.querySelector("#match__btnguardar")
let btncerrar = document.querySelector("#match__btncerrar")

btnguardar.addEventListener("click", function(){
    cartas.classList.remove("db")
    cartas.classList.add("dn")
    ppal.classList.remove("dn")
    ppal.classList.add("db")
    match.classList.remove("db")
    match.classList.add("dn")
    let sub = document.querySelector("#ppal__subtitulo")
    sub.classList.remove("dn")
    sub.classList.add("db")
    //capturamos
    let jugador1 = ppalj1.value
    let jugador2 = ppalj2.value
    let ppalul = document.getElementById("ppal__ul")

    //creamos
    let li = document.createElement("li")
    li.classList.add("list-group-item")
    ppal__ul.classList.add("oh")
    li.innerHTML = `${jugador1} - ${jugador2}`
    let btn = document.createElement("button")
    btn.classList.add("btn")
    btn.classList.add("btn-primary")
    btn.classList.add("btn-sm")
    btn.classList.add("flr")
    btn.classList.add("btncustom")
    btn.classList.add("btn-ver")
    btn.innerHTML = ">"
    btn.addEventListener("click", function(){
        let cartas__btncontinuar = document.querySelector("#cartas__btncontinuar")
        let cartas__btnmodalsec = document.querySelector("#cartas__btnmodalsec")
        ppal.classList.remove("db")
        ppal.classList.add("dn")
        cartas.classList.remove("dn")
        cartas.classList.add("db")
        cartas__btncontinuar.classList.remove("db")
        cartas__btncontinuar.classList.add("dn")
        cartas__btnmodalsec.classList.remove("dn")
        cartas__btnmodalsec.classList.add("db")
    })
    
//unimos
    li.insertAdjacentElement("beforeend", btn)
    ppalul.insertAdjacentElement("afterbegin", li)

    //agregamos evento al btn ver
    
})

btncerrar.addEventListener("click", function(){
    cartas.classList.remove("db")
    cartas.classList.add("dn")
    ppal.classList.remove("dn")
    ppal.classList.add("db")
    match.classList.remove("db")
    match.classList.add("dn")
    remover()
})

//funcion del modal secundario que se activa con el boton ver
let cartas__btnmodalsec = document.querySelector("#cartas__btnmodalsec")
cartas__btnmodalsec.addEventListener("click", function(){
    let cartas__btncontinuar = document.querySelector("#cartas__btncontinuar")
    cartas.classList.remove("db")
    cartas.classList.add("dn")
    ppal.classList.remove("dn")
    ppal.classList.add("db")
    cartas__btncontinuar.classList.remove("dn")
    cartas__btncontinuar.classList.add("db")
    cartas__btnmodalsec.classList.add("dn")
    cartas__btnmodalsec.classList.remove("db")
})


function ver(){
    
}
