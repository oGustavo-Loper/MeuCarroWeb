export interface TableData {
    id: string;
    tipo: string;
    proprietario: string;
    marca: string;
    modelo: string;
    placa: string;
    ano: string;
    medias: {
        id: string,
        quilometragemAtual: string;
        valorDoLitro: string;
        totalDeLitros: string;
        mediaFeita: string;
        kmRodados: string;
        updatedAt: string;
    }
    updateAt: string;
}

const data: TableData[] = [
    {
        id: '1',
        tipo: 'Moto',
        proprietario: 'Gustavo Loper',
        placa: 'IZY-1E70',
        marca: 'Honda',
        modelo: 'FAN-160',
        ano: '2020',
        medias: {
            id: "128f82da-a0f8-4478-9e84-feb8fe33e0aa",
            quilometragemAtual: '99200',
            valorDoLitro: '5,59',
            totalDeLitros: '45',
            mediaFeita: '11.5',
            kmRodados: '250',
            updatedAt: '2024-04-19'
        },
        updateAt: 'xx-xx-xxxx'
    },
    {
        id: '2',
        tipo: 'Carro',
        proprietario: 'Gustavo Loper',
        placa: 'IVJ-9947',
        marca: 'Chevrolet',
        modelo: 'Prisma',
        ano: '2014',
        medias: {
            id: "128f82da-a0f8-4478-9e84-feb8fe33e0aa",
            quilometragemAtual: '99200',
            valorDoLitro: '5,59',
            totalDeLitros: '45',
            mediaFeita: '11.5',
            kmRodados: '250',
            updatedAt: '2024-04-19'
        },
        updateAt: 'xx-xx-xxxx'
    },
    {
        id: '3',
        tipo: 'Carro',
        proprietario: 'Gustavo Loper',
        placa: 'ISH-2C08',
        marca: 'Hyundai',
        modelo: 'I30CW',
        ano: '2011',
        medias: {
            id: "128f82da-a0f8-4478-9e84-feb8fe33e0aa",
            quilometragemAtual: '99200',
            valorDoLitro: '5,59',
            totalDeLitros: '45',
            mediaFeita: '11.5',
            kmRodados: '250',
            updatedAt: '2024-04-19'
        },
        updateAt: 'xx-xx-xxxx'
    }
];

export default data;
