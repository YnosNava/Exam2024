package poo;

public class Cours {
	private String titre;
	private String formateur;
	private int duree;
	private int placesRestantes;

	public Cours(String titre, String formateur, int duree, int placesRestantes) {
		this.titre = titre;
		this.formateur = formateur;
		this.duree = duree;
		this.placesRestantes = placesRestantes;
	}

	public String getTitre() {
		return this.titre;
	}

	public void setTitre(String titre) {
		this.titre = titre;
	}

	public String getFormateur() {
		return this.formateur;
	}

	public void setFormateur(String formateur) {
		this.formateur = formateur;
	}

	public int getDuree() {
		return this.duree;
	}

	public void setDuree(int duree) {
		this.duree = duree;
	}

	public int getPlacesRestantes() {
		return this.placesRestantes;
	}

	public void setPplacesRestantes(int placesRestantes) {
		this.placesRestantes = placesRestantes;
	}

	public void montrerDetails() {
		System.out.println("Titre : " + getTitre());
		System.out.println("Formateur : " + getFormateur());
		System.out.println("Durée : " + getDuree());
		System.out.println("Places restantes : " + getPlacesRestantes());
	}

}
