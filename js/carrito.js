document.addEventListener('DOMContentLoaded', () => {
//Variables
    const cerraduras = [
        {
            id: 1,
            nombre: 'Kallay 5002',
            imagen:'../images/JPG/k5002.jpg',
            descripcion: 'CERRADURA DE SEGURIDAD KALLAY MODELO 5002 PARA PORTON O PUERTA CORREDIZA PARANTE ANGOSTO 40MM.',
            precio: 5900,
            stock: 20,
            cantidad : 0,
        },
        {
            id: 2,
            nombre: 'Kallay 5006',
            imagen:'../images/JPG/k5006.jpg',
            descripcion: 'CERRADURA DE SEGURIDAD KALLAY MODELO 5006 PARA PARANTE ANGOSTO 40MM.',
            precio: 5900,
            stock: 20,
            cantidad : 0,
        },
        {
            id: 3,
            nombre: 'Kallay 5003',
            imagen:'../images/JPG/k5003.jpg',
            descripcion: 'CERRADURA DE SEGURIDAD KALLAY MODELO 5003 PARA PUERTAS VAIVEN PARANTE ANGOSTO 40MM.',
            precio: 5900,
            stock: 20,
            cantidad : 0,
        },
        {
            id: 4,
            nombre: 'Kallay 4000',
            imagen:'../images/JPG/k4000.jpg',
            descripcion: 'CERRADURA DE SEGURIDAD KALLAY MODELO 4000 CON 6 PLAQUETAS ACERO INOXIDABLE DOBLE PERNO.',
            precio: 5300,
            stock: 20,
            cantidad : 0,
        },
        {
            id: 5,
            nombre: 'Kallay 4007',
            imagen:'../images/JPG/k4007.jpg',
            descripcion: 'CERRADURA DE SEGURIDAD KALLAY MODELO 4007 CON 6 PLAQUETAS ACERO INOXIDABLE PARA PUERTAS CONSORCIO.',
            precio: 5900,
            stock: 20,
            cantidad : 0,
        },
        {
            id: 6,
            nombre: 'Kallay 4008',
            imagen:'../images/JPG/k4008.jpg',
            descripcion: 'CERRADURA DE SEGURIDAD KALLAY MODELO 4008 CON 6 PLAQUETAS ACERO INOXIDABLE Y 3 PERNOS GIRATORIOS DE ACERO.',
            precio: 5900,
            stock: 20,
            cantidad : 0,
        },
        {
            id: 7,
            nombre: 'Kallay 4002',
            imagen:'../images/JPG/k4002.jpg',
            descripcion: 'CERRADURA DE SEGURIDAD MEDIANA KALLAY MODELO 4002 CON 4 PLAQUETAS ACERO Y DOBLE PERNO.',
            precio: 4300,
            stock: 20,
            cantidad : 0,
        },
        {
            id: 8,
            nombre: 'Kallay 4003',
            imagen:'../images/JPG/k4003.jpg',
            descripcion: 'CERRADURA DE SEGURIDAD MEDIANA KALLAY MODELO 4003 CON 4 PLAQUETAS ACERO Y PERNO RECTANGULAR.',
            precio: 4300,
            stock: 20,
            cantidad : 0,
        },
        {
            id: 9,
            nombre: 'Kallay 4005',
            imagen:'../images/JPG/k4005.jpg',
            descripcion: 'CERRADURA DE SEGURIDAD CHICA FRENTE ANGOSTO KALLAY MODELO 4005 CON 4 PLAQUETAS ACERO.',
            precio: 3300,
            stock: 20,
            cantidad : 0,
        },
        {
            id: 10,
            nombre: 'Kallay 4006',
            imagen:'../images/JPG/k4006.jpg',
            descripcion: 'CERRADURA DE SEGURIDAD CHICA FRENTE ANCHO KALLAY MODELO 4006 CON 4 PLAQUETAS ACERO.',
            precio: 3300,
            stock: 20,
            cantidad : 0,
        },
        {
            id: 11,
            nombre: 'Kallay 3002',
            imagen:'../images/JPG/k3002.jpg',
            descripcion: 'CERRADURA DE SEGURIDAD CHICA PARA PARANTES ANGOSTOS KALLAY MODELO 3002 CON 4 PLAQUETAS ACERO.',
            precio: 3300,
            stock: 20,
            cantidad : 0,
        },
        {
            id: 12,
            nombre: 'Kallay 503',
            imagen:'../images/JPG/k503.jpg',
            descripcion: 'CERRADURA PARA PUERTAS DE INTERIOR FRENTE ANGOSTO KALLAY MODELO 503.',
            precio: 1750,
            stock: 20,
            cantidad : 0,
        },
        {
            id: 13,
            nombre: 'Kallay 507',
            imagen:'../images/JPG/k507.jpg',
            descripcion: 'CERRADURA PARA PUERTAS DE INTERIOR CORREDIZA KALLAY MODELO 507.',
            precio: 3300,
            stock: 20,
            cantidad : 0,
        },
        {
            id: 14,
            nombre: 'Kallay 517',
            imagen:'../images/JPG/k517.jpg',
            descripcion: 'CERROJO PARA PUERTAS DE INTERIOR CORREDIZO KALLAY MODELO 517.',
            precio: 2900,
            stock: 20,
            cantidad : 0,
        },
        {
            id: 15,
            nombre: 'Kallay 4010',
            imagen:'../images/JPG/k4010.jpg',
            descripcion: 'CERROJO PARA PUERTAS DE EXTERIOR CON 6 PLAQUETAS DE ACERO INOXIDABLE KALLAY MODELO 4010.',
            precio: 3800,
            stock: 20,
            cantidad : 0,
        },
        {
            id: 16,
            nombre: 'Kallay 4015',
            imagen:'../images/JPG/k4015.jpg',
            descripcion: 'CERROJO PARA PUERTAS CORREDIZAS DE EXTERIOR CON 6 PLAQUETAS DE ACERO INOXIDABLE KALLAY MODELO 4015.',
            precio: 5500,
            stock: 20,
            cantidad : 0,
        },
        {
            id: 17,
            nombre: 'Candex 101',
            imagen:'../images/JPG/101_Candex.jpg',
            descripcion: 'CERRADURA CANDEX 101 CON 6 PLAQUETAS DE BRONCE DOBLE PERNO.',
            precio: 7500,
            stock: 20,
            cantidad : 0,
        },
       {
            id: 18,
            nombre: 'Candex 115',
            imagen:'../images/JPG/115_Candex.jpg',
            descripcion: 'CERRADURA CANDEX 115 FRENTE ANCHO HIERRO NIQUELADO PERNO RECTANGULAR.',
            precio: 3500,
            stock: 20,
            cantidad : 0,
        },   
       {
            id: 19,
            nombre: 'Candex 116',
            imagen:'../images/JPG/116_Candex.jpg',
            descripcion: 'CERRADURA CANDEX 116 FRENTE ANGOSTO HIERRO NIQUELADO PERNO RECTANGULAR.',
            precio: 3500,
            stock: 20,
            cantidad : 0,
        },
        {
            id: 20,
            nombre: 'Candex 117',
            imagen:'../images/JPG/117_Candex.jpg',
            descripcion: 'CERRADURA CANDEX 117 MEDIANA FRENTE ANCHO HIERRO NIQUELADO PERNO RECTANGULAR.',
            precio: 4500,
            stock: 20,
            cantidad : 0,
        },
        {
            id: 21,
            nombre: 'Candex 117 D/Perno',
            imagen:'../images/JPG/117_Candex_red.jpg',
            descripcion: 'CERRADURA CANDEX 117 MEDIANA DOBLE PERNO.',
            precio: 4500,
            stock: 20,
            cantidad : 0,
        },  
        {
            id: 22,
            nombre: 'Candex 124',
            imagen:'../images/JPG/124_Candex.jpg',
            descripcion: 'CERRADURA CANDEX 124 FRENTE ANCHO HIERRO NIQUELADO PERNO RECTANGULAR.',
            precio: 3000,
            stock: 20,
            cantidad : 0,
        },  
        {
            id: 23,
            nombre: 'Candex 125',
            imagen:'../images/JPG/125_Candex.jpg',
            descripcion: 'CERRADURA CANDEX 125 FRENTE ANGOSTO HIERRO NIQUELADO PERNO RECTANGULAR.',
            precio: 3000,
            stock: 20,
            cantidad : 0,
        },  
        {
            id: 24,
            nombre: 'Candex 123',
            imagen:'../images/JPG/123-Candex.jpg',
            descripcion: 'CERRADURA CANDEX 123 PARA PUERTAS Y PORTONES CORREDIZOS.',
            precio: 4900,
            stock: 20,
            cantidad : 0,
        },
    ];       

    
    
    let carrito = [];
    const divisa = '$';
    const DOMitems = document.querySelector('#productos');
    // const DOMcarrito = document.querySelector('#carrito');
    // const DOMtotal = document.querySelector('.price-total');
    const DOMbotonVaciar = document.querySelector('.btn-danger');
    // const miLocalStorage = window.localStorage;
    let amountProduct = document.querySelector('#count-product');
    let countProduct = 0;
    totalCard = 0;
    let priceTotal = document.querySelector('#price-total')
    let containerBuyCart = document.querySelector('.lista-carrito');
    containerBuyCart.addEventListener('click', deleteProduct);
    
    function renderizarProductos() {
        cerraduras.forEach((info) => {
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
            miNodoPrecio.textContent = `${info.precio}${divisa}`;
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
            console.log(selectProduct);
        }
      
       // guardarCarritoEnLocalStorage();
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
            precio: product.querySelector('h6').textContent,
            id: product.querySelector('button').getAttribute('marcador'),
            cantidad: 1,
        }
        console.log(infoProduct.precio);
        console.log(totalCard);
        totalCard = parseInt(totalCard) + parseInt(infoProduct.precio);
        //priceTotal = priceTotal.toFixed(2);
        console.log(totalCard);
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
        console.log(infoProduct);
        loadHtml();
    }
   
    function loadHtml(){
        clearHtml();
        carrito.forEach(product => {
            const {nombre, precio, cantidad, id} = product;
            const row = document.createElement('thead');
            //row.classList.add('div');
            row.innerHTML = `
                    <tr>
                        <th>Nombre: ${nombre} </th>
                        <th>Precio: ${precio} </th>
                        <th>Cantidad: ${cantidad} </th>
                    </tr>
                <span class="delete-product" data-id="${id}">X</span>
          `;
    
            containerBuyCart.appendChild(row);
            priceTotal.innerHTML = totalCard;
            console.log(priceTotal)
            amountProduct.innerHTML = countProduct;
            console.log(totalCard);

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
    //     }
    // }

    // Eventos
    DOMbotonVaciar.addEventListener('click', vaciarCarrito);

    // Inicio
    //cargarCarritoDeLocalStorage();
    renderizarProductos();
   
    
});  
