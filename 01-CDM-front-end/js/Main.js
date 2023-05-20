//  por el metodo de js de getElementById, llamaremos los id que le asignamos a cada seccion de nuestro documento cartelera. Y ahora vamos a jugar con la clase active, anteriormente la teniamos como ocultar pero para hacerlo más adaptable lo dejamos con una sola clase para evitar confusiones con el tema de los id y el manejo de clases.

function animadas(){

    let contAventuras = document.getElementById('aventuras');
    let contAnimadas = document.getElementById('animadas');
    let contDramas = document.getElementById('dramas');

    let botonAventuras = document.getElementById('btn-aventuras');
    let botonDramas = document.getElementById('btn-dramas');
    let botonAnimadas = document.getElementById('btn-animadas');

   
    botonDramas.classList.remove('active');
    contDramas.classList.remove('active');
 
    botonAnimadas.classList.add('active');
    contAnimadas.classList.add('active');

    contAventuras.classList.remove('active');
    botonAventuras.classList.remove('active');

}

function dramas(){

    let contAventuras = document.getElementById('aventuras');
    let contAnimadas = document.getElementById('animadas');
    let contDramas = document.getElementById('dramas');

    let botonAventuras = document.getElementById('btn-aventuras');
    let botonDramas = document.getElementById('btn-dramas');
    let botonAnimadas = document.getElementById('btn-animadas');

   
    botonDramas.classList.add('active');
    contDramas.classList.add('active');
 
    botonAnimadas.classList.remove('active');
    contAnimadas.classList.remove('active');

    contAventuras.classList.remove('active');
    botonAventuras.classList.remove('active');

}

function aventuras(){

    let contAventuras = document.getElementById('aventuras');
    let contAnimadas = document.getElementById('animadas');
    let contDramas = document.getElementById('dramas');

    let botonAventuras = document.getElementById('btn-aventuras');
    let botonDramas = document.getElementById('btn-dramas');
    let botonAnimadas = document.getElementById('btn-animadas');

    contAventuras.classList.add('active');
    botonAventuras.classList.add('active');

    botonDramas.classList.remove('active');
    contDramas.classList.remove('active');
 
    botonAnimadas.classList.remove('active');
    contAnimadas.classList.remove('active');

}

function modal(){
    let modal = document.getElementById('modal');

    modal.classList.add('active');
}

function cerrarM(){
    let modal = document.getElementById('modal');

    modal.classList.remove('active');
}

function activarMenu(){

    let contMenu = document.getElementById('menu');
    contMenu.classList.toggle('active');
    
}



















