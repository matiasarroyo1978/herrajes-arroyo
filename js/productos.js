let productosCarro=[];
const DOMbotonVaciar = document.querySelector('.btn-danger');
const carro = document.querySelector("#carrito");
const miLocalStorage = window.localStorage;
let countProduct = 0;
let totalCard = 0;
let priceTotal = document.querySelector('.price-total')
let containerBuyCart = document.querySelector('.lista-carrito');
containerBuyCart.addEventListener('click', deleteProduct);
let amountProduct = document.querySelector('.count-product');
const finalizarCompra = document.querySelector('.finalizar-compra');
document.addEventListener('DOMContentLoaded', () => {
   
    productosCarro = JSON.parse(localStorage.getItem("carro")) || [];
     
 /*--------------   Llamada a BD local con Fetch - Async Function   ---------------*/
     cargarCarritoDeLocalStorage();
 });

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
    finalizarCompra.addEventListener('click', cerrarCompra);
    function cerrarCompra(e){
        if (e.target.classList.contains('finalizar-compra')) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Compra Realizada. Muchas Gracias.",
                showConfirmButton: false,
                timer: 1700,
            });
            //vaciarCarrito();
            productosCarro = [];
            clearHtml();
            // Borra LocalStorage
            miLocalStorage.clear();
            totalCard = 0;
            countProduct = 0;
            amountProduct.innerHTML = countProduct;
            priceTotal.innerHTML = totalCard;
        
            guardarCarritoEnLocalStorage();
        }
    }    
    DOMbotonVaciar.addEventListener('click', vaciarCarrito);