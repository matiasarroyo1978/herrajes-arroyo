        let productosCarro=[];
        const DOMitems = document.querySelector('#productos');
        const DOMbotonVaciar = document.querySelector('.btn-danger');
        const miLocalStorage = window.localStorage;
        let amountProduct = document.querySelector('#count-product');
        let countProduct = 0;
        totalCard = 0;
        let priceTotal = document.querySelector('#price-total')
        let containerBuyCart = document.querySelector('.lista-carrito');
        containerBuyCart.addEventListener('click', deleteProduct);
        const carro = document.querySelector("#carrito");
        let dataProductos;

        document.addEventListener('DOMContentLoaded', () => {
   
           productosCarro = JSON.parse(localStorage.getItem("carro")) || [];
            
        /*--------------   Llamada a BD local con Fetch - Async Function   ---------------*/
            cargarBd();
        });

        async function consultarBd() {
                const resultado = await fetch("/js/productos.json");
                let datos = await resultado.json();
                dataProductos = datos;
                renderizarProductos(dataProductos);
        }
            
        function cargarBd() {
                consultarBd();
                
        }
        


        function renderizarProductos(productos) {
            productos.forEach((info) => {
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
            }
          
            guardarCarritoEnLocalStorage();
        }
        function deleteProduct(e) {
            if (e.target.classList.contains('delete-product')) {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "El producto fue quitado",
                    showConfirmButton: false,
                    timer: 1700,
                });
                const deleteId = e.target.getAttribute('data-id');
        
                productosCarro.forEach(value => {
                    if (value.id == deleteId) {
                        let priceReduce = parseInt(value.precio) * parseInt(value.cantidad);
                        totalCard =  totalCard - priceReduce;
                        totalCard = totalCard.toFixed(2);
                    }
                });
                productosCarro = productosCarro.filter(product => product.id !== deleteId);
                
                countProduct--;
                guardarCarritoEnLocalStorage();
            }
            if (productosCarro.length === 0) {
                priceTotal.innerHTML = 0;
                amountProduct.innerHTML = 0;
                guardarCarritoEnLocalStorage();
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
            function comprobar() {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "El producto fue agregado al carrito",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }    
            totalCard = parseInt(totalCard) + parseInt(infoProduct.precio);
            const exist = productosCarro.some(product => product.id === infoProduct.id);
            if (exist) {
                const pro = productosCarro.map(product => {
                    if (product.id === infoProduct.id) {
                        product.cantidad++;
                        countProduct++;                      
                        return product;
                    } else {
                        return product
                    }
                    
                });
                productosCarro= [...pro];
            } else {
                productosCarro = [...productosCarro, infoProduct]
                countProduct++;
            }
            comprobar();
            loadHtml();
        }
       
        function loadHtml(){
            clearHtml();
            countProduct=0;
            productosCarro.forEach(product => {
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
               
               if(product.cantidad>=1){
                 countProduct= countProduct + product.cantidad;
                 amountProduct.innerHTML = countProduct;
               } else amountProduct.innerHTML = countProduct;                
            });
        }   
        function clearHtml(){
            containerBuyCart.innerHTML = '';
            }
        // function filtrarProductos(e) {
        //         e.preventDefault();
            
        //         const busqueda = $("#buscador").val();
            
        //         const resultado = cerraduras.filter((producto) =>
        //             producto.nombre.toLocaleLowerCase().includes(busqueda.toLocaleLowerCase())
        //         );
            
        //         limpiarProductos();
        //         renderizarProductos(resultado);
        // }
        // function limpiarProductos() {
        //     while (cerraduras.firstChild) {
        //         cerraduras.removeChild(listaProductos.firstChild);
        //     }
        // }
        // searchItems.addEventListener("input", (e) => {
        //         //search items
        //         let search = e.target.value;
        //         console.log(search);
        //         filterData = cerraduras.filter((product) => {
        //           return product.nombre.toLowerCase().includes(search.toLowerCase());
        //         });
        //         renderizarProductos(filterData);
        //         if (filterData.length == 0) {
        //           products.innerHTML = `
        //           <div class="d-flex justify-content-center align-items-center ">
        //           <img src="https://www.wholesalegang.com/assets/imgs/noproduct.png" alt = "Producto No Encontrado">
        //           </div>
        //           `;
        //         }
        // });
        /**
        * Vacia el carrito y vuelve a dibujarlo
        */
        function vaciarCarrito() {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "El carrito fue vaciado",
                showConfirmButton: false,
                timer: 1700,
            });
            // Limpiamos los productos guardados
            productosCarro = [];
            // Renderizamos los cambios
            clearHtml();
            // Borra LocalStorage
            miLocalStorage.clear();
            totalCard = 0;
            countProduct = 0;
            amountProduct.innerHTML = countProduct;
            priceTotal.innerHTML = totalCard;
            
            guardarCarritoEnLocalStorage();
        }
    
        function guardarCarritoEnLocalStorage () {
                miLocalStorage.setItem('carro', JSON.stringify(productosCarro));
            
            
        }
    
        function cargarCarritoDeLocalStorage () {
            // ¿Existe un carrito previo guardado en LocalStorage?
            if (miLocalStorage.getItem('carro') !== null) {
                // Carga la información
                productosCarro = JSON.parse(miLocalStorage.getItem('carro'));
                for (let i=0;i<productosCarro.length;i++){
                    if (productosCarro[i].cantidad > 1){
                        subTotal = productosCarro[i].precio * productosCarro[i].cantidad;
                        totalCard = parseInt(totalCard) + parseInt(subTotal);
                    } else totalCard = parseInt(totalCard) + parseInt(productosCarro[i].precio);
                           countProduct = productosCarro.length;
                }
                priceTotal.innerHTML = totalCard;
                loadHtml();
            }else productosCarro=[];
                  loadHtml();   
                
            }
            
           
    
        // Eventos
        
        DOMbotonVaciar.addEventListener('click', vaciarCarrito);
        // Inicio
        cargarCarritoDeLocalStorage();
        
        
    
        
 
