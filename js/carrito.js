    // Variables
    // const cerradurasKallay = [
    //     {
    //         id: 1,
    //         nombre: 'Kallay 5002',
    //         imagen:'../images/JPG/k5002.jpg',
    //         precio: 5900,
    //         stock: 20,
    //     },
    //     {
    //         id: 2,
    //         nombre: 'Kallay 5006',
    //         imagen:'../images/JPG/k5006.jpg',
    //         precio: 5900,
    //         stock: 20,
    //     },
    //     {
    //         id: 3,
    //         nombre: 'Kallay 5003',
    //         imagen:'../images/JPG/k5003.jpg',
    //         precio: 5900,
    //         stock: 20,
    //     },
    //     {
    //         id: 4,
    //         nombre: 'Kallay 4000',
    //         imagen:'../images/JPG/k4000.jpg',
    //         precio: 5300,
    //         stock: 20,
    //     },
    //     {
    //         id: 5,
    //         nombre: 'Kallay 4007',
    //         imagen:'../images/JPG/k7007.jpg',
    //         precio: 5900,
    //         stock: 20,
    //     },
    //     {
    //         id: 6,
    //         nombre: 'Kallay 4008',
    //         imagen:'../images/JPG/k4008.jpg',
    //         precio: 5900,
    //         stock: 20,
    //     },
    //     {
    //         id: 7,
    //         nombre: 'Kallay 4002',
    //         imagen:'../images/JPG/k4002.jpg',
    //         precio: 4300,
    //         stock: 20,
    //     },
    //     {
    //         id: 8,
    //         nombre: 'Kallay 4003',
    //         imagen:'../images/JPG/k4003.jpg',
    //         precio: 4300,
    //         stock: 20,
    //     },
    //     {
    //         id: 9,
    //         nombre: 'Kallay 4005',
    //         imagen:'../images/JPG/k4005.jpg',
    //         precio: 3300,
    //         stock: 20,
    //     },
    //     {
    //         id: 10,
    //         nombre: 'Kallay 4006',
    //         imagen:'../images/JPG/k4006.jpg',
    //         precio: 3300,
    //         stock: 20,
    //     },
    //     {
    //         id: 11,
    //         nombre: 'Kallay 3002',
    //         imagen:'../images/JPG/k3002.jpg',
    //         precio: 3300,
    //         stock: 20,
    //     },
    //     {
    //         id: 12,
    //         nombre: 'Kallay 503',
    //         imagen:'../images/JPG/k503.jpg',
    //         precio: 1750,
    //         stock: 20,
    //     },
    //     {
    //         id: 13,
    //         nombre: 'Kallay 507',
    //         imagen:'../images/JPG/k507.jpg',
    //         precio: 3300,
    //         stock: 20,
    //     },
    //     {
    //         id: 14,
    //         nombre: 'Kallay 517',
    //         imagen:'../images/JPG/k517.jpg',
    //         precio: 2900,
    //         stock: 20,
    //     },
    //     {
    //         id: 15,
    //         nombre: 'Kallay 4010',
    //         imagen:'../images/JPG/k4010.jpg',
    //         precio: 3800,
    //         stock: 20,
    //     },
    //     {
    //         id: 16,
    //         nombre: 'Kallay 4015',
    //         imagen:'../images/JPG/k4015.jpg',
    //         precio: 5500,
    //         stock: 20,
    //     }
    // ]

    let allContainerCart = document.querySelector('.row');
    let containerBuyCart = document.querySelector('.lista-carrito');
    let priceTotal = document.querySelector('.price-total')
    let amountProduct = document.querySelector('.count-product');
    let vaciarCarrito = document.querySelector('.btn-danger');
    let finalizarCompra = document.querySelector('.finalizar-compra');

    let buyThings = [];
    let totalCard = 0;
    let countProduct = 0;
    
    //functions
   
    loadEventListenrs();
    function loadEventListenrs(){
        allContainerCart.addEventListener('click', addProduct);
    
        containerBuyCart.addEventListener('click', deleteProduct);
    }
    function addProduct(e){
        e.preventDefault();
        if (e.target.classList.contains('btn-add-cart')) {
            const selectProduct = e.target.parentElement; 
            readTheContent(selectProduct);
            console.log(selectProduct);
        }
        
    }
    
    function deleteProduct(e) {
        if (e.target.classList.contains('delete-product')) {
            const deleteId = e.target.getAttribute('data-id');
    
            buyThings.forEach(value => {
                if (value.id == deleteId) {
                    let priceReduce = parseInt(value.price) * parseInt(value.amount);
                    totalCard =  totalCard - priceReduce;
                    totalCard = totalCard.toFixed(2);
                }
            });
            buyThings = buyThings.filter(product => product.id !== deleteId);
            
            countProduct--;
        }
        if (buyThings.length === 0) {
            priceTotal.innerHTML = 0;
            amountProduct.innerHTML = 0;
        }
        loadHtml();
    }
    
    function readTheContent(product){
        const infoProduct = {
            title: product.querySelector('.title').textContent,
            price: product.querySelector('div span').textContent,
            id: product.querySelector('a').getAttribute('data-id'),
            amount: 1,
        }
        totalCard = parseInt(totalCard) + parseInt(infoProduct.price);
        totalCard = totalCard.toFixed(2);
        const exist = buyThings.some(product => product.id === infoProduct.id);
        if (exist) {
            const pro = buyThings.map(product => {
                if (product.id === infoProduct.id) {
                    product.amount++;
                    return product;
                } else {
                    return product
                }
            });
            buyThings = [...pro];
        } else {
            buyThings = [...buyThings, infoProduct]
            countProduct++;
        }
        console.log(infoProduct);
        loadHtml();
    }
    
    function loadHtml(){
        clearHtml();
        buyThings.forEach(product => {
            const {title, price, amount, id} = product;
            const row = document.createElement('thead');
            //row.classList.add('div');
            row.innerHTML = `
                    <tr>
                        <th>Nombre: ${title} </th>
                        <th>Precio: ${price} </th>
                        <th>Cantidad: ${amount} </th>
                    </tr>
                <span class="delete-product" data-id="${id}">X</span>
          `;
    
            containerBuyCart.appendChild(row);
            priceTotal.innerHTML = totalCard;
            
            amountProduct.innerHTML = countProduct;
            console.log(totalCard);

        });
    }
    function clearHtml(){
        containerBuyCart.innerHTML = '';
    }