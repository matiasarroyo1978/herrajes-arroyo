document.addEventListener('DOMContentLoaded', () => {
    let bisagras = [
        {
            id: 44,
            nombre: 'Bisagra T/mun.',
            imagen:'../images/JPG/Bisagra_Municion_100.JPG',
            descripcion: 'BISAGRA TIPO MUNICIÓN 4 PULGADAS',
            precio: 450,
            stock: 20,
            cantidad : 0,
        },
        {
            id: 45,
            nombre: 'Bisagra T/mun.',
            imagen:'../images/JPG/bisagra-tip-3.webp',
            descripcion: 'BISAGRA TIPO MUNICIÓN 3 PULGADAS.',
            precio: 350,
            stock: 20,
            cantidad : 0,
        },
        {
            id: 46,
            nombre: 'Bisagra Ficha',
            imagen:'../images/JPG/Bisagra_2x3.JPG',
            descripcion: 'BISAGRA FICHA 3 AGUJEROS.',
            precio: 180,
            stock: 20,
            cantidad : 0,
        },
        {
            id: 47,
            nombre: 'Bisagra Soldar',
            imagen:'../images/JPG/Bisagra_Municion_Ala_corta.JPG',
            descripcion: 'BISAGRA TIPO MUNICIÓN PARA SOLDAR 4 PULGADAS.',
            precio: 340,
            stock: 20,
            cantidad : 0,
        },
        {
            id: 48,
            nombre: 'Bisagra Soldar',
            imagen:'../images/JPG/Bisagra_Municion_Ala_corta.JPG',
            descripcion: 'BISAGRA TIPO MUNICIÓN PARA SOLDAR 3 PULGADAS.',
            precio: 280,
            stock: 20,
            cantidad : 0,
        },
        {
            id: 49,
            nombre: 'Ficha Muebles',
            imagen:'../images/JPG/Bisagra_ficha_63.JPG',
            descripcion: 'BISAGRA FICHA PARA MUEBLES.',
            precio: 75,
            stock: 20,
            cantidad : 0,
        },
        {
            id: 50,
            nombre: 'Bisagra Mosquera',
            imagen:'../images/JPG/Bisagra_Mosquera.jpg',
            descripcion: 'BISAGRA PARA MOSQUITEROS.',
            precio: 250,
            stock: 20,
            cantidad : 0,
        },
        {
            id: 51,
            nombre: 'Pasador Palanca',
            imagen:'../images/JPG/pasador_a_palanca.jpg',
            descripcion: 'PASADOR DE EMBUTIR A PALANCA PARA PUERTAS DE MADERA.',
            precio: 650,
            stock: 20,
            cantidad : 0,
        },
        {
            id: 52,
            nombre: 'Pasador Embutir Herrero',
            imagen:'../images/JPG/PASADOR_PUERTA_CAJÓN.jpg',
            descripcion: 'PASADOR DE EMBUTIR A PALANCA PARA CARPINTERÍA METÁLICA.',
            precio: 750,
            stock: 20,
            cantidad : 0,
        },
        {
            id: 53,
            nombre: 'Bisagra Munición',
            imagen:'../images/JPG/Municion-100x75x3.jpeg',
            descripcion: 'BISAGRA MUNICIÓN 4 PULGADAS.',
            precio: 1300,
            stock: 20,
            cantidad : 0,
        },
        {
            id: 54,
            nombre: 'Bisagra Munición',
            imagen:'../images/JPG/MUNICION-78X78X3.jpg',
            descripcion: 'BISAGRA MUNICIÓN 3 PULGADAS.',
            precio: 1200,
            stock: 20,
            cantidad : 0,
        },
    ];

    let carrito = [];
        const DOMitems = document.querySelector('#productos');
        const DOMbotonVaciar = document.querySelector('.btn-danger');
        //const miLocalStorage = window.localStorage;
        let amountProduct = document.querySelector('#count-product');
        let countProduct = 0;
        totalCard = 0;
        let priceTotal = document.querySelector('#price-total')
        let containerBuyCart = document.querySelector('.lista-carrito');
        containerBuyCart.addEventListener('click', deleteProduct);
        
        function renderizarProductos() {
           
            bisagras.forEach((info) => {
                // Estructura
                const miNodoCard = document.createElement('div');
                miNodoCard.classList.add('card');
                
               // miNodoCard.classList.add('card-header');
                const miNodoCardHeader = document.createElement('div');
                miNodoCardHeader.classList.add('card-header');
                const miNodoImagen = document.createElement('img');
                miNodoImagen.setAttribute('src', info.imagen);
    
                const miNodoCardBody = document.createElement('div');
                miNodoCardBody.classList.add('card-body');
                
                // Body
                
                // Titulo
                const miNodoTitle = document.createElement('p');
                miNodoTitle.classList.add('card-title');
                miNodoTitle.textContent = info.nombre;
                const miNodoDescripcion = document.createElement('p');
                miNodoDescripcion.textContent = info.descripcion;   
                // Precio
                const miNodoPrecio = document.createElement('h6');
                miNodoPrecio.setAttribute('price',info.precio);
                miNodoPrecio.textContent = 	`$${info.precio}`;
                            
                // Boton 
                const miNodoBoton = document.createElement('button');
                miNodoBoton.classList.add('btn-add-cart');
                miNodoBoton.textContent = 'Agregar al Carrito';
                miNodoBoton.setAttribute('marcador', info.id);
                miNodoBoton.addEventListener('click',addProduct);
        
                // Insertamos
                miNodoCardBody.appendChild(miNodoCardHeader);
                miNodoCardBody.appendChild(miNodoImagen);
                miNodoCardBody.appendChild(miNodoTitle);
                miNodoCardBody.appendChild(miNodoDescripcion);
                miNodoCardBody.appendChild(miNodoPrecio);
                miNodoCardBody.appendChild(miNodoBoton);
                miNodoCard.appendChild(miNodoCardBody);
                DOMitems.appendChild(miNodoCard);
            
            });   
        }
        function addProduct(e){
            e.preventDefault();
            if (e.target.classList.contains('btn-add-cart')) {
                const selectProduct = e.target.parentElement; 
                readTheContent(selectProduct);
                //console.log(selectProduct);
            }
          
            //guardarCarritoEnLocalStorage();
        }
        function deleteProduct(e) {
            if (e.target.classList.contains('delete-product')) {
                const deleteId = e.target.getAttribute('data-id');
        
                carrito.forEach(value => {
                    if (value.id == deleteId) {
                        let priceReduce = parseInt(value.precio) * parseInt(value.cantidad);
                        totalCard =  totalCard - priceReduce;
                        totalCard = totalCard.toFixed(2);
                    }
                });
                carrito = carrito.filter(product => product.id !== deleteId);
                
                countProduct--;
            }
            if (carrito.length === 0) {
                priceTotal.innerHTML = 0;
                amountProduct.innerHTML = 0;
            }
            loadHtml();
        }
        function readTheContent(product){
            const infoProduct = {
                nombre: product.querySelector('.card-title').textContent,
                precio: product.querySelector('h6').getAttribute('price'),
                id: product.querySelector('button').getAttribute('marcador'),
                cantidad: 1,
            }
            //console.log(infoProduct.precio);
            //console.log(totalCard);
            totalCard = parseInt(totalCard) + parseInt(infoProduct.precio);
            //console.log(totalCard);
            const exist = carrito.some(product => product.id === infoProduct.id);
            if (exist) {
                const pro = carrito.map(product => {
                    if (product.id === infoProduct.id) {
                        product.cantidad++;
                        return product;
                    } else {
                        return product
                    }
                });
                carrito = [...pro];
            } else {
                carrito = [...carrito, infoProduct]
                countProduct++;
            }
            //console.log(infoProduct);
            loadHtml();
        }
       
        function loadHtml(){
            clearHtml();
            carrito.forEach(product => {
                const {nombre, precio, cantidad, id} = product;
                const row = document.createElement('thead');
                row.innerHTML = `
                        <tr>
                            <th>Nombre: ${nombre} </th>
                            <th>Precio: $${precio} </th>
                            <th>Cantidad: ${cantidad} </th>
                        </tr>
                    <span class="delete-product" data-id="${id}">X</span>
              `;
        
                containerBuyCart.appendChild(row);
                priceTotal.innerHTML = totalCard;
                //console.log(priceTotal)
                amountProduct.innerHTML = countProduct;
                //console.log(totalCard);
    
            });
        }   
        function clearHtml(){
            containerBuyCart.innerHTML = '';
            }
        
        
        /**
        * Vacia el carrito y vuelve a dibujarlo
        */
        function vaciarCarrito() {
            // Limpiamos los productos guardados
            carrito = [];
            // Renderizamos los cambios
            clearHtml();
            // Borra LocalStorage
            localStorage.clear();
            totalCard = 0;
            countProduct = 0;
            amountProduct.innerHTML = countProduct;
            priceTotal.innerHTML = totalCard;
        }
    
        // function guardarCarritoEnLocalStorage () {
        //     miLocalStorage.setItem('carrito', JSON.stringify(carrito));
        // }
    
        // function cargarCarritoDeLocalStorage () {
        //     // ¿Existe un carrito previo guardado en LocalStorage?
        //     if (miLocalStorage.getItem('carrito') !== null) {
        //         // Carga la información
        //         carrito = JSON.parse(miLocalStorage.getItem('carrito'));
        //         loadHtml();
        //         priceTotal.innerHTML = totalCard;
        //         amountProduct.innerHTML = countProduct;
        //     }
        // }
    
        // Eventos
        DOMbotonVaciar.addEventListener('click', vaciarCarrito);
    
        // Inicio
        //cargarCarritoDeLocalStorage();
        renderizarProductos();
});