export const marcas = [
    { id: 1, nombre: 'Apple' },
    { id: 2, nombre: 'Samsung' },
    { id: 3, nombre: 'Xiaomi' },
    { id: 4, nombre: 'Motorola' }
  ];
  
  export const celulares = [
    {
      id: 1,
      nombre: 'iPhone 14 Pro',
      descripcion: 'Pantalla Super Retina XDR, chip A16 Bionic, cámara de 48 MP',
      precio: 1299,
      marcaId: 1,
      fotos: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpwxR2plMrWrCqlMvoWvSZpeyp-XRETYC9Vw&s'
      ]
    },
    {
      id: 2,
      nombre: 'Samsung Galaxy S23',
      descripcion: 'Pantalla AMOLED 6.1", Snapdragon 8 Gen 2, cámara triple',
      precio: 999,
      marcaId: 2,
      fotos: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRagJjMmCej8kcwjcT2EGxT5Jp7Q1QuNjtJcg&s'
      ]
    },
    {
      id: 3,
      nombre: 'Xiaomi 13 Pro',
      descripcion: 'Pantalla AMOLED 6.73", cámara Leica, carga rápida 120W',
      precio: 899,
      marcaId: 3,
      fotos: [
        'https://m.media-amazon.com/images/I/51G7tyeELvL._AC_SL1088_.jpg'
      ]
    },
    {
      id: 4,
      nombre: 'Motorola Edge 40',
      descripcion: 'Pantalla pOLED, MediaTek Dimensity 8020, resistente al agua',
      precio: 699,
      marcaId: 4,
      fotos: [
        'https://atacadoiguazu.com.ar/wp-content/uploads/2024/08/celular_motorola_edge_40_neo_xt_2307_dual_chip_256gb_5g_ram_12gb_177099_550x550.jpg'
      ]
    },
    {
      id: 5,
      nombre: 'Motorola Volwsvagen Cuope A3',
      descripcion: 'Pantalla pOLED, MediaTek Dimensity 8020, resistente al agua',
      precio: 699,
      marcaId: 4,
      fotos: [
        'https://acdn-us.mitiendanube.com/stores/002/912/448/products/proyecto-nuevo-2023-05-31t154043-9331-867576eb384e5c9d5d16855585097902-640-0.jpg'
      ]
    },
    {
      id: 6,
      nombre: 'Xiaomi 17 super mega pro',
      descripcion: 'Pantalla AMOLED 6.73", cámara Leica, carga rápida 120W',
      precio: 899,
      marcaId: 3,
      fotos: [
        'https://prod.adb.col.movistar.es/static-emp/terminales/terminales744x558/xiaomi/xiaomi-redmi-note-14-5g-vista-01.png'
      ]
    },
    {
      id: 7,
      nombre: 'Samsung Galaxy 43 y medio',
      descripcion: 'Pantalla AMOLED 6.1", Snapdragon 8 Gen 2, cámara triple',
      precio: 999,
      marcaId: 2,
      fotos: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWbxWYXPyBxQnqnqD9wBy4sJxYhDNrMrvIDA&s'
      ]
    },
    {
      id: 8,
      nombre: 'iPhone 16 Pro',
      descripcion: 'Pantalla super mega archi grande y blindada',
      precio: 1499,
      marcaId: 1,
      fotos: [
        'data:image/jpeg;base64,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'
      ]
    },
  ];