import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AboutPage } from '../pages/about/about';

import { SongsApi } from '../shared/shared';

@Component({
  templateUrl: 'app.html',
  providers: [
      SongsApi
  ]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;
  tags: Array<{title: string, tag: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Forside', component: HomePage },
    //  { title: 'List', component: ListPage },
      { title: 'Om os', component: AboutPage }
    ];

    this.tags = [
      { title: 'Godnat', tag: 'night'},
      { title: 'Jul', tag: 'jul'},
      { title: 'Vinter', tag: 'winter'},
      { title: 'Efterår', tag: 'efteraar'},
      { title: 'Sommer', tag: 'summer'},
      { title: 'Forår', tag: 'spring'},
      { title: 'Kristne', tag: 'christ'}
    ]

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  listSongs($event, tag) {
    this.nav.push(ListPage, tag);
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
