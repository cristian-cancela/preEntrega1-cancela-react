const products = [
  {
    id: 1,
    nombre: "buzo naranja",
    img: 'https://i.postimg.cc/SNQNybYB/buzo-naranja-2.jpg',
    precio: 10.99,
    descripcion: "prenda con un diseño clásico y elegante. Disponible en una variedad de colores y tallas para adaptarse a cualquier estilo y ocasión.",
    stock: 20,
  },
  {
    id: 2,
    nombre: "buzo verde",
    img: 'https://i.postimg.cc/qvsCQb7J/oferta-buzo-verde-editar.jpg',
    precio: 14.99,
    descripcion: "prenda con un diseño clásico y elegante. Disponible en una variedad de colores y tallas para adaptarse a cualquier estilo y ocasión.",
    stock: 15,
  },
  {
    id: 3,
    nombre: "campera celeste",
    img: 'https://i.postimg.cc/mrSTxd2L/campera-celeste-ambos-sexos.jpg',
    precio: 19.99,
    descripcion: "prenda con un diseño clásico y elegante. Disponible en una variedad de colores y tallas para adaptarse a cualquier estilo y ocasión.",
    stock: 10,
  },
  {
    id: 4,
    nombre: "campera marron",
    img: 'https://i.postimg.cc/fT5Fh6Yg/campera-marron.jpg',
    precio: 7.99,
    descripcion: "prenda con un diseño clásico y elegante. Disponible en una variedad de colores y tallas para adaptarse a cualquier estilo y ocasión.",
    stock: 25,
  },
  {
    id: 5,
    nombre: "chaqueta amarilla",
    img: 'https://i.postimg.cc/C5n1VjQc/chaqueta-amarilla-para-ni-o.jpg',
    precio: 12.99,
    descripcion: "prenda con un diseño clásico y elegante. Disponible en una variedad de colores y tallas para adaptarse a cualquier estilo y ocasión.",
    stock: 30,
  },
  {
    id: 6,
    nombre: "pantalones",
    img: 'https://i.postimg.cc/g0Kt9Hgd/pantalones-en-oferta.jpg',
    precio: 9.99,
    descripcion: "prenda con un diseño clásico y elegante. Disponible en una variedad de colores y tallas para adaptarse a cualquier estilo y ocasión.",
    stock: 18,
  },
  {
    id: 7,
    nombre: "quimono",
    img: 'https://i.postimg.cc/7YwZNxjR/quimono.jpg',
    precio: 16.99,
    descripcion: "prenda con un diseño clásico y elegante. Disponible en una variedad de colores y tallas para adaptarse a cualquier estilo y ocasión.",
    stock: 12,
  },
  {
    id: 8,
    nombre: "remera azul",
    img: 'https://i.postimg.cc/1RYvGtgm/remera-azul.jpg',
    precio: 22.99,
    descripcion: "prenda con un diseño clásico y elegante. Disponible en una variedad de colores y tallas para adaptarse a cualquier estilo y ocasión.",
    stock: 8,
  },
  {
    id: 9,
    nombre: "remera negra",
    img: 'https://i.postimg.cc/662BL8Hz/remera-con-descuento-en-ofertas.jpg',
    precio: 27.99,
    descripcion: "prenda con un diseño clásico y elegante. Disponible en una variedad de colores y tallas para adaptarse a cualquier estilo y ocasión.",
    stock: 5,
  },
  {
    id: 10,
    nombre: "vestido blanco",
    img: 'https://i.postimg.cc/BZxV0st4/vestido-blanco.jpg',
    precio: 31.99,
    descripcion: "prenda con un diseño clásico y elegante. Disponible en una variedad de colores y tallas para adaptarse a cualquier estilo y ocasión.",
    stock: 22,
  },
  {
  id: 11,
  nombre: "remera pintada",
    img: 'https://i.postimg.cc/BnJMTw53/remera-con-pintura.jpg',
    precio: 31.99,
    descripcion: "prenda con un diseño clásico y elegante. Disponible en una variedad de colores y tallas para adaptarse a cualquier estilo y ocasión.",
    stock: 22,
  },
  {
    id: 12,
    nombre: "remera violeta",
    img: 'https://i.postimg.cc/sxgwFTmS/remera-violeta.jpg',
    precio: 25.99,
    descripcion: "prenda con un diseño clásico y elegante. Disponible en una variedad de colores y tallas para adaptarse a cualquier estilo y ocasión.",
    stock: 15,
  },
 
];

export const AsyncMock = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products)
    }, 2000)
  })
}

export default AsyncMock;
