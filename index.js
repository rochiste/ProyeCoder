
class producto{
    constructor (id, nombre, precio, stock, img) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.img = img;
    }
}

const producto1 = new producto(1,"Pijama verano Barbie", 2500, 25, " ./img/pijbarbie.jpg");
const producto2 = new producto(2,"Pijama verano Dalmata",  2500, 25);
const producto3 = new producto(3,"Pijama verano Looney", 2500, 25);
const producto4 = new producto(4, "Shorty Print", 2300, 50);
const producto5 = new producto(5, "Shorty Rayito", 2300, 50);
const producto6 = new producto(6, "Shorty Margarita", 2300, 50);
const producto7 = new producto(7, "Shorty Rana", 2300, 50);
const producto8 = new producto(8, "Shorty Lila", 2300, 50);
const producto9 = new producto(9, "Remeron Rugrats", 1900, 30);
const producto10 = new producto(10, "Remeron Leon", 1900, 30);
const producto11 = new producto(11, "Remeron Looney", 1900, 30);

const productosArray = [
    producto1,
    producto2,
    producto3,
    producto4,
    producto5,
    producto6,
    producto7,
    producto8,
    producto9,
    producto10,
    producto11,
  ]

const divproductos = document.querySelector('#divproductos')

productosArray.forEach((producto) => {
    divproductos.innerHTML += `
      <div id="${producto.id}" class="card cardProducto">
      <div class="card-body">
      <h5 class="card-title">${producto.nombre}</h5>
      <p class="card-text">$${producto.precio}</p>
      <button id="${producto.id}" class="btn btn-primary">AGREGAR</button>
      </div>
      </div>
      `
  })

  const carrito = []
const botonesAgregar = document.querySelectorAll('.btn-primary')

botonesAgregar.forEach((boton) => {
    boton.onclick = () => {
      const producto = productosArray.find(
        (prod) => prod.id === parseInt(boton.id)
      )
  
      const productoCarrito = {
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        cantidad: 1,
      }
  
      const indexCarrito = carrito.findIndex((prod) => prod.id === producto.id)
  
      if (indexCarrito === -1) {
        carrito.push(productoCarrito)
      } else {
        carrito[indexCarrito].cantidad += 1
      }
      console.log(carrito)
    }
  })

  const botonFinalizar = document.querySelector('#finalizar')
botonFinalizar.onclick = () => {
  const totalCompra = carrito
    .map((prod) => prod.precio * prod.cantidad)
    .reduce((elem1, elem2) => elem1 + elem2)
  alert(`El total de tu compra es ${totalCompra}`)
}

const formularioUsuario = document.getElementById('formulario')
const titulo = document.getElementById('titulo')
const nombreUsuario = document.getElementById('nombre')
const apellidoUsuario = document.getElementById('apellido')

const infoUsuario = {}

formularioUsuario.onsubmit = (event) =>{
    infoUsuario.nombre = nombreUsuario.value
    infoUsuario.apellido = apellidoUsuario.value
    localStorage.setItem('infoUsuario',JSON.stringify(infoUsuario))
}

const infoUsuarioStorage = JSON.parse(localStorage.getItem('infoUsuario'))
console.log(infoUsuarioStorage)
if(infoUsuarioStorage.nombre !== "" || infoUsuarioStorage.apellido !== ""){
    titulo.innerText = `Hola ${infoUsuarioStorage.nombre} ${infoUsuarioStorage.apellido}, bienvenido de vuelta`
}



