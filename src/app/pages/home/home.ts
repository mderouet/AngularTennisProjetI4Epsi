/**
 * Created by Ugo on 30/03/2017.
 */
import { Component } from '@angular/core';
import { Personne } from '../../services/personne';


@Component({
  selector: 'home',
  templateUrl: '/app/pages/home/home.html',
})
export class Home  {
  name = 'Angular';
  p = new Personne('Consonni', 'Ugo' , 26 );
}
