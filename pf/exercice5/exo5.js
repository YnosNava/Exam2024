function mettreAuCarreChiffres(nombre) {
    const chiffres = nombre.toString().split('');
  
    const carres = chiffres.map(chiffre => parseInt(chiffre) ** 2);
  
    const resultat = carres.join('');
  
    return parseInt(resultat); 
  }
  
  const nombre = 9119;
  const resultatFinal = mettreAuCarreChiffres(nombre);
  console.log(`Le résultat pour ${nombre} est : ${resultatFinal}`);
  