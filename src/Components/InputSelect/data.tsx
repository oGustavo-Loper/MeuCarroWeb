export interface OptionsData {
    value: string;
    label: string
}

export interface ModelOptions {
    value: string;
    label: string;
}

export interface BrandOption {
    value: string;
    label: string;
    type: 'carro' | 'moto' | 'caminhao' | 'onibus'
    models: ModelOptions[];
}

const data: BrandOption[] = [
    {
        label: 'Aston Martin',
        value: 'aston martin',
        type: 'carro',
        models: [
            { label: 'DB11', value: 'db11' },
            { label: 'Vantage', value: 'vantage' },
        ]
    },
    {
        label: 'Audi',
        value: 'audi',
        type: 'carro',
        models: [
            {label: 'A3', value: 'a3'},
            {label: 'A4', value: 'a4'}
        ]
    },
    {
        label: 'Honda',
        value: 'honda',
        type: 'moto',
        models: [
            { label: 'FAN 160', value: 'FAN 160' }
        ]
    }
];

export default data;