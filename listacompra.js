function addTarea() {
    //leer el texto del input
    let tarea = document.getElementById("inputarea").value;
    tarea = tarea.trim();

    if (tarea != ""){

        //cre un nuevo elemento lista
        let itemLista = document.createElement("li");
        //añade texto a la lista. ej :comprar pan
        itemLista.innerHTML = `${tarea}
        
        <button class="btnEliminar">Eliminar</button>`;
         
       
        
        //añade a la lista ul un child
        document.getElementById("listatareas").appendChild(itemLista);

        //selec el boton eliminar
        itemLista.querySelector('.btnEliminar').
        addEventListener('click',function(){
            itemLista.remove();
        })
    }//fin del if

}//fin de la función addTarea