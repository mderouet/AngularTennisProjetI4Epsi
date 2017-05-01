import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: '<header><div class="menuTop"><div class="row"><div id="imgLogoHeader" class="large-4 medium-3 small-6 columns">' +
  '<img src="assets/img/logo.png"></div><div class="large-8 medium-9 small-6 columns"><ul class="menu"><li><a href="#">Accueil</a></li>' +
  '<li><a href="#">Résultats</a></li> <li><a href="#">Calendrier</a></li> <li><a href="#">Actualité</a></li>' +
  ' <li><a href="#">Contact</a></li>' +
  ' </ul> </div> </div> </div> </header><router-outlet></router-outlet>' +
  '<footer><div id="copyright">Copyright© 2017 - Make Tennis Great Again</div> <div id="mentionLegale">' +
  ' <a href="#">Mention Légale</a></div>' +
'<script type="text/javascript" src="assets/js/jquery-3.1.1.min.js"></script>' +
'<script type="text/javascript" src="assets/slickjs/js/slick.min.js"></script>' +
'<script type="text/javascript" src="assets/foundation/js/foundation.min.js"></script>' +
'<script type="text/javascript" src="assets/js/javascript.js"></script>' +
  '</footer>',
})
export class AppComponent  {
}
