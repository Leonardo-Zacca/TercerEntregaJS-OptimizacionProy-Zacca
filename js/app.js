const productosArray = [
    //Impresoras
    {
        id: 'Impresora01',
        titulo: 'Impresora Creality 3D Ender 3',
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_611506-MLA49842850686_052022-V.webp',
        categoria: {
            nombre: 'Impresoras',
            id: 'Impresoras'
        },
        precio: 65000
    },

    {
        id: 'Impresora02',
        titulo: 'Impresora Hellbot Magna Se',
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_749001-MLA52141336514_102022-V.webp',
        categoria: {
            nombre: 'Impresoras',
            id: 'Impresoras'
        },
        precio: 79000
    },

    {
        id: 'Impresora03',
        titulo: 'Impresora Artillery Genius',
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_614500-MLA42238163094_062020-V.webp',
        categoria: {
            nombre: 'Impresoras',
            id: 'Impresoras'
        },
        precio: 118000
    },

    {
        id: 'Impresora04',
        titulo: 'Impresora Artillery Hornet',
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_817658-MLA51619022699_092022-V.webp',
        categoria: {
            nombre: 'Impresoras',
            id: 'Impresoras'
        },
        precio: 67500
    },

    //Componentes

    {
        id: 'Componente01',
        titulo: 'Termistor 350 Grados',
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_954794-MLA44796405521_022021-V.webp',
        categoria: {
            nombre: 'componentes',
            id: 'componentes'
        },
        precio: 950
    },

    {
        id: 'Componente02',
        titulo: 'Tubo teflón Pfte Capricorn 4mmx1.9mm',
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_739463-MLA48744183268_012022-V.webp',
        categoria: {
            nombre: 'componentes',
            id: 'componentes'
        },
        precio: 2300
    },

    {
        id: 'Componente03',
        titulo: 'Brazo Extrusor Idler Arm',
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_797150-MLA44679147485_012021-V.webp',
        categoria: {
            nombre: 'componentes',
            id: 'componentes'
        },
        precio: 1850
    },

    {
        id: 'Componente04',
        titulo: 'Kit Extrusor Creality Metalico Ender 3',
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_739593-MLA45551292146_042021-V.webp',
        categoria: {
            nombre: 'componentes',
            id: 'componentes'
        },
        precio: 2750
    },

    //Filamentos

    {
        id: 'Filamento01',
        titulo: 'Filamento 3D PLA Printalot 1.75mm 1Kg Blanco',
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_842884-MLA48658563085_122021-V.webp',
        categoria: {
            nombre: 'filamentos',
            id: 'filamentos'
        },
        precio: 3285
    },

    {
        id: 'Filamento02',
        titulo: 'Filamento Pla Impresora 3d',
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_954549-MLA46371004734_062021-V.webp',
        categoria: {
            nombre: 'filamentos',
            id: 'filamentos'
        },
        precio: 2500
    },

    {
        id: 'Filamento03',
        titulo: 'Filamento 3D PLA 1.75mm dorado',
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_660335-MLA48658563472_122021-V.webp',
        categoria: {
            nombre: 'filamentos',
            id: 'filamentos'
        },
        precio: 5500
    },

    {
        id: 'Filamento04',
        titulo: 'Filamento 3D PLA Grilon3 Rojo',
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_837812-MLA48657674775_122021-V.webp',
        categoria: {
            nombre: 'filamentos',
            id: 'filamentos'
        },
        precio: 3245
    }

];

const contenedorProductos = document.querySelector("#contenedorProducto");

function cargarProductos() {
    productosArray.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img class="productoImagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="productoDatos">
            <h3 class="productoTitulo">${producto.titulo}</h3>
            <p class="productoPrecio">${producto.precio}</p>
        <button class="productoAgregar" id="${producto.id}" >Agregar</button>
        </div>
        `;

        contenedorProductos.append(div);

    })

}

cargarProductos();