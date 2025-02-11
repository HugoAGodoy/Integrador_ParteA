import productos from './db/productos'; 
import productosb from './db/productosb';
import principal from './db/principal';
import './sass/main.scss'

const start = () => {
    console.warn('Se cargó todo el HTML');

    const botones = document.getElementById('botoncitos');

    const boton1 = document.createElement('button');
    boton1.textContent = 'Musicos';
    boton1.id = 'imag'
    botones.appendChild(boton1);

    const boton3 = document.createElement('button');
    boton3.textContent = 'Guitarras';
    boton3.id ='instr'
    botones.appendChild(boton3);

    const boton2 = document.createElement('button');
    boton2.textContent = 'Descripcion';
    boton2.id="descrip"
    botones.appendChild(boton2);


   
    const contenedorProductos = document.getElementById('container-productos');
   

   

    let htmla = ''
   
    productos.forEach(prod => {
        console.log(prod)
       
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
   
    console.log(htmla) 
    contenedorProductos.innerHTML = htmla



    
   boton1.addEventListener('click', () => {
        console.log('Botón 1 clickeado');

        
        let html = '';
        
       
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

       
        contenedorProductos.innerHTML = html;
    });



    boton2.addEventListener('click', () => {
        console.log('Botón 2 clickeado');

       
        let html2 = '';

       
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
               <div class="title-descrip">
                <h2 class="card__subheading">${prod.nombre}</h2>
                <p class="card__description">${prod.descripcion}</p>
               </div> 
            </div>
        </article>
    </div>`;
        });

        
        contenedorProductos.innerHTML = html2;
    });



    boton3.addEventListener('click', () => {
        console.log('Botón 3 clickeado');

        
        let html3 = '';

       
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

        
        contenedorProductos.innerHTML = html3;
    });



};


window.addEventListener('DOMContentLoaded', start);


