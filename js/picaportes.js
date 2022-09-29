document.addEventListener("DOMContentLoaded", () => {
  let picaportes = [
    {
      id: 55,
      nombre: "Manija Biselada",
      imagen: "../images/JPG/manija-biselada.jpeg",
      descripcion: "MANIJA BISELADA REFORZADA BRONCE",
      precio: 2800,
      stock: 20,
      cantidad: 0,
    },
    {
      id: 56,
      nombre: "Manija Pampa",
      imagen: "../images/JPG/manija-pampa.jpeg",
      descripcion: "MANIJA PAMPA BRONCE",
      precio: 5500,
      stock: 20,
      cantidad: 0,
    },
    {
      id: 57,
      nombre: "Manija Trocadero",
      imagen: "../images/JPG/manija-trocadero.jpeg",
      descripcion: "MANIJA TROCADERO BRONCE.",
      precio: 12000,
      stock: 20,
      cantidad: 0,
    },
    {
      id: 58,
      nombre: "Manija Hera",
      imagen: "../images/JPG/manija-hera.jpeg",
      descripcion: "MANIJA HERA BRONCE.",
      precio: 12500,
      stock: 20,
      cantidad: 0,
    },
    {
      id: 59,
      nombre: "Manijon Recto",
      imagen: "../images/JPG/manijon-recto.jpeg",
      descripcion: "MANIJON RECTO BRONCE",
      precio: 4800,
      stock: 20,
      cantidad: 0,
    },
    {
      id: 60,
      nombre: "Manijon Sanatorio",
      imagen: "../images/JPG/manijon-sanatorio.jpeg",
      descripcion: "MANIJON SANATORIO BRONCE",
      precio: 6000,
      stock: 20,
      cantidad: 0,
    },
    {
      id: 61,
      nombre: "Manijon Hera",
      imagen: "../images/JPG/manijon-hera.jpeg",
      descripcion: "MANIJON HERA BRONCE",
      precio: 14500,
      stock: 20,
      cantidad: 0,
    },
    {
      id: 62,
      nombre: "Manijon Trocadero",
      imagen: "../images/JPG/manijon-trocadero.jpeg",
      descripcion: "MANIJON TROCADERO BRONCE.",
      precio: 14500,
      stock: 20,
      cantidad: 0,
    },
    {
      id: 63,
      nombre: "Pomela Bronce",
      imagen: "../images/JPG/pomela-bronce.jpeg",
      descripcion: "POMELA BRONCE 160MM.",
      precio: 2000,
      stock: 20,
      cantidad: 0,
    },
    {
      id: 64,
      nombre: "Pomela Bronce",
      imagen: "../images/JPG/pomela-bronce.jpeg",
      descripcion: "POMELA BRONCE 140MM.",
      precio: 1800,
      stock: 20,
      cantidad: 0,
    },
    {
      id: 65,
      nombre: "Pomela Bronce",
      imagen: "../images/JPG/pomela-bronce.jpeg",
      descripcion: "POMELA BRONCE 110MM.",
      precio: 1600,
      stock: 20,
      cantidad: 0,
    },
  ];

  let carrito = [];
  const DOMitems = document.querySelector("#productos");
  const DOMbotonVaciar = document.querySelector(".btn-danger");
  const miLocalStorage = window.localStorage;
  let amountProduct = document.querySelector("#count-product");
  let countProduct = 0;
  totalCard = 0;
  let priceTotal = document.querySelector("#price-total");
  let containerBuyCart = document.querySelector(".lista-carrito");
  containerBuyCart.addEventListener("click", deleteProduct);
  const finalizarCompra = document.querySelector('.finalizar-compra');
  function renderizarProductos() {
    picaportes.forEach((info) => {
      // Estructura
      const miNodoCard = document.createElement("div");
      miNodoCard.classList.add("card");

      // miNodoCard.classList.add('card-header');
      const miNodoCardHeader = document.createElement("div");
      miNodoCardHeader.classList.add("card-header");
      const miNodoImagen = document.createElement("img");
      miNodoImagen.setAttribute("src", info.imagen);

      const miNodoCardBody = document.createElement("div");
      miNodoCardBody.classList.add("card-body");

      // Body

      // Titulo
      const miNodoTitle = document.createElement("p");
      miNodoTitle.classList.add("card-title");
      miNodoTitle.textContent = info.nombre;
      const miNodoDescripcion = document.createElement("p");
      miNodoDescripcion.textContent = info.descripcion;
      // Precio
      const miNodoPrecio = document.createElement("h6");
      miNodoPrecio.setAttribute("price", info.precio);
      miNodoPrecio.textContent = `$${info.precio}`;

      // Boton
      const miNodoBoton = document.createElement("button");
      miNodoBoton.classList.add("btn-add-cart");
      miNodoBoton.textContent = "Agregar al Carrito";
      miNodoBoton.setAttribute("marcador", info.id);
      miNodoBoton.addEventListener("click", addProduct);

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

        carrito.forEach(value => {
            if (value.id == deleteId) {
                let priceReduce = parseInt(value.precio) * parseInt(value.cantidad);
                totalCard =  totalCard - priceReduce;
                totalCard = totalCard.toFixed(2);
            }
        });
        carrito = carrito.filter(product => product.id !== deleteId);
        
        countProduct--;
        guardarCarritoEnLocalStorage();
    }
    if (carrito.length === 0) {
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
    const exist = carrito.some(product => product.id === infoProduct.id);
    if (exist) {
        const pro = carrito.map(product => {
            if (product.id === infoProduct.id) {
                product.cantidad++;
                countProduct++;                      
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
    comprobar();
    loadHtml();
}

function loadHtml(){
    clearHtml();
    countProduct=0;
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
       
       if(product.cantidad>=1){
         countProduct= countProduct + product.cantidad;
         amountProduct.innerHTML = countProduct;
       } else amountProduct.innerHTML = countProduct;                
    });
}   
function clearHtml(){
    containerBuyCart.innerHTML = '';
    }


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
    carrito = [];
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
        miLocalStorage.setItem('carrito', JSON.stringify(carrito));
    
    
}

function cargarCarritoDeLocalStorage () {
  // ¿Existe un carrito previo guardado en LocalStorage?
  if (miLocalStorage.getItem('carrito') !== null) {
      // Carga la información
      carrito = JSON.parse(miLocalStorage.getItem('carrito'));
      for (let i=0;i<carrito.length;i++){
          if (carrito[i].cantidad > 1){
              subTotal = carrito[i].precio * carrito[i].cantidad;
              totalCard = parseInt(totalCard) + parseInt(subTotal);
          } else totalCard = parseInt(totalCard) + parseInt(carrito[i].precio);
                 countProduct = carrito.length;
      }
      priceTotal.innerHTML = totalCard;
      loadHtml();
  }else carrito=[];
        loadHtml();   
      
  }
    
   

// Eventos

DOMbotonVaciar.addEventListener('click', vaciarCarrito);
// Inicio
cargarCarritoDeLocalStorage();
renderizarProductos();
});
