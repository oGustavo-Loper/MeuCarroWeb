export const getFirstAndLastName = (fullName: string) => {
    const nameParts = fullName.split(' ');
    if (nameParts.length === 1) {
      return fullName; // Caso haja apenas um nome
    }
    return `${nameParts[0]} ${nameParts[nameParts.length - 1]}`;
};