const products = [
  {
    id: "1",
    name: "VAPORESSO LUXE",
    price: 5000,
    category: "FULL KITS",
    img: "https://static.wixstatic.com/media/002a61_182b1f6a617b476f83d232f68b6f46cf~mv2.jpg/v1/fill/w_800,h_758,al_c,q_85/002a61_182b1f6a617b476f83d232f68b6f46cf~mv2.jpg",
    stock: 10,
    description: "Descripcion de Vaporesso luxe",
  },
  {
    id: "2",
    name: "ARGUS GT",
    price: 4000,
    category: "FULL KITS",
    img: "https://static.wixstatic.com/media/002a61_3281eea0c88a475b8a5d4f1b373732bc~mv2.jpg/v1/fill/w_777,h_777,al_c,q_85,usm_0.66_1.00_0.01/002a61_3281eea0c88a475b8a5d4f1b373732bc~mv2.jpg",
    stock: 8,
    description: "Descripcion de Argus GT",
  },
  {
    id: "3",
    name: "DRAG 3 TPPX",
    price: 8000,
    category: "FULL KITS",
    img: "https://static.wixstatic.com/media/002a61_c32913db69424c09a8b9d42cde92c0e0~mv2.jpg/v1/fill/w_600,h_600,al_c,q_85/002a61_c32913db69424c09a8b9d42cde92c0e0~mv2.jpg",
    stock: 5,
    description: "Descripcion de Drag 3",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};
