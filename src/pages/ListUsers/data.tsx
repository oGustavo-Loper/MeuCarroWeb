export interface ListUser {
    id: string;
    name: string;
    phone: string;
    email: string;
    imageUrl?: string;
    isActive: boolean,
    updatedAt: string;
    createdAt: string;
}

const data2: ListUser[] = [
    {
        id: '1',
        name: 'Gustavo Tessmer Loper',
        phone: '53984222231',
        email: 'theloper7@gmail.com',
        imageUrl: 'https://avatars.githubusercontent.com/u/62165053',
        isActive: true,
        updatedAt: 'xx-xx-xxxx',
        createdAt: 'xx-xx-xxxx',
    },
    {
        id: '2',
        name: 'Marlene Tessmer Loper',
        phone: '53984000000',
        email: 'theloper7@gmail.com',
        isActive: true,
        updatedAt: 'xx-xx-xxxx',
        createdAt: 'xx-xx-xxxx',
    },
    {
        id: '3',
        name: 'Marlene Tessmer Loper',
        phone: '53984000000',
        email: 'theloper7@gmail.com',
        imageUrl: 'https://avatars.githubusercontent.com/u/62165053',
        isActive: true,
        updatedAt: 'xx-xx-xxxx',
        createdAt: 'xx-xx-xxxx',
    },
    {
        id: '4',
        name: 'Marlene Tessmer Loper',
        phone: '53984000000',
        email: 'theloper7@gmail.com',
        imageUrl: 'https://avatars.githubusercontent.com/u/62165053',
        isActive: true,
        updatedAt: 'xx-xx-xxxx',
        createdAt: 'xx-xx-xxxx',
    },
    {
        id: '5',
        name: 'Marlene Tessmer Loper',
        phone: '53984000000',
        email: 'theloper7@gmail.com',
        imageUrl: 'https://avatars.githubusercontent.com/u/62165053',
        isActive: true,
        updatedAt: 'xx-xx-xxxx',
        createdAt: 'xx-xx-xxxx',
    },
    {
        id: '6',
        name: 'Juliana Loper',
        phone: '5555555555',
        email: 'theloper7@gmail.com',
        isActive: false,
        updatedAt: 'xx-xx-xxxx',
        createdAt: 'xx-xx-xxxx'
    }
];

export default data2;