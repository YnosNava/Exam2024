function compterOptionsAlimentaires(developpeurs) {
    const options = {};
    for (const dev of developpeurs) {
        const repas = dev.Repas.toLowerCase();
        options[repas] = (options[repas] || 0) + 1;
    }
    return options;
}

const list1 = [
    { FirstName: 'Noah', lastName: 'M.', pays: 'Suisse', continent: 'Europe', age: 19, langue: 'C', Repas: 'végétarien' },
    { FirstName: 'Anna', lastName: 'R.', pays: 'Liechtenstein', continent: 'Europe', age: 52, langue: 'JavaScript', Repas: 'standard' },
    { FirstName: 'Ramona', lastName: 'R.', pays: 'Paraguay', continent: 'Amériques', age: 29, langue: 'Ruby', Repas: 'vegan' },
    { FirstName: 'George', lastName: 'B.', pays: 'Angleterre', continent: 'Europe', age: 81, langue: 'C', Repas: 'végétarien' }
];

const resultat = compterOptionsAlimentaires(list1);
console.log(resultat);
