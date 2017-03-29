/**
 * Created by Ugo on 29/03/2017.
 */
export class personne{
  public nom: string;
  public prenom: string;
  public age : number;

  constructor(nom,prenom,age){
    this.nom=nom;
    this.prenom=prenom;
    this.age=age;
  }

  presentation() {
    return "Je m'appelle "+this.nom+" "+this.prenom+", et je suis agée de "+this.age;
  }
}
