/**
 * Created by Ugo on 29/03/2017.
 */
export class Personne {
  public nom: string;
  public prenom: string;
  public age: number;

  constructor(nom: string, prenom: string, age: number) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
  }

  presentation() {
    return 'Je mappelle ' + this.nom + ' ' + this.prenom + ', et je suis agée de ' + this.age;
  }
}
