import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { ExplorePage } from '../pages/explore/explore';
import { RewardPage } from '../pages/reward/reward';
import { CouponPage } from '../pages/coupon/coupon';
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    ExplorePage,
    RewardPage,
    CouponPage,
    ProfilePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ExplorePage,
    RewardPage,
    CouponPage,
    ProfilePage,
    TabsPage
  ],
  providers: []
})
export class AppModule {}
