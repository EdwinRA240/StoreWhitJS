const productList = [
  {
    id: 1,
    nombre: "Suero de leche",
    precio: 10,
    cantidad: 10,
    descripcion: "Suero de leche",
    imagen: "https://via.placeholder.com/200",
    ml: 100,
  },
  {
    id: 2,
    nombre: "Suero de leche",
    precio: 10,
    cantidad: 10,
    descripcion: "Suero de leche",
    imagen: "https://via.placeholder.com/200",
    ml: 100,
  },
  {
    id: 3,
    nombre: "Suero de leche",
    precio: 10,
    cantidad: 10,
    descripcion: "Suero de leche",
    imagen: "https://via.placeholder.com/200",
    ml: 100,
  },
  {
    id: 4,
    nombre: "Suero de leche",
    precio: 10,
    cantidad: 10,
    descripcion: "Suero de leche",
    imagen: "https://via.placeholder.com/200",
    ml: 100,
  },
  {
    id: 5,
    nombre: "Suero de leche",
    precio: 10,
    cantidad: 10,
    descripcion: "Suero de leche",
    imagen: "https://via.placeholder.com/200",
    ml: 100,
  },
  {
    id: 6,
    nombre: "Suero de leche",
    precio: 10,
    cantidad: 10,
    descripcion: "Suero de leche",
    imagen: "https://via.placeholder.com/200",
    ml: 100,
  },
];

const comprar = () => {
  console.log();
}

const buildProductList = () => {
  //select the parent HTML tag
  var getParentElement = document.getElementById("productList");

  //Loop the product list array in order to generate the <section> </section>
  productList.forEach((line) => {
    //creating the section cards
    const createSection = document.createElement("section");
    //adding a class
    createSection.classList.add("product"); //<section class="product"> </section>
    //creating childs into the parent element section
    createSection.innerHTML = `
        <img src="${line.imagen}" alt="">
        <h2>${line.nombre}</h2>
        <h3>Price: <span>$ ${line.precio} </span> </h3>
        <p>Quantity: <span>${line.cantidad}</span> </p>
        <p>Description: <span>${line.descripcion}</span> </p>
        <p>Ml: <span>${line.ml} </span> </p>
        <button onclick="buy()">Buy </button>
        `;
    //
    getParentElement.appendChild(createSection);
  });
};

buildProductList();
