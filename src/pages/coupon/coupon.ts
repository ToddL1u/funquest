import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Coupon page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-coupon',
  templateUrl: 'coupon.html'
})
export class CouponPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Coupon Page');
  }

}
