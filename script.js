const contenedor = document.querySelector(".container")
const carta = document.querySelectorAll(".card") 

function añadir(event){//el event target se usa ya que card es un conjunto de nodos (array)
//siempre que el elemento es un conjunto de nodos se utiliza event target

    carta.forEach(c=>c.classList.remove("active"))

    event.currentTarget.classList.add("active")  /*eventcurrentTarget: actua sobre la targeta en general*/
} /*eventTarget: actua sobre el elemento donde se clickeo*/

carta.forEach(e => { //trasforma los nodos en array
    e.addEventListener("click", añadir)
    
});