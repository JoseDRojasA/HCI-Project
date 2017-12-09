import { Rute } from './../interfaces/rute.class';
export class Database {

    rutes: {
        [id: string]: Rute;
    };

    users: {
        [id: string]: string
    };

    constructor() {
        this.users = {};
        this.rutes = {
            'San Gil Salvaje': {
                name: 'San Gil Salvaje',
                stars: 5,
                plan: 'Aventura',
                image: 'route_2.png',
                towns: [{
                    name: 'Bucaramanga',
                    department: 'Santander',
                    places: [
                        {
                            name: 'Mesa de los santos',
                            activities: [
                                {
                                    name: 'Montar bicicleta',
                                    scores: [
                                        5, 4, 4
                                    ],
                                    time: '180',
                                    comments: [{
                                        user: 'Álvaro Ramirez',
                                        stars: [63, 6],
                                        comment: 'Muy buen plan. Se pueden tomar excelentes fotos',
                                        image: 'user_1.png',
                                        date: '22 nov'
                                    }, {
                                        user: 'Tatiana Moreno',
                                        stars: [28, 0],
                                        comment: 'Vistas espectaculares',
                                        image: 'user_6.jpg',
                                        date: '12 sep'
                                    }, {
                                        user: 'Hector Vargas',
                                        stars: [45, 0],
                                        comment: 'Uno de mis sitios favoritos para visitar en Santander',
                                        image: 'user_7.jpg',
                                        date: '13 jun'
                                    }],
                                    images: ['activity_1.jpg'],
                                    price: 0,
                                    recommendations: ['Llevar bebida para hidratarse',
                                        'Se puede llevar bicicleta todoterreno o de ruta']
                                },
                                {
                                    name: 'Visitar el mercado campesino',
                                    scores: [
                                        5, 4, 4
                                    ],
                                    time: '120',
                                    comments: [
                                        {
                                            user: 'Juan Lopez',
                                            stars: [4, 5, 4],
                                            comment: 'Muy bonito',
                                            image: 'user_2.png',
                                            date: '08 nov'
                                        }
                                    ],
                                    images: ['activity_2.jpg'],
                                    price: 0,
                                    recommendations: ['Llevar presupuesto por que puede ser un poco costoso']
                                }
                            ],
                            recommendations: [
                            ],
                            comments: [
                            ]
                        },
                        {
                            name: 'Parque Nacional del Chicamocha',
                            activities: [
                                {
                                    name: 'Parapente chicamocha',
                                    scores: [4, 4, 4],
                                    time: '40',
                                    price: 5,
                                    images: ['activity_3.jpg'],
                                    comments: [
                                        {
                                            user: 'Liz Rangel',
                                            stars: [5, 5, 4],
                                            comment: 'Al principio te da un poco de miedo' +
                                                ' pero luego de botarse es lo mejor',
                                            image: 'user_3.png',
                                            date: '22 sep'
                                        }
                                    ],
                                    recommendations: [
                                        'No apto para gente con problemas del corazón',
                                        'Solamente tirate y disfruta'
                                    ]
                                }
                            ],
                            recommendations: [],
                            comments: []
                        },
                        {
                            name: 'Curiti',
                            activities: [
                                {
                                    name: 'Cueva de la Vaca',
                                    scores: [5, 5, 4],
                                    time: '120',
                                    comments: [
                                        {
                                            user: 'Tato Albarracin',
                                            stars: [5, 5, 5],
                                            comment: 'Es muy genial ese lugar',
                                            image: 'user_4.png',
                                            date: '17 feb'
                                        }
                                    ],
                                    images: [
                                        'activity_4.jpg'
                                    ],
                                    price: 20,
                                    recommendations: [
                                        'No apto para claustrofóbicos',
                                        'Llevar protección para el agua para las cámaras'
                                    ]
                                }
                            ],
                            recommendations: [],
                            comments: []
                        }
                    ]
                }]
            },
            'Chicamocha Extremo': {
                name: 'Chicamocha Extremo',
                stars: 5,
                plan: 'Aventura',
                image: 'route_1.png',
                towns: [
                    {
                        name: 'Chicamocha',
                        department: 'Santander',
                        places: [
                            {
                                name: 'Parque Nacional del Chicamocha',
                                activities: [
                                    {
                                        name: 'Teleférico',
                                        scores: [5, 5, 4],
                                        time: '60',
                                        comments: [{
                                            user: 'Juliana Arango',
                                            stars: [4, 4, 3],
                                            comment: 'Mucha fila, toca mandar a alguien a guardar puesto',
                                            image: 'user_8.jpg',
                                            date: '17 abr'
                                        }],
                                        images: ['activity_5.jpg'],
                                        price: 10,
                                        recommendations: [
                                            'Es un poco costoso pero llegas bastante rapido desde la mesa de los Santos'
                                        ]
                                    },
                                    {
                                        name: 'Columpio',
                                        scores: [5, 4, 3],
                                        time: '60',
                                        comments: [{
                                            user: 'Angie Gutierez',
                                            stars: [4, 5, 4],
                                            comment: 'Llegar temprano ya que se forma mucha cola',
                                            image: 'user_5.png',
                                            date: '17 oct'
                                        }],
                                        images: ['activity_6.jpg'],
                                        price: 10,
                                        recommendations: [
                                            'Llegar lo antes posible ya que suele formarse mucha fila'
                                        ]
                                    }
                                ],
                                comments: [],
                                recommendations: []
                            }
                        ]
                    }
                ]
            }
        };
    }
}