import productos from './db/productos'; // Asegúrate de que este archivo exista y esté bien importado
import productosb from './db/productosb';
import principal from './db/principal';
import './sass/main.scss'

const start = () => {
    console.warn('Se cargó todo el HTML');


    const botones = document.getElementById('botoncitos');

    const boton1 = document.createElement('button');
    boton1.textContent = 'Guitarristas';
    boton1.id = 'imag'
    botones.appendChild(boton1);

    const boton3 = document.createElement('button');
    boton3.textContent = 'Guitarras';
    botones.appendChild(boton3);

    const boton2 = document.createElement('button');
    boton2.textContent = 'Descripcion';
    botones.appendChild(boton2);


    // Seleccionamos los elementos directamente
    const contenedorProductos = document.getElementById('container-productos');
    // const boton1 = document.getElementById('imag');
    // const boton2 = document.getElementById('caract');
    // const boton3 = document.getElementById('inicio')



    // Agregamos el evento al botón 1

    let htmla = ''
    //debugger
    productos.forEach(prod => {
        console.log(prod)
        //debugger
        // html = html + '' === html += ''
        htmla += `<div class="card">
            <article class="card__article">
                <div class="card__image-container">
                    <img class="card__image" src="${prod.foto}" alt="${prod.nombre}">
                </div>
                <div class="card__content">
                    <h2 class="card__heading">${prod.nombre}</h2>
                    <div class="card__description">
                        <p>${prod.descripcion}</p>
                    </div>
                </div>
            </article>
        </div>`
    })
    // debugger
    console.log(htmla) /* Voy a tener varios div.card * 5 -> */

    contenedorProductos.innerHTML = htmla



    
   boton1.addEventListener('click', () => {
        console.log('Botón 1 clickeado');

        // Variable para guardar el HTML de los productos
        let html = '';
        
        // Generamos el HTML para cada producto
        productos.forEach(prod => {
            html += `
            <div class="card">
                <article class="card__article">
                    <div class="card__image-container">
                        <img class="card__image" src="${prod.foto}" alt="${prod.nombre}">
                    </div>
                    <div class="card__content">
                        <h2 class="card__heading">${prod.nombre}</h2>
                        <div class="card__description">
                            <p>${prod.descripcion}</p>
                        </div>
                    </div>
                </article>
            </div>`;
        });

        // Insertamos el HTML generado en el contenedor
        contenedorProductos.innerHTML = html;
    });



    boton2.addEventListener('click', () => {
        console.log('Botón 2 clickeado');

        // Variable para guardar el HTML de los productos
        let html2 = '';

        // Generamos el HTML para cada producto
        productosb.forEach(prod => {
            html2 += `
            <div class="card">
            
        <article class="card__article">
            <div class="card__content">
              <div class="card_marcocaract">
                <h2 class="card__heading">Características</h2>
                <ul class="card__features">
                    <li>${prod.c1}</li>
                    <li>${prod.c2}</li>
                    <li>${prod.c3}</li>
                    <li>${prod.c4}</li>
                    <li>${prod.c5}</li>
                    <li>${prod.c6}</li>
                    <li>${prod.c7}</li>
                    <li>${prod.c8}</li>
                    <li>${prod.c9}</li>
                    <li>${prod.c10}</li>
                    <li>${prod.c11}</li>
                    <li>${prod.c12}</li> 
                    <li>${prod.c13}</li>   
                    <li>${prod.c14}</li>
                    <li>${prod.c15}</li> 
                </ul>
              </div>  
                <h2 class="card__subheading">${prod.nombre}</h2>
                <p class="card__description">${prod.descripcion}</p>

            </div>
        </article>
    </div>`;
        });

        // Insertamos el HTML generado en el contenedor
        contenedorProductos.innerHTML = html2;
    });



    boton3.addEventListener('click', () => {
        console.log('Botón 3 clickeado');

        // Variable para guardar el HTML de los productos
        let html3 = '';

        // Generamos el HTML para cada producto
        principal.forEach(prod => {
            html3 += `
            <div class="card">
                <article class="card__article">
                    <div class="card__image-container">
                        <img class="card__image" src="${prod.foto}" alt="${prod.nombre}">
                    </div>
                    <div class="card__content">
                        <h2 class="card__heading">${prod.nombre}</h2>
                        <div class="card__description">
                            <p>${prod.descripcion}</p>
                        </div>
                    </div>
                </article>
            </div>`;
        });

        // Insertamos el HTML generado en el contenedor
        contenedorProductos.innerHTML = html3;
    });

};

// Esperamos a que el DOM esté completamente cargado
window.addEventListener('DOMContentLoaded', start);
