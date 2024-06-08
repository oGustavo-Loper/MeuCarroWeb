function formatPhoneNumber(phone: string) {
    if (phone.length !== 11) {
        return "Número de telefone inválido";
    }
    const ddd = phone.slice(0, 2);
    const firstPart = phone.slice(2, 7);
    const secondPart = phone.slice(7);
    return `(${ddd}) ${firstPart}-${secondPart}`;
}