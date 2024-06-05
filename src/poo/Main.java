package poo;

import java.util.ArrayList;

public class Main {
//aaaa
}


public static void main(Individu[] nom, prenom, identifiant) {
	ArrayList<Individu> listIndividus = new ArrayList<Individu>();
	
	Etudiant r = new Etudiant("Dubois", "Pierre", 1, 01/09, "terminale");
	listIndividus.add(r);
	
	Etudiant s = new Etudiant("Philippe", "Clément", 2, 01/09, "BTS");
	listIndividus.add(s);
	
	Etudiant t = new Etudiant("Poissonier", "Matteo", 3, 01/09, "L3");
	listIndividus.add(t);
	
	Etudiant u = new Etudiant("Loic", "LeDoher", 4, 01/09, "CNAM");
	listIndividus.add(u);
	
	r.montrerDetails();
	u.montrerDetails();
	s.montrerDetails();
	t.montrerDetails();
	
}

public static void main(Cours[] titre, formateur, duree, placesRestantes) {
	ArrayList<Cours> listCours = new ArrayList<Cours>();
	
	Cours a = new Cours("Maths", "Jean", 1, 4);
	listCours.add(r);
	
	Cours b = new Cours("Physique", "Patrick", 2, 6);
	listCours.add(s);
	
	Cours c = new Cours("Philosophie", "Robert", 1, 20);
	listCours.add(t);
	
	a.montrerDetails();
	b.montrerDetails();
	c.montrerDetails();
}
	

