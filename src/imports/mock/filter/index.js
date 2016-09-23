const typeWork1 = {
    id: 1,
    description: 'Pedreiro',
    types: [
        {
            id: 1,
            description: 'Cobertura',
            types: [
                {
                    id: 1,
                    description: 'Casa',
                }, {
                    id: 2,
                    description: 'Pergolado',
                },
            ],
        }, {
            id: 1,
            description: 'Construção',
            types: [
                {
                    id: 1,
                    description: 'Garagem',
                }, {
                    id: 2,
                    description: 'Casa',
                },
            ],
        },
    ],
};

const typeWork2 = {
    id: 2,
    description: 'Pintor',
    types: [
        {
            id: 1,
            description: 'Casa',
        }, {
            id: 1,
            description: 'Muro',
        },
    ],
};

const typeWork3 = {
    id: 3,
    description: 'Borracheiro',
};

const data = [
    typeWork1,
    typeWork2,
    typeWork3,
];

export default data;
