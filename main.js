const productList = [
  {
    id: 1,
    nombre: 'Coca-Cola',
    precio: 15,
    cantidad: 1,
    descripcion: 'Refresco',
    imagen: './src/cocaCola.png',
    ml: 350,
  },
  {
    id: 2,
    nombre: 'Fanta',
    precio: 13,
    cantidad: 1,
    descripcion: 'Refresco',
    imagen: './src/fanta.png',
    ml: 750,
  },
  {
    id: 3,
    nombre: 'Jarritos',
    precio: 12,
    cantidad: 10,
    descripcion: 'Refresco',
    imagen: './src/jarritos.png',
    ml: 100,
  },
  {
    id: 4,
    nombre: 'Boing de Mango',
    precio: 15,
    cantidad: 1,
    descripcion: 'Jugo de fruta',
    imagen: './src/boing.png',
    ml: 100,
  },
  {
    id: 5,
    nombre: 'Sprite',
    precio: 12,
    cantidad: 1,
    descripcion: 'Refresco',
    imagen: './src/sprite.png',
    ml: 100,
  },
  {
    id: 6,
    nombre: 'Pepsi',
    precio: 15,
    cantidad: 1,
    descripcion: 'Refresco',
    imagen: './src/pepsi.png',
    ml: 100,
  },
  {
    id: 1,
    nombre: 'Coca-Cola',
    precio: 15,
    cantidad: 1,
    descripcion: 'Refresco',
    imagen: './src/cocaCola.png',
    ml: 350,
  },
  {
    id: 2,
    nombre: 'Fanta',
    precio: 13,
    cantidad: 1,
    descripcion: 'Refresco',
    imagen: './src/fanta.png',
    ml: 750,
  },
  {
    id: 3,
    nombre: 'Jarritos',
    precio: 12,
    cantidad: 10,
    descripcion: 'Refresco',
    imagen: './src/jarritos.png',
    ml: 100,
  },
  {
    id: 4,
    nombre: 'Boing de Mango',
    precio: 15,
    cantidad: 1,
    descripcion: 'Jugo de fruta',
    imagen: './src/boing.png',
    ml: 100,
  },
  {
    id: 5,
    nombre: 'Sprite',
    precio: 12,
    cantidad: 1,
    descripcion: 'Refresco',
    imagen: './src/sprite.png',
    ml: 100,
  },
  {
    id: 6,
    nombre: 'Pepsi',
    precio: 15,
    cantidad: 1,
    descripcion: 'Refresco',
    imagen: './src/pepsi.png',
    ml: 100,
  },
]

let carritoCompras = {}
let carritoTotal = 0
const total = document.getElementById('total')
const tableProducts = document.getElementById('tableProducts')
const form = document.getElementById('form')
const reset = document.getElementById('reset')
const search = document.getElementById('search')

reset.addEventListener('click', (e) => {
  buildProductList(productList)
})

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const searchInput = event.target.search.value.toUpperCase()
  const ProductListFilter = productList.filter((product) => {
    if (searchInput == product.nombre.toUpperCase()) {
      return product
    }
  })

  if (ProductListFilter.length == 0) {
    alert("No existe en inventory");
  }
  else {
    return buildProductList(ProductListFilter)
  }
})

search.addEventListener('keyup', (event) => {
  event.preventDefault()
  console.log(event.target.value.length)
  const searchInput = event.target.value.toUpperCase()

  const ProductListFilter = productList.filter((product) => {
    if (searchInput == product.nombre.toUpperCase().substring(0, event.target.value.length)) {
      return product
    }
  })
  return buildProductList(ProductListFilter)
})

const comprar = (nombre, precio, id) => {
  // console.log(nombre,precio, id)
  alert(
    `Hola, gracias por comprar el producto ${nombre} por un precio de $ ${precio}`,
  )

  // El metodo hasOwnProperty() devuelve un booleano indicando si un objeto tiene una propiedad especificada.
  if (carritoCompras.hasOwnProperty(id)) {
    carritoCompras[id].cantidad++
  } else {
    carritoCompras[id] = { nombre, precio, id }
    carritoCompras[id].cantidad = 1
  }

  carritoTotal += parseInt(carritoCompras[id].precio)
  total.innerHTML = `Total: $ ${carritoTotal}`

  tableProducts.innerHTML = ''

  for (const key in carritoCompras) {
    const childElement = document.createElement('tr')
    childElement.innerHTML = `
            <td>${carritoCompras[key].nombre}</td>
            <td>${carritoCompras[key].precio}</td>
            <td>${carritoCompras[key].cantidad}</td>
        `
    tableProducts.appendChild(childElement)
  }
}

const buildProductList = (productList1) => {
  //select the parent HTML tag
  var getParentElement = document.getElementById('productList')

  getParentElement.innerHTML = ''

  //Loop the product list array in order to generate the <section> </section>
  productList1.forEach((line) => {
    //creating the section cards
    const createSection = document.createElement('section')
    //adding a class
    createSection.classList.add('product') //<section class="product"> </section>
    //creating childs into the parent element section
    createSection.innerHTML = `
        <img src="${line.imagen}" alt="">
        <h2>${line.nombre}</h2>
        <h3>Price: <span>$ ${line.precio} </span> </h3>
        <p>Quantity: <span>${line.cantidad}</span> </p>
        <p>Description: <span>${line.descripcion}</span> </p>
        <p>Ml: <span>${line.ml} </span> </p>
        <button onclick="comprar('${line.nombre}', '${line.precio}', '${line.id}')">Buy </button>
        
        `
    //
    getParentElement.appendChild(createSection)
  })
}

window.addEventListener('DOMContentLoaded', () => {
  buildProductList(productList)
})