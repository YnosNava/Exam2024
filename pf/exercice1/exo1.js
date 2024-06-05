function calculateTip(additionTotale, avisService) {
    const avis = {
        terrible: 0,
        poor: 0.05,
        good: 0.1,
        great: 0.15,
        excellent: 0.2
    };

    const avisMinuscules = avisService.toLowerCase();

    if (avisMinuscules in avis) {
        const pourcentagePourboire = avis[avisMinuscules];
        const totalPourboire = Math.ceil(additionTotale * pourcentagePourboire); 
        return totalPourboire;
    } else {
        return "Rating not recognised";
    }
}

console.log(calculateTip(20, "ExcellEnt")); 
console.log(calculateTip(26.95, "goOd")); 
console.log(calculateTip(20, "hi")); 
