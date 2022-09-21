document.addEventListener("DOMContentLoaded", () => {
    let maderas = [
      {
        id: 66,
        nombre: "Tirante 3x6 Cepillado",
        imagen: "../images/JPG/3x6.webp",
        descripcion: "TIRANTE 3X6 CEPILLADO 5,50 MTS.",
        precio: 6500,
        stock: 20,
        cantidad: 0,
      },
      {
        id: 67,
        nombre: "Tirante 2x6 Cepillado",
        imagen: "../images/JPG/2x6().jpg",
        descripcion: "TIRANTE 2X6 CEPILLADO 4,20 MTS.",
        precio: 2700,
        stock: 20,
        cantidad: 0,
      },
      {
        id: 68,
        nombre: "Machimbre 1/2 pulgada",
        imagen: "../images/JPG/machimbre-media.jpg",
        descripcion: "MACHIMBRE 1/2 PULGADA PRIMERA",
        precio: 1250,
        stock: 20,
        cantidad: 0,
      },
      {
        id: 69,
        nombre: "Machimbre 3/4 pulgada",
        imagen: "../images/JPG/machimbre-3.jpg",
        descripcion: "MACHIMBRE 3/4 PULGADA PRIMERA",
        precio: 1950,
        stock: 20,
        cantidad: 0,
      },
      {
        id: 70,
        nombre: "Machimbre 1 pulgada",
        imagen: "../images/JPG/machimbre-1.jpg",
        descripcion: "MACHIMBRE 1 PULGADA PRIMERA",
        precio: 2500,
        stock: 20,
        cantidad: 0,
      },
      {
        id: 71,
        nombre: "Tablero liston corrido",
        imagen: "../images/JPG/tablero.liston.jpg",
        descripcion: "TABLERO LISTON CORRIDO 18 MM.",
        precio: 6500,
        stock: 20,
        cantidad: 0,
      },
      {
        id: 72,
        nombre: "Tablero Clear",
        imagen: "../images/JPG/tablero-clear.jpg",
        descripcion: "TABLERO FINGER CLEAR 22 MM.",
        precio: 9500,
        stock: 20,
        cantidad: 0,
      },
      {
        id: 73,
        nombre: "Tirante 3x6 multilaminado",
        imagen: "../images/JPG/3x6-finger.webp",
        descripcion: "TITANTE 3X6 MULTILAMINADO 12 MTS. LARGO",
        precio: 27000,
        stock: 20,
        cantidad: 0,
      },
      {
        id: 74,
        nombre: "Viga 3x8 multilaminada",
        imagen: "../images/JPG/viga3x8.webp",
        descripcion: "VIGA 3X8 MULTILAMINADA 12 MTS. LARGO",
        precio: 36000,
        stock: 20,
        cantidad: 0,
      },
      {
        id: 75,
        nombre: "Viga 3x10 multilaminada",
        imagen: "../images/JPG/viga3x10.jpg",
        descripcion: "VIGA 3X10 MULTILMINADA 12 MTS. LARGO",
        precio: 45000,
        stock: 20,
        cantidad: 0,
      },
      {
        id: 76,
        nombre: "Viga 4x8 multilaminada",
        imagen: "../images/JPG/viga4x8.jpg",
        descripcion: "VIGA 4X8 MULTILMINADA 12 MTS. LARGO",
        precio: 47500,
        stock: 20,
        cantidad: 0,
      },
      {
        id: 75,
        nombre: "Viga 4x10 multilaminada",
        imagen: "../images/JPG/viga4x10.webp",
        descripcion: "VIGA 4X10 MULTILMINADA 12 MTS. LARGO",
        precio: 59500,
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
  
    function renderizarProductos() {
      maderas.forEach((info) => {
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
          totalCard = 0;
          countProduct = 0;
          carrito = JSON.parse(miLocalStorage.getItem('carrito'));
          for (let i=0;i<carrito.length;i++){
              if (carrito[i].cantidad > 1){
                  totalCard = carrito[i].precio * carrito[i].cantidad;
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
  