// // //alert ("Hola mundo");

// // let nombre = "Antonia";

// // console.log(nombre);
// // nombre = "Pepe";

// // console.log(nombre);

// // let precio = 36;
// // console.log("El precio es: " + precio);
// // precio = precio * 1.1;
// // console.log("Precio actualizado: " + precio)

// // const nombre2 = "Palmera";
// // console.log(nombre2);

// // let precio2 = "46";

// // let resultado = precio2 + 7;
// // console.log(resultado);

// // let cantidad = 2;
// // let precioProducto = 46.5;
// // let total = cantidad * precioProducto;

// // let nom = "Pepe  ";
// // let apellido = "Garcia";
// // let nombreCompleto = nom + apellido;
// // console.log(nombreCompleto)
// // // booleano-verdad o falso.
// // let esFinde = false;
// // console.log(esFinde);

// // let cantidad1 = 7;
// // let cantidad2 = 2;

// // cantidad1 = cantidad1 +1;
// // cantidad1++;
// // cantidad1+=1;
// // cantidad2--;
// // cantidad2-=1;

// // console.log(cantidad1 % cantidad2);

// // console.log(cantidad1 != cantidad2);

// // let planta1 = "cactus";
// // let planta2 = "cactus";
// // console.log(planta1 == planta2);

// let estaSobrio = true;
// let tieneCarnet = true;
// let esMayor = true;
// let puedeConducir = estaSobrio && tieneCarnet && esMayor;
// console.log("¿Puede conducir?" + puedeConducir);

// let esFinde = false;
// let esVerano = true;

// let voyDePaseo = esFinde || esVerano;
// // console.log ("¿Voy de paseo?" + voyDePaseo);
// let texto = " En un lugar de la mANCHA";
// let texto2 = " En un lugar de la mANCHA, de cuyo nombre no quiero acordarme";
// console.log(texto.length);


// let longitudTexto1 = texto.length;
// let longitudTexto2 = texto2.length;


// // console.log (texto.toLocaleLowerCase());
// // console.log (texto.toLocaleUpperCase());
// // console.log(texto);
// console.log("El texto primero es más largo:" + esMasLARGO);



//DECLARAR UNA VARIABLE PARA GUARDAR UN ¡NOMBRE
// DECLARAR PTRA VAR ÀRA GUARDAR EL APELLIDO
//DECLARAR OTRA VAR PARA GUARDAR LA EDAD

//MOSTRAR POR CONSOLA UNA FRASE: FULANITO FERNÁNDEZ TIENE TANTOS AÑOS.

// let nom = "Carlos ";
// let apellido = "Martín  ";
// let edad = "25";
//  let datos = nom + apellido + "tiene " + edad;
// console.log(datos);
// let frase2 = ` ${nom}`;
// console.log(frase2);




// let poema = ` Las rosas son rojas,
// las violetas son azules, 
// JavaScript es divertido `;
// console.log(poema);



// function calcularEdad() {
//     // Obtener el nombre de la mascota del input.
//     let nombre = document.getElementById("nombreMascota").value;
//     console.log(nombre);
//     console.log(typeof (nombre));



    //     // obtener edad mascot
    //     let edad = document.getElementById("edadMascota").value;
    //     edad = Number(edad);
    //     let mensaje = ""



    //     if (edad > 0 && edad < 50) {
    //         //Calcular la edad humana de la mascota
    //         let edadHumana = edad * 7;
    //         //Crear el mensaje para mostrar

    //         let mensaje = `${nombre} tiene ${edad} años, que equivalen a 
    //     ${edadHumana} años humanos`;
    //         //mensaje por pantalla
    //         document.getElementById("resultado").textContent = mensaje;
    //     } else {
    //         mensaje = "los datos no son correctos";
    //     }

    // }





//calcula el total de la compra con el tipo de iva seleccionado

    function calcularCompra() {
        //leyendo datos pantalla
        let nombre = document.getElementById("nombreCliente").value;
        // console.log(nombre);
        // console.log(typeof (nombre));

        let compra = document.getElementById("importe").value;
        compra = Number(compra);
        let cbSeleccionado = document.getElementById("cbIva").checked;
        // console.log(cbSeleccionado);

        //calculo iva
        let iva = 21; 
        if (cbSeleccionado ==true) { 
            iva=10;
            
        } 
        //calculo total

        let factura = compra + (compra * iva/100);
        


        let mensaje = `${nombre} el precio es ${compra} con el iva ${factura} `;

        document.getElementById("cuenta").textContent = mensaje;


    }