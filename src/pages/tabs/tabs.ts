import { Component } from '@angular/core';

import { ExplorePage } from '../explore/explore';
import { RewardPage } from '../reward/reward';
import { CouponPage } from '../coupon/coupon';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = ExplorePage;
  tab2Root: any = RewardPage;
  tab3Root: any = CouponPage;
  tab4Root: any = ProfilePage;

  constructor() {

  }
}
