export const myPromise = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => resolve (
            [
                {
                    id: 5,
                    title: 'Proteina Star Nutrition 1Kg',
                    description: 'Proteina de la marca Star Nutrition para maximizar tus resultados a la hora de conseguir masa muscular',
                    price: 2000,
                    picture:{
                        pictureUrl: 'https://army.com.ar/images/thumbs/0000181_natural-whey-protein-2lb_360.jpeg',
                        alt: "Proteina Star Nutrition"
                    },
                    stock: 4,
                    category: "proteinas",
                    freeShipping: true,
                    tamano: "1 Kilo",
                    sabor: "Vainilla"

                },
                {
                    id: 11,
                    title: 'Thermo Fuel Max Star Nutri',
                    description: 'Es un quemador de grasas termogénico con una poderosa fórmula',
                    price: 1600,
                    picture:{
                        pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_857558-MLA30035243885_042019-O.webp',
                        alt: "Quemador de grasa Star Nutrition"
                    },
                    stock: 7,
                    category: "quemadores",
                    freeShipping: true,
                    tamano: "120 cápsulas",
                    sabor: "-"
                },
                {
                    id: 2,
                    title: 'Mutant Mass con N.O',
                    description: ' Más proteína de suero ultra concentrado, más fibra, más vitaminas, única fórmula con precursores de óxido nítrico. Bajo en grasas y bajo en azúcar.',
                    price: 2500,
                    picture:{
                        pictureUrl: 'https://www.suplementosoutlet.com.ar/wp-content/uploads/2017/11/mutan-mass-2.jpg',
                        alt: "Ganador de peso Star Nutrition"
                    },
                    stock: 2,
                    category: "ganadores-de-peso",
                    freeShipping: true,
                    tamano: "1 Kilo",
                    sabor: "Chocolate"
                },
                {
                    id: 23,
                    title: 'Muscle Max de ENA',
                    description: 'Muscle Max es un excelente recuperador, elaborado con aminoácidos ramificados, esenciales y cristalinos en forma de "L" que mejoran el desarrollo muscular y disminuyen la degradación de proteínas durante los ejercicios intensos.',
                    price: 1800,
                    picture:{
                        pictureUrl: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/279/419/products/diseno-sin-titulo-581-917cfd08c52074991c15980232488244-640-0.png',
                        alt: "BCAA de ENA"
                    },
                    stock: 15,
                    category: "aminoacidos",
                    freeShipping: true,
                    tamano: "90 cápsulas",
                    sabor: "-"
                }
            ]
        ), 500)
    })
}