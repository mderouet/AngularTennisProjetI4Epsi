/**
 * Created by Ugo on 30/03/2017.
 */
import {Component} from '@angular/core';
declare let $: any;

@Component({
    selector: 'home',
    templateUrl: '/app/pages/home/home.html',
})

export class Home {
    ngOnInit() {
      $('.matchAVenir').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
      });
    }
}

